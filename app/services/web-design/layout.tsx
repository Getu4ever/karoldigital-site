import { generateSEOMetadata } from "@/components/seo-server";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...generateSEOMetadata({
    title: "WordPress & Custom Web Design Packages UK | Karol Digital",
    description:
      "Mobile-friendly web design for UK businesses. From simple WordPress sites to custom-coded solutions with AI chatbots. Explore our packages.",
    url: "https://www.karoldigital.co.uk/services/web-design",
    image: "/hero-page-banner.jpg",
  }),
  alternates: {
    canonical: "https://www.karoldigital.co.uk/services/web-design",
  },
};

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
        "item": "https://www.karoldigital.co.uk/services/web-design"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Karol Digital Web Design Services",
    "serviceType": "Web Design Services for UK Businesses",
    "description":
      "Professional web design services for UK small businesses, offering WordPress, custom coding, and AI chatbot integrations.",
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