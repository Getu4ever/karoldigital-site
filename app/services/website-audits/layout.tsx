import { generateSEOMetadata } from "@/components/seo-server";
import { Metadata } from "next";

const PAGE_URL = "https://www.karoldigital.co.uk/services/website-audits";

export const metadata: Metadata = generateSEOMetadata({
  title: "Professional Website Health Audit & Conversion Analysis | Karol Digital",
  description:
    "Identify hidden issues affecting your sales. Our expert website health audit analyzes performance, SEO, UX, and conversion strategy to help UK businesses reclaim lost enquiries.",
  url: PAGE_URL,
  image: "/hero-page-banner.jpg",
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