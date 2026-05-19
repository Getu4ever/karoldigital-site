"use client";

import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function PricingPage() {
  return (
    <FadeIn>
      <main className="min-h-screen bg-white text-gray-900 font-sans">

        {/* === HERO SECTION === */}
        <motion.section
          className="relative min-h-[60vh] flex items-center justify-center text-center text-white pt-8 md:pt-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/hero-page-banner.jpg"
            alt="Karol Digital Services"
            fill
            priority
            className="object-cover brightness-[0.45]"
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
              <span className="text-white">Bespoke </span>
              <span className="text-yellow-400">Digital Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
              High-performance websites and brand identities engineered to turn visitors into loyal customers and long-term clients.
            </p>
          </div>
        </motion.section>

        {/* === INTRO SECTION === */}
        <FadeIn>
          <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-[#f9fafb] to-[#f1f5f9]">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-[#102f35] mb-4">
                Strategic Design Meets Technical Excellence
              </h2>
              <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
                By engineering bespoke digital solutions, from full brand identities to custom-coded e-commerce platforms, I provide the technical infrastructure your business needs to compete, scale, and dominate its market.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* === PRICING PACKAGES === */}
        <FadeIn>
          <section className="py-24 px-6 md:px-12 bg-white">
            <div className="max-w-7xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#102f35] mb-4">
                💼 Performance Web Packages
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Transparent pricing based on business outcomes, not just design delivery.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-10 max-w-7xl mx-auto mb-20">

              {/* STARTER */}
              <div className="bg-white shadow-xl rounded-2xl p-8 border-t-4 border-[#411b3f] hover:-translate-y-2 transition flex flex-col">
                <p className="text-3xl font-bold text-[#411b3f] text-center mb-4">Starter</p>
                <p className="text-gray-600 text-center mb-6">
                  A professional online presence for new or small businesses.
                </p>
                <ul className="space-y-3 text-gray-700 mb-8 flex-grow">
                  <li>✔ 5–7 pages</li>
                  <li>✔ Basic SEO Setup</li>
                  <li>✔ WordPress or CMS Setup</li>
                  <li>✔ Mobile responsive design</li>
                  <li>✔ Contact form integration</li>
                </ul>
                <p className="text-2xl font-extrabold text-[#102f35] text-center mb-6">
                  £900–£1,500
                </p>
                <Link href="/contact" className="block text-center bg-[#102f35] hover:bg-[#411b3f] text-white py-3 rounded-full">
                  Choose Starter
                </Link>
              </div>

              {/* GROWTH */}
              <div className="bg-white shadow-xl rounded-2xl p-8 border-t-4 border-[#102f35] hover:-translate-y-2 transition flex flex-col">
                <p className="text-3xl font-bold text-[#102f35] text-center mb-4">Growth</p>
                <p className="text-gray-600 text-center mb-6">
                  A conversion-focused website designed to generate consistent leads, enquiries, and bookings.
                </p>
                <ul className="space-y-3 text-gray-700 mb-8 flex-grow">
                  <li>✔ UX & Conversion Optimisation</li>
                  <li>✔ Full On-page SEO</li>
                  <li>✔ Speed & Performance Optimisation</li>
                  <li>✔ Analytics & Tracking Setup</li>
                  <li>✔ Lead Capture System</li>
                </ul>
                <p className="text-2xl font-extrabold text-[#102f35] text-center mb-6">
                  £1,800–£3,000
                </p>
                <Link href="/contact" className="block text-center bg-[#102f35] hover:bg-[#411b3f] text-white py-3 rounded-full">
                  Choose Growth
                </Link>
              </div>

              {/* PREMIUM */}
              <div className="relative bg-white shadow-2xl rounded-2xl p-8 border-t-4 border-yellow-400 scale-105 z-10 flex flex-col">
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-yellow-400 text-[#102f35] px-4 py-1 rounded-full text-xs font-bold uppercase">
                  Most Powerful
                </div>
                <p className="text-3xl font-bold text-[#102f35] text-center mb-4">Premium</p>
                <p className="text-gray-600 text-center mb-6">
                  A complete digital growth system combining brand identity, high-end design, and conversion strategy.
                </p>
                <ul className="space-y-3 text-gray-700 mb-8 flex-grow">
                  <li className="font-bold text-[#102f35]">✔ Full Brand Identity System</li>
                  <li>✔ 6–10+ Custom Designed Pages</li>
                  <li>✔ Advanced Custom Development</li>
                  <li>✔ Sales-Focused Copywriting</li>
                  <li>✔ Conversion Strategy Integration</li>
                  <li>✔ Advanced Automation Tools</li>
                </ul>
                <p className="text-2xl font-extrabold text-[#102f35] text-center mb-6">
                  £3,500–£6,000
                </p>
                <Link href="/contact" className="block text-center bg-[#102f35] hover:bg-[#411b3f] text-white py-3 rounded-full">
                  Choose Premium
                </Link>
              </div>

              {/* ENTERPRISE */}
              <div className="bg-white shadow-xl rounded-2xl p-8 border-t-4 border-[#102f35] hover:-translate-y-2 transition flex flex-col">
                <p className="text-3xl font-bold text-[#102f35] text-center mb-4">Enterprise (Ecommerce Systems)</p>
                <p className="text-gray-600 text-center mb-6">
                  Full ecommerce platforms and complex business systems for scalable operations and online sales.
                </p>
                <ul className="space-y-3 text-gray-700 mb-8 flex-grow">
                  <li>✔ Full Ecommerce Website (Shop / Cart / Checkout)</li>
                  <li>✔ Payment Gateway Integration (Stripe / PayPal)</li>
                  <li>✔ Product Catalogue System</li>
                  <li>✔ Order & Inventory Management</li>
                  <li>✔ CRM / Database Integration</li>
                  <li>✔ User Roles & Business Logic</li>
                  <li>✔ High-Level Security Architecture</li>
                </ul>
                <p className="text-2xl font-extrabold text-[#411b3f] text-center mb-6">
                  From £6,500
                </p>
                <Link href="/contact" className="block text-center bg-[#102f35] hover:bg-[#411b3f] text-white py-3 rounded-full">
                  Request Quote
                </Link>
              </div>

            </div>
          </section>
        </FadeIn>

        {/* === MAINTENANCE PACKAGE SECTION === */}
        <FadeIn>
          <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-gray-50 to-gray-100">
            <div className="max-w-6xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#102f35] mb-4">
                Website Maintenance Packages
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Ongoing technical support to keep your investment secure and performing at peak levels.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

              {/* Basic Maintenance */}
              <div className="bg-white shadow-xl rounded-2xl p-8 border-t-4 border-[#102f35] text-center hover:-translate-y-2 transition">
                <p className="text-2xl font-bold text-[#102f35] mb-4">Basic Maintenance</p>
                <p className="text-gray-600 mb-6">Ideal for small websites needing regular care.</p>
                <ul className="space-y-3 text-gray-700 mb-8 text-left mx-auto max-w-xs">
                  <li>✔ Fixing bugs</li>
                  <li>✔ Minor text or image edits</li>
                  <li>✔ Plugin & Dependency Updates</li>
                  <li>✔ Backup guidance</li>
                </ul>
                <p className="text-2xl font-extrabold text-[#411b3f] mb-6">From £200-£300/mo</p>
                <Link href="/contact" className="block text-center bg-[#102f35] hover:bg-[#411b3f] text-white font-semibold py-3 rounded-full transition">
                  Select Basic
                </Link>
              </div>

              {/* Premium Maintenance */}
              <div className="bg-white shadow-xl rounded-2xl p-8 border-t-4 border-[#411b3f] text-center hover:-translate-y-2 transition">
                <p className="text-2xl font-bold text-[#411b3f] mb-4">Premium Maintenance</p>
                <p className="text-gray-600 mb-6">Priority support for active, scaling businesses.</p>
                <ul className="space-y-3 text-gray-700 mb-8 text-left mx-auto max-w-xs">
                  <li>✔ Everything in Basic</li>
                  <li>✔ New Feature Implementation</li>
                  <li>✔ Deployment support</li>
                  <li>✔ Priority 24h Response</li>
                  <li>✔ Monthly Analytics Report</li>
                </ul>
                <p className="text-2xl font-extrabold text-[#102f35] mb-6">From £300-£400/mo</p>
                <Link href="/contact" className="block text-center bg-[#411b3f] hover:bg-[#102f35] text-white font-semibold py-3 rounded-full transition">
                  Select Premium
                </Link>
              </div>
              
              {/* Custom Updates */}
              <div className="bg-white shadow-xl rounded-2xl p-8 border-t-4 border-[#102f35] text-center hover:-translate-y-2 transition">
                <p className="text-2xl font-bold text-[#102f35] mb-4">Custom Updates</p>
                <p className="text-gray-600 mb-6">For major improvements, redesigns, or new functionality.</p>
                <ul className="space-y-3 text-gray-700 mb-8 text-left mx-auto max-w-xs">
                  <li>✔ Technical support</li>
                  <li>✔ Website updates</li>
                  <li>✔ Fixing issues</li>
                  <li>✔ Advanced troubleshooting</li>
                  <li>✔ Feature development</li>
                </ul>
                <p className="text-2xl font-extrabold text-[#411b3f] mb-6">From £199 per update</p>
                <Link href="/contact" className="block text-center bg-[#102f35] hover:bg-[#411b3f] text-white font-semibold py-3 rounded-full transition">
                  Request Custom Work
                </Link>
              </div>

            </div>
          </section>
        </FadeIn>

        {/* === SOCIAL MEDIA & DIGITAL MARKETING === */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="py-24 px-6 md:px-12 bg-gray-50"
        >
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-extrabold text-[#102f35] mb-4">
              📱 Marketing & Growth Retainers
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Boost your visibility with expert branding and conversion-led advertising.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            <div className="bg-white shadow-lg rounded-2xl p-8 text-center border border-gray-200">
              <p className="text-xl font-bold text-[#411b3f] mb-3">Paid Advertising (Ads)</p>
              <p className="text-gray-600 mb-4">Google Ads & Social Media campaigns managed for ROI.</p>
              <p className="font-bold text-[#102f35] mb-4">From £250/mo</p>
              <Link href="/services/social-media" className="text-[#102f35] font-semibold underline">
                Learn More
              </Link>
            </div>
            <div className="bg-white shadow-lg rounded-2xl p-8 text-center border border-gray-200">
              <p className="text-xl font-bold text-[#102f35] mb-3">SEO & Content</p>
              <p className="text-gray-600 mb-4">Ongoing SEO audits, backlinking, and content planning.</p>
              <p className="font-bold text-[#411b3f] mb-4">From £450/mo</p>
              <Link href="/services/digital-marketing" className="text-[#102f35] font-semibold underline">
                Learn More
              </Link>
            </div>
            <div className="bg-white shadow-lg rounded-2xl p-8 text-center border border-gray-200">
              <p className="text-xl font-bold text-[#102f35] mb-3">Brand Identity Suite</p>
              <p className="text-gray-600 mb-4">Full Logos, colour palettes, typography & social templates.</p>
              <p className="font-bold text-[#411b3f] mb-4">Custom Pricing</p>
              <Link href="/contact" className="text-[#102f35] font-semibold underline">
                Request Quote
              </Link>
            </div>
          </div>
        </motion.section>

        {/* === DELIVERABLES === */}
        <FadeIn>
          <section className="py-24 px-6 md:px-12 bg-gray-50">
            <div className="max-w-5xl mx-auto text-center mb-12">
              <h2 className="text-4xl font-extrabold text-[#102f35] mb-4">
                🎁 Built for Long-Term Success
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Every website I build is a high-performance asset designed to outrank competition.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              <div className="bg-white shadow-lg p-8 rounded-2xl border">
                <p className="text-xl font-bold text-[#102f35] mb-4">Core Deliverables</p>
                <ul className="space-y-3 text-gray-700">
                  <li>✔ Bespoke, clean web design</li>
                  <li>✔ Mobile-responsive architecture</li>
                  <li>✔ Automated lead notifications</li>
                  <li>✔ Enterprise-grade security</li>
                  <li>✔ Hosting & Deployment support</li>
                </ul>
              </div>
              <div className="bg-white shadow-lg p-8 rounded-2xl border">
                <p className="text-xl font-bold text-[#411b3f] mb-4">Performance & Support</p>
                <ul className="space-y-3 text-gray-700">
                  <li>✔ Image & Asset optimisation</li>
                  <li>✔ Zero-latency performance tuning</li>
                  <li>✔ 14-day Post-Launch hyper-support</li>
                  <li>✔ Ongoing Technical consultation</li>
                  <li>✔ CMS Training for self-management</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* === ADD-ONS === */}
        <FadeIn>
          <section className="py-24 px-6 md:px-12 bg-white">
            <div className="max-w-6xl mx-auto text-center mb-12">
              <h2 className="text-4xl font-extrabold text-[#102f35] mb-4">
                ➕ Optional Strategic Add-Ons
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Enhance your platform with advanced features as your business scales.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              <div className="bg-gray-50 p-8 rounded-2xl border shadow-sm text-center">
                <p className="text-xl font-bold text-[#411b3f] mb-3">Blog & Content Engine</p>
                <p className="text-gray-600 mb-4">Full CMS integration for SEO-driven articles.</p>
                <p className="font-bold text-[#102f35]">£150+</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl border shadow-sm text-center">
                <p className="text-xl font-bold text-[#102f35] mb-3">Email Automation Setup</p>
                <p className="text-gray-600 mb-4">Mailchimp, Brevo or HubSpot workflows.</p>
                <p className="font-bold text-[#411b3f]">£130+</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl border shadow-sm text-center">
                <p className="text-xl font-bold text-[#102f35] mb-3">Advanced Motion Design</p>
                <p className="text-gray-600 mb-4">High-end UI interactions and transitions.</p>
                <p className="font-bold text-[#411b3f]">£140+</p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* === HOW IT WORKS === */}
        <FadeIn>
          <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-[#f9fafb] to-[#eef2f6]">
            <div className="max-w-6xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-extrabold text-[#102f35] mb-4">
                🛠 Strategic Process
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A streamlined workflow focused on clarity and collaboration.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">
              {[
                { step: "1", title: "Discovery", desc: "Strategy call to define goals, audience, and design direction." },
                { step: "2", title: "Design & Brand", desc: "Bespoke layouts and brand assets created for approval." },
                { step: "3", title: "Technical Build", desc: "High-performance coding with SEO & speed prioritisation." },
                { step: "4", title: "Launch & Scale", desc: "Site goes live with training and optional growth retainers." },
              ].map((item) => (
                <div key={item.step} className="bg-white p-8 rounded-2xl shadow border text-center">
                  <div className="text-4xl font-extrabold text-[#411b3f] mb-3">{item.step}</div>
                  <p className="text-xl font-bold text-[#102f35] mb-2">{item.title}</p>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* === FAQ === */}
        <FadeIn>
          <section className="py-24 px-6 md:px-12 bg-white">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-4xl font-extrabold text-[#102f35] mb-4">
                ❓ Frequently Asked Questions
              </h2>
              <p className="text-gray-600">
                Common questions about my high-performance digital builds.
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              <details className="border rounded-lg p-6 shadow-sm">
                <summary className="font-semibold cursor-pointer">How long does a bespoke project take?</summary>
                <p className="mt-3 text-gray-600">Starter builds: 5 days. Growth: 10 days. Premium: 15–25 days depending on branding complexity.</p>
              </details>
              <details className="border rounded-lg p-6 shadow-sm">
                <summary className="font-semibold cursor-pointer">Do you manage the hosting?</summary>
                <p className="mt-3 text-gray-600">
                  I deploy your site to enterprise-grade platforms (like Vercel or AWS) and manage the setup so you never have to worry about downtime.
                </p>
              </details>
              <details className="border rounded-lg p-6 shadow-sm">
                <summary className="font-semibold cursor-pointer">Can I update content myself?</summary>
                <p className="mt-3 text-gray-600">Yes. I provide a full CMS (Content Management System) and training so you can edit text and images effortlessly.</p>
              </details>
              <details className="border rounded-lg p-6 shadow-sm">
                <summary className="font-semibold cursor-pointer">What is the payment structure?</summary>
                <p className="mt-3 text-gray-600">Standard structure is 50% upfront and 50% on launch. Custom milestones are available for Enterprise projects.</p>
              </details>
            </div>
          </section>
        </FadeIn>

      </main>
    </FadeIn>
  );
}