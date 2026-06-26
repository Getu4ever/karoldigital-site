import { generateSEOMetadata } from "@/components/seo-server";
import { Metadata } from "next";

// 1. Correct the URL to the specific web design page
const PAGE_URL = "https://www.karoldigital.co.uk/services/web-design";

export const metadata: Metadata = generateSEOMetadata({
  title: "Professional Web Design Services | Karol Digital",
  description:
    "Expert web design services for UK service businesses. Built for trust, performance, and lead generation. Move beyond basic templates today.",
  url: PAGE_URL,
  image: "/web-design-services.webp", // Ensure this image exists
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
    "name": "Professional Web Design Services",
    "description": "High-impact web design for UK service businesses focused on trust, clarity, and conversion.",
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
    </>
  );
}