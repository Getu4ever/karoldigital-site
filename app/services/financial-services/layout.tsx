import { generateSEOMetadata } from "@/components/seo-server";

export const metadata = generateSEOMetadata({
  title: "Financial Services Web Design & Systems | Karol Digital",
  description:
    "Specialist financial services web design for UK corporate brands. High-trust, GDPR-compliant websites for Accountants, Mortgage Brokers, and IFAs.",
  url: "https://www.karoldigital.co.uk/services/financial-services",
  image: "/1stcall-finance-showcase.jpg",
});

const financeServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Financial Services Web Design & Corporate Systems",
  "serviceType": "Bespoke website Designing Services for Financial Sector",
  "description":
    "Bespoke digital solutions for the financial sector, focusing on secure lead generation, professional branding, and compliance-ready corporate web design for UK firms including accountants, mortgage brokers, and IFAs.",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "GBP",
    "price": "0.00",
    "lowPrice": "800", // Fixes the Search Console error
    "highPrice": "8000",
    "url": "https://www.karoldigital.co.uk/services/financial-services"
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

export default function FinanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(financeServiceSchema),
        }}
      />
      {children}
    </>
  );
}