"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimateWrapper from "@/components/AnimateWrapper";
import ChatbaseWidget from "@/components/ChatbaseWidget";
import CookieConsentDialog from "@/components/CookieConsentDialog";

/** Public site chrome — omitted on /admin so the dashboard header (Sign Out, etc.) is visible. */
export default function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin") ?? false;

  if (isAdmin) {
    return <>{children}</>;
  }

  // Homepage sticky card stack breaks if a parent has transform — skip page motion there.
  const isHome = pathname === "/";

  return (
    <>
      <Header />
      {isHome ? <div className="flex-1">{children}</div> : <AnimateWrapper>{children}</AnimateWrapper>}
      <Footer />
      <ChatbaseWidget />
      <CookieConsentDialog />
    </>
  );
}
