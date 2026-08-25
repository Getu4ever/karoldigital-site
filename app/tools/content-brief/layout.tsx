import { generateSEOMetadata } from "@/components/seo-server";
import GeoExtras from "@/components/GeoExtras";
import ToolPageHero from "@/components/ToolPageHero";
import { contentBriefFaqs } from "@/lib/page-faqs";
import type { Metadata } from "next";

const PAGE_URL = "https://www.karoldigital.co.uk/tools/content-brief";

export const metadata: Metadata = generateSEOMetadata({
  title: "Free SEO Content Brief Generator | Karol Digital",
  description:
    "Generate an SEO content brief with title options, outline, FAQs, and GEO tips for your next service-business article — free and instant.",
  url: PAGE_URL,
  image: "/seo-cover.jpg",
  keywords:
    "SEO content brief generator, content automation, AI SEO brief, blog outline tool UK",
});

const schema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "SEO Content Brief Generator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: PAGE_URL,
  description:
    "Instant SEO content briefs with outlines, FAQs, and AI search (GEO) tips for UK service businesses.",
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

export default function ContentBriefLayout({
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
      <main className="min-h-screen bg-gradient-to-b from-[#f7fafb] to-white text-gray-900">
        <ToolPageHero
          eyebrow="Content production & SEO"
          title="SEO Content Brief"
          titleAccent="Generator"
          description="Instant title options, outline, FAQs, and GEO tips — built for UK service businesses that need a repeatable content system."
          imageSrc="/heroes/digital-marketing.png"
          imageAlt="SEO content brief generator for UK service businesses"
        />
        {children}
      </main>
      <GeoExtras faqs={contentBriefFaqs} title="Content brief FAQ" />
    </>
  );
}
