// components/seo-server.ts
import type { Metadata } from "next";

type SeoType = "website" | "article";

interface SEOProps {
  title: string;
  description: string;
  url: string;
  image: string;
  type?: SeoType;
  keywords?: string;
}

/**
 * Central SEO config for all main pages.
 * This is the SINGLE place where you edit titles & descriptions.
 */
export type PageKey =
  | "home"
  | "about"
  | "contact"
  | "services"
  | "services_web_design"
  | "services_social_media"
  | "services_digital_marketing"
  | "privacy_policy"
  | "cookie_policy"
  | "disclaimer"
  | "terms_of_service"
  | "industries";

export const seoConfig: Record<PageKey, SEOProps> = {
  home: {
    title: "Karol Digital — Web Design for UK Service Businesses",
    description:
      "We build fast, trust-building websites for UK service businesses that want more qualified enquiries, clearer messaging, and stronger online credibility.",
    url: "https://www.karoldigital.co.uk/",
    image: "/seo-cover.jpg",
    keywords:
      "web design UK, service business websites, lead generation websites, website audits, Next.js development",
    type: "website",
  },

  about: {
    title: "About Karol Digital",
    description:
      "Learn about Karol Digital’s mission to support small businesses with professional and affordable web design.",
    url: "https://www.karoldigital.co.uk/about",
    image: "/about-team.jpg",
    type: "website",
  },

  contact: {
    title: "Contact Karol Digital",
    description:
      "Get in touch for web design, digital marketing and social media setup services. Request a free quote today.",
    url: "https://www.karoldigital.co.uk/contact",
    image: "/hero-page-banner.jpg",
    type: "website",
  },

  services: {
    title: "Services & Pricing — Karol Digital",
    description:
      "Affordable and professional web design, social media setup and digital marketing for small businesses.",
    url: "https://www.karoldigital.co.uk/services",
    image: "/seo-cover.jpg",
    type: "website",
  },

  services_web_design: {
    title: "Web Design Services — Karol Digital",
    description:
      "Mobile-friendly, affordable and professional web design services for small businesses. View Starter, Growth and Premium website packages.",
    url: "https://www.karoldigital.co.uk/services/web-design",
    image: "/seo-cover.jpg",
    type: "website",
  },

  services_social_media: {
    title: "Social Media Setup — Karol Digital",
    description:
      "Professional social media setup for small businesses. Optimised bios, banners, Google Business setup and branding across all platforms.",
    url: "https://www.karoldigital.co.uk/services/social-media",
    image: "/seo-cover.jpg",
    type: "website",
  },

  services_digital_marketing: {
    title: "Digital Marketing Services | Karol Digital",
    description:
      "Digital marketing for small businesses — SEO guidance, email marketing, content strategy, branding and visibility improvements. Affordable and effective.",
    url: "https://www.karoldigital.co.uk/services/digital-marketing",
    image: "/service-marketing.jpg",
    type: "website",
  },

  privacy_policy: {
    title: "Privacy Policy — Karol Digital",
    description:
      "Learn how Karol Digital collects, stores and protects your personal information. GDPR-compliant privacy policy for all website visitors and clients.",
    url: "https://www.karoldigital.co.uk/privacy-policy",
    image: "/seo-cover.jpg",
    type: "website",
  },

  cookie_policy: {
    title: "Cookie Policy — Karol Digital",
    description:
      "Understand how Karol Digital uses cookies for performance, analytics, and user experience improvement.",
    url: "https://www.karoldigital.co.uk/cookie-policy",
    image: "/seo-cover.jpg",
    type: "website",
  },

  disclaimer: {
    title: "Disclaimer | Karol Digital",
    description:
      "Read Karol Digital’s legal disclaimer detailing accuracy, responsibility, external links and the limits of liability when using our website.",
    url: "https://www.karoldigital.co.uk/disclaimer",
    image: "/seo-cover.jpg",
    type: "website",
  },

  terms_of_service: {
    title: "Terms of Service — Karol Digital",
    description:
      "Review the terms and conditions for using Karol Digital’s website and services.",
    url: "https://www.karoldigital.co.uk/terms-of-service",
    image: "/seo-cover.jpg",
    type: "website",
  },

  industries: {
    title: "Industry Web Design for UK Service Businesses | Karol Digital",
    description:
      "Industry-focused website design for UK financial, immigration, construction, catering, and other service businesses that need trust, clarity, and more qualified enquiries.",
    url: "https://www.karoldigital.co.uk/industries",
    image: "/seo-cover.jpg",
    keywords:
      "industry web design UK, financial services websites, immigration lawyer websites, construction web design",
    type: "website",
  },
};

/** ~580px in Google SERP preview (Seobility limit) */
export const SEO_TITLE_MAX_LENGTH = 55;
export const SEO_BRAND_SUFFIX = " | Karol Digital";

/**
 * Keeps titles within SERP width limits. Adds brand suffix when missing
 * and truncates long titles at a word boundary.
 */
export function formatSeoTitle(title: string): string {
  const normalized = title.replace(/\s+/g, " ").trim();
  const withBrand = /Karol Digital/i.test(normalized)
    ? normalized
    : `${normalized}${SEO_BRAND_SUFFIX}`;

  if (withBrand.length <= SEO_TITLE_MAX_LENGTH) {
    return withBrand;
  }

  const suffixMatch = withBrand.match(/(\s[|–—-]\sKarol Digital(?:\sBlog)?)\s*$/i);
  const suffix = suffixMatch ? suffixMatch[1] : SEO_BRAND_SUFFIX;
  const maxPrimary = SEO_TITLE_MAX_LENGTH - suffix.length - 1;

  let primary = withBrand.slice(0, withBrand.length - suffix.length).trim();
  primary = primary.slice(0, maxPrimary);
  const lastSpace = primary.lastIndexOf(" ");
  if (lastSpace > 20) {
    primary = primary.slice(0, lastSpace);
  }

  return `${primary}…${suffix}`;
}

/**
 * General generator (used by layout and blog).
 */
export function generateSEOMetadata({
  title,
  description,
  url,
  image,
  type = "website",
  keywords,
}: SEOProps): Metadata {
  const formattedTitle = formatSeoTitle(title);

  return {
    title: formattedTitle,
    description,
    keywords,
    openGraph: {
      title: formattedTitle,
      description,
      url,
      images: [{ url: image }],
      type,
    },
    twitter: {
      card: "summary_large_image",
      title: formattedTitle,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  };
}

/**
 * Helper to get Metadata for a known page key.
 * Example: export const metadata = getPageMetadata("about");
 */
export function getPageMetadata(page: PageKey): Metadata {
  return generateSEOMetadata(seoConfig[page]);
}
