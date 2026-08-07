import { generateSEOMetadata } from "@/components/seo-server";
import { Metadata } from "next";

const PAGE_URL = "https://www.karoldigital.co.uk/services/website-audits";

export const metadata: Metadata = generateSEOMetadata({
  title: "Website Audit — Speed, Security & Conversion",
  description:
    "Website audits for UK businesses: speed, security, and conversion analysis. Spot template bloat, fix priorities, and recover lost enquiries.",
  url: PAGE_URL,
  image: "/services-website-audits.webp",
  keywords:
    "website audit UK, website speed audit, conversion audit, website security review, template bloat audit",
});

const websiteAuditSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
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
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Website Health Audit",
          "item": PAGE_URL
        }
      ]
    },
    {
      "@type": "Service",
      "name": "Website Health Audit",
      "serviceType": "Website Speed, Security & Conversion Optimisation",
      "description":
        "Comprehensive website audit covering speed, security, UX, technical SEO, and conversion optimisation.",
      "provider": {
        "@type": "ProfessionalService",
        "name": "Karol Digital",
        "url": "https://www.karoldigital.co.uk"
      },
      "areaServed": "United Kingdom"
    }
  ]
};

export default function WebsiteAuditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteAuditSchema),
        }}
      />
      {children}
    </>
  );
}
