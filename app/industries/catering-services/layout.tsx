import { generateSEOMetadata } from "@/components/seo-server";
import GeoExtras from "@/components/GeoExtras";
import { cateringFaqs } from "@/lib/page-faqs";

export const metadata = generateSEOMetadata({
  title: "Corporate Catering Website Design UK",
  description:
    "Conversion-focused corporate catering websites — menus, packages and enquiry flows that win bookings with less admin.",
  url: "https://www.karoldigital.co.uk/industries/catering-services",
  image: "/foodmama-showcase-new.jpg",
  keywords:
    "conversion-focused corporate catering websites, catering website design UK, hospitality web design, event catering websites",
});

const cateringServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Conversion-focused corporate catering websites",
  alternateName: [
    "Conversion-focused corporate catering websites",
    "Catering website design UK",
  ],
  serviceType: "Corporate catering website design",
  description:
    "Conversion-focused corporate catering websites — menus, packages, and enquiry flows that win bookings with less admin.",
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

export default function CateringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(cateringServiceSchema),
        }}
      />
      {children}
      <GeoExtras faqs={cateringFaqs} title="Catering website FAQ" />
    </>
  );
}