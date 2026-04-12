import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.karoldigital.co.uk'
  
  // Define types as literals to satisfy the MetadataRoute.Sitemap interface
  const corePages: MetadataRoute.Sitemap = [
    { 
      url: baseUrl, 
      lastModified: new Date(), 
      changeFrequency: 'monthly' as const, 
      priority: 1 
    },
    { 
      url: `${baseUrl}/services`, 
      lastModified: new Date(), 
      changeFrequency: 'monthly' as const, 
      priority: 0.9 
    },
    { 
      url: `${baseUrl}/pricing`, 
      lastModified: new Date(), 
      changeFrequency: 'monthly' as const, 
      priority: 0.9 
    },
    { 
      url: `${baseUrl}/contact`, 
      lastModified: new Date(), 
      changeFrequency: 'yearly' as const, 
      priority: 0.8 
    },
  ]

  const services: MetadataRoute.Sitemap = [
    'web-design',
    'digital-marketing',
    'social-media',
    'immigration-services',
    'building-services',
    'catering-services',
    'financial-services',
  ].map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const blogs: MetadataRoute.Sitemap = [
    'is-your-business-ready-for-ai-search-2026-guide', // Added the new blog slug!
    'financial-services-website-design-trust-factor',
    'how-much-does-a-professional-website-cost-uk-small-business-2026',
    'immigration-consultant-website-essentials',
    'construction-website-design-tips-uk-builders',
    'interactive-catering-menu-vs-pdf-sales',
    'why-every-small-business-needs-a-modern-website-in-2025',
    'how-to-choose-the-right-website-design-package-for-your-small-business-in-2025',
    'the-importance-of-website-speed-for-small-businesses-in-2025',
    'enhancing-web-accessibility-for-better-user-experience',
    'why-every-small-business-needs-a-conversion-optimised-website-2025-guide',
    'diy-vs-professional-website-design-which-is-right-for-your-business-in-2025',
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [...corePages, ...services, ...blogs]
}