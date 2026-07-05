import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PortableTextComponents } from "@/components/PortableTextComponents";
import LikeButton from "@/components/LikeButton";
import FadeIn from "@/components/FadeIn";
import BlogCta from "@/components/BlogCta";
import BlogComments from "@/components/BlogComments";
import CopyLinkButton from "@/components/CopyLinkButton";
import { getBlogPostBySlug } from "@/lib/sanity-blog";
import { getBlogServiceLinks } from "@/lib/blog-related-links";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await client.fetch(
    groq`*[_type == "blogPost" && defined(slug.current)]{
      "slug": slug.current
    }`
  );
  return slugs.map((post: { slug: string }) => ({ slug: post.slug }));
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const { post, related } = await getBlogPostBySlug(slug);

  if (!post) notFound();

  const articleUrl = `https://www.karoldigital.co.uk/blog/${slug}`;
  const heroImage = post.imageUrl || "/hero-page-banner.jpg";
  const heroAlt = post.imageAlt || post.title;
  const serviceLinks = getBlogServiceLinks(slug, post.seoKeywords);

  return (
    <FadeIn>
      <main className="min-h-screen bg-white text-gray-900">
        <section className="relative flex min-h-[45vh] flex-col items-center justify-end pb-12 pt-28 text-center text-white md:pt-36">
          <Image
            src={heroImage}
            alt={heroAlt}
            fill
            priority
            className="object-cover brightness-[0.55]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/45" />

          <div className="relative z-10 mx-auto max-w-4xl px-6">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-yellow-300">
              Karol Digital Blog
            </p>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
              {post.title}
            </h1>
            {post.subtitle && (
              <p className="mx-auto max-w-2xl text-lg font-medium text-gray-200 md:text-xl">
                {post.subtitle}
              </p>
            )}
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-20">
          <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-gray-500">
            {post.publishedAt && (
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
            )}
            {post.authorName && (
              <>
                <span aria-hidden="true">·</span>
                <span>By {post.authorName}</span>
              </>
            )}
          </div>

          <article className="prose prose-lg mb-16 max-w-none">
            <PortableText value={post.body} components={PortableTextComponents} />
          </article>

          <BlogCta
            title="Want help applying this to your website?"
            description="Book a free consultation for a new build, or request an audit if you want to improve the site you already have."
          />

          <section className="my-12 rounded-2xl border border-gray-100 bg-gray-50 p-6">
            <h2 className="mb-4 text-xl font-bold text-[#102f35]">Related services</h2>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-semibold text-[#102f35] hover:text-[#411b3f] hover:underline"
                  >
                    {link.label} →
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <div className="mb-10 mt-12 border-t pt-10">
            <Link
              href="/blog"
              className="inline-flex items-center font-semibold text-[#102f35] hover:underline"
            >
              ← Back to Blog
            </Link>
          </div>

          <div className="mb-10 flex items-center">
            <LikeButton slug={slug} initialLikes={post.likes ?? 0} />
          </div>

          <BlogComments comments={post.comments || []} />

          <div className="mb-16">
            <h2 className="mb-4 text-lg font-semibold text-gray-700">Share</h2>
            <div className="flex items-center gap-4">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Facebook"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1877F2] transition hover:opacity-90"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white">
                  <path d="M13.5 9H16V6h-2.5c-2.1 0-3.5 1.4-3.5 3.5V12H8v3h2v6h3v-6h2.5l.5-3H13v-1.5c0-.7.3-1.5 1.5-1.5z" />
                </svg>
              </a>

              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on X"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1DA1F2] transition hover:opacity-90"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 0 1-2.825.775A4.958 4.958 0 0 0 23.337 3a9.996 9.996 0 0 1-3.127 1.184A4.92 4.92 0 0 0 16.616 2c-2.737 0-4.956 2.224-4.956 4.963 0 .39.045.765.127 1.124C7.728 7.94 4.1 5.97 1.671 2.88a4.93 4.93 0 0 0-.666 2.497 4.95 4.95 0 0 0 2.203 4.13A4.904 4.904 0 0 1 .96 9.1v.06a4.96 4.96 0 0 0 3.965 4.86 4.996 4.996 0 0 1-2.212.086 4.94 4.94 0 0 0 4.604 3.417A9.867 9.867 0 0 1 .94 19.61 13.94 13.94 0 0 0 7.548 22c9.142 0 14.307-7.72 13.995-14.646a9.935 9.935 0 0 0 2.41-2.784z" />
                </svg>
              </a>

              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on LinkedIn"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0A66C2] transition hover:opacity-90"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" viewBox="0 0 24 24">
                  <path d="M4.983 3.5C4.983 5 3.89 6.09 2.49 6.09h-.03C1.11 6.09.01 5 .01 3.5.01 2.01 1.13 1 2.5 1s2.48 1 2.48 2.5zM.24 8.98h4.5v14H.24zm7.98 0h4.31v1.9h.06c.6-1.14 2.07-2.34 4.26-2.34 4.55 0 5.39 3 5.39 6.9v7.54h-4.5v-6.68c0-1.6-.03-3.66-2.23-3.66-2.23 0-2.57 1.74-2.57 3.54v6.8H8.22z" />
                </svg>
              </a>

              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`${post.title} - ${articleUrl}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on WhatsApp"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] transition hover:opacity-90"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.149-.671.149-.198.297-.768.966-.941 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.074-.149-.671-1.612-.919-2.207-.242-.579-.487-.5-.671-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.693.625.711.226 1.358.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a10.44 10.44 0 0 1-5.6-1.63l-.4-.238-4.155 1.088 1.113-4.051-.261-.416A10.43 10.43 0 0 1 1.58 6.89C3.147 3.213 6.77.778 10.897.778c2.779 0 5.362 1.077 7.314 3.03a10.42 10.42 0 0 1 3.036 7.32c-.003 5.803-4.73 10.527-10.532 10.527" />
                </svg>
              </a>

              <CopyLinkButton url={articleUrl} />
            </div>
          </div>

          {related.length > 0 && (
            <div className="mt-12 border-t pt-12">
              <h2 className="mb-8 text-2xl font-bold text-[#102f35]">Related Articles</h2>
              <div className="grid gap-8 md:grid-cols-3">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/blog/${item.slug}`}
                    className="block overflow-hidden rounded-xl border border-gray-100 bg-white shadow transition hover:shadow-lg"
                  >
                    {item.imageUrl && (
                      <Image
                        src={item.imageUrl}
                        alt={item.imageAlt || item.title}
                        width={400}
                        height={250}
                        className="h-32 w-full object-cover"
                      />
                    )}
                    <div className="p-4">
                      <p className="text-sm font-semibold text-[#102f35]">{item.title}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </section>
      </main>
    </FadeIn>
  );
}
