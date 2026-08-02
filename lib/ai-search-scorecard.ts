export type ScorecardAnswer = "yes" | "partial" | "no";

export interface ScorecardQuestion {
  id: string;
  pillar: "geo" | "content" | "leads" | "analytics";
  question: string;
  help: string;
}

export const SCORECARD_QUESTIONS: ScorecardQuestion[] = [
  {
    id: "schema",
    pillar: "geo",
    question: "Does your site publish clear JSON-LD schema (Organization, Service, FAQ, or Article)?",
    help: "Structured data helps AI engines understand who you are and what you offer.",
  },
  {
    id: "llms",
    pillar: "geo",
    question: "Do you have an llms.txt (or similar machine-readable summary) for AI crawlers?",
    help: "A short, authoritative summary improves how answer engines cite your business.",
  },
  {
    id: "answer_ready",
    pillar: "geo",
    question: "Do key pages answer common buyer questions in plain, citable language?",
    help: "AI search prefers clear definitions, steps, and direct answers over vague marketing copy.",
  },
  {
    id: "content_system",
    pillar: "content",
    question: "Do you publish SEO content on a consistent schedule with briefs and keyword targets?",
    help: "A repeatable content system compounds visibility in both Google and AI answers.",
  },
  {
    id: "service_pages",
    pillar: "content",
    question: "Do you have dedicated pages for each core service and industry you sell into?",
    help: "Specific pages give engines clearer entities to retrieve and recommend.",
  },
  {
    id: "lead_magnet",
    pillar: "leads",
    question: "Do you offer an interactive tool, quiz, or checklist that captures leads?",
    help: "Interactive lead magnets turn anonymous visitors into qualified conversations.",
  },
  {
    id: "cta_clarity",
    pillar: "leads",
    question: "Is there one clear next step on every high-intent page (book, audit, or tool)?",
    help: "Ambiguous CTAs reduce both human conversions and AI-recommended actions.",
  },
  {
    id: "lead_tracking",
    pillar: "analytics",
    question: "Do you track form submissions, tool completions, and key CTA clicks in analytics?",
    help: "Without event tracking, you cannot prove what content or tools generate enquiries.",
  },
  {
    id: "review_loop",
    pillar: "analytics",
    question: "Do you review performance monthly and adjust content or CTAs based on results?",
    help: "AI-informed growth needs a feedback loop, not a one-off launch.",
  },
];

const ANSWER_SCORE: Record<ScorecardAnswer, number> = {
  yes: 2,
  partial: 1,
  no: 0,
};

export function scoreAnswers(
  answers: Record<string, ScorecardAnswer>
): {
  total: number;
  max: number;
  percent: number;
  byPillar: Record<ScorecardQuestion["pillar"], { score: number; max: number }>;
  band: "emerging" | "building" | "ready";
  summary: string;
  priorities: string[];
} {
  const byPillar: Record<
    ScorecardQuestion["pillar"],
    { score: number; max: number }
  > = {
    geo: { score: 0, max: 0 },
    content: { score: 0, max: 0 },
    leads: { score: 0, max: 0 },
    analytics: { score: 0, max: 0 },
  };

  let total = 0;
  const max = SCORECARD_QUESTIONS.length * 2;

  for (const q of SCORECARD_QUESTIONS) {
    const answer = answers[q.id] ?? "no";
    const points = ANSWER_SCORE[answer];
    total += points;
    byPillar[q.pillar].score += points;
    byPillar[q.pillar].max += 2;
  }

  const percent = Math.round((total / max) * 100);
  const band =
    percent >= 75 ? "ready" : percent >= 45 ? "building" : "emerging";

  const summary =
    band === "ready"
      ? "Your foundations are strong. Focus on compounding content and proving ROI with analytics."
      : band === "building"
        ? "You have useful pieces in place. Closing gaps in schema, content systems, and lead capture will move the needle fastest."
        : "You are early in AI search readiness. Start with structured data, answer-ready pages, and one interactive lead magnet.";

  const priorities = SCORECARD_QUESTIONS.filter(
    (q) => (answers[q.id] ?? "no") !== "yes"
  )
    .slice(0, 3)
    .map((q) => q.question.replace(/\?$/, ""));

  return { total, max, percent, byPillar, band, summary, priorities };
}
