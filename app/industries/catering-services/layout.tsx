import { generateSEOMetadata } from "@/components/seo-server";

export const metadata = generateSEOMetadata({
  title: "Catering Website Design & Hospitality Systems | Karol Digital",
  description:
    "Professional catering website design for UK food brands. High-conversion web frameworks for caterers with smooth online ordering and digital menu systems.",
  url: "https://www.karoldigital.co.uk/services/catering-services",
  image: "/foodmama-showcase-new.jpg",
});

const cateringServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Catering Website Design & Hospitality Systems",
  "serviceType": "Web Design Services for Hospitality & Catering",
  "description":
    "Bespoke digital solutions and high-conversion web frameworks for UK food brands, caterers, and meal prep businesses featuring integrated ordering systems and menu management tools.",
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
    </>
  );
}