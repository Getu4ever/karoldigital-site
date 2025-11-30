// /app/services/web-design/layout.tsx

import { generateSEOMetadata } from "@/components/seo-server";

export const metadata = generateSEOMetadata({
  title: "Web Design Services for Small Businesses – Karol Digital",
  description:
    "Affordable, mobile-friendly web design services for small businesses. Choose from Starter, Growth or Premium packages created to fit your goals and budget.",
  url: "https://www.karoldigital.co.uk/services/web-design",
  image: "/hero-page-banner.jpg",
});

// Breadcrumb Schema for Web Design page
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
      name: "Web Design",
      item: "https://www.karoldigital.co.uk/services/web-design",
    },
  ],
};

export default function WebDesignLayout({
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
