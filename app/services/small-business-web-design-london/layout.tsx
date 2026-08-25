import { generateSEOMetadata } from "@/components/seo-server";
import GeoExtras from "@/components/GeoExtras";
import { londonWebDesignFaqs } from "@/lib/page-faqs";
import type { Metadata } from "next";

const PAGE_URL =
  "https://www.karoldigital.co.uk/services/small-business-web-design-london";

export const metadata: Metadata = {
  ...generateSEOMetadata({
    title: "High-Performance Web Engineering London",
    description:
      "Custom high-performance websites for London small businesses — fast, secure, and conversion-focused. Premium web engineering without template bloat.",
    url: PAGE_URL,
    image: "/services-london-web-engineering.webp",
    keywords:
      "high-performance web design London, custom web engineering London, conversion-focused websites London, premium websites for London small business",
  }),
  alternates: {
    canonical: PAGE_URL,
  },
};

const serviceSchema = [
  {
    "@context": "https://schema.org",
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
        name: "High-Performance Web Engineering London",
        item: PAGE_URL,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "High-Performance Custom Web Engineering London",
    description:
      "Premium custom-built websites for London small businesses focused on speed, security, trust, and lead generation.",
    provider: {
      "@type": "ProfessionalService",
      name: "Karol Digital",
      url: "https://www.karoldigital.co.uk",
    },
  },
];

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      {children}
      <GeoExtras faqs={londonWebDesignFaqs} title="London web design FAQ" />
    </>
  );
}
