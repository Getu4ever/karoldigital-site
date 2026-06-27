import { generateSEOMetadata } from "@/components/seo-server";
import { Metadata } from "next";

const PAGE_URL = "https://www.karoldigital.co.uk/services/website-audits";

export const metadata: Metadata = generateSEOMetadata({
  title: "Website Health Audit & Conversion Analysis | Karol Digital",
  description:
    "Expert website health audit to fix performance, SEO, UX and conversion issues. Improve conversions and recover lost revenue with actionable insights.",
  url: PAGE_URL,
  image: "/hero-page-banner.jpg",
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
      "serviceType": "Website Performance & Conversion Optimisation",
      "description":
        "Comprehensive website health audit covering performance, UX, technical SEO, and conversion optimisation.",
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