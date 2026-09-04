import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.karoldigital.co.uk";
  const sharedDisallow = ["/api/", "/studio/", "/admin/", "/news"];

  const aiUserAgents = [
    "GPTBot",
    "OAI-SearchBot",
    "ChatGPT-User",
    "ClaudeBot",
    "anthropic-ai",
    "Claude-User",
    "Claude-SearchBot",
    "PerplexityBot",
    "Perplexity-User",
    "Google-Extended",
    "GoogleOther",
    "Applebot-Extended",
    "meta-externalagent",
    "Amazonbot",
    "Bytespider",
    "cohere-ai",
    "YouBot",
    "DuckAssistBot",
    "CCBot",
  ];

  return {
    rules: [
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: sharedDisallow,
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: sharedDisallow,
      },
      ...aiUserAgents.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: sharedDisallow,
      })),
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
