"use client";

import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Scale, HardHat, Utensils, Landmark, ArrowRight } from "lucide-react";

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

        {/* === HERO SECTION === */}
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
            className="object-cover brightness-[0.45]"
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
              <span className="text-white">Professional </span>
              <span className="text-yellow-400">Web Engineering</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto">
              High-trust corporate solutions, headless architecture systems, and bespoke digital frameworks crafted to turn visibility into enterprise growth.
            </p>
          </div>
        </motion.section>

        {/* === INTRO VALUE PROPOSITION === */}
        <FadeIn>
          <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-[#f9fafb] to-[#f1f5f9] pb-16">
            <div className="max-w-5xl mx-auto text-center">
              <span className="text-sm font-bold uppercase tracking-widest text-[#411b3f] block mb-3">
                Engineered for Results
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#102f35] mb-6">
                Strategic Solutions Rooted in Technical Excellence
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto mb-6">
                At Karol Digital, we deliver much more than visual frameworks. We engineer robust, enterprise-grade digital infrastructures that elevate your operational presence online. By combining sleek corporate layouts with optimized technical SEO architectures, we construct platforms that function as your most efficient asset.
              </p>
              <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Whether implementing low-latency Headless CMS systems or expanding intuitive customer journeys, our methods ensure data integrity, responsive layout rendering, and strict compliance with global technical metrics.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* === PILL-STYLE SUB-NAVIGATION BAR === */}
        <FadeIn>
          <section className="bg-white py-12 px-6 border-b border-gray-50">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col items-center">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#411b3f]/60 mb-8">
                  Explore Industry Specialisms
                </h3>
                
                <div className="flex flex-wrap items-center justify-center gap-4">
                  {specializedPills.map((pill) => (
                    <Link
                      key={pill.href}
                      href={pill.href}
                      className="group relative flex items-center gap-3 px-8 py-4 bg-[#411b3f]/5 border border-[#102f35]/10 text-[#102f35] rounded-full font-bold text-sm transition-all duration-500 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#102f35]/10 active:scale-95"
                    >
                      {/* Animated Background Fill */}
                      <span className="absolute inset-0 w-0 bg-gradient-to-r from-[#102f35] to-[#411b3f] transition-all duration-500 ease-out group-hover:w-full" />

                      {/* Content (Z-index ensures it stays above the fill) */}
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
            </div>
          </section>
        </FadeIn>

        {/* === CORE CAPABILITIES DETAILED SHOWCASE === */}
        <FadeIn>
          <section className="py-24 px-6 md:px-12 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-4xl font-extrabold text-[#102f35] mb-4">
                  🛠 Our Specialized Digital Capabilities
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  A comprehensive breakdown of the core digital services we deploy to establish market authority.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-12">
                
                {/* SERVICE 1 */}
                <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition flex flex-col justify-between">
                  <div>
                    <div className="text-4xl mb-4">💻</div>
                    <h3 className="text-2xl font-bold text-[#102f35] mb-4">Bespoke Web Engineering</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      We design clean, highly polished digital portals tailored entirely to your unique business parameters. Rejecting rigid, overused theme configurations, we build structured environments that scale naturally as operations expand.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Our modern responsive structures assure cross-browser fluid layout scaling, fast interactive page speeds, and flawless user experiences across smartphones, tablets, and large displays.
                    </p>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-gray-700 font-medium">
                    <li>• Modern CSS Frameworks & Dynamic Animations</li>
                    <li>• Native Component Component Design Patterning</li>
                    <li>• Zero-Latency Architecture Standard</li>
                  </ul>
                </div>

                {/* SERVICE 2 */}
                <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition flex flex-col justify-between">
                  <div>
                    <div className="text-4xl mb-4">🛍</div>
                    <h3 className="text-2xl font-bold text-[#411b3f] mb-4">Headless Commerce & CMS</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      For rapid operational scaling, we implement clean decoupled frameworks utilizing modern systems like Next.js, Sanity Studio, and robust Shopify Storefront APIs. This isolates backend inventory management from frontend displays.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      The outcome is a fast storefront that processes product variations instantly and syncs with global suppliers without degrading browser rendering times.
                    </p>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-gray-700 font-medium">
                    <li>• Shopify Storefront API Integrations</li>
                    <li>• Structured Content Modeling via Sanity</li>
                    <li>• Drop-shipping Supply Chain Hookups</li>
                  </ul>
                </div>

                {/* SERVICE 3 */}
                <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition flex flex-col justify-between">
                  <div>
                    <div className="text-4xl mb-4">📈</div>
                    <h3 className="text-2xl font-bold text-[#102f35] mb-4">Technical SEO & Marketing</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      We construct websites with crawl architecture as a core priority. By handling indexability requirements, clean semantic typography hierarchies, and structural JSON-LD schemas manually, we prepare your site to claim local organic rankings.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Every asset is structured to match user intent directly, linking transactional search expressions with your main sales funnel paths.
                    </p>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-gray-700 font-medium">
                    <li>• Structured JSON-LD Schema Deployments</li>
                    <li>• Semantic Layout Tag Hierarchy Optimization</li>
                    <li>• Local Google Business Footprint Audit</li>
                  </ul>
                </div>

              </div>
            </div>
          </section>
        </FadeIn>

        {/* === NEXT.JS & CORE WEB VITALS TECHNICAL DEEP DIVE === */}
        <FadeIn>
          <section className="py-24 px-6 md:px-12 bg-gray-50 border-y border-gray-100">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-sm font-bold uppercase tracking-widest text-[#411b3f] block mb-3">
                  Under the Hood
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#102f35] mb-6">
                  Optimized for Core Web Vitals and Absolute Security
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Modern search engine algorithms rank pages based on structural loading metrics and client security. By building within modern component architectures, we compile asset layouts into lightning-fast production bundles.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We address the primary pillars of site performance: **Largest Contentful Paint (LCP)** via responsive layout scaling, **Interaction to Next Paint (INP)** through strict script hygiene, and **Cumulative Layout Shift (CLS)** by enforcing defined dimension tags across all active image elements.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">🔒</span>
                    <div>
                      <h4 className="font-bold text-[#102f35]">GDPR & Data Compliance</h4>
                      <p className="text-sm text-gray-600">Secure validation architectures with localized data processing loops to safely protect commercial inquiries.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">⚡</span>
                    <div>
                      <h4 className="font-bold text-[#102f35]">Edge Infrastructure Routing</h4>
                      <p className="text-sm text-gray-600">Global hosting delivery using enterprise nodes (Vercel/AWS) for fast localized script delivery.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
                <h3 className="text-xl font-bold text-[#102f35] mb-6 text-center">Performance Benchmarks</h3>
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
                        <div className="bg-[#102f35] h-full rounded-full" style={{ width: stat.value }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* === SECTOR SPECIALISMS INDUSTRY GRID === */}
        <FadeIn>
          <section className="py-24 px-6 md:px-12 bg-white">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#102f35] mb-4">
                  Vertical Industry Solutions
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  We customize our structural frameworks to deliver conversion value inside specialized UK commercial markets.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-lg text-[#102f35] mb-2">Financial & Legal Sectors</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    High-trust environments built for accountants, mortgage brokers, and IFAs. Engineered for clear information display and bulletproof GDPR data compliance.
                  </p>
                </div>
                <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-lg text-[#411b3f] mb-2">Building & Construction</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    High-performance portfolios structured for commercial contractors, tradespeople, and firms requiring conversion-focused galleries to capture local qualified leads.
                  </p>
                </div>
                <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-lg text-[#102f35] mb-2">E-Commerce Retailing</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Modern headless retail platforms built to support rapid drop-shipping connections, complex inventories, and clean single-page checkouts.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* === DETAILED STRATEGIC PROCESS STEP WORKFLOW === */}
        <FadeIn>
          <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-white to-[#f9fafb] border-t border-gray-100">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-4xl font-extrabold text-[#102f35] mb-4">
                  ⚙ Our End-to-End Operational Framework
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  How we transition your digital project securely from initial strategic discovery to full production deployment.
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                
                <div className="relative bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
                  <div>
                    <div className="text-3xl font-extrabold text-[#411b3f] mb-4">01</div>
                    <h3 className="text-xl font-bold text-[#102f35] mb-3">Discovery & Audit</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      We audit competitive market keywords, assess target audience parameters, and establish absolute structural requirements to maximize search performance from day one.
                    </p>
                  </div>
                  <div className="text-xs font-semibold text-[#411b3f] mt-4 uppercase tracking-wider">Phase Estimate: 2-3 Days</div>
                </div>

                <div className="relative bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
                  <div>
                    <div className="text-3xl font-extrabold text-[#102f35] mb-4">02</div>
                    <h3 className="text-xl font-bold text-[#102f35] mb-3">Architecture & Design</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      We design tailored visual assets, map intuitive layout paths, and configure semantic content maps, avoiding generic pre-built template systems entirely.
                    </p>
                  </div>
                  <div className="text-xs font-semibold text-[#102f35] mt-4 uppercase tracking-wider">Phase Estimate: 4-5 Days</div>
                </div>

                <div className="relative bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
                  <div>
                    <div className="text-3xl font-extrabold text-[#411b3f] mb-4">03</div>
                    <h3 className="text-xl font-bold text-[#102f35] mb-3">Development & Build</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      We write highly optimized components, clean technical script hooks, dynamic asset processing engines, and structured JSON markup validation routines.
                    </p>
                  </div>
                  <div className="text-xs font-semibold text-[#411b3f] mt-4 uppercase tracking-wider">Phase Estimate: 5-10 Days</div>
                </div>

                <div className="relative bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
                  <div>
                    <div className="text-3xl font-extrabold text-[#102f35] mb-4">04</div>
                    <h3 className="text-xl font-bold text-[#102f35] mb-3">Launch & Calibration</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      We securely deploy your clean source code to cloud edge servers, verify live DNS targets, map active sitemaps, and provide full dashboard system validation.
                    </p>
                  </div>
                  <div className="text-xs font-semibold text-[#102f35] mt-4 uppercase tracking-wider">Phase Estimate: Continuous</div>
                </div>

              </div>
            </div>
          </section>
        </FadeIn>

        {/* === BROAD KNOWLEDGE CAPABILITIES FAQ === */}
        <FadeIn>
          <section className="py-24 px-6 md:px-12 bg-white border-t border-gray-100">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#102f35] mb-4">
                  Technical Service Capabilities FAQ
                </h2>
                <p className="text-gray-600">
                  Answers concerning our development practices, technical standards, and asset optimizations.
                </p>
              </div>

              <div className="space-y-6">
                <details className="border rounded-xl p-6 shadow-sm group transition-all">
                  <summary className="font-semibold cursor-pointer text-[#102f35] list-none flex justify-between items-center">
                    <span>What are the clear benefits of a headless layout stack over standard systems?</span>
                    <span className="text-xl group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    By separating user display layouts from database engines via modern APIs, headless builds eliminate heavy plugin tracking overhead entirely. This results in incredibly fast site interaction responses, reduces data vulnerabilities to zero, and allows you to update structural site data without breaking frontend configurations.
                  </p>
                </details>

                <details className="border rounded-xl p-6 shadow-sm group transition-all">
                  <summary className="font-semibold cursor-pointer text-[#102f35] list-none flex justify-between items-center">
                    <span>How does Karol Digital manually guarantee structured data indexation?</span>
                    <span className="text-xl group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    We code custom semantic elements manually using appropriate metadata object layouts. By nesting native JSON-LD tracking cards across layout boundaries, search engine bots can map business service offerings, localized UK operational spaces, and real authorship credentials cleanly.
                  </p>
                </details>

                <details className="border rounded-xl p-6 shadow-sm group transition-all">
                  <summary className="font-semibold cursor-pointer text-[#102f35] list-none flex justify-between items-center">
                    <span>Can customized automation flows be integrated down the line?</span>
                    <span className="text-xl group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    Yes. All system architectures are structured as modular component fields. New customer support engines, specialized booking calendars, CRM Webhook pipelines, or automated newsletter platforms can be cleanly injected into existing workspaces without rebuilding the site.
                  </p>
                </details>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* === FINAL CALL TO ACTION BRIEF === */}
        <FadeIn>
          <section className="py-24 bg-gradient-to-r from-[#411b3f] via-[#513356] to-[#102f35] text-white text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Let’s Architect Your Next Digital Asset
            </h2>
            <p className="text-lg mb-8 text-gray-100 max-w-2xl mx-auto px-6">
              Accelerate your digital presence with high-performance web development. Discuss your long-term commercial targets with us today.
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