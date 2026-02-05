"use client";

import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function BuildersWebDesign() {
  return (
    <FadeIn>
      <main className="min-h-screen bg-white text-gray-900">

        {/* === HERO: THE "RELIABLE TRADESMAN" VIBE === */}
        <motion.section
          className="relative min-h-[65vh] pt-24 md:pt-28 flex items-center justify-center text-center text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/hero-page-banner.jpg"
            alt="Web Design for Builders UK"
            fill
            className="object-cover brightness-[0.4]"
          />
          <div className="relative z-10 px-6">
  <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
    Websites That <span className="text-yellow-400">Build Your Business</span>
  </h1>
  <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-200">
    High-performance websites for UK Builders, Contractors, and Tradespeople.
    Designed to turn local searches into booked jobs.
  </p>
  <Link
    href="/contact"
    className="bg-white text-[#102f35] hover:bg-yellow-400 px-10 py-4 rounded-full font-bold transition-all inline-block shadow-lg"
  >
    Get My Free Quote
  </Link>
</div>

        </motion.section>

        {/* === SECTION 0: BUILDING TRUST & AUTHORITY === */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

            {/* Image */}
            <div className="relative">
              <Image
                src="/building-services-hero.jpg"
                alt="Professional Website Design for Builders and Trades"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl z-10 relative"
              />
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-[#411b3f] rounded-2xl -z-10 hidden md:block opacity-90" />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
                <span className="block text-[#102f35]">
                  High-Performance Websites for
                </span>
                <span className="block text-[#411b3f]">
                  Builders & Trade Professionals
                </span>
              </h2>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                In the construction industry, trust is everything. Before a client ever picks up the
                phone, they judge your professionalism by your website. A slow, outdated, or unclear
                site costs you real jobs — often without you ever knowing.
              </p>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                We design and build <strong>conversion-focused websites for UK builders,
                contractors, and tradespeople</strong> that clearly showcase your services,
                previous work, and credibility. The result is a website that works as hard
                as you do — bringing in consistent, qualified enquiries.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                Whether you specialise in residential builds, renovations, or specialist trades,
                we ensure your online presence reflects reliability, quality workmanship, and
                local authority.
              </p>
            </div>
          </div>
        </section>

        {/* === FEATURE CARDS: WHAT BUILDERS NEED === */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Project Galleries",
                desc: "High-resolution before/after sliders that showcase your craftsmanship and quality of work.",
                icon: "🏗️",
              },
              {
                title: "Local SEO Ready",
                desc: "We optimise your site to appear for 'Builder near me' searches in your specific UK town.",
                icon: "📍",
              },
              {
                title: "Instant Lead Forms",
                desc: "Mobile-optimised quote forms that let customers reach you directly from the building site.",
                icon: "📱",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-white p-8 rounded-xl shadow-sm border-b-4 border-[#102f35]"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* === THE "WHY US" SECTION === */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#102f35] mb-6">
                Stop losing jobs to{" "}
                <span className="text-[#411b3f]">outdated competitors</span>
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Most building company websites are slow, old, and don't work on phones.
                At <strong>Karol Digital</strong>, we build modern platforms that make you
                look like the professional you are.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center font-semibold">✅ Google Maps Integration</li>
                <li className="flex items-center font-semibold">✅ Checkatrade & Trustpilot Links</li>
                <li className="flex items-center font-semibold">✅ Fast Mobile Loading (4G/5G ready)</li>
              </ul>
            </div>

            <div className="md:w-1/2 bg-[#411b3f] p-8 rounded-3xl text-white">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">
                Fixed-Price Packages
              </h3>
              <p className="mb-6 opacity-90">
                No hidden fees. We provide affordable web design for solo tradespeople
                and large construction firms alike.
              </p>
              <Link href="/pricing" className="text-white underline font-bold">
                View Our Trade Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* === CALL TO ACTION === */}
        <section className="py-16 bg-[#102f35] text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need a website that works as hard as you do?
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-full font-black mt-4 hover:scale-105 transition"
          >
            Let's Talk
          </Link>
        </section>

      </main>
    </FadeIn>
  );
}
