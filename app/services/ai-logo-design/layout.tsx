import { generateSEOMetadata } from "@/components/seo-server";

export const metadata = generateSEOMetadata({
  title: "AI Logo Design Support & Brand Identity | Karol Digital",
  description:
    "Fast, professional AI-assisted logo design and brand identity support for UK businesses. Get a polished visual identity without the long agency wait.",
  url: "https://www.karoldigital.co.uk/services/ai-logo-design",
  image: "/service-ai-logo.jpg",
});

const aiLogoSchema = [
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
        "name": "AI Logo Design Support",
        "item": "https://www.karoldigital.co.uk/services/ai-logo-design"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Logo Design Support",
    "serviceType": "Logo Design & Brand Identity Development",
    "description":
      "Professional AI-assisted logo creation and brand identity refinement, helping businesses establish a credible visual presence quickly.",
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

export default function AILogoDesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aiLogoSchema),
        }}
      />
      {children}
    </>
  );
}