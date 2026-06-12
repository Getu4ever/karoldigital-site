"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export default function SocialMediaPage() {
  return (
    <main className="bg-white text-gray-900 pb-20">

      {/* === HERO SECTION === */}
      <motion.section
        className="relative min-h-[60vh] flex items-center justify-center text-center text-white pt-8 md:pt-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src="/hero-page-banner.jpg"
          alt="Social Media Setup UK"
          fill
          priority
          className="object-cover brightness-[0.45]"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 px-6 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Social <span className="text-yellow-400">Media Setup</span>

            <span className="sr-only">
              Professional social media setup and Google Business optimisation for UK small businesses
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-100">
            Professionally structured social media profiles and branding systems designed to improve visibility, trust, and customer engagement.
          </p>
        </div>
      </motion.section>

      {/* === CONTENT SECTION === */}
      <div className="max-w-5xl mx-auto px-6 mt-12">

        <Breadcrumb current="Social Media Setup" />

        <div className="space-y-10">

          {/* INTRO */}
          <section>
            <h2 className="text-3xl font-bold text-[#102f35] mb-4">
              Build a Strong and Consistent Online Presence
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Your social media presence is often the first impression potential customers have of your business. At Karol Digital, we ensure that impression is professional, consistent, and designed to build trust from the very first interaction.
            </p>

            <p className="text-gray-700 leading-relaxed mt-4">
              We set up and optimise professional business profiles across all major platforms including Facebook, Instagram, TikTok, LinkedIn, YouTube, and Google Business Profile. Every element is aligned to reflect your brand identity and improve discoverability in both social and local search results.
            </p>
          </section>

          {/* IMAGE */}
          <Image
            src="/service-socialmedia.jpg"
            alt="Social Media Branding Illustration"
            width={900}
            height={600}
            loading="lazy"
            className="rounded-xl shadow-md object-cover"
          />

          {/* VALUE SECTION */}
          <section>
            <h3 className="text-2xl font-semibold text-[#411b3f] mb-3">
              What This Service Includes
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              This service is designed to give your business a complete and professional digital foundation across all major social and local platforms.
            </p>

            <ul className="list-disc pl-6 text-gray-700 space-y-3">
              <li>Fully branded profile setup across major social platforms</li>
              <li>Optimised bios written for clarity, engagement, and SEO impact</li>
              <li>Custom banners and profile imagery aligned with your brand identity</li>
              <li>Google Business Profile setup with service areas and contact details</li>
              <li>Cross-platform consistency to strengthen brand recognition</li>
              <li>Strategic content suggestions for consistent posting</li>
              <li>Integration of social profiles with your website for better traffic flow</li>
            </ul>
          </section>

          {/* STRATEGY SECTION */}
          <section>
            <h3 className="text-2xl font-semibold text-[#102f35] mb-3">
              Why Social Media Setup Matters
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Many businesses underestimate the importance of properly structured social media profiles. Without optimisation, even active accounts can appear incomplete or unprofessional, reducing trust and engagement.
            </p>

            <p className="text-gray-700 leading-relaxed mt-4">
              A properly configured setup ensures that every platform works together as part of a unified brand system. This improves visibility in search engines, increases credibility with potential customers, and supports your wider digital marketing efforts.
            </p>
          </section>

          {/* BENEFITS */}
          <section>
            <h3 className="text-2xl font-semibold text-[#411b3f] mb-3">
              Key Benefits for Your Business
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              A strong social media foundation directly influences how customers perceive and interact with your business online.
            </p>

            <ul className="list-disc pl-6 text-gray-700 space-y-3">
              <li>Improved brand trust and professionalism across all platforms</li>
              <li>Higher visibility in local and social search results</li>
              <li>Increased customer engagement and inquiries</li>
              <li>Stronger consistency between your website and social presence</li>
              <li>Better conversion from social traffic to leads and sales</li>
            </ul>
          </section>

          {/* STRATEGIC INSIGHT */}
          <section>
            <h3 className="text-2xl font-semibold text-[#102f35] mb-3">
              Designed for Long-Term Growth
            </h3>

            <p className="text-gray-700 leading-relaxed">
              This is not just a setup service — it is the foundation of your digital ecosystem. When your social platforms are correctly aligned with your website and branding, every marketing effort becomes more effective and easier to scale.
            </p>

            <p className="text-gray-700 leading-relaxed mt-4">
              Whether you are a startup or an established business, having a consistent and optimised presence ensures you remain competitive in an increasingly digital marketplace.
            </p>
          </section>

          {/* CTA */}
          <section className="text-center mt-16">
            <h3 className="text-2xl font-bold text-[#102f35] mb-4">
              Ready to Professionally Set Up Your Social Media?
            </h3>

            <p className="text-gray-700 mb-6">
              Explore structured packages designed to build your online presence the right way from day one.
            </p>

            <Link
              href="/pricing"
              className="inline-block bg-[#102f35] hover:bg-[#411b3f] text-white px-8 py-3 rounded-full transition"
            >
              View Pricing & Packages
            </Link>
          </section>

        </div>
      </div>
    </main>
  );
}