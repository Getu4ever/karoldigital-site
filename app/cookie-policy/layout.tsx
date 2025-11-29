// /app/cookie-policy/layout.tsx

import { generateSEOMetadata } from "@/components/seo-server";

export const metadata = generateSEOMetadata({
  title: "Cookie Policy – Karol Digital",
  description:
    "Read Karol Digital’s Cookie Policy to understand how we use cookies for website functionality, analytics and user experience.",
  url: "https://www.karoldigital.co.uk/cookie-policy",
  image: "/hero-page-banner.jpg",
});

export default function CookiePolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
