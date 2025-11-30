// /app/contact/layout.tsx

import { generateSEOMetadata } from "@/components/seo-server";

export const metadata = generateSEOMetadata({
  title: "Contact Karol Digital – Get in Touch Today",
  description:
    "Have questions about web design, digital services or pricing? Contact Karol Digital for friendly support and expert guidance.",
  url: "https://www.karoldigital.co.uk/contact",
  image: "/hero-page-banner.jpg",
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
