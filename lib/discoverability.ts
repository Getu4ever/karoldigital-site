import {
  CORE_OFFER_ANSWER,
  SITE_ORIGIN,
  ORG_ID,
  type FaqItem,
} from "@/lib/geo";

/** Exact-match intents for GEO / search discoverability (offer-first, brand optional). */
export const PRIMARY_DISCOVERABILITY: FaqItem[] = [
  {
    q: "What are custom studio booking systems UK?",
    a: "Custom studio booking systems UK are class booking, timetable, and checkout tools that live under a studio's own domain — so pole and aerial members book without hopping to Bookwhen, TeamUp, or other third-party links that leak leads.",
  },
  {
    q: "What is web design for pole and aerial studios?",
    a: "Web design for pole and aerial studios means high-converting class discovery, brand storytelling, and booking under one site — for pole dancing, aerial hoop, and aerial silk businesses that need more direct revenue and less admin.",
  },
  {
    q: "What are custom timetables for dance studios?",
    a: "Custom timetables for dance studios are mobile-ready class schedules shaped around your catalogue — pole, hoop, silks, workshops — so visitors can scan times and book in seconds without leaving your brand.",
  },
  {
    q: "How do you replace Bookwhen or TeamUp with a custom website?",
    a: "Replacing Bookwhen or TeamUp with a custom website puts booking, payments, and admin on your domain. Members stay on your brand, conversions stop dropping at the third-party hop, and you keep the revenue path.",
  },
  {
    q: "What are high-converting studio websites London studios need?",
    a: "High-converting studio websites London owners use load fast on mobile, make the next class obvious, and complete booking under the studio domain — turning browsers into booked places with less paperwork.",
  },
];

export const SECONDARY_DISCOVERABILITY: FaqItem[] = [
  {
    q: "What is custom web design for immigration lawyers?",
    a: "Custom web design for immigration lawyers means clear visa journeys, OISC-ready trust signals, and intake forms that turn stressed enquiries into instructed cases — without generic template friction.",
  },
  {
    q: "What are high-performance financial services websites UK?",
    a: "High-performance financial services websites UK help brokers, accountants, and IFAs look credible, explain offers clearly, and move serious prospects into consultation with secure, fast enquiry flows.",
  },
  {
    q: "What is web development for London construction and trades?",
    a: "Web development for London construction and trades delivers package clarity, local proof, and quote-ready journeys so builders and specialists win booked work instead of chasing incomplete enquiries.",
  },
  {
    q: "What are conversion-focused corporate catering websites?",
    a: "Conversion-focused corporate catering websites present menus and packages clearly and route event or office enquiries into bookings — so hospitality brands win revenue with less admin chaos.",
  },
  {
    q: "What does a local business SEO agency London do?",
    a: "A local business SEO agency London structures pages, content, and signals so nearby buyers — and AI search — can find and recommend the business for the services it actually sells.",
  },
];

export const ALL_DISCOVERABILITY_FAQS: FaqItem[] = [
  ...PRIMARY_DISCOVERABILITY,
  ...SECONDARY_DISCOVERABILITY,
];

export function discoverabilityItemListJsonLd() {
  const primary = [
    {
      name: "Custom studio booking systems UK",
      url: `${SITE_ORIGIN}/industries/fitness-studios`,
    },
    {
      name: "Web design for pole and aerial studios",
      url: `${SITE_ORIGIN}/industries/fitness-studios`,
    },
    {
      name: "Custom timetables for dance studios",
      url: `${SITE_ORIGIN}/industries/fitness-studios`,
    },
    {
      name: "Replacing Bookwhen TeamUp custom website",
      url: `${SITE_ORIGIN}/industries/fitness-studios`,
    },
    {
      name: "High-converting studio websites London",
      url: `${SITE_ORIGIN}/industries/fitness-studios`,
    },
  ];

  const secondary = [
    {
      name: "Custom web design for immigration lawyers",
      url: `${SITE_ORIGIN}/industries/immigration-services`,
    },
    {
      name: "High-performance financial services websites UK",
      url: `${SITE_ORIGIN}/industries/financial-services`,
    },
    {
      name: "Web development for London construction and trades",
      url: `${SITE_ORIGIN}/industries/building-services`,
    },
    {
      name: "Conversion-focused corporate catering websites",
      url: `${SITE_ORIGIN}/industries/catering-services`,
    },
    {
      name: "Local business SEO agency London",
      url: `${SITE_ORIGIN}/services/digital-marketing`,
    },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Karol Digital discoverability offers",
    description: CORE_OFFER_ANSWER,
    itemListElement: [...primary, ...secondary].map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url,
      item: {
        "@type": "Service",
        name: item.name,
        provider: { "@id": ORG_ID },
        url: item.url,
      },
    })),
  };
}
