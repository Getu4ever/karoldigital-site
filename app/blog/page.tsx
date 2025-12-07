import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

interface BlogPost {
  title: string;
  subtitle?: string;
  publishedAt: string;
  slug: string;
  imageUrl?: string;
}

export default async function BlogIndexPage() {
  const posts = await client.fetch<BlogPost[]>(
    groq`*[_type == "blogPost"] | order(publishedAt desc){
      title,
      subtitle,
      publishedAt,
      "slug": slug.current,
      "imageUrl": mainImage.asset->url
    }`
  );

  return (
    <FadeIn>
      <main className="min-h-screen bg-white text-gray-900">

        {/* === HERO SECTION === */}
        <section className="relative min-h-[60vh] flex items-center justify-center text-center text-white pt-8 md:pt-4">
          <Image
            src="/hero-page-banner.jpg"
            alt="Karol Digital Blog"
            fill
            priority
            className="object-cover brightness-[0.45]"
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            <span className="text-white">Karol Digital </span>
            <span className="text-yellow-400">Blog</span>

            {/* SEO-only extension (not visible on screen) */}
            <span className="sr-only">
              Web design, SEO and digital marketing tips for small business growth in the UK
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
            Insights, tips, and guides to help small businesses grow online.
          </p>

          </div>
        </section>

        {/* === BLOG GRID === */}
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block rounded-2xl shadow-md hover:shadow-xl transition bg-white overflow-hidden border border-gray-100"
              >
                {post.imageUrl && (
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    width={500}
                    height={350}
                    className="w-full h-56 object-cover"
                  />
                )}

                <div className="p-6">
                  <h2 className="text-xl font-bold text-[#102f35] mb-2">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 line-clamp-3 mb-4">
                    {post.subtitle}
                  </p>

                  <p className="text-sm text-gray-500">
                    {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </main>
    </FadeIn>
  );
}
