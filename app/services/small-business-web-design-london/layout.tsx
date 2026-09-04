import { generateSEOMetadata } from "@/components/seo-server";
import GeoExtras from "@/components/GeoExtras";
import { londonWebDesignFaqs } from "@/lib/page-faqs";
import type { Metadata } from "next";

const PAGE_URL =
  "https://www.karoldigital.co.uk/services/small-business-web-design-london";

export const metadata: Metadata = {
  ...generateSEOMetadata({
    title: "Web Design London SW20 | Raynes Park & Wimbledon",
    description:
      "Web design for London SW20, Raynes Park, Wimbledon & Merton service businesses. Clear offers, local visibility, and enquiry systems that win more of the right work.",
    url: PAGE_URL,
    image: "/services-london-web-engineering.webp",
    keywords:
      "web design SW20, web design Raynes Park, Wimbledon web designer, Merton web design, New Malden website design, London SW20 web design",
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
        name: "London SW20 Web Design",
        item: PAGE_URL,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design for London SW20 Small Businesses",
    description:
      "Conversion-focused websites for service businesses across SW20, Raynes Park, Wimbledon, New Malden, Merton, Kingston, and Greater London.",
    provider: {
      "@type": "ProfessionalService",
      name: "Karol Digital",
      url: "https://www.karoldigital.co.uk",
    },
    areaServed: [
      { "@type": "PostalCode", name: "SW20" },
      { "@type": "Place", name: "Raynes Park" },
      { "@type": "Place", name: "Wimbledon" },
      { "@type": "AdministrativeArea", name: "Merton" },
      { "@type": "Place", name: "New Malden" },
      { "@type": "Place", name: "Kingston" },
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
      <GeoExtras faqs={londonWebDesignFaqs} title="London SW20 web design FAQ" />
    </>
  );
}
