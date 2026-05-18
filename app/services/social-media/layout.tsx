import { generateSEOMetadata } from "@/components/seo-server";

export const metadata = generateSEOMetadata({
  // Targeting high-intent "Setup" and "Branding" keywords
  title: "Social Media Setup & Google Business Profile UK | Karol Digital",
  description:
    "Professional social media setup for UK small businesses. Optimize your Facebook, Instagram, and Google Business profiles for local visibility.",
  url: "https://www.karoldigital.co.uk/services/social-media",
  image: "/service-socialmedia.jpg", // Using the industry-specific image
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
    "description": "Comprehensive setup of social media profiles and Google Business listings to ensure brand consistency and local search visibility.",
    "provider": {
      "@type": "ProfessionalService",
      "name": "Karol Digital",
      "url": "https://www.karoldigital.co.uk"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Social Media Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Google Business Profile Setup",
            "description": "Optimisation for Google Maps, including business hours, service areas, and contact details."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Platform Branding & Optimisation",
            "description": "Custom banners and bio setup for Facebook, Instagram, TikTok, and LinkedIn."
          }
        }
      ]
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