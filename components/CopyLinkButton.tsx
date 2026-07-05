"use client";

import { useState } from "react";

export default function CopyLinkButton({ url }: { url: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? "Link copied" : "Copy link"}
      className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 transition hover:bg-gray-300"
    >
      {copied ? (
        <span className="text-xs font-semibold text-[#102f35]">OK</span>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#555" viewBox="0 0 24 24">
          <path d="M3.9 12a5 5 0 0 1 5-5h3v2h-3a3 3 0 1 0 0 6h3v2h-3a5 5 0 0 1-5-5zm7-1h3a3 3 0 1 1 0 6h-3v2h3a5 5 0 0 0 0-10h-3v2z" />
        </svg>
      )}
    </button>
  );
}
