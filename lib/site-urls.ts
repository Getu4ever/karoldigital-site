import type { MetadataRoute } from "next";
import { SITE_ORIGIN } from "@/lib/geo";
import { getBlogPostsForSitemap } from "@/lib/sanity-blog";

/** Bump when public page copy or structure ships, so Google recrawls. */
export const CONTENT_REVISED_AT = new Date("2026-09-04");

const CORE_PAGES: {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}[] = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/about", changeFrequency: "monthly", priority: 0.7 },
  { path: "/services", changeFrequency: "weekly", priority: 0.9 },
  { path: "/industries", changeFrequency: "weekly", priority: 0.85 },
  { path: "/pricing", changeFrequency: "monthly", priority: 0.9 },
  { path: "/book", changeFrequency: "monthly", priority: 0.95 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.2 },
  { path: "/cookie-policy", changeFrequency: "yearly", priority: 0.2 },
  { path: "/terms-of-service", changeFrequency: "yearly", priority: 0.2 },
  { path: "/disclaimer", changeFrequency: "yearly", priority: 0.2 },
];

const SERVICE_SLUGS = [
  "web-design",
  "custom-web-development",
  "nextjs-development",
  "website-audits",
  "ai-search-optimisation",
  "digital-marketing",
  "social-media",
  "ai-logo-design",
  "custom-mobile-applications",
  "small-business-web-design-london",
] as const;

const TOOL_SLUGS = [
  "website-checker",
  "ai-search-scorecard",
  "content-brief",
] as const;

const INDUSTRY_SLUGS = [
  "financial-services",
  "immigration-services",
  "building-services",
  "catering-services",
  "fitness-studios",
] as const;

export function absoluteUrl(path: string): string {
  if (path === "/") return SITE_ORIGIN;
  return `${SITE_ORIGIN}${path}`;
}

export async function getPublicSitemapEntries(): Promise<MetadataRoute.Sitemap> {
  const core: MetadataRoute.Sitemap = CORE_PAGES.map((page) => ({
    url: absoluteUrl(page.path),
    lastModified: CONTENT_REVISED_AT,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const services: MetadataRoute.Sitemap = SERVICE_SLUGS.map((slug) => ({
    url: absoluteUrl(`/services/${slug}`),
    lastModified: CONTENT_REVISED_AT,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const tools: MetadataRoute.Sitemap = TOOL_SLUGS.map((slug) => ({
    url: absoluteUrl(`/tools/${slug}`),
    lastModified: CONTENT_REVISED_AT,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const industries: MetadataRoute.Sitemap = INDUSTRY_SLUGS.map((slug) => ({
    url: absoluteUrl(`/industries/${slug}`),
    lastModified: CONTENT_REVISED_AT,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogPosts = await getBlogPostsForSitemap();
  const blogs: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.updatedAt || post.publishedAt || CONTENT_REVISED_AT),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...core, ...services, ...tools, ...industries, ...blogs];
}

export async function getPublicAbsoluteUrls(): Promise<string[]> {
  const entries = await getPublicSitemapEntries();
  return entries.map((entry) => entry.url);
}
