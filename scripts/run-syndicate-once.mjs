/**
 * One-shot Facebook + Instagram publish for a Sanity blog slug.
 * Usage: node --env-file=.env.local scripts/run-syndicate-once.mjs <slug>
 */
import { createClient } from "@sanity/client";

const slug = process.argv[2];
if (!slug) {
  console.error("Usage: node --env-file=.env.local scripts/run-syndicate-once.mjs <slug>");
  process.exit(1);
}

const pageId = process.env.FACEBOOK_PAGE_ID;
const token = process.env.FACEBOOK_PAGE_ACCESS_TOKEN;
const igUserId = process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID;
const igToken = process.env.INSTAGRAM_ACCESS_TOKEN || token;
const version = process.env.META_GRAPH_API_VERSION || "v22.0";
const site =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.karoldigital.co.uk";

if (!pageId || !token || !igUserId || !igToken) {
  console.error("Missing Facebook/Instagram env vars");
  process.exit(1);
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "pols4r9z",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN || process.env.SANITY_API_READ_TOKEN,
});

function truncate(text, max) {
  const cleaned = text.replace(/\s+/g, " ").trim();
  if (cleaned.length <= max) return cleaned;
  return `${cleaned.slice(0, max - 1).trimEnd()}…`;
}

function hashtags(keywords, limit = 4) {
  if (!keywords?.length) return "#WebDesign #UKBusiness #KarolDigital";
  const tags = keywords
    .slice(0, limit)
    .map((k) => `#${k.replace(/[^a-zA-Z0-9]+/g, "").replace(/^[0-9]+/, "")}`)
    .filter((t) => t.length > 2);
  return tags.length ? tags.join(" ") : "#WebDesign #UKBusiness #KarolDigital";
}

async function graphPost(path, accessToken, body) {
  const url = new URL(`https://graph.facebook.com/${version}/${path}`);
  url.searchParams.set("access_token", accessToken);
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(body),
  });
  const json = await response.json();
  if (!response.ok || json.error) {
    throw new Error(json.error?.message || `Graph error ${response.status} on ${path}`);
  }
  return json;
}

async function graphGet(path, accessToken, params = {}) {
  const url = new URL(`https://graph.facebook.com/${version}/${path}`);
  url.searchParams.set("access_token", accessToken);
  for (const [k, v] of Object.entries(params)) url.searchParams.set(k, v);
  const response = await fetch(url);
  const json = await response.json();
  if (!response.ok || json.error) {
    throw new Error(json.error?.message || `Graph error ${response.status} on ${path}`);
  }
  return json;
}

async function waitForContainer(creationId, accessToken) {
  for (let i = 0; i < 12; i += 1) {
    const status = await graphGet(creationId, accessToken, {
      fields: "status_code",
    });
    const code = String(status.status_code || "");
    if (code === "FINISHED") return;
    if (code === "ERROR" || code === "EXPIRED") {
      throw new Error(`Instagram container failed: ${code}`);
    }
    await new Promise((r) => setTimeout(r, 2000));
  }
  throw new Error("Instagram container timed out");
}

const post = await client.fetch(
  `*[_type == "blogPost" && slug.current == $slug && !(_id in path("drafts.**"))][0]{
    _id,
    title,
    subtitle,
    "slug": slug.current,
    publishedAt,
    seoDescription,
    seoKeywords,
    "imageUrl": coalesce(mainImage.asset->url, seoImage.asset->url)
  }`,
  { slug }
);

if (!post?._id) {
  console.error("Blog post not found or still draft:", slug);
  process.exit(1);
}

const permalink = `${site.replace(/\/$/, "")}/blog/${post.slug}`;
const excerpt = post.seoDescription || post.subtitle || post.title;
const imageUrl = post.imageUrl || null;

console.log(
  JSON.stringify(
    {
      step: "loaded",
      title: post.title,
      permalink,
      hasImage: Boolean(imageUrl),
    },
    null,
    2
  )
);

console.log(
  JSON.stringify(
    {
      step: "credential_check",
      page: await graphGet(pageId, token, {
        fields: "id,name,instagram_business_account",
      }),
      ig: await graphGet(igUserId, igToken, { fields: "id,username" }),
    },
    null,
    2
  )
);

const fbCaption = truncate(
  [post.title, "", excerpt, "", "Read the full guide:", permalink, "", hashtags(post.seoKeywords)].join(
    "\n"
  ),
  600
);

const fb = await graphPost(`${pageId}/feed`, token, {
  message: fbCaption,
  link: permalink,
});
console.log(
  JSON.stringify(
    {
      platform: "facebook",
      ok: true,
      id: fb.id,
      url: fb.id ? `https://www.facebook.com/${fb.id}` : null,
    },
    null,
    2
  )
);

if (!imageUrl) {
  console.error("Instagram skipped: no main image");
  process.exit(1);
}

const igCaption = truncate(
  [
    post.title,
    "",
    excerpt,
    "",
    `Full article: ${permalink}`,
    "",
    "Link in bio → karoldigital.co.uk/blog",
    "",
    hashtags(post.seoKeywords, 6),
  ].join("\n"),
  2100
);

const container = await graphPost(`${igUserId}/media`, igToken, {
  image_url: imageUrl,
  caption: igCaption,
});
await waitForContainer(container.id, igToken);
const published = await graphPost(`${igUserId}/media_publish`, igToken, {
  creation_id: container.id,
});

console.log(
  JSON.stringify(
    {
      platform: "instagram",
      ok: true,
      id: published.id,
      url: "https://www.instagram.com/karoldigital2025/",
    },
    null,
    2
  )
);
