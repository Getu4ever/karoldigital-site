import { generateSEOMetadata } from "@/components/seo-server";
import GeoExtras from "@/components/GeoExtras";
import { webDesignFaqs } from "@/lib/page-faqs";
import { Metadata } from "next";

// 1. Correct the URL to the specific web design page
const PAGE_URL = "https://www.karoldigital.co.uk/services/web-design";

export const metadata: Metadata = generateSEOMetadata({
  title: "Web Design UK | Custom Websites",
  description:
    "Web design UK for service businesses — conversion-focused custom websites from a London web designer. Clearer offers, stronger trust, more qualified enquiries.",
  url: PAGE_URL,
  image: "/services-web-design.webp",
  keywords:
    "web design UK, website design for service businesses, conversion-focused websites, custom websites, London web designer",
});

const webDesignSchema = [
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
        name: "Web Design UK",
        item: PAGE_URL,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${PAGE_URL}#service`,
    name: "Web Design for UK Service Businesses",
    alternateName: [
      "web design UK",
      "website design for service businesses",
      "conversion-focused websites",
      "custom websites",
      "London web designer",
    ],
    serviceType: "WebDesign",
    description:
      "Conversion-focused custom websites for UK service businesses — clearer offers, stronger trust, and enquiry paths that turn visitors into booked work.",
    provider: {
      "@type": "ProfessionalService",
      name: "Karol Digital",
      url: "https://www.karoldigital.co.uk",
    },
    areaServed: [
      { "@type": "City", name: "London" },
      { "@type": "Country", name: "United Kingdom" },
    ],
    url: PAGE_URL,
  },
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
