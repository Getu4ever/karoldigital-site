/**
 * Print Sanity webhook + Vercel env checklist for FB/IG auto-posting.
 * Run: node --env-file=.env.local scripts/print-social-syndication-setup.mjs
 */
const origin =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.karoldigital.co.uk";

const has = (k) => Boolean(process.env[k]?.trim());

console.log(`
Karol Digital — Blog → Facebook + Instagram (auto on publish)
=============================================================

Flow
----
1. You publish a blogPost in Sanity
2. Sanity webhook → ${origin}/api/webhooks/sanity-blog
3. App posts to Facebook Page + Instagram (LinkedIn off by default)
4. Failures retry hourly via ${origin}/api/social/retry

Sanity webhook (Manage → API → Webhooks)
----------------------------------------
Name     : Blog → Social syndication
URL      : ${origin}/api/webhooks/sanity-blog
Dataset  : production
Trigger  : Create, Update
Filter   : _type == "blogPost" && defined(slug.current) && defined(publishedAt) && !(_id in path("drafts.**"))
Secret   : same value as SANITY_WEBHOOK_SECRET in Vercel
Projection:
{
  _id,
  _type,
  title,
  subtitle,
  seoDescription,
  publishedAt,
  seoKeywords,
  "slugCurrent": slug.current,
  "imageUrl": coalesce(mainImage.asset->url, seoImage.asset->url),
  "imageAlt": coalesce(mainImage.alt, seoImage.alt, title)
}
Disable draft delivery if the UI offers it.

Vercel env (Production)
-----------------------
SOCIAL_SYNDICATION_ENABLED=true
SANITY_WEBHOOK_SECRET=...
SOCIAL_SYNDICATION_SECRET=...   (or CRON_SECRET)
FACEBOOK_SYNDICATION_ENABLED=true
FACEBOOK_PAGE_ID=...
FACEBOOK_PAGE_ACCESS_TOKEN=...  (prefer long-lived Page token)
INSTAGRAM_SYNDICATION_ENABLED=true
INSTAGRAM_BUSINESS_ACCOUNT_ID=...
INSTAGRAM_ACCESS_TOKEN=...      (optional; falls back to Page token)
LINKEDIN_SYNDICATION_ENABLED=false
META_APP_ID=...
META_APP_SECRET=...

Long-lived token helper
-----------------------
node --env-file=.env.local scripts/exchange-meta-page-token.mjs <graph_explorer_user_token>

Manual re-post
--------------
curl -X POST ${origin}/api/social/syndicate \\
  -H "Authorization: Bearer $SOCIAL_SYNDICATION_SECRET" \\
  -H "Content-Type: application/json" \\
  -d '{"slug":"your-post-slug","force":true}'

Local env readiness
-------------------
FACEBOOK_PAGE_ID: ${has("FACEBOOK_PAGE_ID") ? "set" : "MISSING"}
FACEBOOK_PAGE_ACCESS_TOKEN: ${has("FACEBOOK_PAGE_ACCESS_TOKEN") ? "set" : "MISSING"}
INSTAGRAM_BUSINESS_ACCOUNT_ID: ${has("INSTAGRAM_BUSINESS_ACCOUNT_ID") ? "set" : "MISSING"}
SANITY_WEBHOOK_SECRET: ${has("SANITY_WEBHOOK_SECRET") ? "set" : "MISSING"}
SOCIAL_SYNDICATION_SECRET: ${has("SOCIAL_SYNDICATION_SECRET") || has("CRON_SECRET") ? "set" : "MISSING"}
LINKEDIN: ${process.env.LINKEDIN_SYNDICATION_ENABLED === "true" ? "ON" : "off"}
`);
