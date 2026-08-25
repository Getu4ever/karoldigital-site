import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.karoldigital.co.uk";

  const sharedDisallow = ["/api/", "/studio/", "/admin/", "/news"];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: sharedDisallow,
      },
      // Allow major AI search / answer-engine crawlers to index public content
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: sharedDisallow,
      },
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
        disallow: sharedDisallow,
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
        disallow: sharedDisallow,
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
        disallow: sharedDisallow,
      },
      {
        userAgent: "anthropic-ai",
        allow: "/",
        disallow: sharedDisallow,
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: sharedDisallow,
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
        disallow: sharedDisallow,
      },
      {
        userAgent: "Applebot-Extended",
        allow: "/",
        disallow: sharedDisallow,
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
