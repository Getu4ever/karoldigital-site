"use client";

import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  PenTool,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";

export default function AILogoDesignPage() {
  return (
    <FadeIn>
      <main className="min-h-screen bg-white text-gray-900">
        {/* HERO */}
        <motion.section
          className="relative min-h-[60vh] flex items-center justify-center text-center text-white pt-8 md:pt-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/hero-page-banner.jpg"
            alt="AI Logo Design Support"
            fill
            priority
            className="object-cover brightness-[0.5]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
              <span className="text-white">AI Logo </span>
              <span className="text-yellow-400">Design Support</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto">
              Fast, sleek, and professional logo concepts for businesses that need a
              strong visual starting point or a clean identity refresh without the delay
              of a full traditional branding project.
            </p>
          </div>
        </motion.section>
        {/* === BREADCRUMB SECTION === */}
        <nav
          aria-label="Breadcrumb"
          className="bg-white border-b border-gray-100 py-4 px-6 md:px-12"
        >
          <ol className="max-w-7xl mx-auto flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <a href="/" className="hover:text-[#102f35] transition">
                Home
              </a>
            </li>

            <li className="text-gray-400">/</li>

            <li>
              <a href="/services" className="hover:text-[#102f35] transition">
                Services
              </a>
            </li>

            <li className="text-gray-400">/</li>

            <li className="text-[#102f35] font-semibold">
              Ai Logo Design
            </li>
          </ol>
        </nav>

        {/* INTRO */}
        <FadeIn>
          <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-[#f9fafb] to-[#f1f5f9]">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left min-w-0">
                <span className="text-sm font-bold uppercase tracking-widest text-[#411b3f] block mb-3">
                  Practical Brand Support
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#102f35] mb-6">
                  Professional Logo Help for Businesses That Need to Move Quickly
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Not every business needs a full-scale branding agency engagement before
                  it can launch professionally. Sometimes you simply need a logo that
                  looks credible, feels aligned with your market, and gives your business
                  a polished identity across your website, social channels, proposals,
                  and marketing materials.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  That is where our AI logo design support fits in. We help businesses
                  create clean, modern logo concepts using AI-assisted workflows, then
                  refine the strongest direction so the final result feels purposeful
                  rather than generic. The goal is not to produce random visuals. The
                  goal is to give you a usable, professional identity that fits your
                  business and helps you present yourself with confidence.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  This service is especially useful for start-ups, sole traders, local
                  service businesses, and brands that currently have no logo at all. It
                  can also work well for businesses with an outdated mark that needs a
                  cleaner, more modern look.
                </p>
              </div>

              <div className="min-w-0">
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-white">
                  <Image
                    src="/ai-logo-design01.webp"
                    alt="Professional logo concept development"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  />
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* WHY THIS SERVICE */}
        <FadeIn>
          <section className="py-24 px-6 md:px-12 bg-white">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-extrabold text-[#102f35] mb-4">
                  A Smart Option for Early-Stage or Light-Touch Branding Needs
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  This is not positioned as one of our core long-form service pillars, but
                  it is a valuable support service for clients who need a strong visual
                  identity starting point without overcomplicating the process.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="text-yellow-500 mb-5">
                    <Sparkles size={30} />
                  </div>
                  <p className="text-xl font-bold text-[#102f35] mb-4">
                    Fast Concept Generation
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    AI allows us to explore a range of visual directions quickly. That
                    helps you see styles, symbols, and layouts early in the process
                    without waiting through a long brand development cycle.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="text-yellow-500 mb-5">
                    <PenTool size={30} />
                  </div>
                  <p className="text-xl font-bold text-[#411b3f] mb-4">
                    Refined with Human Judgment
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    AI can help generate ideas, but it should not be left alone to make
                    brand decisions. We review, narrow, and refine the concepts so the
                    result feels intentional, legible, and more relevant to your audience.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="text-yellow-500 mb-5">
                    <BadgeCheck size={30} />
                  </div>
                  <p className="text-xl font-bold text-[#102f35] mb-4">
                    Better First Impressions
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    A clean logo will not build your brand on its own, but it does improve
                    how your business appears at first glance. That matters when someone
                    lands on your website, finds you on social media, or receives your
                    quote or brochure.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* BODY IMAGE + EXPLANATION */}
        <FadeIn>
          <section className="py-24 px-6 md:px-12 bg-gray-50 border-y border-gray-100">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
              <div className="min-w-0">
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-white">
                  <Image
                    src="/ai-logo-design-new.webp"
                    alt="AI-assisted brand identity workflow"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  />
                </div>
              </div>

              <div className="min-w-0">
                <span className="text-sm font-bold uppercase tracking-widest text-[#411b3f] block mb-3">
                  How It Works
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#102f35] mb-6">
                  We Use AI to Speed Up Exploration, Not to Replace Brand Thinking
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The strongest use of AI in logo design is at the concept stage. It helps
                  generate broad visual directions quickly, which is useful when a client
                  has no logo, no brand system, or only a vague idea of how they want
                  their business to look. Instead of starting with a blank page, we can
                  move straight into reviewing styles, symbols, typography directions, and
                  overall tone.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  From there, the process becomes more selective and strategic. We remove
                  weak, generic, or overcomplicated ideas and focus on concepts that feel
                  cleaner, more memorable, and more commercially usable. We consider where
                  the logo will live: on your website header, social profile, invoices,
                  business cards, email signatures, and promotional materials.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  In other words, this service is not about novelty. It is about helping
                  you get to a professional result faster when a full custom brand project
                  would be unnecessary, premature, or outside your current budget.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* SUITABLE FOR */}
        <FadeIn>
          <section className="py-24 px-6 md:px-12 bg-white">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#102f35] mb-4">
                  Who This Service Is Best Suited To
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  AI logo design support works best when the objective is speed,
                  professionalism, and a clear visual identity foundation.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-[#f9fafb] p-8 rounded-2xl border border-gray-100">
                  <p className="text-lg font-bold text-[#102f35] mb-3">
                    Ideal for:
                  </p>
                  <ul className="space-y-3 text-gray-600 leading-relaxed">
                    <li>- New businesses that need a logo before launching a website</li>
                    <li>- Sole traders and local services that currently have no visual identity</li>
                    <li>- Businesses using temporary text-only branding that now want a cleaner look</li>
                    <li>- Founders who need concept directions before committing to broader branding work</li>
                    <li>- Small businesses refreshing an outdated logo for a more modern appearance</li>
                  </ul>
                </div>

                <div className="bg-[#f9fafb] p-8 rounded-2xl border border-gray-100">
                  <p className="text-lg font-bold text-[#411b3f] mb-3">
                    Less suitable for:
                  </p>
                  <ul className="space-y-3 text-gray-600 leading-relaxed">
                    <li>- Large brand systems requiring deep strategy and extensive brand governance</li>
                    <li>- Businesses needing a full identity programme with detailed brand architecture</li>
                    <li>- Projects that require highly bespoke illustration-led logo development</li>
                    <li>- Organisations expecting AI alone to replace all professional design review</li>
                    <li>- Brands with complex legal review requirements across many markets</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* DELIVERABLES */}
        <FadeIn>
          <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-white to-[#f9fafb] border-t border-gray-100">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-4xl font-extrabold text-[#102f35] mb-4">
                  What You Can Expect from the Process
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  We keep the process straightforward, focused, and commercially useful.
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                  <div className="text-3xl font-extrabold text-[#411b3f] mb-4">01</div>
                  <p className="text-xl font-bold text-[#102f35] mb-3">
                    Brief and Direction
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We gather the basics: your business name, sector, audience, preferred
                    style, colours, and examples of what you like or want to avoid.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                  <div className="text-3xl font-extrabold text-[#102f35] mb-4">02</div>
                  <p className="text-xl font-bold text-[#102f35] mb-3">
                    AI Concept Exploration
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We generate and review a range of visual directions to identify the
                    strongest concepts and eliminate weak or off-brand options early.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                  <div className="text-3xl font-extrabold text-[#411b3f] mb-4">03</div>
                  <p className="text-xl font-bold text-[#102f35] mb-3">
                    Refinement and Cleanup
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We refine the chosen direction so it feels cleaner, sharper, and more
                    usable across your digital touchpoints.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                  <div className="text-3xl font-extrabold text-[#102f35] mb-4">04</div>
                  <p className="text-xl font-bold text-[#102f35] mb-3">
                    Delivery for Use
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    You receive a professional logo direction suitable for website use,
                    social media, and general business presentation.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* FAQ */}
        <FadeIn>
          <section className="py-24 px-6 md:px-12 bg-white border-t border-gray-100">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#102f35] mb-4">
                  AI Logo Design Support FAQ
                </h2>
                <p className="text-gray-600">
                  Clear answers for businesses considering a lighter-touch branding option.
                </p>
              </div>

              <div className="space-y-6">
                <details className="border rounded-xl p-6 shadow-sm group transition-all">
                  <summary className="font-semibold cursor-pointer text-[#102f35] list-none flex justify-between items-center">
                    <span>Is this the same as a full branding project?</span>
                    <span className="text-xl group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    No. This is a more focused service designed to help businesses get a
                    professional logo direction quickly. A full branding project would go
                    much deeper into brand strategy, messaging, visual systems, and
                    long-term guidelines.
                  </p>
                </details>

                <details className="border rounded-xl p-6 shadow-sm group transition-all">
                  <summary className="font-semibold cursor-pointer text-[#102f35] list-none flex justify-between items-center">
                    <span>Can this help if I currently have no logo at all?</span>
                    <span className="text-xl group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    Yes. That is one of the most common reasons to use this service. It is
                    a practical way to establish a visual identity before launching or
                    upgrading your website.
                  </p>
                </details>

                <details className="border rounded-xl p-6 shadow-sm group transition-all">
                  <summary className="font-semibold cursor-pointer text-[#102f35] list-none flex justify-between items-center">
                    <span>Can you also place the logo on my website afterwards?</span>
                    <span className="text-xl group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    Yes. If we are also building or updating your site, we can incorporate
                    the chosen logo into the header, footer, favicon direction, and wider
                    visual presentation so everything feels consistent.
                  </p>
                </details>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* CTA */}
        <FadeIn>
          <section className="py-24 bg-gradient-to-r from-[#102f35] via-[#513356] to-[#102f35] text-white text-center">
            <div className="max-w-3xl mx-auto px-6">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Need a Clean, Professional Logo Without Overcomplicating the Process?
              </h2>
              <p className="text-lg mb-8 text-gray-100">
                If your business needs a credible logo direction for your website,
                marketing, or launch materials, we can help you create something polished,
                modern, and commercially usable.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#102f35] hover:bg-[#411b3f] hover:text-white font-semibold px-8 py-4 rounded-full shadow-lg transition"
              >
                Request Logo Design Support
                <ArrowRight size={18} />
              </Link>
            </div>
          </section>
        </FadeIn>
      </main>
    </FadeIn>
  );
}
