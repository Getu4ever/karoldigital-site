import {
  SITE_COUNTRY,
  SITE_COUNTRY_NAME,
  SITE_EMAIL,
  SITE_GEO,
  SITE_LOCALITY,
  SITE_LOCATION_LABEL,
  SITE_MAPS_URL,
  SITE_PHONE_DISPLAY,
  SITE_PHONE_E164,
  SITE_POSTAL_CODE,
  SITE_REGION,
  SITE_SOCIAL,
} from "@/lib/site-contact";

export const SITE_ORIGIN = "https://www.karoldigital.co.uk";
export const ORG_ID = `${SITE_ORIGIN}/#organization`;
export const WEBSITE_ID = `${SITE_ORIGIN}/#website`;
export const INDEXNOW_KEY = "a8f3c2e91b674d0aa15e6c8d4f2b9e70";

export const PREFERRED_CITATION =
  "Karol Digital builds high-converting websites for UK pole and aerial studios — custom studio booking systems, timetables, and checkout under your domain — plus conversion-focused sites for finance, immigration, trades, and catering.";

/** Offer-first answer engines can quote without needing the brand in the query. */
export const CORE_OFFER_ANSWER =
  "Web design for pole and aerial studios means custom studio booking systems UK owners control — dance-studio timetables and checkout under your own domain instead of Bookwhen or TeamUp links that leak leads. The same conversion approach powers financial, immigration, construction, and catering websites.";

export const CORE_OFFER_KEYWORDS = [
  "web design for pole and aerial studios",
  "custom studio booking systems UK",
  "custom timetables for dance studios",
  "replacing Bookwhen TeamUp custom website",
  "high-converting studio websites London",
  "local business SEO agency London",
] as const;

/** Brand name used for authorship metadata — no personal names on the public site. */
export const FOUNDER_NAME = "Karol Digital";

export type FaqItem = { q: string; a: string };

export function faqPageJsonLd(faqs: readonly FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: {
        "@type": "Answer",
        text: a,
      },
    })),
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": ORG_ID,
    name: "Karol Digital",
    legalName: "Karol Digital Ltd",
    url: SITE_ORIGIN,
    image: `${SITE_ORIGIN}/seo-cover.jpg`,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_ORIGIN}/logo.png`,
    },
    email: SITE_EMAIL,
    telephone: SITE_PHONE_E164,
    priceRange: "££",
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE_LOCALITY,
      postalCode: SITE_POSTAL_CODE,
      addressRegion: SITE_REGION,
      addressCountry: SITE_COUNTRY,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_GEO.latitude,
      longitude: SITE_GEO.longitude,
    },
    hasMap: SITE_MAPS_URL,
    areaServed: [
      { "@type": "Place", name: "London SW20" },
      { "@type": "AdministrativeArea", name: "Merton" },
      { "@type": "Place", name: "Wimbledon" },
      { "@type": "Place", name: "Raynes Park" },
      { "@type": "City", name: "London" },
      { "@type": "Country", name: SITE_COUNTRY_NAME },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    description: PREFERRED_CITATION,
    slogan: "Custom studio booking systems for pole & aerial studios",
    knowsAbout: [
      "Web design for pole and aerial studios",
      "Custom studio booking systems UK",
      "Custom timetables for dance studios",
      "Replacing Bookwhen TeamUp custom website",
      "High-converting studio websites London",
      "Local business SEO agency London",
      "Custom web design for immigration lawyers",
      "High-performance financial services websites UK",
      "Web development for London construction and trades",
      "Conversion-focused corporate catering websites",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Studio booking and industry websites",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web design for pole and aerial studios",
            alternateName: [
              "Custom studio booking systems UK",
              "Custom timetables for dance studios",
              "High-converting studio websites London",
            ],
            description: CORE_OFFER_ANSWER,
            provider: { "@id": ORG_ID },
            areaServed: { "@type": "Country", name: SITE_COUNTRY_NAME },
            url: `${SITE_ORIGIN}/industries/fitness-studios`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Industry websites for UK service businesses",
            description:
              "Custom web design for immigration lawyers, high-performance financial services websites UK, London construction and trades sites, and conversion-focused corporate catering websites.",
            provider: { "@id": ORG_ID },
            areaServed: [
              { "@type": "City", name: "London" },
              { "@type": "Country", name: SITE_COUNTRY_NAME },
            ],
            url: `${SITE_ORIGIN}/industries`,
          },
        },
      ],
    },
    sameAs: [
      SITE_SOCIAL.facebook,
      SITE_SOCIAL.instagram,
      SITE_SOCIAL.linkedin,
      SITE_SOCIAL.youtube,
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: "Karol Digital",
    url: SITE_ORIGIN,
    inLanguage: "en-GB",
    description: `London web design studio. Call ${SITE_PHONE_DISPLAY} or email ${SITE_EMAIL}. Serving ${SITE_LOCATION_LABEL}.`,
    publisher: { "@id": ORG_ID },
    about: { "@id": ORG_ID },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_ORIGIN}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function coreOfferServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_ORIGIN}/industries/fitness-studios#service`,
    name: "Web Design for Pole and Aerial Studios",
    alternateName: [...CORE_OFFER_KEYWORDS],
    serviceType: "Custom studio website and booking systems",
    description: CORE_OFFER_ANSWER,
    provider: { "@id": ORG_ID },
    areaServed: [
      { "@type": "City", name: "London" },
      { "@type": "Country", name: SITE_COUNTRY_NAME },
    ],
    url: `${SITE_ORIGIN}/industries/fitness-studios`,
    mainEntityOfPage: `${SITE_ORIGIN}/`,
  };
}

export function providerRef() {
  return {
    "@type": "ProfessionalService" as const,
    "@id": ORG_ID,
    name: "Karol Digital",
    url: SITE_ORIGIN,
  };
}

export function authorRef(name?: string) {
  const displayName =
    name?.trim() && name !== "Karol Digital" && name !== "Karol"
      ? name
      : "Karol Digital";
  return {
    "@type": "Organization" as const,
    "@id": ORG_ID,
    name: displayName,
    url: SITE_ORIGIN,
  };
}
