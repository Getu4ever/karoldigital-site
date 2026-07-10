"use client";

import Script from "next/script";

const CHATBASE_ID = "cn8XxlevKOTIx0z1Oyy4S";

declare global {
  interface Window {
    chatbase?: ((...args: unknown[]) => unknown) & {
      q?: unknown[];
    };
  }
}

/**
 * Chatbase floating chat widget (bottom-right).
 * Uses the official embed pattern via next/script so the bubble mounts reliably
 * after hydration in the App Router.
 */
export default function ChatbaseWidget() {
  return (
    <>
      <Script id="chatbase-bootstrap" strategy="afterInteractive">{`
        (function () {
          if (!window.chatbase || window.chatbase("getState") !== "initialized") {
            window.chatbase = function () {
              if (!window.chatbase.q) window.chatbase.q = [];
              window.chatbase.q.push(arguments);
            };
            window.chatbase = new Proxy(window.chatbase, {
              get: function (target, prop) {
                if (prop === "q") return target.q;
                return function () {
                  return target(prop, ...arguments);
                };
              },
            });
          }
        })();
      `}</Script>
      <Script
        src="https://www.chatbase.co/embed.min.js"
        strategy="afterInteractive"
        id={CHATBASE_ID}
        // Chatbase reads this custom attribute from the embed script tag
        {...{ domain: "www.chatbase.co" }}
      />
    </>
  );
}
