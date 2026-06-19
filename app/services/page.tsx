"use client";

import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Scale,
  HardHat,
  Utensils,
  Landmark,
  ArrowRight,
  Monitor,
  Megaphone,
  Share2,
} from "lucide-react";

export default function ServicesPage() {
  const specializedPills = [
    {
      href: "/services/immigration-services",
      label: "Immigration Firms",
      icon: <Scale size={18} />,
      color: "hover:border-[#102f35] hover:text-[#102f35]",
    },
    {
      href: "/services/building-services",
      label: "Building & Trades",
      icon: <HardHat size={18} />,
      color: "hover:border-[#411b3f] hover:text-[#411b3f]",
    },
    {
      href: "/services/catering-services",
      label: "Catering & Food",
      icon: <Utensils size={18} />,
      color: "hover:border-[#102f35] hover:text-[#102f35]",
    },
    {
      href: "/services/financial-services",
      label: "Financial Services",
      icon: <Landmark size={18} />,
      color: "hover:border-[#411b3f] hover:text-[#411b3f]",
    },
  ];

  return (
    <FadeIn>
      <main className="min-h-screen bg-white text-gray-900">
        <motion.section
          className="relative min-h-[60vh] flex items-center justify-center text-center text-white pt-8 md:pt-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/hero-page-banner.jpg"
            alt="Karol Digital Core Capabilities"
            fill
            priority
            className="object-cover brightness-[0.5]"
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
              <span className="text-white">Professional </span>
              <span className="text-yellow-400">Web Engineering</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto">
              High-performance websites, tailored digital systems, and ongoing support
              designed to help UK businesses win more of the right clients.
            </p>
          </div>
        </motion.section>

        <FadeIn>
          <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-[#f9fafb] to-[#f1f5f9] pb-16">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <span className="text-sm font-bold uppercase tracking-widest text-[#411b3f] block mb-3">
                  Engineered for Results
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#102f35] mb-6">
                  Strategic Solutions Rooted in Technical Excellence
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  At Karol Digital, we don’t just design good-looking websites. We build
                  fast, reliable, and conversion-focused platforms that support how you
                  actually sell, deliver, and communicate as a business.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  By combining clean, professional layouts with strong technical SEO and
                  modern architecture, we create websites that feel effortless to use,
                  load quickly on any device, and act as a dependable source of new
                  enquiries.
                </p>
              </div>

              <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/strategic-engineering-visual.webp"
                  alt="Karol Digital Strategic Infrastructure"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="bg-white py-16 px-6 border-b border-gray-50 flex flex-col gap-12">
            <div className="max-w-6xl mx-auto w-full">
              <div className="flex flex-col items-center mb-12">
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#411b3f]/60 mb-8">
                  Explore Industry Specialisms
                </h2>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  {specializedPills.map((pill) => (
                    <Link
                      key={pill.href}
                      href={pill.href}
                      className="group relative flex items-center gap-3 px-8 py-4 bg-[#411b3f]/5 border border-[#102f35]/10 text-[#102f35] rounded-full font-bold text-sm transition-all duration-500 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#102f35]/10 active:scale-95"
                    >
                      <span className="absolute inset-0 w-0 bg-gradient-to-r from-[#102f35] to-[#411b3f] transition-all duration-500 ease-out group-hover:w-full" />
                      <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors duration-500">
                        <span className="text-[#411b3f] group-hover:text-yellow-400 transition-colors duration-500">
                          {pill.icon}
                        </span>
                        <span className="tracking-tight">{pill.label}</span>
                        <ArrowRight
                          size={16}
                          className="opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-yellow-400"
                        />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-center">
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#102f35]/60 mb-8">
                  Core Digital Capabilities
                </h2>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  {[
                    {
                      label: "Web Design Services",
                      href: "/services/web-design",
                      icon: <Monitor size={18} />,
                    },
                    {
                      label: "Digital Marketing",
                      href: "/services/digital-marketing",
                      icon: <Megaphone size={18} />,
                    },
                    {
                      label: "Social Media Strategy",
                      href: "/services/social-media",
                      icon: <Share2 size={18} />,
                    },
                    {
                      label: "AI Logo Creation",
                      href: "/services/ai-logo-design",
                      icon: <Share2 size={18} />,
                    },
                  ].map((capability) => (
                    <Link
                      key={capability.href}
                      href={capability.href}
                      className="group relative flex items-center gap-3 px-8 py-4 bg-[#102f35]/5 border border-[#102f35]/10 text-[#102f35] rounded-full font-bold text-sm transition-all duration-500 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#102f35]/10 active:scale-95"
                    >
                      <span className="absolute inset-0 w-0 bg-gradient-to-r from-[#411b3f] to-[#102f35] transition-all duration-500 ease-out group-hover:w-full" />

                      <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors duration-500">
                        <span className="text-[#102f35] group-hover:text-yellow-400 transition-colors duration-500">
                          {capability.icon}
                        </span>
                        <span className="tracking-tight">{capability.label}</span>
                        <ArrowRight
                          size={16}
                          className="opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-yellow-400"
                        />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="py-24 px-6 md:px-12 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-4xl font-extrabold text-[#102f35] mb-4">
                  Specialized Digital Capabilities
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  We design and build the core digital assets your business needs to look
                  credible, rank better, and convert visitors into clients.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl mb-6">💻</div>
                  <p className="text-xl font-bold text-[#102f35] mb-4">
                    Bespoke Web Engineering
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    Custom-coded websites built for speed, stability, and conversions. No
                    bloated themes or rigid templates - just clean builds tailored to
                    your goals and your audience.
                  </p>
                  <ul className="space-y-2 text-xs text-[#411b3f] font-bold uppercase tracking-wide">
                    <li>Performance-First Architecture</li>
                    <li>Fluid Responsive Design</li>
                    <li>Modern CSS Frameworks</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl mb-6">🛍</div>
                  <p className="text-xl font-bold text-[#411b3f] mb-4">
                    Headless Commerce
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    Fast, flexible e-commerce experiences using Next.js and modern APIs.
                    Ideal for brands that need more control, better speed, and room to
                    grow beyond standard off-the-shelf setups.
                  </p>
                  <ul className="space-y-2 text-xs text-[#411b3f] font-bold uppercase tracking-wide">
                    <li>Shopify Storefront API</li>
                    <li>Structured CMS Integration</li>
                    <li>High-Volume Scaling</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl mb-6">📈</div>
                  <p className="text-xl font-bold text-[#102f35] mb-4">
                    Technical SEO & Growth
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    Search-friendly structure from day one. We handle technical SEO,
                    schema, and performance so your content has a better chance of
                    ranking - especially for local searches across the UK.
                  </p>
                  <ul className="space-y-2 text-xs text-[#411b3f] font-bold uppercase tracking-wide">
                    <li>Semantic Schema Deployment</li>
                    <li>Crawl Budget Optimization</li>
                    <li>Local Authority Audits</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="py-24 px-6 md:px-12 bg-gray-50 border-y border-gray-100">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-sm font-bold uppercase tracking-widest text-[#411b3f] block mb-3">
                  Under the Hood
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#102f35] mb-6">
                  Optimised for Core Web Vitals and Security
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Modern search engines care about how fast your site feels and how stable
                  it is as it loads. We use modern component-based architecture and
                  Next.js to compile everything into lean, production-ready bundles.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We focus on the key metrics: fast{" "}
                  <strong>Largest Contentful Paint (LCP)</strong>, smooth{" "}
                  <strong>Interaction to Next Paint (INP)</strong>, and low{" "}
                  <strong>Cumulative Layout Shift (CLS)</strong>. In practice, that means
                  predictable layouts, optimised images, and scripts that don’t get in
                  the way of your users.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">🔒</span>
                    <div>
                      <p className="font-bold text-[#102f35]">
                        GDPR & Data Compliance
                      </p>
                      <p className="text-sm text-gray-600">
                        Secure forms and data handling designed with UK and EU regulations
                        in mind, so your enquiries are protected and compliant.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">⚡</span>
                    <div>
                      <p className="font-bold text-[#102f35]">
                        Edge Infrastructure Routing
                      </p>
                      <p className="text-sm text-gray-600">
                        Global hosting (Vercel/AWS) that serves your site from locations
                        close to your users, keeping load times low across the UK and
                        beyond.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
                <p className="text-xl font-bold text-[#102f35] mb-6 text-center">
                  Performance Benchmarks
                </p>
                <div className="space-y-6">
                  {[
                    { label: "Performance & Rendering Rate", value: "99%" },
                    { label: "Accessibility Standards Compliance", value: "100%" },
                    { label: "Best Practices Framework Metric", value: "100%" },
                    { label: "SEO Structural Crawl Integrity", value: "100%" },
                  ].map((stat, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm font-semibold mb-2">
                        <span className="text-gray-700">{stat.label}</span>
                        <span className="text-[#411b3f]">{stat.value}</span>
                      </div>
                      <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-[#102f35] h-full rounded-full"
                          style={{ width: stat.value }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="py-24 px-6 md:px-12 bg-white">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#102f35] mb-4">
                  Vertical Industry Solutions
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  We adapt our approach to the realities of your sector, making sure your
                  website speaks your clients' language and supports how they buy.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                  <p className="font-bold text-lg text-[#102f35] mb-2">
                    Financial & Legal Sectors
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    For accountants, mortgage brokers, IFAs, and legal practices
                    requiring high trust and clear information. We prioritise clarity,
                    compliance, and simple next steps for enquiries.
                  </p>
                </div>

                <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                  <p className="font-bold text-lg text-[#411b3f] mb-2">
                    Building & Construction
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    For contractors, trades, and construction firms. We showcase your
                    projects, demonstrate reliability, and make it easy for local
                    customers to request quotes.
                  </p>
                </div>

                <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                  <p className="font-bold text-lg text-[#102f35] mb-2">
                    E-Commerce Retailing
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    For growing online retailers that have outgrown basic setups. We
                    build flexible, modern storefronts that can handle product growth and
                    marketing campaigns without slowing down.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-white to-[#f9fafb] border-t border-gray-100">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-4xl font-extrabold text-[#102f35] mb-4">
                  Our End-to-End Operational Framework
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  A clear, structured process that takes you from initial ideas to a
                  launched, high-performing website.
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                <div className="relative bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
                  <div>
                    <div className="text-3xl font-extrabold text-[#411b3f] mb-4">
                      01
                    </div>
                    <p className="text-xl font-bold text-[#102f35] mb-3">
                      Discovery & Audit
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      We review your current site (if you have one), your competitors, and
                      your goals. From this we define what the website must do to support
                      your business.
                    </p>
                  </div>
                  <div className="text-xs font-semibold text-[#411b3f] mt-4 uppercase tracking-wider">
                    Phase Estimate: 2-3 Days
                  </div>
                </div>

                <div className="relative bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
                  <div>
                    <div className="text-3xl font-extrabold text-[#102f35] mb-4">
                      02
                    </div>
                    <p className="text-xl font-bold text-[#102f35] mb-3">
                      Architecture & Design
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      We map your pages, user journeys, and visual style. The goal here is
                      to make it effortless for visitors to understand what you do and
                      take the next step.
                    </p>
                  </div>
                  <div className="text-xs font-semibold text-[#102f35] mt-4 uppercase tracking-wider">
                    Phase Estimate: 4-5 Days
                  </div>
                </div>

                <div className="relative bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
                  <div>
                    <div className="text-3xl font-extrabold text-[#411b3f] mb-4">
                      03
                    </div>
                    <p className="text-xl font-bold text-[#102f35] mb-3">
                      Development & Build
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      We build your site in Next.js with clean components, optimised
                      assets, and tracking set up correctly. Everything is tested across
                      devices and browsers.
                    </p>
                  </div>
                  <div className="text-xs font-semibold text-[#411b3f] mt-4 uppercase tracking-wider">
                    Phase Estimate: 5-10 Days
                  </div>
                </div>

                <div className="relative bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
                  <div>
                    <div className="text-3xl font-extrabold text-[#102f35] mb-4">
                      04
                    </div>
                    <p className="text-xl font-bold text-[#102f35] mb-3">
                      Launch & Calibration
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      We deploy to live, configure DNS, connect analytics, and monitor
                      early performance. We then agree any refinements based on real
                      user data.
                    </p>
                  </div>
                  <div className="text-xs font-semibold text-[#102f35] mt-4 uppercase tracking-wider">
                    Phase Estimate: Continuous
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="py-24 px-6 md:px-12 bg-white border-t border-gray-100">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#102f35] mb-4">
                  Technical Service Capabilities FAQ
                </h2>
                <p className="text-gray-600">
                  A few extra details about how we build, optimise, and future-proof your
                  digital assets.
                </p>
              </div>

              <div className="space-y-6">
                <details className="border rounded-xl p-6 shadow-sm group transition-all">
                  <summary className="font-semibold cursor-pointer text-[#102f35] list-none flex justify-between items-center">
                    <span>
                      What are the benefits of a headless stack over a standard website
                      setup?
                    </span>
                    <span className="text-xl group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    Headless setups separate the frontend (what users see) from the
                    backend (where your data lives). This usually means faster load
                    times, fewer plugin headaches, better security, and much more freedom
                    to evolve your design without rebuilding everything.
                  </p>
                </details>

                <details className="border rounded-xl p-6 shadow-sm group transition-all">
                  <summary className="font-semibold cursor-pointer text-[#102f35] list-none flex justify-between items-center">
                    <span>
                      How does Karol Digital handle structured data and schema?
                    </span>
                    <span className="text-xl group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    We add schema and structured data manually where it matters most:
                    business details, services, FAQs, and key pages. This helps search
                    engines better understand your site and can support richer search
                    results, especially for local searches.
                  </p>
                </details>

                <details className="border rounded-xl p-6 shadow-sm group transition-all">
                  <summary className="font-semibold cursor-pointer text-[#102f35] list-none flex justify-between items-center">
                    <span>Can we add automations and integrations later on?</span>
                    <span className="text-xl group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    Yes. We build with modular components and clean integrations in mind.
                    That means you can later connect CRMs, booking systems, live chat,
                    email marketing tools and more without needing a full rebuild.
                  </p>
                </details>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="py-24 bg-gradient-to-r from-[#102f35] via-[#513356] to-[#102f35] text-white text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Let’s Architect Your Next Digital Asset
            </h2>
            <p className="text-lg mb-8 text-gray-100 max-w-2xl mx-auto px-6">
              If you’re ready to improve the quality and quantity of enquiries from your
              website, let’s talk about the right mix of services for your brand.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-[#102f35] hover:bg-[#411b3f] hover:text-white font-semibold px-8 py-4 rounded-full shadow-lg transition"
            >
              Request a Technical Strategy Session
            </Link>
          </section>
        </FadeIn>
      </main>
    </FadeIn>
  );
}
