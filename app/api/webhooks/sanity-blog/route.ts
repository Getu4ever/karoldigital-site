import { NextResponse } from "next/server";
import {
  assertWebhookConfigured,
  getSocialConfig,
} from "@/lib/social/config";
import { resolveBlogSharePayload } from "@/lib/social/sanity-payload";
import { syndicateBlogPost } from "@/lib/social/syndicate";
import { verifySanityWebhookSignature } from "@/lib/social/webhook-auth";

export const runtime = "nodejs";
export const maxDuration = 60;

/**
 * Sanity → social media webhook.
 *
 * Configure in Sanity Manage → API → Webhooks:
 * - URL: https://www.karoldigital.co.uk/api/webhooks/sanity-blog
 * - Trigger on: Create + Update
 * - Filter: _type == "blogPost" && defined(slug.current) && defined(publishedAt) && !(_id in path("drafts.**"))
 * - Projection (recommended):
 *   {
 *     _id, _type, title, subtitle, seoDescription, publishedAt, seoKeywords,
 *     "slugCurrent": slug.current,
 *     "imageUrl": coalesce(mainImage.asset->url, seoImage.asset->url),
 *     "imageAlt": coalesce(mainImage.alt, title)
 *   }
 * - Secret: SANITY_WEBHOOK_SECRET
 * - HTTP method: POST
 * - Disable "Deliver draft events" if available
 */
export async function POST(request: Request) {
  const config = getSocialConfig();

  try {
    assertWebhookConfigured(config);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Misconfigured";
    console.error("[social-syndication] webhook config error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }

  const rawBody = await request.text();
  const signature = request.headers.get("sanity-webhook-signature");

  if (
    !verifySanityWebhookSignature(rawBody, signature, config.webhookSecret!)
  ) {
    console.warn("[social-syndication] invalid Sanity webhook signature");
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  let body: unknown;
  try {
    body = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  try {
    const payload = await resolveBlogSharePayload(body);
    if (!payload) {
      // Acknowledge non-publish events so Sanity does not retry forever
      return NextResponse.json({
        ok: true,
        skipped: true,
        reason: "Not a published blogPost (draft, missing fields, or wrong type)",
      });
    }

    const result = await syndicateBlogPost(payload);
    const failures = result.results.filter((r) => !r.ok && !r.skipped);

    // Always 200 after accept+attempt so Sanity does not duplicate-fire;
    // failed platforms are retried by /api/social/retry cron.
    return NextResponse.json({
      ok: failures.length === 0,
      slug: result.slug,
      results: result.results,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Syndication webhook failed";
    console.error("[social-syndication] webhook handler error:", message);
    // 500 lets Sanity retry transient infra failures (DB down, etc.)
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function GET() {
  const config = getSocialConfig();
  return NextResponse.json({
    ok: true,
    service: "sanity-blog-social-webhook",
    syndicationEnabled: config.enabled,
    platforms: {
      facebook: config.facebook.enabled,
      instagram: config.instagram.enabled,
      linkedin: config.linkedin.enabled,
    },
    webhookSecretConfigured: Boolean(config.webhookSecret),
    hint: "POST published blogPost documents from Sanity with a valid signature",
  });
}
