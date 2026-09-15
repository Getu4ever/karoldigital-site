import {
  SocialPlatform,
  SocialSyndicationStatus,
} from "@prisma/client";
import { prisma } from "@/lib/db";
import { getSocialConfig } from "@/lib/social/config";
import { publishFacebookPost } from "@/lib/social/facebook";
import { publishInstagramPost } from "@/lib/social/instagram";
import { publishLinkedInPost } from "@/lib/social/linkedin";
import type {
  BlogSharePayload,
  PlatformPublishResult,
  SocialPlatform as Platform,
  SyndicateResult,
} from "@/lib/social/types";

function toPrismaPlatform(platform: Platform): SocialPlatform {
  return platform as SocialPlatform;
}

function logLine(
  level: "info" | "warn" | "error",
  message: string,
  meta?: Record<string, unknown>
) {
  const prefix = `[social-syndication] ${message}`;
  if (level === "error") console.error(prefix, meta || "");
  else if (level === "warn") console.warn(prefix, meta || "");
  else console.info(prefix, meta || "");
}

async function recordAttempt(
  post: BlogSharePayload,
  result: PlatformPublishResult
): Promise<void> {
  const platform = toPrismaPlatform(result.platform);
  const status: SocialSyndicationStatus = result.skipped
    ? SocialSyndicationStatus.skipped
    : result.ok
      ? SocialSyndicationStatus.success
      : SocialSyndicationStatus.failed;

  const existing = await prisma.socialSyndicationLog.findUnique({
    where: {
      slug_platform: { slug: post.slug, platform },
    },
  });

  const attemptCount = (existing?.attemptCount || 0) + 1;
  const data = {
    sanityId: post.sanityId,
    slug: post.slug,
    platform,
    status,
    postUrl: result.postUrl || existing?.postUrl || null,
    externalPostId: result.externalPostId || existing?.externalPostId || null,
    attemptCount,
    lastError: result.ok || result.skipped ? null : result.error || "Unknown error",
    payloadSnapshot: JSON.stringify({
      title: post.title,
      permalink: post.permalink,
      imageUrl: post.imageUrl,
    }),
    lastAttemptAt: new Date(),
    succeededAt:
      status === SocialSyndicationStatus.success
        ? new Date()
        : existing?.succeededAt || null,
  };

  await prisma.socialSyndicationLog.upsert({
    where: { slug_platform: { slug: post.slug, platform } },
    create: data,
    update: data,
  });
}

async function shouldSkipPlatform(
  slug: string,
  platform: Platform,
  force: boolean
): Promise<boolean> {
  if (force) return false;
  const existing = await prisma.socialSyndicationLog.findUnique({
    where: {
      slug_platform: {
        slug,
        platform: toPrismaPlatform(platform),
      },
    },
  });
  return existing?.status === SocialSyndicationStatus.success;
}

/**
 * Syndicate a published blog post to configured social channels.
 * Idempotent per slug+platform unless `force` is true.
 * Never throws — per-platform failures are logged and returned.
 */
