import { generateSEOMetadata } from "@/components/seo-server";

export const metadata = generateSEOMetadata({
  // Refined for higher-volume UK search terms
  title: "Web Design for Accountants & Mortgage Brokers UK | Karol Digital",
  description:
    "Specialist web design for UK financial professionals. High-trust, GDPR-compliant websites for Accountants, Mortgage Brokers, and IFAs. Secure your digital presence.",
  url: "https://www.karoldigital.co.uk/services/financial-services",
  image: "/1stcall-finance-showcase.jpg", // Using your specific case study image
});

const financeServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Financial Services Web Design",
  "provider": {
    "@type": "ProfessionalService", // Aligns with your root layout
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
  },
  "description": "Bespoke digital solutions for the financial sector, focusing on secure lead generation, professional branding, and compliance-ready web design for UK firms.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Financial Sector Web Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Accountant & Tax Advisor Web Design",
          "description": "Clean, corporate websites designed to showcase professional expertise and handle secure enquiries."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mortgage Broker Lead Gen Sites",
          "description": "Optimized landing pages with calculator integrations and lead funnels for mortgage advisors."
        }
      }
    ]
  }
};

export default function FinanceLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(financeServiceSchema) }}
      />
      {children}
    </>
  );
}