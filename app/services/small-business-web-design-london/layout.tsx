import { generateSEOMetadata } from "@/components/seo-server";
import GeoExtras from "@/components/GeoExtras";
import { londonWebDesignFaqs } from "@/lib/page-faqs";
import type { Metadata } from "next";

const PAGE_URL =
  "https://www.karoldigital.co.uk/services/small-business-web-design-london";

export const metadata: Metadata = {
  ...generateSEOMetadata({
    title: "Web Design for London Small Businesses | Karol Digital",
    description:
      "Web design for London SW20, Merton, Wimbledon & Raynes Park service businesses. Clear offers, local visibility, and enquiry systems that win more of the right work.",
    url: PAGE_URL,
    image: "/services-london-web-engineering.webp",
    keywords:
      "web design London SW20, web design Merton, small business website Wimbledon, web designer Raynes Park, South West London web design",
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
        name: "London Small Business Web Design",
        item: PAGE_URL,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for London Small Businesses",
    description:
      "Conversion-focused websites for service businesses across London SW20, Merton, Wimbledon, Raynes Park, and Greater London — built for local trust and qualified enquiries.",
    provider: {
      "@type": "ProfessionalService",
      name: "Karol Digital",
      url: "https://www.karoldigital.co.uk",
    },
    areaServed: [
      { "@type": "Place", name: "London SW20" },
      { "@type": "AdministrativeArea", name: "Merton" },
      { "@type": "Place", name: "Wimbledon" },
      { "@type": "Place", name: "Raynes Park" },
      { "@type": "City", name: "London" },
    ],
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
