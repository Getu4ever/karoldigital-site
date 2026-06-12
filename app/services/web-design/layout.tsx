import { generateSEOMetadata } from "@/components/seo-server";
import { Metadata } from "next";

const PAGE_URL = "https://www.karoldigital.co.uk/services";

export const metadata: Metadata = {
  ...generateSEOMetadata({
    title: "High-Performance Digital Growth Strategies | Karol Digital UK",
    description:
      "Stop chasing traffic and start closing clients. We engineer high-performance websites and conversion systems for UK businesses ready to scale.",
    url: PAGE_URL,
    image: "/hero-cover.jpg",
  }),
  alternates: {
    canonical: PAGE_URL,
  },
};

const growthStrategySchema = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.karoldigital.co.uk"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Growth Strategies",
        "item": PAGE_URL // Updated this to match PAGE_URL
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Karol Digital Growth Architecture",
    "description":
      "Digital growth engineering, conversion optimization, and high-performance web systems for UK businesses.",
    "url": "https://www.karoldigital.co.uk",
    "areaServed": {
      "@type": "Country",
      "name": "United Kingdom"
    }
  }
];

export default function GrowthStrategyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(growthStrategySchema),
        }}
      />
      {children}
    </>
  );
}