import { generateSEOMetadata } from "@/components/seo-server";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...generateSEOMetadata({
    title: "Custom Websites & Digital Services | Karol Digital",
    description:
      "Premium custom-built websites, mobile apps, and digital systems for UK small businesses — modern, fast, secure, and conversion-focused.",
    url: "https://www.karoldigital.co.uk/services",
    image: "/services-strategic-engineering.webp",
    keywords:
      "custom websites UK, high-performance web design, custom mobile applications, website audits UK, premium digital services",
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
    "name": "Karol Digital Custom Websites & Digital Services",
    "serviceType": "High-Performance Web Design and Digital Services for UK Businesses",
    "description":
      "Premium custom-built websites, mobile apps, SEO, and digital systems designed to help UK small businesses grow online.",
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
