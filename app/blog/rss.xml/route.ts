import { NextResponse } from "next/server";
import { SITE_ORIGIN } from "@/lib/geo";
import { getBlogIndexPosts } from "@/lib/sanity-blog";

export const revalidate = 3600;

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  let posts: Awaited<ReturnType<typeof getBlogIndexPosts>> = [];
  try {
    posts = await getBlogIndexPosts();
  } catch {
    posts = [];
  }

  const items = posts
    .map((post) => {
      const url = `${SITE_ORIGIN}/blog/${post.slug}`;
      const pub = post.publishedAt
        ? new Date(post.publishedAt).toUTCString()
        : new Date().toUTCString();
      const description = escapeXml(
        post.subtitle || "Practical web design and lead generation advice from Karol Digital."
      );
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pub}</pubDate>
      <description>${description}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Karol Digital Blog</title>
    <link>${SITE_ORIGIN}/blog</link>
    <description>Practical web design, SEO, GEO, and lead generation advice for UK service businesses.</description>
    <language>en-GB</language>
    <atom:link href="${SITE_ORIGIN}/blog/rss.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
