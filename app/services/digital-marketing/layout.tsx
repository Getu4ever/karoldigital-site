// /app/services/digital-marketing/layout.tsx

import { generateSEOMetadata } from "@/components/seo-server";

export const metadata = generateSEOMetadata({
  title: "Digital Marketing for Small Businesses – Karol Digital",
  description:
    "Practical digital marketing support for small businesses, including SEO guidance, email marketing setup, content ideas and growth strategies.",
  url: "https://www.karoldigital.co.uk/services/digital-marketing",
  image: "/hero-page-banner.jpg",
});

// Breadcrumb Schema for Digital Marketing Page
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
      name: "Services",
      item: "https://www.karoldigital.co.uk/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Digital Marketing",
      item: "https://www.karoldigital.co.uk/services/digital-marketing",
    },
  ],
};

export default function DigitalMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Breadcrumb Schema */}
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
