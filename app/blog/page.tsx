import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import BlogCta from "@/components/BlogCta";
import { truncateLinkLabel } from "@/lib/link-label";
import { getBlogIndexPosts } from "@/lib/sanity-blog";

export default async function BlogIndexPage() {
  const posts = await getBlogIndexPosts();

  return (
    <FadeIn>
      <main className="min-h-screen bg-white text-gray-900">
        <section className="relative flex min-h-[60vh] items-center justify-center pt-8 text-center text-white md:pt-4">
          <Image
            src="/hero-page-banner.jpg"
            alt="Karol Digital Blog — web design and lead generation for UK service businesses"
            fill
            priority
            className="object-cover brightness-[0.65]"
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 px-6">
            <h1 className="mb-4 text-5xl font-extrabold md:text-6xl">
              <span className="text-white">Karol Digital </span>
              <span className="text-yellow-400">Blog</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-100 md:text-xl">
              Practical guides on web design, SEO, and conversion for UK service businesses
              that want more qualified enquiries.
            </p>
          </div>
        </section>

        <section className="px-6 py-16 md:px-12">
          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition hover:shadow-xl"
              >
                {post.imageUrl && (
                  <Image
                    src={post.imageUrl}
                    alt={post.imageAlt || post.title}
                    width={500}
                    height={350}
                    className="h-56 w-full object-cover"
                  />
                )}

                <div className="p-6">
                  <h2 className="mb-2 text-xl font-bold text-[#102f35]">{post.title}</h2>
                  <p className="mb-4 line-clamp-3 text-gray-600">{post.subtitle}</p>
                  <p className="mb-4 text-sm text-gray-500">
                    {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 font-semibold text-[#102f35] hover:text-[#411b3f]"
                  >
                    {truncateLinkLabel(post.title)}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {posts.length === 0 && (
            <p className="text-center text-gray-600">New articles are coming soon.</p>
          )}
        </section>

        <section className="px-6 pb-20 md:px-12">
          <div className="mx-auto max-w-4xl">
            <BlogCta />
          </div>
        </section>
      </main>
    </FadeIn>
  );
}
