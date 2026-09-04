import { generateSEOMetadata } from "@/components/seo-server";
import GeoExtras from "@/components/GeoExtras";
import { fitnessFaqs } from "@/lib/page-faqs";

export const metadata = generateSEOMetadata({
  title: "Web Design for Pole & Aerial Studios UK",
  description:
    "Web design for pole and aerial studios — custom studio booking systems UK, timetables & checkout under your domain. Replace Bookwhen or TeamUp.",
  url: "https://www.karoldigital.co.uk/industries/fitness-studios",
  image: "/heroes/fitness-studios.png",
  keywords:
    "web design for pole and aerial studios, custom studio booking systems UK, custom timetables for dance studios, replacing Bookwhen TeamUp custom website, high-converting studio websites London, Wild Hearts Collective",
});

const fitnessServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Web Design for Pole and Aerial Studios",
  alternateName: [
    "Custom studio booking systems UK",
    "Custom timetables for dance studios",
    "High-converting studio websites London",
    "Replacing Bookwhen TeamUp custom website",
  ],
  serviceType: "Custom studio website development and booking systems",
  description:
    "High-converting websites for UK pole dancing, aerial hoop, and aerial silk studios — custom booking, timetables, and checkout under the studio's own domain. Featured project: Wild Hearts Collective.",
  image: "https://www.karoldigital.co.uk/heroes/fitness-studios.png",
  url: "https://www.karoldigital.co.uk/industries/fitness-studios",
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

export default function FitnessStudiosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(fitnessServiceSchema),
        }}
      />
      {children}
      <GeoExtras faqs={fitnessFaqs} title="Pole & aerial studio website FAQ" />
    </>
  );
}
