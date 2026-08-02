export interface ContentBriefInput {
  businessName: string;
  industry: string;
  service: string;
  location: string;
  audience: string;
  primaryKeyword: string;
  goal: "enquiries" | "authority" | "local" | "ai_search";
}

export interface ContentBrief {
  titleOptions: string[];
  primaryKeyword: string;
  secondaryKeywords: string[];
  searchIntent: string;
  outline: { heading: string; notes: string }[];
  faqSuggestions: string[];
  cta: string;
  geoTips: string[];
  metaDescription: string;
}

const GOAL_COPY: Record<
  ContentBriefInput["goal"],
  { intent: string; cta: string }
> = {
  enquiries: {
    intent: "Commercial investigation — help the reader choose and enquire.",
    cta: "Book a free consultation to discuss {service} for your business.",
  },
  authority: {
    intent: "Informational authority — teach clearly and earn citations.",
    cta: "Download the checklist or book a strategy call with {business}.",
  },
  local: {
    intent: "Local commercial — win nearby buyers searching for {service} in {location}.",
    cta: "Speak with a {location} specialist about {service} today.",
  },
  ai_search: {
    intent: "Answer-engine optimisation — publish citable definitions, steps, and FAQs.",
    cta: "Get an AI search readiness review for your {service} pages.",
  },
};

export function generateContentBrief(input: ContentBriefInput): ContentBrief {
  const {
    businessName,
    industry,
    service,
    location,
    audience,
    primaryKeyword,
    goal,
  } = input;

  const loc = location.trim() || "the UK";
  const brand = businessName.trim() || "your business";
  const keyword = primaryKeyword.trim() || `${service} ${loc}`.trim();

  const secondaryKeywords = [
    `${service} for ${industry}`,
    `best ${service} ${loc}`,
    `how to choose ${service}`,
    `${service} cost UK`,
    `${industry} website leads`,
  ].filter(Boolean);

  const goalMeta = GOAL_COPY[goal];
  const searchIntent = goalMeta.intent
    .replace("{service}", service)
    .replace("{location}", loc);
  const cta = goalMeta.cta
    .replace("{service}", service)
    .replace("{business}", brand)
    .replace("{location}", loc);

  return {
    titleOptions: [
      `${keyword}: A Practical Guide for ${industry} Businesses`,
      `How ${audience} Can Get Better Results from ${service}`,
      `${service} in ${loc}: What ${industry} Buyers Need to Know`,
    ],
    primaryKeyword: keyword,
    secondaryKeywords,
    searchIntent,
    outline: [
      {
        heading: `What is ${service}?`,
        notes: "Give a one-sentence definition AI engines can cite, then a short plain-English explanation.",
      },
      {
        heading: `Why ${industry} businesses need this`,
        notes: `Speak directly to ${audience}. Cover trust, visibility, and enquiry quality.`,
      },
      {
        heading: "What good looks like",
        notes: "List 4–6 concrete criteria buyers can evaluate (clarity, speed, proof, next steps).",
      },
      {
        heading: `Common mistakes in ${loc}`,
        notes: "Call out brochure sites, weak CTAs, missing schema, and thin service pages.",
      },
      {
        heading: "Step-by-step approach",
        notes: "Provide a numbered process: audit → messaging → build/content → measure.",
      },
      {
        heading: "How Karol Digital helps",
        notes: `Position ${brand} as the practical partner for ${service} without hard-selling.`,
      },
    ],
    faqSuggestions: [
      `How much does ${service} cost for a ${industry} business?`,
      `How long does it take to see results from ${service}?`,
      `What should I prepare before starting ${service}?`,
      `How does ${service} help with AI search and Google visibility?`,
    ],
    cta,
    geoTips: [
      "Add FAQPage + Service (or Article) JSON-LD matching the on-page answers.",
      "Open with a definition paragraph that can stand alone as a citation.",
      "Use specific entity names (business, location, service) instead of vague pronouns.",
      "Link to related service and industry pages to reinforce topical clusters.",
    ],
    metaDescription: `${keyword} for ${industry} businesses in ${loc}. Clear guidance for ${audience}, plus a practical next step to improve enquiries.`.slice(
      0,
      155
    ),
  };
}
