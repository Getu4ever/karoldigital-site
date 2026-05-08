"use client";

import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

/**
 * WebDesignPage component providing the full code for the services overview.
 * Includes header and footer requirements through the layout and persistent formatting.
 */
export default function WebDesignPage() {
  return (
    <FadeIn>
      <main className="min-h-screen bg-white text-gray-900">
        
        {/* === HERO SECTION === */}
        <section className="relative min-h-[60vh] flex items-center justify-center text-center text-white pt-8 md:pt-4">
          <Image
            src="/hero-page-banner.jpg"
            alt="Web Design Services"
            fill
            priority
            className="object-cover brightness-[0.45]"
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 px-6 max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-extrabold mb-4"
            >
              <span className="text-white">Web Design </span>
              <span className="text-yellow-400">Services</span>
            </motion.h1>
            <p className="text-lg md:text-xl text-gray-100">
              Professional, mobile-friendly websites and brand identities engineered to turn visitors into loyal customers.
            </p>
          </div>
        </section>

        {/* === DESCRIPTION SECTION === */}
        <FadeIn>
          <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="max-w-5xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-[#102f35] mb-8">Strategic Design Meets Technical Excellence</h2>
              <p className="text-gray-700 leading-relaxed mb-10 text-lg">
                Whether you're a startup or an established brand, we build clean,
                modern websites that reflect your business professionally. Choose
                from flexible packages that match your goals, budget, and timeline.
              </p>
            </div>

            {/* === PRICING PACKAGES GRID === */}
            <div className="grid md:grid-cols-4 gap-8 lg:gap-10 mb-24">

              {/* STARTER */}
              <div className="bg-white shadow-xl rounded-2xl p-8 border-t-4 border-[#411b3f] hover:-translate-y-2 transition flex flex-col h-full">
                <h3 className="text-2xl font-bold text-[#411b3f] text-center mb-4">Starter</h3>
                <p className="text-sm text-gray-600 text-center mb-6">Foundation Web - Perfect for new businesses needing a clean online presence.</p>
                <ul className="space-y-3 text-gray-700 mb-8 flex-grow">
                  <li>✔ 5–7 pages</li>
                  <li>✔ WordPress or Google Sites</li>
                  <li>✔ Mobile-responsive</li>
                  <li>✔ Basic SEO Setup</li>
                  <li>✔ Contact form</li>
                </ul>
                <p className="text-xl font-extrabold text-center text-[#102f35] mb-6">£900 – £1,500</p>
                <Link
                  href="/contact"
                  className="block text-center bg-[#102f35] hover:bg-[#411b3f] text-white py-3 rounded-full transition"
                >
                  Choose Starter
                </Link>
              </div>

              {/* GROWTH */}
              <div className="bg-white shadow-xl rounded-2xl p-8 border-t-4 border-[#102f35] hover:-translate-y-2 transition flex flex-col h-full">
                <h3 className="text-2xl font-bold text-[#102f35] text-center mb-4">Growth</h3>
                <p className="text-sm text-gray-600 text-center mb-6">Strategic Growth Web - Ideal for established businesses wanting visibility.</p>
                <ul className="space-y-3 text-gray-700 mb-8 flex-grow">
                  <li>✔ Conversion-focused UX</li>
                  <li>✔ Full On-page SEO</li>
                  <li>✔ Speed optimisation</li>
                  <li>✔ AI Chatbot (Basic)</li>
                  <li>✔ Analytics & UX Strategy</li>
                </ul>
                <p className="text-xl font-extrabold text-center text-[#102f35] mb-6">£1,800 – £3,000</p>
                <Link
                  href="/contact"
                  className="block text-center bg-[#102f35] hover:bg-[#411b3f] text-white py-3 rounded-full transition"
                >
                  Choose Growth
                </Link>
              </div>

              {/* PREMIUM - MOST POPULAR */}
              <div className="relative bg-white shadow-2xl rounded-2xl p-8 border-t-4 border-yellow-400 scale-[1.05] z-10 flex flex-col h-full ring-2 ring-yellow-400/20">
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-yellow-400 text-[#102f35] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Best Value
                </div>
                <h3 className="text-2xl font-bold text-[#102f35] text-center mb-4">Premium</h3>
                <p className="text-sm text-gray-600 text-center mb-6">High-end performance, custom branding, and marketing readiness.</p>
                <ul className="space-y-3 text-gray-700 mb-8 flex-grow">
                  <li className="font-bold text-[#102f35]">✔ Full Brand Identity</li>
                  <li>✔ 6–10+ Custom Pages</li>
                  <li>✔ Advanced Custom Coding</li>
                  <li>✔ Copywriting & Sales Strategy</li>
                  <li>✔ Advanced AI Chatbot</li>
                </ul>
                <p className="text-xl font-extrabold text-center text-[#102f35] mb-6">£3,500 – £6,000</p>
                <Link
                  href="/contact"
                  className="block text-center bg-[#102f35] hover:bg-[#411b3f] text-white py-3 rounded-full transition shadow-lg"
                >
                  Choose Premium
                </Link>
              </div>

              {/* ENTERPRISE */}
              <div className="bg-white shadow-xl rounded-2xl p-8 border-t-4 border-[#102f35] hover:-translate-y-2 transition flex flex-col h-full">
                <h3 className="text-2xl font-bold text-[#102f35] text-center mb-4">Enterprise</h3>
                <p className="text-sm text-gray-600 text-center mb-6">Custom-built solutions for complex business operations.</p>
                <ul className="space-y-3 text-gray-700 mb-8 flex-grow">
                  <li>✔ Full Branding & Strategy</li>
                  <li>✔ User Roles & Infrastructure</li>
                  <li>✔ Deep CRM Integration</li>
                  <li>✔ Advanced E-commerce Logic</li>
                  <li>✔ Enhanced Security Systems</li>
                </ul>
                <p className="text-xl font-extrabold text-center text-[#411b3f] mb-6">From £6,500</p>
                <Link
                  href="/contact"
                  className="block text-center bg-[#102f35] hover:bg-[#411b3f] text-white py-3 rounded-full transition"
                >
                  Request Quote
                </Link>
              </div>

            </div>

            {/* === STRATEGIC FIT TABLE === */}
            <div className="max-w-6xl mx-auto mt-24">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#102f35] mb-4">📊 Strategic Fit Comparison</h2>
                <p className="text-gray-600">Selecting the right tier for your business objectives.</p>
              </div>
              <div className="overflow-x-auto rounded-2xl shadow-xl border border-gray-100">
                <table className="w-full border-collapse text-left bg-white">
                  <thead>
                    <tr className="bg-[#102f35] text-white">
                      <th className="p-5 font-semibold">Strategic Goal</th>
                      <th className="p-5 text-center border-l border-white/10">Starter</th>
                      <th className="p-5 text-center border-l border-white/10">Growth</th>
                      <th className="p-5 text-center border-l border-white/10">Premium</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b hover:bg-gray-50 transition">
                      <td className="p-5 font-medium">Business Stage</td>
                      <td className="p-5 text-center text-sm italic border-l">New / Solo-Founder</td>
                      <td className="p-5 text-center text-sm italic border-l">Scaling SMB</td>
                      <td className="p-5 text-center text-sm font-semibold border-l">Market Leader</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50 transition">
                      <td className="p-5 font-medium">Brand Identity</td>
                      <td className="p-5 text-center text-sm border-l">Logo Only</td>
                      <td className="p-5 text-center text-sm border-l">Visual Alignment</td>
                      <td className="p-5 text-center text-sm font-semibold text-green-600 border-l">Full Bespoke Identity</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50 transition">
                      <td className="p-5 font-medium">Sales Logic</td>
                      <td className="p-5 text-center text-sm border-l">Static Info</td>
                      <td className="p-5 text-center text-sm border-l">Active Lead Gen</td>
                      <td className="p-5 text-center text-sm font-semibold text-green-600 border-l">Hybrid Order Engine</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50 transition">
                      <td className="p-5 font-medium">SEO Intensity</td>
                      <td className="p-5 text-center text-sm border-l">Foundational</td>
                      <td className="p-5 text-center text-sm border-l">Competitive</td>
                      <td className="p-5 text-center text-sm font-semibold text-green-600 border-l">Aggressive Dominance</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition">
                      <td className="p-5 font-medium">Outcome</td>
                      <td className="p-5 text-center text-xs border-l">Digital Card</td>
                      <td className="p-5 text-center text-xs border-l">Traffic Growth</td>
                      <td className="p-5 text-center text-xs font-bold uppercase border-l">Max ROI</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* === BUILT FOR SUCCESS DELIVERABLES === */}
        <FadeIn>
          <section className="py-24 px-6 md:px-12 bg-gray-50">
            <div className="max-w-5xl mx-auto text-center mb-12">
              <h2 className="text-4xl font-extrabold text-[#102f35] mb-4">🎁 Built for Long-Term Success</h2>
              <p className="text-gray-600">High-performance assets designed to outrank your competition.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              <div className="bg-white shadow-lg p-8 rounded-2xl border">
                <h3 className="text-xl font-bold text-[#102f35] mb-4">Core Deliverables</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>✔ Bespoke, clean web design</li>
                  <li>✔ Mobile-responsive architecture</li>
                  <li>✔ Automated lead notifications</li>
                  <li>✔ Enterprise-grade security</li>
                  <li>✔ Hosting & Deployment support</li>
                </ul>
              </div>
              <div className="bg-white shadow-lg p-8 rounded-2xl border">
                <h3 className="text-xl font-bold text-[#411b3f] mb-4">Performance & Support</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>✔ Image & Asset optimisation</li>
                  <li>✔ Zero-latency performance tuning</li>
                  <li>✔ 14-day Post-Launch support</li>
                  <li>✔ Ongoing Technical consultation</li>
                  <li>✔ CMS Training for self-management</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* === FOOTER PLACEHOLDER === */}
        <footer className="py-12 bg-[#102f35] text-white text-center">
          <p>© 2026 Karol Digital. Built for Performance.</p>
        </footer>

      </main>
    </FadeIn>
  );
}