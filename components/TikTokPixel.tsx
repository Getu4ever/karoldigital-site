"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  hasMarketingConsent,
  subscribeCookieConsent,
} from "@/lib/cookie-consent";

const PIXEL_ID = "DAA95E3C77U208ULAHDG";

function firePageView() {
  window.ttq?.page();
}

function installTikTokPixel() {
  if (window.TiktokAnalyticsObject === "ttq" && window.ttq) {
    firePageView();
    return;
  }

  const script = document.createElement("script");
  script.id = "tiktok-pixel";
  script.text = `
    !function (w, d, t) {
      w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
    var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script")
    ;n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;var insert=document.getElementsByTagName("script")[0];if(insert&&insert.parentNode){insert.parentNode.insertBefore(n,insert)}else{document.head.appendChild(n)}};

      ttq.load('${PIXEL_ID}');
      ttq.page();
    }(window, document, 'ttq');
  `;
  document.head.appendChild(script);
}

export default function TikTokPixel() {
  const pathname = usePathname();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    return subscribeCookieConsent((state) => {
      setAllowed(hasMarketingConsent(state));
    });
  }, []);

  useEffect(() => {
    if (!allowed) return;
    installTikTokPixel();
  }, [allowed, pathname]);

  return null;
}
