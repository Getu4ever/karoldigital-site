// app/sitemap.ts
import { MetadataRoute } from "next";
import { getBlogPostsForSitemap } from "@/lib/sanity-blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.karoldigital.co.uk";

  const corePages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date("2026-06-17"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2026-05-19"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date("2026-06-17"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/industries`,
      lastModified: new Date("2026-06-17"),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date("2026-05-19"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/book`,
      lastModified: new Date("2026-06-17"),
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date("2026-06-17"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2026-05-19"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];

  const services: MetadataRoute.Sitemap = [
    "web-design",
    "custom-web-development",
    "nextjs-development",
    "website-audits",
    "digital-marketing",
    "social-media",
    "ai-logo-design",
    "small-business-web-design-london",
  ].map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date("2026-05-19"),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const industries: MetadataRoute.Sitemap = [
    "financial-services",
    "immigration-services",
    "building-services",
    "catering-services",
  ].map((industry) => ({
    url: `${baseUrl}/industries/${industry}`,
    lastModified: new Date("2026-05-19"),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPosts = await getBlogPostsForSitemap();
  const blogs: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.publishedAt || Date.now()),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...corePages, ...services, ...industries, ...blogs];
}
