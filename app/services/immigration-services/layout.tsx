import { generateSEOMetadata } from "@/components/seo-server";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...generateSEOMetadata({
    title: "Immigration Law Firm Web & OISC Systems | Karol Digital",
    description:
      "Specialist OISC & SRA-compliant website design for UK immigration firms. High-trust, secure websites with smart intake forms & targeted legal SEO. Get a quote.",
    url: "https://www.karoldigital.co.uk/services/immigration-services",
    image: "/1st-call-uk-immigration-services.jpg",
  }),
  alternates: {
    canonical:
      "https://www.karoldigital.co.uk/services/immigration-services",
  },
};

const immigrationServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Immigration Law Firm Web Design & OISC Systems",
  "serviceType": "Web Design Services for Legal & Immigration Sector",
  "description":
    "Specialised high-trust web design services for OISC and SRA regulated immigration law firms, consultants, and corporate visa advisors. Includes secure intake systems and conversion-optimised legal funnels.",
  "provider": {
    "@type": "ProfessionalService",
    "name": "Karol Digital",
    "url": "https://www.karoldigital.co.uk",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "London",
      "addressCountry": "GB"
    }
  },
  "areaServed": {
    "@type": "Country",
    "name": "United Kingdom"
  }
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
    </>
  );
}