import { generateSEOMetadata } from "@/components/seo-server";
import { SITE_ORIGIN } from "@/lib/geo";
import { searchSite } from "@/lib/search-index";
import type { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}): Promise<Metadata> {
  const { q = "" } = await searchParams;
  const query = q.trim();
  return generateSEOMetadata({
    title: query ? `Search results for ${query}` : "Search Karol Digital",
    description:
      "Search Karol Digital services, industry pages, tools, and blog articles on web design, GEO, and lead generation for UK service businesses.",
    url: query
      ? `${SITE_ORIGIN}/search?q=${encodeURIComponent(query)}`
      : `${SITE_ORIGIN}/search`,
    image: "/seo-cover.jpg",
    noIndex: true,
  });
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;
  const query = q.trim();
  const results = query.length >= 2 ? await searchSite(query) : [];

  return (
    <main className="min-h-screen bg-white px-6 pb-24 pt-32 text-gray-900 md:px-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-[#102f35]">Search Karol Digital</h1>
        <p className="mt-3 text-gray-700">
          Find services, industry pages, free tools, and articles. Karol Digital is
          a London web design studio for UK service businesses.
        </p>

        <form action="/search" method="get" className="mt-8 flex gap-3">
          <label htmlFor="site-search" className="sr-only">
            Search query
          </label>
          <input
            id="site-search"
            name="q"
            type="search"
            defaultValue={query}
            placeholder="e.g. GEO, pricing, immigration websites"
            className="w-full rounded-full border border-gray-300 px-5 py-3 text-[#102f35] outline-none focus:border-[#102f35]"
          />
          <button
            type="submit"
            className="rounded-full bg-[#102f35] px-6 py-3 font-semibold text-white hover:bg-[#411b3f]"
          >
            Search
          </button>
        </form>

        {query.length > 0 && query.length < 2 && (
          <p className="mt-8 text-sm text-gray-600">Enter at least two characters.</p>
        )}

        {query.length >= 2 && (
          <section className="mt-10" aria-live="polite">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-[#411b3f]">
              {results.length} result{results.length === 1 ? "" : "s"} for “{query}”
            </h2>
            {results.length === 0 ? (
              <p className="mt-4 text-gray-700">
                No matching pages. Try “web design”, “GEO”, “pricing”, or browse{" "}
                <Link href="/services" className="font-semibold underline">
                  services
                </Link>
                .
              </p>
            ) : (
              <ul className="mt-6 space-y-6">
                {results.map((item) => (
                  <li key={item.url}>
                    <Link
                      href={item.url}
                      className="text-xl font-semibold text-[#102f35] hover:underline"
                    >
                      {item.title}
                    </Link>
                    <p className="mt-1 text-sm text-gray-500">{item.url}</p>
                    <p className="mt-2 text-gray-700">{item.description}</p>
                  </li>
                ))}
              </ul>
            )}
          </section>
        )}
      </div>
    </main>
  );
}
