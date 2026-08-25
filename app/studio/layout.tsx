import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sanity Studio",
  robots: { index: false, follow: false },
  referrer: "no-referrer",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
