// /app/cookie-policy/layout.tsx

import { generateSEOMetadata } from "@/components/seo-server";

export const metadata = generateSEOMetadata({
  title: "Cookie Policy – Karol Digital",
  description:
    "Read Karol Digital’s Cookie Policy to understand necessary, analytics, and marketing cookies, and how to manage your preferences under UK GDPR and PECR.",
  url: "https://www.karoldigital.co.uk/cookie-policy",
  image: "/heroes/legal.png",
});

export default function CookiePolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
