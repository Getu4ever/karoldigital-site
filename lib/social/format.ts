import type { BlogSharePayload } from "@/lib/social/types";

const MAX_FB = 600;
const MAX_LI = 1200;
const MAX_IG = 2100;

function truncate(text: string, max: number): string {
  const cleaned = text.replace(/\s+/g, " ").trim();
  if (cleaned.length <= max) return cleaned;
  return `${cleaned.slice(0, max - 1).trimEnd()}…`;
}

function hashtagLine(keywords: string[] | undefined, limit = 4): string {
  if (!keywords?.length) {
    return "#WebDesign #UKBusiness #KarolDigital";
  }
  const tags = keywords
    .slice(0, limit)
    .map((k) =>
      `#${k
        .replace(/[^a-zA-Z0-9]+/g, "")
        .replace(/^[0-9]+/, "")}`
    )
    .filter((t) => t.length > 2);
  return tags.length
    ? tags.join(" ")
    : "#WebDesign #UKBusiness #KarolDigital";
}

/** Facebook Page: message + link (Graph scrapes OG). */
export function formatFacebookCaption(post: BlogSharePayload): string {
  const body = [
    post.title,
    "",
    post.excerpt,
    "",
    "Read the full guide:",
    post.permalink,
    "",
    hashtagLine(post.keywords),
  ].join("\n");
  return truncate(body, MAX_FB);
}

/** LinkedIn profile: commentary with permalink (no URL scrape dependency). */
export function formatLinkedInCommentary(post: BlogSharePayload): string {
  const body = [
    post.title,
    "",
    post.excerpt,
    "",
    `Read more: ${post.permalink}`,
    "",
    hashtagLine(post.keywords, 5),
  ].join("\n");
  return truncate(body, MAX_LI);
}

/**
 * Instagram caption. Image is required by the Content Publishing API;
 * URL is included in the caption because IG feed posts cannot attach a clickable link.
 */
export function formatInstagramCaption(post: BlogSharePayload): string {
  const body = [
    post.title,
    "",
    post.excerpt,
    "",
    `Full article: ${post.permalink}`,
    "",
    "Link in bio → karoldigital.co.uk/blog",
    "",
    hashtagLine(post.keywords, 6),
  ].join("\n");
  return truncate(body, MAX_IG);
}
