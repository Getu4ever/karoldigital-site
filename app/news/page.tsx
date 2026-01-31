"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  title?: string;
  subtitle?: string;
  bgSrc?: string;
};

export default function HeroClient({ 
  title = "Latest News and Updates", 
  subtitle, 
  bgSrc = "/hero-page-banner.jpg" 
}: Props) {
  return (
    <motion.section
      className="relative min-h-[60vh] flex items-center justify-center text-center text-white pt-8 md:pt-4 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Image
        src={bgSrc}
        alt={title}
        fill
        priority
        className="object-cover brightness-[0.45] -z-10"
      />

      <div className="relative z-10 px-4">
        <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </motion.section>
  );
}
        {/* Dark overlay for readability */}
<div className="absolute inset-0 bg-black/40" />

<div className="relative z-10 px-6">
  <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
    <span className="text-white">Latest </span>
    <span className="text-yellow-400">News</span>
  </h1>

  <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
    Digital marketing insights, SEO updates, and trends shaping the online world.
  </p>
</div>
</section>

{/* ======================================================
    YOUR ORIGINAL NEWS PAGE CONTENT (UPDATED HEADINGS ONLY)
   ====================================================== */}
<section className="bg-gray-50 py-16 px-6">
  <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8">
    <h1 className="text-3xl font-bold text-[#411b3f] text-center mb-4">
      Digital Marketing News &amp; Insights
    </h1>

    <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
      Automatically updated marketing, SEO, and social media news curated from
      Search Engine Journal — trusted by professionals worldwide.
    </p>


          <div className="grid gap-10 md:grid-cols-3">
            {posts.map((post, i) => {
              const imageUrl =
                post.enclosure?.url ||
                post["media:content"]?.url ||
                "/news-placeholderNew.jpg";

              return (
                <article
                  key={i}
                  className="bg-[#f9f9fb] rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col"
                >
                  <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                    <Image
                      src={imageUrl}
                      alt={post.title || "Small business article"}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>

                  <span className="text-xs text-gray-400 mb-2">
                    {post.pubDate
                      ? new Date(post.pubDate).toDateString()
                      : "No date"}
                  </span>

                  <h2 className="text-xl font-semibold text-[#102f35] mb-3">
                    {post.title}
                  </h2>

                  <p className="text-gray-700 mb-6 flex-grow">
                    {post.contentSnippet
                      ? `${post.contentSnippet.slice(0, 140)}...`
                      : "No summary available."}
                  </p>

                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto bg-[#102f35] text-white font-semibold py-2 px-5 rounded-md hover:bg-[#0d2428] text-center transition-colors duration-300"
                  >
                    Read More →
                  </a>
                </article>
              );
            })}
          </div>

          <p className="text-center text-gray-500 text-sm mt-12">
            Content sourced automatically from{" "}
            <a
            href="https://www.searchenginejournal.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#411b3f]"
            >
            SearchEngineJournal.com
            </a>

            .
          </p>
        </div>
      </section>
    </main>
  );
}
