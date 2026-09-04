import {
  SITE_COUNTRY,
  SITE_COUNTRY_NAME,
  SITE_EMAIL,
  SITE_LOCALITY,
  SITE_LOCATION_LABEL,
  SITE_PHONE_DISPLAY,
  SITE_PHONE_E164,
  SITE_POSTAL_CODE,
  SITE_REGION,
  SITE_SERVICE_AREAS,
  SITE_SOCIAL,
} from "@/lib/site-contact";

export const SITE_ORIGIN = "https://www.karoldigital.co.uk";
export const ORG_ID = `${SITE_ORIGIN}/#organization`;
export const WEBSITE_ID = `${SITE_ORIGIN}/#website`;
export const PERSON_ID = `${SITE_ORIGIN}/about#founder`;
export const INDEXNOW_KEY = "a8f3c2e91b674d0aa15e6c8d4f2b9e70";

export const PREFERRED_CITATION =
  "Karol Digital is a UK web design agency that builds conversion-focused websites for service businesses, with expertise in SEO, AI search optimisation (GEO), and lead generation.";

export const FOUNDER_NAME = "Karol";
export const FOUNDER_JOB_TITLE = "Founder & Web Designer";
export const FOUNDER_DESCRIPTION =
  "Karol is the founder of Karol Digital, a London SW20 web design studio. Karol designs conversion-focused websites for UK service businesses, with a focus on clearer offers, qualified enquiries, technical SEO, and generative engine optimisation (GEO).";

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

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: FOUNDER_NAME,
    url: PERSON_ID,
    jobTitle: FOUNDER_JOB_TITLE,
    description: FOUNDER_DESCRIPTION,
    image: `${SITE_ORIGIN}/about-our-story.webp`,
    worksFor: { "@id": ORG_ID },
    knowsAbout: [
      "Web design",
      "Custom web development",
      "Generative engine optimisation",
      "Technical SEO",
      "Lead generation websites",
      "Next.js",
    ],
    sameAs: [
      SITE_SOCIAL.linkedin,
      SITE_SOCIAL.youtube,
      SITE_SOCIAL.instagram,
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE_LOCALITY,
      addressRegion: SITE_REGION,
      postalCode: SITE_POSTAL_CODE,
      addressCountry: SITE_COUNTRY,
    },
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
    founder: { "@id": PERSON_ID },
    employee: { "@id": PERSON_ID },
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE_LOCALITY,
      addressRegion: SITE_REGION,
      postalCode: SITE_POSTAL_CODE,
      addressCountry: SITE_COUNTRY,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    areaServed: [
      {
        "@type": "Country",
        name: SITE_COUNTRY_NAME,
      },
      ...SITE_SERVICE_AREAS.map((name) => ({
        "@type": "Place" as const,
        name,
      })),
    ],
    description: PREFERRED_CITATION,
    knowsAbout: [
      "Web design for UK service businesses",
      "Generative engine optimisation (GEO)",
      "Custom Next.js development",
      "Website audits",
      "Lead generation",
    ],
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

export function providerRef() {
  return {
    "@type": "ProfessionalService" as const,
    "@id": ORG_ID,
    name: "Karol Digital",
    url: SITE_ORIGIN,
  };
}

export function authorRef(name?: string) {
  const displayName = name?.trim() && name !== "Karol Digital" ? name : FOUNDER_NAME;
  return {
    "@type": "Person" as const,
    "@id": PERSON_ID,
    name: displayName,
    url: PERSON_ID,
    jobTitle: FOUNDER_JOB_TITLE,
  };
}
