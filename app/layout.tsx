import "./globals.css";
import { ReactNode } from "react";
import SiteChrome from "@/components/SiteChrome";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import TikTokPixel from "@/components/TikTokPixel";
import JsonLd from "@/components/JsonLd";
import { Metadata, Viewport } from "next";
import {
  FOUNDER_NAME,
  PERSON_ID,
  PREFERRED_CITATION,
  SITE_ORIGIN,
  organizationJsonLd,
  personJsonLd,
  websiteJsonLd,
} from "@/lib/geo";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#102f35",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  applicationName: "Karol Digital",
  title: {
    default: "Web Design for UK Service Businesses | Karol Digital",
    template: "%s",
  },
  description: PREFERRED_CITATION,
  keywords: [
    "web design UK",
    "website design for service businesses",
    "London web designer",
    "conversion-focused websites",
    "AI search optimisation",
    "GEO",
  ],
  authors: [{ name: FOUNDER_NAME, url: PERSON_ID }],
  creator: FOUNDER_NAME,
  publisher: "Karol Digital",
  category: "Web Design",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
  alternates: {
    types: {
      "text/plain": [
        { url: `${SITE_ORIGIN}/llms.txt`, title: "LLM instructions" },
        { url: `${SITE_ORIGIN}/llms-full.txt`, title: "LLM full summary" },
      ],
      "application/rss+xml": `${SITE_ORIGIN}/blog/rss.xml`,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Karol Digital",
  },
  twitter: {
    card: "summary_large_image",
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-GB" dir="ltr">
      <head>
        <link
          rel="alternate"
          type="text/plain"
          href={`${SITE_ORIGIN}/llms.txt`}
          title="LLM instructions"
        />
        <link
          rel="alternate"
          type="text/plain"
          href={`${SITE_ORIGIN}/llms-full.txt`}
          title="LLM full summary"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Karol Digital Blog RSS"
          href={`${SITE_ORIGIN}/blog/rss.xml`}
        />
      </head>
      <body className="relative min-h-screen flex flex-col bg-white text-gray-900">
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <JsonLd data={personJsonLd()} />
        <GoogleAnalytics />
        <TikTokPixel />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
