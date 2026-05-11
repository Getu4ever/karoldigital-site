"use client";

import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/**
 * Karol Digital Homepage
 * Updated with 2026 strategic fit tiers and high-performance branding.
 */
export default function Home() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Karol Digital",
    url: "https://www.karoldigital.co.uk",
    image: "https://www.karoldigital.co.uk/seo-cover.jpg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "London",
      postalCode: "SW20 8DN",
      addressCountry: "GB",
    },
    description:
      "Karol Digital provides high-performance web design, brand identity, and digital marketing for small businesses in the UK.",
  };

  return (
    <FadeIn>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <main className="min-h-screen bg-white text-gray-900">
        
        {/* === HERO SECTION === */}
        <motion.section
          className="relative h-[90vh] text-white overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/hero-cover.jpg"
            alt="Karol Digital Cover"
            fill
            priority
            className="object-cover brightness-[0.45]"
          />

          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 flex flex-col items-center text-center px-6 pt-40 md:pt-48">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg text-center">
              <span className="block text-white">
                Karol <span className="text-yellow-400">Digital</span> —
              </span>
              <span className="block text-2xl md:text-3xl text-gray-100 mt-3 font-medium">
                High-Performance Web Design & Branding
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-100 drop-shadow-md mb-8 max-w-2xl mx-auto">
              We build conversion-focused digital infrastructure and professional identities that help UK businesses outrank the competition.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-[#411b3f] hover:bg-[#102f35] text-white font-semibold px-8 py-3 rounded-full transition shadow-lg"
              >
                Start Your Project
              </Link>

              <Link
                href="/services"
                className="bg-white text-[#411b3f] hover:bg-gray-100 font-semibold px-8 py-3 rounded-full transition shadow-lg"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </motion.section>

        {/* === STRATEGIC INTRO SECTION === */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="py-24 px-6 md:px-12 bg-white text-gray-800"
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#411b3f] mb-6">
                Bespoke Digital Solutions{" "}
                <span className="text-[#102f35]">Built for Growth</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                <strong>Karol Digital</strong> provides affordable web design and digital marketing for UK small businesses. We build High-Performance Web Design & Branding, mobile-friendly, SEO-ready websites and deliver conversion-focused marketing that increases enquiries, bookings, and online sales.  
                <br /><br />
                We work with retail, e-commerce, professional services, hospitality, and construction firms across the UK. Our approach combines <strong>Strategic Brand Identity</strong>, local SEO dominance, and custom-coded architecture to improve visibility and generate measurable ROI.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-block bg-[#102f35] hover:bg-[#411b3f] text-white px-8 py-3 rounded-full font-semibold transition shadow-md"
                >
                  Request a Strategy Call
                </Link>
              </div>
            </div>

            <div className="flex justify-center relative">
               <div className="absolute -inset-4 bg-yellow-400/10 rounded-full blur-3xl" />
              <Image
                src="/digital-marketing-bg.jpg"
                alt="Digital Marketing Service"
                width={500}
                height={400}
                className="relative rounded-2xl shadow-2xl w-full max-w-md object-cover"
              />
            </div>
          </div>
        </motion.section>

        {/* === WEB PRICING PACKAGES === */}
        <FadeIn>
          <section className="py-24 px-6 md:px-12 bg-gray-50">
            <div className="max-w-7xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#102f35] mb-4">
                💼 Performance Web Packages
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Transparent pricing for high-performance websites. No hidden fees.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {/* STARTER */}
              <div className="bg-white shadow-lg rounded-2xl p-8 border-t-4 border-[#411b3f] flex flex-col h-full hover:shadow-2xl transition-all">
                <h3 className="text-2xl font-bold text-[#411b3f] text-center mb-2">Starter</h3>
                <p className="text-xs text-center text-gray-500 mb-6 uppercase tracking-wider font-bold">Foundation Build</p>
                <ul className="space-y-3 text-gray-700 mb-8 flex-grow text-sm">
                  <li>✔ 5–7 Optimized Pages</li>
                  <li>✔ Mobile Responsive</li>
                  <li>✔ Basic SEO Setup</li>
                  <li>✔ Contact Form Integration</li>
                  <li>✔ Standard Performance</li>
                </ul>
                <p className="text-xl font-extrabold text-[#102f35] text-center mb-6">£900–£1,500</p>
                <Link href="/contact" className="text-center bg-gray-100 hover:bg-[#411b3f] hover:text-white text-[#411b3f] py-3 rounded-full font-bold transition">
                  Get Started
                </Link>
              </div>

              {/* GROWTH */}
              <div className="bg-white shadow-lg rounded-2xl p-8 border-t-4 border-[#102f35] flex flex-col h-full hover:shadow-2xl transition-all">
                <h3 className="text-2xl font-bold text-[#102f35] text-center mb-2">Growth</h3>
                <p className="text-xs text-center text-gray-500 mb-6 uppercase tracking-wider font-bold">Scaling Strategy</p>
                <ul className="space-y-3 text-gray-700 mb-8 flex-grow text-sm">
                  <li>✔ Up to 10 Pages</li>
                  <li>✔ Full On-page SEO</li>
                  <li>✔ Conversion-focused UX</li>
                  <li>✔ Basic AI Chatbot</li>
                  <li>✔ Speed Optimization</li>
                </ul>
                <p className="text-xl font-extrabold text-[#102f35] text-center mb-6">£1,800–£3,000</p>
                <Link href="/contact" className="text-center bg-[#102f35] hover:bg-[#411b3f] text-white py-3 rounded-full font-bold transition">
                  Go Growth
                </Link>
              </div>

              {/* PREMIUM */}
              <div className="relative bg-white shadow-2xl rounded-2xl p-8 border-t-4 border-yellow-400 scale-105 z-10 flex flex-col h-full ring-2 ring-yellow-400/20">
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-yellow-400 text-[#102f35] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Best ROI
                </div>
                <h3 className="text-2xl font-bold text-[#102f35] text-center mb-2">Premium</h3>
                <p className="text-xs text-center text-gray-500 mb-6 uppercase tracking-wider font-bold">Full Identity & Sales</p>
                <ul className="space-y-3 text-gray-700 mb-8 flex-grow text-sm">
                  <li className="font-bold">✔ Bespoke Brand Identity</li>
                  <li>✔ 10-15+ Custom Pages</li>
                  <li>✔ Advanced Custom Coding</li>
                  <li>✔ Advanced AI Integration</li>
                  <li>✔ Sales Copywriting</li>
                </ul>
                <p className="text-xl font-extrabold text-[#102f35] text-center mb-6">£3,500–£6,000</p>
                <Link href="/contact" className="text-center bg-[#102f35] hover:bg-[#411b3f] text-white py-3 rounded-full font-bold transition shadow-md">
                  Go Premium
                </Link>
              </div>

              {/* ENTERPRISE */}
              <div className="bg-white shadow-lg rounded-2xl p-8 border-t-4 border-[#102f35] flex flex-col h-full hover:shadow-2xl transition-all">
                <h3 className="text-2xl font-bold text-[#102f35] text-center mb-2">Enterprise</h3>
                <p className="text-xs text-center text-gray-500 mb-6 uppercase tracking-wider font-bold">Custom Logic</p>
                <ul className="space-y-3 text-gray-700 mb-8 flex-grow text-sm">
                  <li>✔ Fully Custom App Logic</li>
                  <li>✔ Deep CRM Integration</li>
                  <li>✔ Multi-user Infrastructure</li>
                  <li>✔ Advanced E-commerce</li>
                  <li>✔ Priority Tech Support</li>
                </ul>
                <p className="text-xl font-extrabold text-[#411b3f] text-center mb-6">From £6,500</p>
                <Link href="/contact" className="text-center border-2 border-[#102f35] hover:bg-[#102f35] hover:text-white text-[#102f35] py-3 rounded-full font-bold transition">
                  Request Quote
                </Link>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* === MARKETING & RETAINERS === */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="py-24 px-6 md:px-12 bg-white"
        >
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-extrabold text-[#102f35] mb-4">
              📱 Growth & Maintenance
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional management to keep your platform secure and visible.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 text-center border hover:border-[#411b3f] transition-all">
              <h3 className="text-xl font-bold text-[#411b3f] mb-3">Paid Advertising</h3>
              <p className="text-gray-600 mb-4 text-sm">Google Ads and Social Meta campaigns managed for maximum leads.</p>
              <p className="font-extrabold text-[#102f35] mb-4">From £250/mo</p>
              <Link href="/services/social-media" className="text-[#102f35] font-bold underline">Learn More</Link>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center border hover:border-[#102f35] transition-all">
              <h3 className="text-xl font-bold text-[#102f35] mb-3">SEO & Content</h3>
              <p className="text-gray-600 mb-4 text-sm">Ongoing keyword dominance and high-authority backlink strategy.</p>
              <p className="font-extrabold text-[#411b3f] mb-4">From £450/mo</p>
              <Link href="/services/digital-marketing" className="text-[#102f35] font-bold underline">Learn More</Link>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center border hover:border-[#102f35] transition-all">
              <h3 className="text-xl font-bold text-[#102f35] mb-3">Tech Maintenance</h3>
              <p className="text-gray-600 mb-4 text-sm">Bi-weekly updates, security patches, and minor UI revisions.</p>
              <p className="font-extrabold text-[#411b3f] mb-4">From £200/mo</p>
              <Link href="/contact" className="text-[#102f35] font-bold underline">Request Maintenance</Link>
            </div>
          </div>
        </motion.section>

        {/* === BRAND VALUE SECTION === */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="py-24 px-6 md:px-12 bg-[#102f35] text-white"
        >
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">
              Why Partner With <span className="text-yellow-400">Karol Digital</span>?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We provide the technical muscle and creative clarity of a large agency, with the agility and transparency of a dedicated partner.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <div className="p-8 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-yellow-400 mb-2">Technical Excellence</h3>
              <p className="text-gray-300">Fast, custom-coded websites built with modern stacks (Next.js/React) for superior performance.</p>
            </div>

            <div className="p-8 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-yellow-400 mb-2">Strategy-First</h3>
              <p className="text-gray-300">We don’t just "make websites"—we design conversion journeys that drive actual revenue.</p>
            </div>

            <div className="p-8 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-yellow-400 mb-2">Scalable Partnership</h3>
              <p className="text-gray-300">From solo-founder starters to enterprise infrastructure, we scale with your business.</p>
            </div>
          </div>
        </motion.section>

        {/* === CTA SECTION === */}
        <section className="py-20 text-center px-6">
          <h2 className="text-4xl font-extrabold text-[#102f35] mb-6">Ready to dominate your market?</h2>
          <Link href="/contact" className="inline-block bg-[#411b3f] hover:bg-[#102f35] text-white font-bold px-10 py-4 rounded-full transition-all scale-110 hover:scale-115">
            Book Your Free Consultation
          </Link>
        </section>

      </main>
    </FadeIn>
  );
}