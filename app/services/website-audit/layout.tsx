import { generateSEOMetadata } from "@/components/seo-server";
import { Metadata } from "next";

// 1. Point to the exact URL of the audit page
const PAGE_URL = "https://www.karoldigital.co.uk/services/website-audits";

export const metadata: Metadata = generateSEOMetadata({
  title: "Professional Website Audit & Performance Review | Karol Digital",
  description:
    "Identify the silent leaks in your sales funnel. Our comprehensive website audit diagnoses performance, usability, and SEO to help you convert more visitors into clients.",
  url: PAGE_URL,
  image: "/hero-page-banner.jpg", // Update if you have a specific audit-page cover image
});

const websiteAuditSchema = [
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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Website Audit",
        "item": PAGE_URL
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Website Health Audit",
    "description": "Comprehensive website analysis covering performance, UX, technical SEO, and conversion strategy.",
    "provider": {
      "@type": "ProfessionalService",
      "name": "Karol Digital",
      "url": "https://www.karoldigital.co.uk"
    }
  }
];

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