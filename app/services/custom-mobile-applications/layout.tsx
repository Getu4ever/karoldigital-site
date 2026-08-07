import { generateSEOMetadata } from "@/components/seo-server";
import { Metadata } from "next";

const PAGE_URL =
  "https://www.karoldigital.co.uk/services/custom-mobile-applications";

export const metadata: Metadata = generateSEOMetadata({
  title: "Custom Mobile App Development UK | Bespoke Mobile Apps for Small Business",
  description:
    "Custom mobile app development UK for growing small businesses. High-performance iOS & Android app engineering that boosts loyalty, streamlines bookings, and syncs with your website and store in real time.",
  url: PAGE_URL,
  image: "/custom-mobile-applications.webp",
  keywords:
    "Custom Mobile App Development UK, Bespoke Mobile Apps for Small Business, High-Performance iOS & Android App Engineering, custom mobile applications, small business mobile apps",
});

const mobileAppsSchema = [
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
        name: "Custom Mobile Applications",
        item: PAGE_URL,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom Mobile App Development UK",
    serviceType: "Bespoke Mobile Applications for Small Business",
    description:
      "High-performance iOS and Android app engineering for small businesses—built for loyalty, retention, and seamless sync with websites and e-commerce platforms.",
    provider: {
      "@type": "ProfessionalService",
      name: "Karol Digital",
      url: "https://www.karoldigital.co.uk",
    },
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
  },
];

export default function CustomMobileApplicationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(mobileAppsSchema),
        }}
      />
      {children}
    </>
  );
}
