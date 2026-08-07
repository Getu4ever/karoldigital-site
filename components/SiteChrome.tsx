"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimateWrapper from "@/components/AnimateWrapper";
import ChatbaseWidget from "@/components/ChatbaseWidget";

/** Public site chrome — omitted on /admin so the dashboard header (Sign Out, etc.) is visible. */
export default function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin") ?? false;

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <AnimateWrapper>{children}</AnimateWrapper>
      <Footer />
      <ChatbaseWidget />
    </>
  );
}
