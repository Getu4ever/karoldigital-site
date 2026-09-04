import { generateSEOMetadata } from "@/components/seo-server";
import GeoExtras from "@/components/GeoExtras";
import { buildingFaqs } from "@/lib/page-faqs";

export const metadata = generateSEOMetadata({
  title: "Construction & Trades Websites London",
  description:
    "Web development for London construction and trades — packages, local proof and quote-ready journeys that win booked work.",
  url: "https://www.karoldigital.co.uk/industries/building-services",
  image: "/heroes/building-services.png",
  keywords:
    "web development for London construction and trades, construction website design UK, trades website London, builder websites",
});

const builderServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Web development for London construction and trades",
  alternateName: [
    "Web development for London construction and trades",
    "Construction website design UK",
  ],
  serviceType: "Construction and trades website development",
  description:
    "Web development for London construction and trades — packages, local proof, and quote-ready journeys that win booked work.",
  image: "https://www.karoldigital.co.uk/heroes/building-services.png",
  provider: {
    "@type": "ProfessionalService",
    name: "Karol Digital",
    url: "https://www.karoldigital.co.uk",
    address: {
      "@type": "PostalAddress",
      addressLocality: "London",
      postalCode: "SW20",
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
