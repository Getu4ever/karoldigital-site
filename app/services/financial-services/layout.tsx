import { generateSEOMetadata } from "@/components/seo-server";

export const metadata = generateSEOMetadata({
  // Refined to perfectly align with the updated page title keywords and H1 target
  title: "Financial Services Web Design & Systems | Karol Digital",
  description:
    "Specialist financial services web design for UK corporate brands. High-trust, GDPR-compliant websites for Accountants, Mortgage Brokers, and IFAs.",
  url: "https://www.karoldigital.co.uk/services/financial-services",
  image: "/1stcall-finance-showcase.jpg",
});

const financeServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Financial Services Web Design & Corporate Systems",
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
  },
  "description": "Bespoke digital solutions for the financial sector, focusing on secure lead generation, professional branding, and compliance-ready corporate web design for UK firms.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Financial Sector Web Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Accountant & Tax Advisor Web Design",
          "description": "Clean, corporate websites designed to showcase professional expertise, authority branding, and handle secure enquiries."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mortgage Broker Lead Gen Sites",
          "description": "Optimized high-performance landing pages with tool configurations, rate calculators, and secure lead pipelines."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Independent Financial Advisor (IFA) Web Systems",
          "description": "Bespoke authority websites focused on wealth preservation, retirement planning compliance, and institutional credibility."
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