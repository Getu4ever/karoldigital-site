import { generateSEOMetadata } from "@/components/seo-server";

export const metadata = generateSEOMetadata({
  title: "Construction Website Design & Trade SEO | Karol Digital",
  description:
    "High-performance construction website design for UK builders and contractors. Get more local leads with professional project galleries and trade SEO.",
  url: "https://www.karoldigital.co.uk/services/building-services",
  image: "/building-services-hero.jpg",
});

const builderServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Construction Website Design & Trades SEO",
  "serviceType": "Bespoke website Designing Services for Construction & Trades",
  "description":
    "Bespoke construction website design and local SEO for UK tradespeople, building firms, and construction contractors. Includes project showcases, lead capture systems, and local search optimisation.",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "GBP",
    "price": "0.00", 
    "lowPrice": "500", // This fixes the error
    "highPrice": "5000",
    "url": "https://www.karoldigital.co.uk/services/building-services"
  },
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
    </>
  );
}