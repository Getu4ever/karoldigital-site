import { generateSEOMetadata } from "@/components/seo-server";
import GeoExtras from "@/components/GeoExtras";
import { webDesignFaqs } from "@/lib/page-faqs";
import { Metadata } from "next";

// 1. Correct the URL to the specific web design page
const PAGE_URL = "https://www.karoldigital.co.uk/services/web-design";

export const metadata: Metadata = generateSEOMetadata({
  title: "High-Performance Web Design UK | Custom Websites",
  description:
    "Premium custom-built websites for UK small businesses. Modern, fast, conversion-focused, and engineered from scratch without template bloat.",
  url: PAGE_URL,
  image: "/services-web-design.webp",
  keywords:
    "high-performance web design UK, custom websites for small business, conversion-focused websites, premium web design UK",
});

const webDesignSchema = [
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
        "name": "Web Design",
        "item": PAGE_URL
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "High-Performance Custom Web Design",
    "description": "Premium custom-built websites for UK small businesses — modern, fast, secure, and conversion-focused.",
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

export default function WebDesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webDesignSchema),
        }}
      />
      {children}
      <GeoExtras faqs={webDesignFaqs} title="Web design FAQ" />
    </>
  );
}