export async function syndicateBlogPost(
  post: BlogSharePayload,
  options: { force?: boolean } = {}
): Promise<SyndicateResult> {
  const config = getSocialConfig();
  const force = Boolean(options.force);

  if (!config.enabled) {
    logLine("warn", "Syndication globally disabled", { slug: post.slug });
    const platforms: Platform[] = ["facebook", "linkedin", "instagram"];
    return {
      slug: post.slug,
      results: platforms.map((platform) => ({
        platform,
        ok: true,
        skipped: true,
        error: "SOCIAL_SYNDICATION_ENABLED=false",
      })),
    };
  }

  logLine("info", "Starting syndication", {
    slug: post.slug,
    permalink: post.permalink,
    force,
  });

  const publishers: Array<{
    platform: Platform;
    run: () => Promise<PlatformPublishResult>;
  }> = [
    {
      platform: "facebook",
      run: async () => {
        if (await shouldSkipPlatform(post.slug, "facebook", force)) {
          return {
            platform: "facebook",
            ok: true,
            skipped: true,
            error: "Already syndicated successfully",
          };
        }
        return publishFacebookPost(post, config.facebook);
      },
    },
    {
      platform: "linkedin",
      run: async () => {
        if (await shouldSkipPlatform(post.slug, "linkedin", force)) {
          return {
            platform: "linkedin",
            ok: true,
            skipped: true,
            error: "Already syndicated successfully",
          };
        }
        return publishLinkedInPost(post, config.linkedin);
      },
    },
    {
      platform: "instagram",
      run: async () => {
        if (await shouldSkipPlatform(post.slug, "instagram", force)) {
          return {
            platform: "instagram",
            ok: true,
            skipped: true,
            error: "Already syndicated successfully",
          };
        }
        return publishInstagramPost(post, config.instagram);
      },
    },
  ];

  const settled = await Promise.allSettled(
    publishers.map(async ({ platform, run }) => {
      try {
        return await run();
      } catch (error) {
        return {
          platform,
          ok: false,
          error:
            error instanceof Error
              ? error.message
              : "Unexpected syndication failure",
        } satisfies PlatformPublishResult;
      }
    })
  );

  const results: PlatformPublishResult[] = settled.map((outcome, index) => {
    if (outcome.status === "fulfilled") return outcome.value;
    return {
      platform: publishers[index].platform,
      ok: false,
      error:
        outcome.reason instanceof Error
          ? outcome.reason.message
          : "Unexpected syndication failure",
    };
  });

  for (const result of results) {
    try {
      await recordAttempt(post, result);
    } catch (error) {
      logLine("error", "Failed to persist syndication log", {
        slug: post.slug,
        platform: result.platform,
        error: error instanceof Error ? error.message : String(error),
      });
    }

    if (result.ok && !result.skipped) {
      logLine("info", "Published", {
        platform: result.platform,
        slug: post.slug,
        postUrl: result.postUrl,
      });
    } else if (result.skipped) {
      logLine("info", "Skipped", {
        platform: result.platform,
        slug: post.slug,
        reason: result.error,
      });
    } else {
      logLine("error", "Publish failed", {
        platform: result.platform,
        slug: post.slug,
        error: result.error,
      });
    }
  }

  return { slug: post.slug, results };
}

/**
 * Retry failed / pending syndications (used by cron).
 */
export async function retryFailedSyndications(
  limit = 20
): Promise<{ retried: number; results: SyndicateResult[] }> {
  const staleBefore = new Date(Date.now() - 5 * 60 * 1000);
  const failed = await prisma.socialSyndicationLog.findMany({
    where: {
      status: {
        in: [SocialSyndicationStatus.failed, SocialSyndicationStatus.pending],
      },
      attemptCount: { lt: 5 },
      OR: [{ lastAttemptAt: null }, { lastAttemptAt: { lt: staleBefore } }],
    },
    orderBy: { updatedAt: "asc" },
    take: limit,
  });

  const bySlug = new Map<string, (typeof failed)[number]>();
  for (const row of failed) {
    if (!bySlug.has(row.slug)) bySlug.set(row.slug, row);
  }

  const results: SyndicateResult[] = [];
  for (const row of bySlug.values()) {
    const snapshot = row.payloadSnapshot
      ? (JSON.parse(row.payloadSnapshot) as Partial<BlogSharePayload>)
      : {};

    const post: BlogSharePayload = {
      sanityId: row.sanityId,
      slug: row.slug,
      title: snapshot.title || row.slug,
      excerpt: "New from the Karol Digital blog.",
      permalink:
        snapshot.permalink ||
        `https://www.karoldigital.co.uk/blog/${row.slug}`,
      imageUrl: snapshot.imageUrl,
    };

    // Re-fetch fresh payload when possible
    try {
      const { resolveBlogSharePayload } = await import(
        "@/lib/social/sanity-payload"
      );
      const fresh = await resolveBlogSharePayload({ _id: row.sanityId });
      if (fresh) {
        results.push(await syndicateBlogPost(fresh, { force: false }));
        continue;
      }
    } catch (error) {
      logLine("warn", "Retry fetch failed; using snapshot", {
        slug: row.slug,
        error: error instanceof Error ? error.message : String(error),
      });
    }

    results.push(await syndicateBlogPost(post, { force: false }));
  }

  return { retried: results.length, results };
}
