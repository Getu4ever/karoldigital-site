import { generateSEOMetadata } from "@/components/seo-server";

export const metadata = generateSEOMetadata({
  title: "Social Media Setup & Google Business Profile UK | Karol Digital",
  description:
    "Professional social media setup for UK small businesses. Optimize your Facebook, Instagram, and Google Business profiles for local visibility.",
  url: "https://www.karoldigital.co.uk/services/social-media",
  image: "/service-socialmedia.jpg",
});

const socialMediaSchema = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.karoldigital.co.uk"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://www.karoldigital.co.uk/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Social Media Setup",
        "item": "https://www.karoldigital.co.uk/services/social-media"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Social Media Branding & Setup",
    "serviceType": "Social Media & Local Business Profile Optimisation",
    "description":
      "Comprehensive setup and optimisation of social media profiles and Google Business listings to ensure brand consistency and local search visibility.",
    "provider": {
      "@type": "ProfessionalService",
      "name": "Karol Digital",
      "url": "https://www.karoldigital.co.uk"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United Kingdom"
    }
  }
];

export default function SocialMediaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(socialMediaSchema),
        }}
      />
      {children}
    </>
  );
}