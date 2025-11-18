import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PortableTextComponents } from "@/components/PortableTextComponents";
import CommentForm from "@/components/CommentForm";
import LikeButton from "@/components/LikeButton";
import FadeIn from "@/components/FadeIn";
export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await client.fetch(
    groq`*[_type == "blogPost" && defined(slug.current)]{
      "slug": slug.current
    }`
  );
  return slugs.map((post: any) => ({ slug: post.slug }));
}

export default async function BlogPostPage(
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params;

  const { post, related } = await client.fetch(
    groq`{
      "post": *[_type == "blogPost" && slug.current == $slug][0]{
        title,
        subtitle,
        body,
        publishedAt,
        "imageUrl": mainImage.asset->url,
        likes,
        comments[approved == true]{
          name,
          comment,
          date
        }
      },

      "related": *[_type == "blogPost" && slug.current != $slug]
        | order(publishedAt desc)[0...3]{
          title,
          "slug": slug.current,
          "imageUrl": mainImage.asset->url
        }
    }`,
    { slug }
  );

  if (!post) notFound();

  const articleUrl = `https://www.karoldigital.co.uk/blog/${slug}`;

  return (
    <FadeIn>
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center text-center text-white pt-24">
        <Image
          src="/hero-page-banner.jpg"
          alt={post.title}
          fill
          priority
          className="object-cover brightness-[0.40]"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 px-6 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            {post.title}
          </h1>

          {post.subtitle && (
            <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
              {post.subtitle}
            </p>
          )}
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 py-20 max-w-3xl mx-auto">

        {/* MAIN IMAGE */}
        {post.imageUrl && (
          <Image
            src={post.imageUrl}
            alt={post.title}
            width={1200}
            height={700}
            className="rounded-xl w-full h-auto mb-10"
          />
        )}

        {/* DATE */}
        {post.publishedAt && (
          <p className="text-sm text-gray-500 mb-8">
            {new Date(post.publishedAt).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </p>
        )}

        {/* BODY */}
        <article className="prose prose-lg max-w-none mb-16">
          <PortableText value={post.body} components={PortableTextComponents} />
        </article>

        {/* ---------------------------- */}
        {/* 🌍 SOCIAL SHARE BUTTONS      */}
        {/* ---------------------------- */}
        <div className="mt-12 mb-16 border-t pt-10">
          <h3 className="text-2xl font-bold text-[#102f35] mb-4">
            Share this article
          </h3>

          <div className="flex flex-wrap gap-4">

            {/* Facebook */}
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#102f35] text-white rounded-lg hover:bg-[#0c2428] transition"
            >
              Facebook
            </a>

            {/* Twitter / X */}
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
            >
              X (Twitter)
            </a>

            {/* LinkedIn */}
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#0077b5] text-white rounded-lg hover:bg-[#005f8a] transition"
            >
              LinkedIn
            </a>

            {/* WhatsApp */}
            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(post.title + " - " + articleUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#25D366] text-white rounded-lg hover:bg-[#1ea955] transition"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* ---------------------------- */}
        {/* ❤️ LIKE SECTION (WORKING)   */}
        {/* ---------------------------- */}
        <div className="border-t pt-6 mb-12">
          <LikeButton slug={slug} initialLikes={post.likes ?? 0} />
        </div>

        {/* ---------------------------- */}
        {/* 💬 COMMENTS SECTION          */}
        {/* ---------------------------- */}
        <div className="border-t pt-10 mb-16">
          <h2 className="text-2xl font-bold text-[#411b3f] mb-4">Comments</h2>

          {post.comments && post.comments.length > 0 ? (
            <div className="space-y-6 mb-10">
              {post.comments.map((c: any, index: number) => (
                <div
                  key={index}
                  className="bg-gray-50 border border-gray-200 p-4 rounded-lg"
                >
                  <p className="font-semibold text-[#102f35]">{c.name}</p>
                  <p className="text-gray-700 mt-1">{c.comment}</p>

                  {c.date && (
                    <p className="text-xs text-gray-500 mt-2">
                      {new Date(c.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 mb-10">No comments yet.</p>
          )}

          <CommentForm slug={slug} />
        </div>
        {/* BACK TO BLOG BUTTON */}
<div className="mb-16">
  <a
    href="/blog"
    className="inline-block px-5 py-3 rounded-lg bg-[#102f35] text-white hover:bg-[#0c2428] transition"
  >
    ← Back to Blog
  </a>
</div>

        {/* ---------------------------- */}
        {/* 🔗 RELATED ARTICLES          */}
        {/* ---------------------------- */}
        <div className="border-t pt-12 mt-12">
          <h2 className="text-2xl font-bold text-[#102f35] mb-8">
            Related Articles
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {related.map((item: any, index: number) => (
              <a
                key={index}
                href={`/blog/${item.slug}`}
                className="block rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-white border border-gray-100"
              >
                {item.imageUrl && (
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={400}
                    height={250}
                    className="w-full h-32 object-cover"
                  />
                )}

                <div className="p-4">
                  <p className="font-semibold text-[#102f35] text-sm">
                    {item.title}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

      </section>
    </main>
    </FadeIn>
  );
}
