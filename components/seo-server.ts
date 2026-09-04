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
  imageAlt?: string;
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  noIndex?: boolean;
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
    title: "Web Design for Pole & Aerial Studios UK",
    description:
      "Custom studio booking systems UK for pole & aerial studios. High-converting London websites — replace Bookwhen or TeamUp under your own domain.",
    url: "https://www.karoldigital.co.uk",
    image: "/seo-cover.jpg",
    keywords:
      "web design for pole and aerial studios, custom studio booking systems UK, custom timetables for dance studios, replacing Bookwhen TeamUp custom website, high-converting studio websites London, local business SEO agency London",
    type: "website",
  },

  about: {
    title: "About Karol Digital | UK Web Design Studio",
    description:
      "About Karol Digital — a London web design studio helping UK service businesses look more professional, win better enquiries, and waste less time on paperwork.",
    keywords:
      "about Karol Digital, London web design studio, UK web design agency, London SW20",
    url: "https://www.karoldigital.co.uk/about",
    image: "/about-team.jpg",
    type: "website",
  },

  contact: {
    title: "Contact Karol Digital | Book a Call",
    description:
      "Contact Karol Digital for a free website consultation. Call 07565 472445 or email info@karoldigital.co.uk — London-based, serving UK service businesses.",
    url: "https://www.karoldigital.co.uk/contact",
    image: "/heroes/contact.png",
    keywords:
      "contact Karol Digital, website consultation UK, book web design call London",
    type: "website",
  },

  services: {
    title: "Web Design & Digital Services | Karol Digital",
    description:
      "Websites, audits, AI search optimisation, and digital marketing for UK small businesses — built to win more of the right enquiries with less admin.",
    url: "https://www.karoldigital.co.uk/services",
    image: "/seo-cover.jpg",
    type: "website",
  },

  services_web_design: {
    title: "Web Design Services — Karol Digital",
    description:
      "High-performance custom web design for small businesses. Modern, fast, conversion-focused websites — view Starter, Growth and Premium packages.",
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
      "Digital marketing for small businesses — SEO guidance, email marketing, content strategy, branding and visibility improvements that drive real results.",
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
      "Understand how Karol Digital uses necessary, analytics, and marketing cookies, and how to manage preferences under UK GDPR and PECR.",
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
    title: "Studio & Service Business Web Design UK",
    description:
      "Pole & aerial studio websites with custom booking, plus financial, immigration, construction and catering sites for UK service businesses.",
    url: "https://www.karoldigital.co.uk/industries",
    image: "/seo-cover.jpg",
    keywords:
      "web design for pole and aerial studios, custom studio booking systems UK, high-performance financial services websites UK, custom web design for immigration lawyers, web development for London construction and trades, conversion-focused corporate catering websites",
    type: "website",
  },
};

/** ~580px in Google SERP preview (Seobility limit) */
export const SEO_TITLE_MAX_LENGTH = 55;
export const SEO_BRAND_SUFFIX = " | Karol Digital";
export const SEO_DESCRIPTION_MAX_LENGTH = 160;

export function clampSeoDescription(
  description: string,
  maxLength = SEO_DESCRIPTION_MAX_LENGTH
): string {
  const normalized = description.replace(/\s+/g, " ").trim();
  if (normalized.length <= maxLength) return normalized;

  const ellipsis = "…";
  let cut = normalized.slice(0, maxLength - ellipsis.length);
  const lastSpace = cut.lastIndexOf(" ");
  if (lastSpace > 80) cut = cut.slice(0, lastSpace);
  return `${cut.trimEnd()}${ellipsis}`;
}

/**
 * Truncates an overlong title by removing words from the middle so the
 * distinctive ending (and a short lead-in) survive within the SERP limit.
 */
function truncateSeoPrimary(primary: string, maxLength: number): string {
  if (primary.length <= maxLength) return primary;

  const ellipsis = "…";
  const words = primary.split(/\s+/).filter(Boolean);

  if (words.length < 4) {
    let cut = primary.slice(0, maxLength - ellipsis.length);
    const lastSpace = cut.lastIndexOf(" ");
    if (lastSpace > 12) cut = cut.slice(0, lastSpace);
    return `${cut.trimEnd()}${ellipsis}`;
  }

  let best: { text: string; score: number } | null = null;

  for (let rightCount = 1; rightCount < words.length; rightCount++) {
    for (let leftCount = 1; leftCount < words.length - rightCount; leftCount++) {
      const text = `${words.slice(0, leftCount).join(" ")}${ellipsis}${words
        .slice(words.length - rightCount)
        .join(" ")}`;
      if (text.length > maxLength) continue;

      // Prefer keeping more words, and when tied keep more of the ending
      // so titles that share a long prefix stay unique after truncation.
      const score = leftCount + rightCount * 1.01;
      if (!best || score > best.score) best = { text, score };
    }
  }

  if (best) return best.text;

  let cut = primary.slice(0, maxLength - ellipsis.length);
  const lastSpace = cut.lastIndexOf(" ");
  if (lastSpace > 12) cut = cut.slice(0, lastSpace);
  return `${cut.trimEnd()}${ellipsis}`;
}

/**
 * Keeps titles within SERP width limits. Adds brand suffix when missing
 * and truncates long titles by removing words from the middle.
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
  const primary = withBrand.slice(0, withBrand.length - suffix.length).trim();
  const maxPrimary = SEO_TITLE_MAX_LENGTH - suffix.length;

  return `${truncateSeoPrimary(primary, maxPrimary)}${suffix}`;
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
  imageAlt,
  publishedTime,
  modifiedTime,
  authors,
  noIndex = false,
}: SEOProps): Metadata {
  const formattedTitle = formatSeoTitle(title);
  const clampedDescription = clampSeoDescription(description);
  const ogImage = {
    url: image,
    width: 1200,
    height: 630,
    alt: imageAlt || formattedTitle,
  };

  return {
    title: formattedTitle,
    description: clampedDescription,
    keywords,
    authors: (authors ?? ["Karol Digital"]).map((name) => ({
      name,
      url: "https://www.karoldigital.co.uk/about",
    })),
    creator: "Karol Digital",
    publisher: "Karol Digital",
    robots: noIndex
      ? { index: false, follow: true }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      title: formattedTitle,
      description: clampedDescription,
      url,
      siteName: "Karol Digital",
      locale: "en_GB",
      images: [ogImage],
      ...(type === "article"
        ? {
            type: "article" as const,
            publishedTime,
            modifiedTime,
            authors: authors ?? ["Karol Digital"],
          }
        : { type: "website" as const }),
    },
    twitter: {
      card: "summary_large_image",
      title: formattedTitle,
      description: clampedDescription,
      images: [image],
    },
    alternates: {
      canonical: url,
      languages: {
        "en-GB": url,
        "x-default": url,
      },
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
