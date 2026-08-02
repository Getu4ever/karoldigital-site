import { generateSEOMetadata } from "@/components/seo-server";
import type { Metadata } from "next";

const PAGE_URL =
  "https://www.karoldigital.co.uk/tools/ai-search-scorecard";

export const metadata: Metadata = generateSEOMetadata({
  title: "Free AI Search Readiness Scorecard | Karol Digital",
  description:
    "Check how ready your website is for AI search engines. Get a GEO readiness score, priorities, and a clear next step in under five minutes.",
  url: PAGE_URL,
  image: "/seo-cover.jpg",
  keywords:
    "AI search scorecard, GEO checklist, generative engine optimisation quiz, AI SEO audit UK",
});

const schema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "AI Search Readiness Scorecard",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: PAGE_URL,
  description:
    "Interactive scorecard that measures AI search (GEO) readiness for UK service businesses.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "GBP",
  },
  provider: {
    "@type": "ProfessionalService",
    name: "Karol Digital",
    url: "https://www.karoldigital.co.uk",
  },
};

export default function ScorecardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {children}
    </>
  );
}
