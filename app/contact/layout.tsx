// /app/contact/layout.tsx

import { generateSEOMetadata } from "@/components/seo-server";

export const metadata = generateSEOMetadata({
  title:
    "Contact Karol Digital | Custom Web & App Development Inquiries",
  description:
    "Request a custom mobile app quote or bespoke small business web engineering London. Contact Karol Digital for high-performance websites, e-commerce platforms, and custom applications.",
  url: "https://www.karoldigital.co.uk/contact",
  image: "/heroes/contact.png",
  keywords:
    "Contact Karol Digital, Custom Web & App Development Inquiries, Request a Custom Mobile App Quote, Bespoke Small Business Web Engineering London",
});

// Breadcrumb Schema
const breadcrumbJsonLd = {
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
      name: "Contact",
      item: "https://www.karoldigital.co.uk/contact",
    },
  ],
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Breadcrumb Schema for SEO & Sitelinks */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      {children}
    </>
  );
}
