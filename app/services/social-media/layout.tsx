// /app/services/social-media/layout.tsx

import { generateSEOMetadata } from "@/components/seo-server";

export const metadata = generateSEOMetadata({
  title: "Social Media Setup for Small Businesses – Karol Digital",
  description:
    "Professional social media setup for small businesses, including profile optimisation, branding, Google Business setup and content strategy.",
  url: "https://www.karoldigital.co.uk/services/social-media",
  image: "/hero-page-banner.jpg",
});

// Breadcrumb Schema for Social Media Service
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
      name: "Social Media Setup",
      item: "https://www.karoldigital.co.uk/services/social-media",
    },
  ],
};

export default function SocialMediaLayout({
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
