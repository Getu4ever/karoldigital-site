"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";

export default function SocialMediaPage() {
  return (
    <>
      <main className="bg-white text-gray-900 pb-20">

        {/* === HERO SECTION (60vh consistent) === */}
        <motion.section
          className="relative min-h-[60vh] flex items-center justify-center text-center text-white pt-8 md:pt-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/hero-page-banner.jpg"
            alt="Social Media Setup"
            fill
            priority
            className="object-cover brightness-[0.45]"
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 px-6 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Social <span className="text-yellow-400">Media Setup</span>

            {/* SEO-only extension (not visible on screen) */}
            <span className="sr-only">
              Professional social media profile setup and branding for small businesses in the UK
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-100">
            Optimised social profiles, branding and setup to boost your online presence.
          </p>

</div>

        </motion.section>

        {/* === CONTENT === */}
        <div className="max-w-5xl mx-auto px-6 mt-12">

          {/* Breadcrumb */}
          <Breadcrumb current="Social Media Setup" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-bold text-[#102f35] mb-4">
              Boost Your Online Presence
            </h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              We help you create and optimize professional social media profiles 
              across major platforms — Facebook, Instagram, TikTok, YouTube, and 
              Google Business. Improve trust, stay consistent, and attract more 
              customers online with a strong and unified brand identity.
            </p>

            {/* Illustration Image */}
            <Image
              src="/service-socialmedia.jpg"
              alt="Social Media Illustration"
              width={900}
              height={600}
              loading="lazy"
              className="rounded-xl shadow-md mb-10 object-cover"
            />

            <h3 className="text-2xl font-semibold text-[#411b3f] mb-3">
              Included in This Service
            </h3>

            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Profile banners & display images</li>
              <li>Bio optimization for clarity & professionalism</li>
              <li>Google Business setup (address, hours & contact)</li>
              <li>Brand consistency across all platforms</li>
              <li>Content ideas + posting strategy</li>
              <li>Social links integrated with your website</li>
            </ul>
          </motion.div>

        </div>
      </main>
    </>
  );
}
