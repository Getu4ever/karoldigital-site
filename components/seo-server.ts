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
  | "terms_of_service";

export const seoConfig: Record<PageKey, SEOProps> = {
  home: {
    title: "Karol Digital — Affordable Web Design & Digital Marketing",
    description:
      "Affordable web design, digital marketing, and social media services for small businesses. Modern, mobile-friendly websites built to grow your brand online.",
    url: "https://www.karoldigital.co.uk/",
    image: "/hero-cover.jpg",
    keywords:
      "web design, digital marketing, small business websites, SEO, WordPress design",
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
};

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
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url,
      images: [{ url: image }],
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
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
