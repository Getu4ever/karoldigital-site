import type { BlogSharePayload, PlatformPublishResult } from "@/lib/social/types";
import { formatLinkedInCommentary } from "@/lib/social/format";
import type { SocialConfig } from "@/lib/social/config";

/**
 * Publish to a LinkedIn member profile via the Posts API.
 * Uses text commentary + permalink (reliable; avoids Images API complexity).
 *
 * @see https://learn.microsoft.com/linkedin/marketing/community-management/shares/posts-api
 */
export async function publishLinkedInPost(
  post: BlogSharePayload,
  config: SocialConfig["linkedin"]
): Promise<PlatformPublishResult> {
  if (!config.enabled || !config.accessToken || !config.authorUrn) {
    return {
      platform: "linkedin",
      ok: true,
      skipped: true,
      error: "LinkedIn syndication disabled or missing credentials",
    };
  }

  try {
    const response = await fetch("https://api.linkedin.com/rest/posts", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.accessToken}`,
        "Content-Type": "application/json",
        "X-Restli-Protocol-Version": "2.0.0",
        "Linkedin-Version": config.apiVersion,
      },
      body: JSON.stringify({
        author: config.authorUrn,
        commentary: formatLinkedInCommentary(post),
        visibility: "PUBLIC",
        distribution: {
          feedDistribution: "MAIN_FEED",
          targetEntities: [],
          thirdPartyDistributionChannels: [],
        },
        lifecycleState: "PUBLISHED",
        isReshareDisabledByAuthor: false,
      }),
    });

    if (!response.ok) {
      const detail = await response.text().catch(() => "");
      throw new Error(
        `LinkedIn Posts API ${response.status}: ${detail.slice(0, 400)}`
      );
    }

    const externalPostId =
      response.headers.get("x-restli-id") ||
      response.headers.get("x-linkedin-id") ||
      undefined;

    return {
      platform: "linkedin",
      ok: true,
      externalPostId: externalPostId || undefined,
      postUrl: externalPostId
        ? `https://www.linkedin.com/feed/update/${externalPostId}`
        : "https://www.linkedin.com/in/karol-digital/",
    };
  } catch (error) {
    return {
      platform: "linkedin",
      ok: false,
      error: error instanceof Error ? error.message : "LinkedIn publish failed",
    };
  }
}
