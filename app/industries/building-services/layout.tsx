import { generateSEOMetadata } from "@/components/seo-server";
import GeoExtras from "@/components/GeoExtras";
import { buildingFaqs } from "@/lib/page-faqs";

export const metadata = generateSEOMetadata({
  title: "Construction & Trades Websites | Karol Digital",
  description:
    "High-performance websites for UK builders and specialist trades. Clear packages, local trust, and quote-ready journeys — featuring British Solar Direct.",
  url: "https://www.karoldigital.co.uk/industries/building-services",
  image: "/heroes/building-services.png",
});

const builderServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Construction & Trades Website Development",
  serviceType: "High-Performance Website Design for Construction & Trades",
  description:
    "Custom websites for UK builders, installers, and specialist trades — including package journeys, local proof, and conversion-focused quote forms. Featured project: British Solar Direct.",
  image: "https://www.karoldigital.co.uk/heroes/building-services.png",
  provider: {
    "@type": "ProfessionalService",
    name: "Karol Digital",
    url: "https://www.karoldigital.co.uk",
    address: {
      "@type": "PostalAddress",
      addressLocality: "London",
      addressCountry: "GB",
    },
  },
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
};

export default function BuildersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(builderServiceSchema),
        }}
      />
      {children}
      <GeoExtras faqs={buildingFaqs} title="Construction website FAQ" />
    </>
  );
}
