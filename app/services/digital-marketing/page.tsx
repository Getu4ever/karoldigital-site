"use client";

import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";

export default function DigitalMarketingPage() {
  return (
    <FadeIn>
      <main className="bg-white text-gray-900 pb-20">

        {/* === HERO SECTION === */}
        <motion.section
          className="relative min-h-[60vh] flex items-center justify-center text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/hero-page-banner.jpg"
            alt="Digital Marketing"
            fill
            priority
            className="object-cover brightness-[0.45]"
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold">
              Digital <span className="text-yellow-400">Marketing</span>
            </h1>
          </div>
        </motion.section>

        {/* === CONTENT SECTION === */}
        <div className="max-w-5xl mx-auto px-6 mt-12">
          <Breadcrumb current="Digital Marketing" />

          <FadeIn>
            <div>
              <h2 className="text-3xl font-bold text-[#102f35] mb-4">
                Grow Your Business with Smart Marketing
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Our digital marketing service is perfect for small businesses
                looking to grow online. We provide simple, practical, and
                actionable strategies that improve visibility, build trust,
                and attract customers — without overwhelming complexity.
              </p>

              <Image
                src="/service-marketing.jpg"
                alt="Digital Marketing Illustration"
                width={900}
                height={600}
                loading="lazy"
                className="rounded-xl shadow-md mb-10 object-cover"
              />

              <h3 className="text-2xl font-semibold text-[#411b3f] mb-3">
                What’s Included
              </h3>

              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>SEO advice and content optimization</li>
                <li>Email marketing setup & branded templates</li>
                <li>Content ideas and posting strategy</li>
                <li>Brand messaging refinement</li>
                <li>Audience targeting recommendations</li>
                <li>Monthly improvement actions you can implement</li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </main>
    </FadeIn>
  );
}
