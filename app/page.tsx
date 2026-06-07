"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/**
 * Karol Digital - Final Polished Homepage (2026 SEO Optimized)
 * Word count: ~980 words
 */
export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Karol Digital",
    url: "https://www.karoldigital.co.uk",
    description: "High-performance web design and branding agency for UK businesses.",
  };

  const faqs = [
    {
      q: "How does your 'Helpful-First' strategy impact my SEO?",
      a: "By focusing on content that genuinely answers customer pain points, we help search engines see your site as a high-authority resource — crucial for ranking in 2026.",
    },
    {
      q: "Do you work with existing WordPress sites?",
      a: "Yes. We specialise in optimising or migrating existing platforms to modern, high-performance architectures without losing your brand identity.",
    },
    {
      q: "What makes your approach different?",
      a: "We build lean, custom-coded Next.js websites that eliminate technical debt and deliver exceptional speed, security, and conversion performance.",
    },
    {
      q: "How do you ensure the site actually converts?",
      a: "We engineer strategic user journeys with clear calls-to-action, psychological triggers, and data-informed design to turn visitors into clients.",
    },
    {
      q: "How long does a project typically take?",
      a: "Most complete high-performance web design & branding projects take 3 to 6 weeks, depending on scope. We prioritise quality and thorough testing.",
    },
  ];

  return (
    <FadeIn>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      <main className="min-h-screen bg-white text-gray-900">
        
        {/* === HERO SECTION === */}
        <motion.section
          className="relative h-[120vh] flex items-center justify-center text-white overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/hero-cover.jpg"
            alt="Karol Digital - High-Performance Web Design & Branding"
            fill
            priority
            className="object-cover brightness-[0.40]"
          />
          <div className="relative z-10 text-center px-6 max-w-5xl">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              High-Performance <span className="text-yellow-400">Web Design</span> &amp;<br />
              <span className="text-yellow-400">Branding</span> for UK Businesses
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
              We don’t just build websites. We engineer digital assets that generate leads, build trust, and grow your business.
            </p>
            <Link 
              href="/contact" 
              className="bg-[#411b3f] hover:bg-[#102f35] text-white font-bold px-12 py-5 rounded-full text-lg transition shadow-xl inline-block"
            >
              Claim Your Free Growth Blueprint
            </Link>
          </div>
        </motion.section>

        {/* === TRUST GAP SECTION === */}
        <section className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#102f35] mb-8 leading-tight">
                Your Website Is Either Your<br />Best Asset or a Ghost Town
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                In 2026, speed, trust, and clarity win. If your site doesn’t load instantly and clearly communicate your value, you’re losing customers every single day.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                At <strong>Karol Digital</strong>, we create high-performance web design &amp; branding that turns visitors into loyal clients.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <Image
                src="/karol-digital-home.jpg"
                alt="Karol Digital High-Performance Web Design & Branding"
                width={520}
                height={420}
                className="rounded-2xl shadow-2xl w-full"
              />
              <p className="text-center text-sm text-gray-500">
                London-based • High-Performance Web Design &amp; Branding
              </p>
            </div>
          </div>
        </section>

        {/* === STATS VISUAL BREAK === */}
        <section className="py-16 bg-[#102f35] text-white">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-6">
            <div>
              <div className="text-5xl font-bold text-yellow-400">100%</div>
              <p className="mt-2">Custom Code</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-yellow-400">98+</div>
              <p className="mt-2">PageSpeed Score</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-yellow-400">3-6</div>
              <p className="mt-2">Weeks Delivery</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-yellow-400">UK</div>
              <p className="mt-2">Focused Expertise</p>
            </div>
          </div>
        </section>

        {/* === EXTENDED SEO CONTENT SECTION (High word count) === */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto text-gray-800 leading-relaxed space-y-8">
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#102f35]">
              Why High-Performance Web Design &amp; Branding Matters in 2026
            </h2>
            
            <p>
              The digital landscape has changed dramatically. Search engines now reward websites that deliver genuine value, lightning-fast experiences, and strong, memorable branding. At Karol Digital, our <strong>high-performance web design &amp; branding</strong> approach combines cutting-edge Next.js technology with strategic brand storytelling that truly resonates with UK audiences.
            </p>
            
            <p>
              We build websites that achieve exceptional Core Web Vitals scores while creating powerful first impressions. Whether you’re a local service business in London, an e-commerce brand, or a professional services firm, our strategic branding helps you stand out and build instant trust in a competitive market.
            </p>

            {/* Image Break */}
            <div className="pt-8 pb-6">
              <Image
                src="/karol-digital-home-02.jpg"
                alt="Karol Digital - High-Performance Web Design & Branding in London"
                width={800}
                height={500}
                className="rounded-2xl shadow-xl w-full object-cover"
              />
              <p className="text-center text-sm text-gray-500 mt-3">
                London-based • High-Performance Web Design &amp; Branding
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-[#102f35]">The Power of Strategic Branding</h3>
            <p>
              Your brand is far more than a logo — it’s the emotional connection customers feel when they interact with your business online. Our branding services include professional visual identity development, consistent tone-of-voice guidelines, and cohesive messaging across all touchpoints. This creates a unified experience that reinforces trust and significantly increases conversion rates.
            </p>

            <h3 className="text-2xl font-semibold text-[#102f35]">Conversion-Focused Digital Strategy</h3>
            <p>
              We don’t just design beautiful websites — we engineer them to sell. Every button, headline, navigation path, and call-to-action is strategically placed based on user behaviour research. Our data-informed approach ensures your site guides visitors naturally toward booking calls, making purchases, or submitting enquiries.
            </p>

            <p>
              With deep experience serving UK businesses — from London to regional towns — our high-performance web design &amp; branding solutions are tailored to help you dominate your niche, improve search rankings, and achieve sustainable growth. We understand the unique challenges faced by British businesses and design solutions that work effectively within the UK market context.
            </p>

            <h3 className="text-2xl font-semibold text-[#102f35]">The Technical Advantage</h3>
            <p>
              Modern websites must be fast, secure, and scalable. Using Next.js and advanced performance optimisation techniques, we deliver websites that load in under one second and consistently achieve 95+ scores on Google PageSpeed Insights. This technical excellence not only improves user experience but also sends strong positive signals to search engines.
            </p>

            <p>
              From semantic HTML and proper schema markup to mobile-first responsive design and accessibility compliance, every detail is carefully considered. We combine this technical foundation with creative branding that makes your business memorable and trustworthy in a crowded digital marketplace.
            </p>

            <div className="pt-6">
              <Link 
                href="/contact" 
                className="inline-block bg-[#102f35] hover:bg-[#411b3f] text-white font-bold px-10 py-4 rounded-full transition shadow-lg"
              >
                Get Your Free Growth Blueprint →
              </Link>
            </div>
          </div>
        </section>

        {/* === TESTIMONIALS === */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-[#102f35] mb-16">
              Trusted by UK Market Leaders
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-[#411b3f]">
                <p className="italic text-gray-600 mb-6">"Karol Digital transformed our digital presence. The high-performance web design and branding delivered immediate results."</p>
                <p className="font-bold text-[#102f35]">— 1st Call UK Immigration</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-[#102f35]">
                <p className="italic text-gray-600 mb-6">"A true lead generation engine. The combination of performance and branding has been game-changing."</p>
                <p className="font-bold text-[#102f35]">— 1st Call UK Finance</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-yellow-400">
                <p className="italic text-gray-600 mb-6">"Professional, fast, and results-driven. They perfectly captured our brand and built a high-converting website."</p>
                <p className="font-bold text-[#102f35]">— Food Mama's Kitchen</p>
              </div>
            </div>
          </div>
        </section>

        {/* === SERVICE TIERS === */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#102f35] mb-4">Choose Your Growth Path</h2>
            <p className="text-gray-600 text-lg">High-performance web design &amp; branding solutions for every stage</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-gray-200 rounded-2xl hover:shadow-xl transition">
              <h3 className="text-2xl font-bold mb-4">Foundation Build</h3>
              <p className="text-gray-600 mb-8">Ideal for businesses entering the digital space with authority.</p>
              <Link href="/contact" className="block text-center py-3 bg-gray-100 rounded-full font-bold">Get Started</Link>
            </div>
            <div className="bg-[#102f35] p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Scaling Strategy</h3>
              <p className="text-gray-300 mb-8">For ambitious brands ready to dominate their market.</p>
              <Link href="/contact" className="block text-center py-3 bg-yellow-400 text-[#102f35] rounded-full font-bold">Scale Now</Link>
            </div>
            <div className="bg-white p-8 border border-gray-200 rounded-2xl hover:shadow-xl transition">
              <h3 className="text-2xl font-bold mb-4">Full Identity &amp; Sales</h3>
              <p className="text-gray-600 mb-8">Complete brand transformation and high-converting digital presence.</p>
              <Link href="/contact" className="block text-center py-3 bg-[#411b3f] text-white rounded-full font-bold">Claim Strategy Session</Link>
            </div>
          </div>
        </section>

        {/* === PARTNERS === */}
        <section className="py-20 px-6 md:px-12 bg-gray-50 border-t border-b border-gray-200">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#102f35] mb-12">Proud Partners</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <Link href="https://sbc-marketing.co.uk/" target="_blank" className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition flex items-center justify-center h-[180px]">
                <Image src="/sbc-marketing-logo.jpg" alt="SBC Marketing" width={220} height={80} />
              </Link>
              <Link href="https://www.1stcalluk.co.uk/" target="_blank" className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition flex items-center justify-center h-[180px]">
                <Image src="/1stcalluk-logo.jpg" alt="1st Call UK Group" width={220} height={80} />
              </Link>
            </div>
          </div>
        </section>

        {/* === FAQ === */}
        <section className="py-24 bg-gray-50 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-[#102f35] mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full text-left p-6 font-bold text-[#102f35] flex justify-between items-center hover:bg-gray-50"
                  >
                    {faq.q}
                    <span className="text-2xl">{openIndex === index ? "−" : "+"}</span>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-6 pb-6 text-gray-600"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === FINAL CTA === */}
        <section className="py-28 bg-gray-900 text-white text-center px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              Let’s build a high-performance website and brand that actually grows your business.
            </p>
            <Link 
              href="/contact" 
              className="bg-yellow-400 hover:bg-yellow-500 text-[#102f35] font-bold px-14 py-5 rounded-full text-lg transition shadow-xl inline-block"
            >
              Book Your Free Consultation
            </Link>
          </div>
        </section>
      </main>
    </FadeIn>
  );
}