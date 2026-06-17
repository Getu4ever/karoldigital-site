// app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "[karoldigital.co.uk](https://www.karoldigital.co.uk)";

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
      url: `${baseUrl}/pricing`,
      lastModified: new Date("2026-05-19"),
      changeFrequency: "monthly",
      priority: 0.9,
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
    "digital-marketing",
    "social-media",
    "immigration-services",
    "building-services",
    "catering-services",
    "financial-services",
  ].map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date("2026-05-19"),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogs: MetadataRoute.Sitemap = [
    "is-your-business-ready-for-ai-search-2026-guide",
    "financial-services-website-design-trust-factor",
    "how-much-does-a-professional-website-cost-uk-small-business-2026",
    "immigration-consultant-website-essentials",
    "construction-website-design-tips-uk-builders",
    "interactive-catering-menu-vs-pdf-sales",
    "why-every-small-business-needs-a-modern-website-in-2025",
    "how-to-choose-the-right-website-design-package-for-your-small-business-in-2025",
    "the-importance-of-website-speed-for-small-businesses-in-2025",
    "enhancing-web-accessibility-for-better-user-experience",
    "why-every-small-business-needs-a-conversion-optimised-website-2025-guide",
    "diy-vs-professional-website-design-which-is-right-for-your-business-in-2025",
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date("2026-06-17"), // replace with real per-post dates if possible
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...corePages, ...services, ...blogs];
}
