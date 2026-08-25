import { generateSEOMetadata } from "@/components/seo-server";
import GeoExtras from "@/components/GeoExtras";
import { websiteCheckerFaqs } from "@/lib/page-faqs";
import type { Metadata } from "next";

const PAGE_URL = "https://www.karoldigital.co.uk/tools/website-checker";

export const metadata: Metadata = generateSEOMetadata({
  title: "Free GEO & SEO Website Checker | Karol Digital",
  description:
    "Paste a URL for a homepage snapshot of titles, schema, robots.txt, and llms.txt. Then take the 9-question scorecard or talk to Karol if something looks off.",
  url: PAGE_URL,
  image: "/seo-cover.jpg",
  keywords:
    "free SEO checker UK, GEO audit tool, website snapshot, llms.txt checker, JSON-LD schema check",
});

const schema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "GEO & SEO Website Checker",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: PAGE_URL,
  description:
    "Free homepage snapshot of SEO and generative engine optimisation signals for UK service businesses.",
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

export default function WebsiteCheckerLayout({
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
      <GeoExtras faqs={websiteCheckerFaqs} title="Website checker FAQ" />
    </>
  );
}
