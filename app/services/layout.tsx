import { generateSEOMetadata } from "@/components/seo-server";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...generateSEOMetadata({
    title: "Web Design & Digital Services | Karol Digital",
    description:
      "Explore our core web design and digital services for UK businesses. From strategy and design to SEO and automation systems.",
    url: "https://www.karoldigital.co.uk/services",
    image: "/hero-page-banner.jpg",
  }),
  alternates: {
    canonical: "https://www.karoldigital.co.uk/services",
  },
};

const servicesSchema = [
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
        "name": "Services",
        "item": "https://www.karoldigital.co.uk/services"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Karol Digital Web Design & Digital Services",
    "serviceType": "Web Design and Digital Services for UK Businesses",
    "description":
      "Explore core digital services including web design, SEO, branding, and automation systems designed to help UK businesses grow online.",
    "provider": {
      "@type": "ProfessionalService",
      "name": "Karol Digital",
      "url": "https://www.karoldigital.co.uk"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United Kingdom"
    }
  }
];

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema),
        }}
      />
      {children}
    </>
  );
}