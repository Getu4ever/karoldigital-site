// /app/privacy-policy/layout.tsx

import { generateSEOMetadata } from "@/components/seo-server";

export const metadata = generateSEOMetadata({
  title: "Privacy Policy – Karol Digital",
  description:
    "Read Karol Digital’s Privacy Policy to understand how we collect, use, store and protect your personal information in compliance with GDPR.",
  url: "https://www.karoldigital.co.uk/privacy-policy",
  image: "/hero-page-banner.jpg",
});

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
