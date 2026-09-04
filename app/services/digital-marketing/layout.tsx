import { generateSEOMetadata } from "@/components/seo-server";
import GeoExtras from "@/components/GeoExtras";
import { digitalMarketingFaqs } from "@/lib/page-faqs";

export const metadata = generateSEOMetadata({
  title: "Local Business SEO Agency London",
  description:
    "Local business SEO agency London — SEO, content and visibility for studios and service businesses that need more of the right enquiries.",
  url: "https://www.karoldigital.co.uk/services/digital-marketing",
  image: "/services-digital-marketing.webp",
  keywords:
    "local business SEO agency London, SEO for studios UK, digital marketing London, small business SEO",
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
    name: "Local business SEO agency London",
    alternateName: [
      "Local business SEO agency London",
      "SEO for studios UK",
    ],
    serviceType: "Local business SEO",
    description:
      "Local business SEO agency London — SEO, content, and visibility for pole and aerial studios and UK service businesses that need more of the right enquiries.",
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
      <GeoExtras faqs={digitalMarketingFaqs} title="Digital marketing FAQ" />
    </>
  );
}