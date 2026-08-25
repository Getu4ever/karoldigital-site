import Link from "next/link";
import { generateSEOMetadata } from "@/components/seo-server";
import { SITE_ORIGIN } from "@/lib/geo";

export const metadata = generateSEOMetadata({
  title: "Page not found",
  description:
    "That page does not exist. Browse Karol Digital services, pricing, or book a free website consultation.",
  url: `${SITE_ORIGIN}/404`,
  image: "/seo-cover.jpg",
  noIndex: true,
});

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 py-32 text-center text-gray-900">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#411b3f]">
        404
      </p>
      <h1 className="mt-4 text-4xl font-bold text-[#102f35] md:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-xl text-lg text-gray-700">
        The page you requested is missing or has moved. Karol Digital still
        publishes web design, GEO, and pricing pages from the homepage.
      </p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="rounded-full bg-[#102f35] px-6 py-3 font-semibold text-white hover:bg-[#411b3f]"
        >
          Back to homepage
        </Link>
        <Link
          href="/services"
          className="rounded-full border border-[#102f35] px-6 py-3 font-semibold text-[#102f35] hover:bg-gray-50"
        >
          View services
        </Link>
        <Link
          href="/book"
          className="rounded-full border border-[#102f35] px-6 py-3 font-semibold text-[#102f35] hover:bg-gray-50"
        >
          Book a call
        </Link>
      </div>
    </main>
  );
}
