"use client";

import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Scale, HardHat, Utensils, Landmark, ArrowRight, Monitor, Megaphone, Share2 } from "lucide-react";

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

                {/* === MULTI-TIER SUB-NAVIGATION WORKSPACE === */}
        <FadeIn>
          <section className="bg-white py-16 px-6 border-b border-gray-50 flex flex-col gap-12">
            <div className="max-w-6xl mx-auto w-full">
              
              {/* TIER 1: INDUSTRY SPECIALISMS */}
              <div className="flex flex-col items-center mb-12">
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

              {/* TIER 2: CORE DIGITAL CAPABILITIES */}
              <div className="flex flex-col items-center">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#102f35]/60 mb-8">
                  Core Digital Capabilities
                </h3>
                
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
                  ].map((capability) => (
                    <Link
                      key={capability.href}
                      href={capability.href}
                      className="group relative flex items-center gap-3 px-8 py-4 bg-[#102f35]/5 border border-[#102f35]/10 text-[#102f35] rounded-full font-bold text-sm transition-all duration-500 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#102f35]/10 active:scale-95"
                    >
                      {/* Inverse Gradient Fill for Subtle Platform Distinction */}
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


       {/* === CORE CAPABILITIES DETAILED SHOWCASE === */}
        <FadeIn>
          <section className="py-24 px-6 md:px-12 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-4xl font-extrabold text-[#102f35] mb-4">
                  🛠 Specialized Digital Capabilities
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Engineering robust, high-performance digital infrastructure to command your market.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                
                {/* SERVICE 1 */}
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl mb-6">💻</div>
                  <h3 className="text-xl font-bold text-[#102f35] mb-4">Bespoke Web Engineering</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    Custom-coded portals built for speed and scalability. We bypass rigid templates to deliver unique, high-conversion user experiences optimized for all device environments.
                  </p>
                  <ul className="space-y-2 text-xs text-[#411b3f] font-bold uppercase tracking-wide">
                    <li>• Performance-First Architecture</li>
                    <li>• Fluid Responsive Design</li>
                    <li>• Modern CSS Frameworks</li>
                  </ul>
                </div>

                {/* SERVICE 2 */}
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl mb-6">🛍</div>
                  <h3 className="text-xl font-bold text-[#411b3f] mb-4">Headless Commerce</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    Decoupled storefronts utilizing Next.js and robust APIs. We isolate your backend operations from frontend rendering for instantaneous, enterprise-grade scalability.
                  </p>
                  <ul className="space-y-2 text-xs text-[#411b3f] font-bold uppercase tracking-wide">
                    <li>• Shopify Storefront API</li>
                    <li>• Structured CMS Integration</li>
                    <li>• High-Volume Scaling</li>
                  </ul>
                </div>

                {/* SERVICE 3 */}
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl mb-6">📈</div>
                  <h3 className="text-xl font-bold text-[#102f35] mb-4">Technical SEO & Growth</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    Data-driven architecture built for search visibility. We manually configure semantic hierarchies and JSON-LD schemas to ensure your site dominates local organic rankings.
                  </p>
                  <ul className="space-y-2 text-xs text-[#411b3f] font-bold uppercase tracking-wide">
                    <li>• Semantic Schema Deployment</li>
                    <li>• Crawl Budget Optimization</li>
                    <li>• Local Authority Audits</li>
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
          <section className="py-24 bg-gradient-to-r from-[#102f35] via-[#513356] to-[#102f35] text-white text-center">
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