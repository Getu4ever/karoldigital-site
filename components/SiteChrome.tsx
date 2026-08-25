"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimateWrapper from "@/components/AnimateWrapper";
import ChatbaseWidget from "@/components/ChatbaseWidget";
import CookieConsentDialog from "@/components/CookieConsentDialog";

/** Public site chrome — omitted on /admin and /studio. */
export default function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const hideChrome =
    (pathname?.startsWith("/admin") ?? false) ||
    (pathname?.startsWith("/studio") ?? false);

  if (hideChrome) {
    return <>{children}</>;
  }

  // Homepage sticky card stack breaks if a parent has transform — skip page motion there.
  const isHome = pathname === "/";

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:font-semibold focus:text-[#102f35]"
      >
        Skip to content
      </a>
      <Header />
      {isHome ? (
        <div id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </div>
      ) : (
        <div id="main-content" className="flex-1" tabIndex={-1}>
          <AnimateWrapper>{children}</AnimateWrapper>
        </div>
      )}
      <Footer />
      <ChatbaseWidget />
      <CookieConsentDialog />
    </>
  );
}
