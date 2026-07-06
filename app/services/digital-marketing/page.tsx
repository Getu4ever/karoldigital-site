"use client";

import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export default function DigitalMarketingPage() {
  return (
    <FadeIn>
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
            alt="Digital Marketing Services UK"
            fill
            priority
            className="object-cover brightness-[0.5]"
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 px-6 max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
              Digital Marketing Services
            </h1>

            <p className="text-lg md:text-xl text-gray-100">
              Digital marketing services for UK small businesses — including SEO,
              content strategy, and practical growth optimisation that drives real results.
            </p>
          </div>
        </motion.section>

        {/* === CONTENT SECTION === */}
        <div className="max-w-5xl mx-auto px-6 mt-12">
          <Breadcrumb current="Digital Marketing" />

          <FadeIn>
            <div className="space-y-10">

              {/* INTRO */}
              <section>
                <h2 className="text-3xl font-bold text-[#102f35] mb-4">
                  Practical Digital Marketing That Drives Real Growth
                </h2>

                <p className="text-gray-700 leading-relaxed">
                  Digital marketing should not feel overwhelming or overly technical. At Karol Digital, we focus on clarity, structure, and measurable outcomes. Our approach is designed specifically for small and medium-sized UK businesses that need consistent visibility without wasting time or budget on complex systems that don’t convert.
                </p>

                <p className="text-gray-700 leading-relaxed mt-4">
                  Instead of generic strategies, we build practical marketing foundations that help your business attract the right audience, improve search visibility, and convert visitors into paying customers. Every recommendation is tailored to your industry, location, and business goals.
                </p>
              </section>

              {/* IMAGE */}
              <Image
                src="/service-marketing.jpg"
                alt="Digital Marketing Strategy Illustration"
                width={900}
                height={600}
                loading="lazy"
                className="rounded-xl shadow-md object-cover"
              />

              {/* VALUE SECTION */}
              <section>
                <h3 className="text-2xl font-semibold text-[#411b3f] mb-3">
                  What You Get From Our Marketing System
                </h3>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Our digital marketing service is built around actionable systems rather than theory. You receive structured guidance that helps you improve visibility across search engines, social platforms, and local listings.
                </p>

                <ul className="list-disc pl-6 text-gray-700 space-y-3">
                  <li>Search engine optimisation strategies tailored to your business niche</li>
                  <li>Content planning frameworks designed to increase engagement and visibility</li>
                  <li>Email marketing setup with branded templates and automation guidance</li>
                  <li>Google Business Profile optimisation for stronger local reach</li>
                  <li>Social media content structure for consistent posting and brand clarity</li>
                  <li>Conversion-focused messaging improvements for landing pages and ads</li>
                  <li>Monthly optimisation roadmap with clear, actionable next steps</li>
                </ul>
              </section>

              {/* STRATEGY SECTION */}
              <section>
                <h3 className="text-2xl font-semibold text-[#102f35] mb-3">
                  A Clear Strategy Built for Small Business Growth
                </h3>

                <p className="text-gray-700 leading-relaxed">
                  Many businesses struggle with digital marketing because they lack structure. We solve this by building a clear framework that connects your website, content, and marketing channels into one cohesive system. This ensures every action contributes to visibility and conversion.
                </p>

                <p className="text-gray-700 leading-relaxed mt-4">
                  Whether you are launching a new business or trying to improve an existing online presence, our approach focuses on sustainable growth rather than short-term spikes in traffic. This helps you build long-term authority in your market.
                </p>
              </section>

              {/* BENEFITS */}
              <section>
                <h3 className="text-2xl font-semibold text-[#411b3f] mb-3">
                  Why Businesses Choose Our Approach
                </h3>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Unlike traditional agencies that focus on volume-based marketing, we prioritise clarity and performance. Every recommendation is designed to improve your real-world results, not just analytics dashboards.
                </p>

                <ul className="list-disc pl-6 text-gray-700 space-y-3">
                  <li>Clear, non-technical explanations and implementation steps</li>
                  <li>Focus on ROI-driven marketing activities</li>
                  <li>Scalable systems suitable for long-term business growth</li>
                  <li>Alignment with your website, branding, and service structure</li>
                  <li>Support for both local and national visibility strategies</li>
                </ul>
              </section>

              {/* CTA */}
              <section className="text-center mt-16">
                <h3 className="text-2xl font-bold text-[#102f35] mb-4">
                  Ready to Grow Your Business Online?
                </h3>

                <p className="text-gray-700 mb-6">
                  Explore transparent packages and find the right digital marketing solution for your business.
                </p>

                <Link
                  href="/pricing"
                  className="inline-block bg-[#102f35] hover:bg-[#411b3f] text-white px-8 py-3 rounded-full transition"
                >
                  View Pricing & Packages
                </Link>
              </section>

            </div>
          </FadeIn>
        </div>
      </main>
    </FadeIn>
  );
}