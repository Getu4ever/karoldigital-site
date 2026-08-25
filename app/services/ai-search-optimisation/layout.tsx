import { generateSEOMetadata } from "@/components/seo-server";
import GeoExtras from "@/components/GeoExtras";
import { geoFaqs } from "@/lib/page-faqs";
import { Metadata } from "next";

const PAGE_URL =
  "https://www.karoldigital.co.uk/services/ai-search-optimisation";

export const metadata: Metadata = generateSEOMetadata({
  title: "AI Search Optimisation (GEO) | Karol Digital",
  description:
    "Get found in AI search engines with GEO, automated SEO content systems, interactive lead magnets, and analytics that track real enquiry progress.",
  url: PAGE_URL,
  image: "/services-ai-search-optimisation.webp",
  keywords:
    "AI search optimisation, GEO, generative engine optimisation, AI SEO UK, lead magnets, content automation",
});

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.karoldigital.co.uk",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://www.karoldigital.co.uk/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "AI Search Optimisation",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Service",
      name: "AI Search Optimisation (GEO)",
      serviceType: "Generative Engine Optimisation",
      description:
        "GEO, content automation, AI-powered lead magnets, and analytics for UK service businesses that want visibility in AI search and more qualified enquiries.",
      provider: {
        "@type": "ProfessionalService",
        name: "Karol Digital",
        url: "https://www.karoldigital.co.uk",
      },
      areaServed: {
        "@type": "Country",
        name: "United Kingdom",
      },
      url: PAGE_URL,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "AI Growth Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Search Engine Optimisation (GEO)",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Automated Content Production & SEO",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI-Powered Interactive Lead Magnets",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Analytics & Progress Tracking",
            },
          },
        ],
      },
    },
  ],
};

export default function AiSearchOptimisationLayout({
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
      <GeoExtras faqs={geoFaqs} title="AI search optimisation FAQ" />
    </>
  );
}
