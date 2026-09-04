import { generateSEOMetadata } from "@/components/seo-server";
import GeoExtras from "@/components/GeoExtras";
import { financialFaqs } from "@/lib/page-faqs";

export const metadata = generateSEOMetadata({
  title: "Financial Services Websites UK | Karol Digital",
  description:
    "High-performance financial services websites UK — clear offers, trust and enquiry flows for brokers, accountants and IFAs.",
  url: "https://www.karoldigital.co.uk/industries/financial-services",
  image: "/1stcall-finance-showcase.jpg",
  keywords:
    "high-performance financial services websites UK, financial services web design, mortgage broker websites, accountant websites UK",
});

const financeServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "High-performance financial services websites UK",
  alternateName: [
    "High-performance financial services websites UK",
    "Financial services web design",
  ],
  serviceType: "Financial services website design",
  description:
    "High-performance financial services websites UK for brokers, accountants, and IFAs — secure lead generation, professional branding, and clear enquiry flows.",
  url: "https://www.karoldigital.co.uk/industries/financial-services",
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
      <GeoExtras faqs={financialFaqs} title="Financial services websites FAQ" />
    </>
  );
}