import { generateSEOMetadata } from "@/components/seo-server";

export const metadata = generateSEOMetadata({
  title: "Digital Marketing & SEO Services | Karol Digital",
  description:
    "Practical digital marketing support for small businesses. SEO guidance, email marketing setup, and actionable growth strategies to attract more customers online.",
  url: "https://www.karoldigital.co.uk/services/digital-marketing",
  image: "/service-marketing.jpg",
});

const digitalMarketingSchema = [
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
        "name": "Digital Marketing",
        "item": "https://www.karoldigital.co.uk/services/digital-marketing"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Small Business Digital Marketing Support",
    "serviceType": "Digital Marketing Services for SMEs",
    "description":
      "Actionable marketing strategies including SEO optimisation, email marketing setup, and content planning for UK small businesses and SMEs.",
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

export default function DigitalMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(digitalMarketingSchema),
        }}
      />
      {children}
    </>
  );
}