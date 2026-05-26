// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.karoldigital.co.uk'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',    // Protects internal backend API route endpoints
        '/studio/', // Prevents search engines from wasting crawl budget indexing Sanity Studio
      ],
    },
    // Explicitly uses interpolation to prevent raw string type mismatches during builds
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
