import { generateSEOMetadata } from "@/components/seo-server";
import GeoExtras from "@/components/GeoExtras";
import { immigrationFaqs } from "@/lib/page-faqs";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...generateSEOMetadata({
    title: "Web Design for Immigration Lawyers UK",
    description:
      "Custom web design for immigration lawyers — clear visa journeys and intake that turns enquiries into instructed cases.",
    url: "https://www.karoldigital.co.uk/industries/immigration-services",
    image: "/1st-call-uk-immigration-services.jpg",
    keywords:
      "custom web design for immigration lawyers, immigration website design UK, OISC website design, visa firm websites",
  }),
  alternates: {
    canonical:
      "https://www.karoldigital.co.uk/industries/immigration-services",
  },
};

const immigrationServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom web design for immigration lawyers",
  alternateName: [
    "Custom web design for immigration lawyers",
    "Immigration website design UK",
  ],
  serviceType: "Web design for immigration lawyers",
  description:
    "Custom web design for immigration lawyers — clear visa journeys, OISC-ready trust signals, and intake that turns enquiries into instructed cases.",
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

export default function ImmigrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(immigrationServiceSchema),
        }}
      />
      {children}
      <GeoExtras faqs={immigrationFaqs} title="Immigration websites FAQ" />
    </>
  );
}
