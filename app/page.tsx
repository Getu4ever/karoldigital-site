import HomePageClient from "@/components/HomePageClient";
import HomeStructuredData from "@/components/HomeStructuredData";
import DiscoverabilityAnswers from "@/components/DiscoverabilityAnswers";
import { getPageMetadata } from "@/components/seo-server";

export const metadata = getPageMetadata("home");

export default function Home() {
  return (
    <>
      <HomeStructuredData />
      <HomePageClient />
      <DiscoverabilityAnswers />
    </>
  );
}
