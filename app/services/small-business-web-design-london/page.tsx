"use client";

import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function LondonSmallBusinessWebDesignPage() {
  return (
    <FadeIn>
      <main className="min-h-screen bg-white text-gray-900">
        {/* === HERO SECTION === */}
        {/* HERO */}
<motion.section
  className="relative min-h-[75vh] md:min-h-[80vh] w-full flex flex-col items-center justify-center text-center text-white px-6 pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  <Image
    src="/hero-page-banner.jpg"
    alt="Elite London small business web design agency"
    fill
    priority
    className="object-cover brightness-[0.5]"
  />

  <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center justify-center">
    <span className="text-xs font-bold uppercase tracking-[0.25em] text-yellow-400 block mb-4">
      Bespoke London Web Development Agency
    </span>

    <h1 className="text-4xl sm:text-5xl font-black mb-6 tracking-tight leading-tight md:leading-[1.15]">
      Elite Web Design for{" "}
      <br className="hidden sm:inline" />
      <span className="text-yellow-400">London Small Businesses</span>
    </h1>

    <p className="text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-8 text-gray-200 leading-relaxed font-medium">
      Ultra-fast, conversion-focused websites engineered for London’s competitive 
      landscape — built to dominate local search results and transform your digital 
      traffic into high-value client inquiries.
    </p>

    <p className="text-xs sm:text-sm text-gray-300 mb-8 max-w-md">
      Professional, Next.js-powered digital experiences for growing London enterprises 
      that demand speed, security, and measurable growth.
    </p>

    <Link
      href="/book?service=Website+Audit"
      className="bg-white text-[#102f35] hover:bg-yellow-400 hover:scale-105 px-10 py-4.5 rounded-full font-extrabold transition-all duration-300 inline-block shadow-xl active:scale-95 text-sm uppercase tracking-wider"
    >
      Request a London Lead Audit
    </Link>
  </div>
</motion.section>

        {/* === BREADCRUMB SECTION === */}
        <nav
          aria-label="Breadcrumb"
          className="bg-white border-b border-gray-100 py-4 px-6 md:px-12"
        >
          <ol className="max-w-7xl mx-auto flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-[#102f35] transition">
                Home
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link href="/services" className="hover:text-[#102f35] transition">
                Services
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-[#102f35] font-semibold">
              London Small Business Web Design
            </li>
          </ol>
        </nav>

        {/* === LOCAL MARKET INTRODUCTION === */}
        <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Column */}
            <div>
              <div className="max-w-5xl mb-8">
                <span className="text-sm font-bold tracking-wider text-[#411b3f] uppercase block mb-2">
                  Based in London
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#102f35] mb-6">
                  Stop Losing High-Value Regional Leads to Outdated Templates
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  The London B2B market is fiercely competitive. If your website is built on a bloated WordPress setup or a basic DIY template, your mobile speed suffers and potential clients will bounce straight back to the search results page within seconds.
                </p>
              </div>

              <div className="space-y-6 text-gray-700 text-base leading-relaxed">
                <p>
                  At Karol Digital, we build tailored, high-performance websites for ambitious local firms. By eliminating heavy plugins and writing pure, lightweight React code, we ensure your brand delivers an unmatched user experience that wins customer trust immediately.
                </p>

                {/* Local Client Validation Box */}
                <div className="bg-gray-50 border-l-4 border-[#102f35] p-5 rounded-r-xl my-6">
                  <p className="font-semibold text-[#102f35] mb-1">Trusted by London Professionals</p>
                  <p className="text-sm text-gray-600">
                    From streamlining financial inquiries for <strong>1st Call UK Finance</strong> to scaling trust matrices for <strong>1st Call UK Immigration</strong> and optimizing local catering visibility for <strong>Food Mama&apos;s Kitchen</strong>, we know what makes London customers take action.
                  </p>
                </div>

                <p>
                  Whether you serve commercial building development hubs, boutique legal entities, corporate hospitality sectors, or wealth management practices across Greater London, we align every step of our design framework with your direct commercial outcomes.
                </p>
              </div>
            </div>

            {/* Image Column */}
            <div className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <Image
                src="/workspace-design.png"
                alt="Bespoke London small business web development agency"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* === THREE CORE PILLARS OF LOCAL PERFORMANCE === */}
        <section className="bg-gray-50 py-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-[#102f35] mb-4">
                Why Local Growth Starts with Elite Technical Code
              </h2>
              <p className="text-gray-600">
                We bridge the gap between abstract design principles and actual commercial lead acquisition metrics.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-[#102f35]">
                <h3 className="text-xl font-bold text-[#102f35] mb-4">
                  Advanced Local SEO Setup
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We program regional structured schema data and high-intent local metadata directly into your Next.js build. This gives your business the ultimate visibility boost on Google Maps and regional search blocks.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-[#411b3f]">
                <h3 className="text-xl font-bold text-[#411b3f] mb-4">
                  Conversion-First Layout Design
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We systematically eliminate layout friction points. By strategically placing clear calls-to-action and low-stress single-step lead fields, we make booking consultations or requesting quotes effortless.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-[#102f35]">
                <h3 className="text-xl font-bold text-[#102f35] mb-4">
                  Sub-2 Second Mobile Speeds
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  With the majority of London business searches occurring on mobile devices on the go, our server-side rendering architecture means pages load instantly — capturing leads before they change their minds.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* === BOROUGH FOCUS & TARGET INDUSTRIES === */}
        <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-[#102f35] mb-4">
              Serving High-Growth Business Sectors Across London
            </h2>
            <p className="text-gray-600 text-base">
              We engineer specialized conversion funnels custom-tailored to your exact vertical and target local audience.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-6 border-l-4 border-[#102f35] bg-gray-50/50 rounded-r-xl">
              <h4 className="text-lg font-bold mb-2 text-[#102f35]">Construction &amp; Trades</h4>
              <p className="text-gray-600 text-xs leading-relaxed">
                Bespoke project showcase portfolios built to help commercial contractors win premium property development contracts and tenders across Greater London.
              </p>
            </div>

            <div className="p-6 border-l-4 border-[#411b3f] bg-gray-50/50 rounded-r-xl">
              <h4 className="text-lg font-bold mb-2 text-[#411b3f]">Immigration Services</h4>
              <p className="text-gray-600 text-xs leading-relaxed">
                High-trust, professional layouts highlighting OISC compliance frame structures and corporate sponsor client review tracks for maximum validation.
              </p>
            </div>

            <div className="p-6 border-l-4 border-[#102f35] bg-gray-50/50 rounded-r-xl">
              <h4 className="text-lg font-bold mb-2 text-[#102f35]">Financial &amp; Advisory</h4>
              <p className="text-gray-600 text-xs leading-relaxed">
                Security-focused platforms that establish clear authority for wealth managers and boutique financial consultancies, ensuring you capture leads from high-net-worth audiences.
              </p>
            </div>

            <div className="p-6 border-l-4 border-[#411b3f] bg-gray-50/50 rounded-r-xl">
              <h4 className="text-lg font-bold mb-2 text-[#411b3f]">Hospitality &amp; Catering</h4>
              <p className="text-gray-600 text-xs leading-relaxed">
                Visually immersive, mobile-optimized experience hubs designed to increase local event booking volumes and streamline corporate catering inquiries.
              </p>
            </div>
          </div>
        </section>

        {/* === ADDITIONAL SEO CONTENT: WHY LONDON BUSINESSES NEED NEXT.JS === */}
        <section className="py-20 px-6 md:px-12 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#102f35] mb-8 text-center">
              Why London’s Competitive Market Demands Bespoke Performance
            </h2>
            <div className="prose prose-lg text-gray-700 mx-auto">
              <p>
                In a city where attention spans are short and competition is everywhere, a template-based website is a liability. London enterprises require <strong>high-performance, search-optimized infrastructure</strong> to stand out. At Karol Digital, we move beyond the limitations of standard CMS platforms by leveraging <strong>Next.js and React</strong>, providing you with a lightning-fast, highly secure, and SEO-dominant foundation.
              </p>
              <p>
                Our <strong>London-centric SEO approach</strong> ensures your business isn't just visible — it's dominant. We map your site to local search intent, integrating specific borough-based keywords and location-aware schema markup. This strategy helps your business capture high-intent traffic, turning searchers into booked appointments and long-term clients.
              </p>
              <p>
                Whether you are looking for <strong>small business web design in London</strong>, regional SEO optimization, or a complete digital brand overhaul, we provide the technical expertise to ensure your website is a powerful engine for commercial growth.
              </p>
            </div>
          </div>
        </section>

        {/* === CTA SECTION === */}
        <section className="py-24 bg-gradient-to-r from-[#102f35] via-[#513356] to-[#102f35] text-white text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Dominate Your London Market?
            </h2>
            <p className="text-lg mb-8 text-gray-100">
              Stop settling for digital mediocrity. Let’s build a high-performance, conversion-optimized platform that secures your position as a local industry leader.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                className="bg-white text-[#102f35] hover:bg-yellow-400 font-bold px-8 py-4 rounded-full shadow-xl transition-all"
                href="/book"
              >
                Book Your London Lead Audit
              </Link>
            </div>
          </div>
        </section>
      </main>
    </FadeIn>
  );
}