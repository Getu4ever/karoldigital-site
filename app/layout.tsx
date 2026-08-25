import "./globals.css";
import { ReactNode } from "react";
import SiteChrome from "@/components/SiteChrome";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { Metadata, Viewport } from "next";
import {
  SITE_EMAIL,
  SITE_LOCALITY,
  SITE_LOCATION_LABEL,
  SITE_PHONE_DISPLAY,
  SITE_PHONE_E164,
  SITE_REGION,
  SITE_COUNTRY,
  SITE_COUNTRY_NAME,
  SITE_SOCIAL,
} from "@/lib/site-contact";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#102f35",
};

export const metadata: Metadata = {
  title: "Web Design for UK Service Businesses | Karol Digital",
  description:
    "Fast, conversion-focused websites for UK service businesses. Clear messaging, stronger credibility, and more qualified enquiries.",
  metadataBase: new URL("https://www.karoldigital.co.uk"),
  alternates: {
    canonical: "https://www.karoldigital.co.uk/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.karoldigital.co.uk/",
    siteName: "Karol Digital",
    title: "Web Design for UK Service Businesses | Karol Digital",
    description:
      "Karol Digital builds fast, conversion-focused websites for UK service businesses that want more qualified enquiries, stronger credibility, and clearer online messaging.",
    images: [
      {
        url: "/seo-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Karol Digital - Web Design for UK Service Businesses",
      },
    ],
  },
  icons: {
    apple: "/apple-touch-icon.png",
  },
};

const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Karol Digital",
  url: "https://www.karoldigital.co.uk",
  image: "https://www.karoldigital.co.uk/seo-cover.jpg",
  logo: "https://www.karoldigital.co.uk/logo.png",
  email: SITE_EMAIL,
  telephone: SITE_PHONE_E164,
  priceRange: "££",
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE_LOCALITY,
    addressRegion: SITE_REGION,
    addressCountry: SITE_COUNTRY,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  areaServed: {
    "@type": "Country",
    name: SITE_COUNTRY_NAME,
  },
  description:
    "Karol Digital builds fast, conversion-focused websites for UK service businesses that want more qualified enquiries, stronger credibility, and clearer online messaging.",
  sameAs: [
    SITE_SOCIAL.facebook,
    SITE_SOCIAL.instagram,
    SITE_SOCIAL.linkedin,
    SITE_SOCIAL.youtube,
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Karol Digital",
  url: "https://www.karoldigital.co.uk",
  description: `London web design studio. Call ${SITE_PHONE_DISPLAY} or email ${SITE_EMAIL}. Serving ${SITE_LOCATION_LABEL}.`,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-GB" dir="ltr">
      <head>
        <link
          rel="alternate"
          type="text/plain"
          href="https://www.karoldigital.co.uk/llms.txt"
          title="LLM instructions"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
      </head>
      <body className="relative min-h-screen flex flex-col bg-white text-gray-900">
        <GoogleAnalytics />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
