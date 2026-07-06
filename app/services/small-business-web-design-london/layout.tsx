import { generateSEOMetadata } from "@/components/seo-server";
import type { Metadata } from "next";

const PAGE_URL =
  "https://www.karoldigital.co.uk/services/small-business-web-design-london";

export const metadata: Metadata = {
  ...generateSEOMetadata({
    title: "Small Business Web Design London | Karol Digital",
    description:
      "Professional web design for London small businesses that need a credible online presence, faster load times, and more qualified enquiries.",
    url: PAGE_URL,
    image: "/hero-page-banner.jpg",
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
        name: "Small Business Web Design London",
        item: PAGE_URL,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Small Business Web Design London",
    description:
      "Custom web design for London small businesses focused on trust, performance, and lead generation.",
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
    </>
  );
}