// /app/services/social-media/layout.tsx

import { generateSEOMetadata } from "@/components/seo-server";

export const metadata = generateSEOMetadata({
  title: "Social Media Setup for Small Businesses – Karol Digital",
  description:
    "Professional social media setup for small businesses, including profile optimisation, branding, Google Business setup and content strategy.",
  url: "https://www.karoldigital.co.uk/services/social-media",
  image: "/hero-page-banner.jpg",
});

export default function SocialMediaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
