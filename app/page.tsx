import HomePageClient from "@/components/HomePageClient";
import HomeStructuredData from "@/components/HomeStructuredData";
import { getPageMetadata } from "@/components/seo-server";

export const metadata = getPageMetadata("home");

export default function Home() {
  return (
    <>
      <HomeStructuredData />
      <HomePageClient />
    </>
  );
}
