"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/**
 * Karol Digital Homepage
 * Optimized for 2026 Conversion Strategies, Helpful-First Authority, and Deep Technical Trust.
 */
export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Karol Digital",
    url: "https://www.karoldigital.co.uk",
    description: "High-performance web design and conversion-focused digital strategy for UK businesses.",
  };

  const faqs = [
    {
      q: "How does your 'Helpful-First' strategy impact my SEO?",
      a: "By focusing on content that genuinely answers your customer's pain points, we signal to search engines that your site is a high-authority resource, which is the primary factor for ranking in 2026."
    },
    {
      q: "Do you work with my existing WordPress site?",
      a: "Yes. We specialize in migrating or optimizing existing platforms to high-performance architectures, ensuring you keep your brand identity while gaining modern conversion speed and security."
    },
    {
      q: "What makes your engineering approach different from standard web agencies?",
      a: "Most agencies rely on bloated templates. We focus on lean, custom-coded Next.js architectures that eliminate 'technical debt,' resulting in faster load times and better core web vital scores."
    },
    {
      q: "How do you ensure my site actually converts visitors into clients?",
      a: "We move beyond aesthetics to engineer conversion funnels. This includes strategic UI placement, psychological triggers, and clear, actionable 'Growth Blueprints' that guide visitors toward contact."
    },
    {
      q: "How long does a typical digital transformation take?",
      a: "Depending on the scope, a complete high-performance overhaul typically ranges from 3 to 6 weeks. We prioritize quality engineering and testing to ensure your site is a reliable asset from day one."
    }
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
          className="relative h-[90vh] flex items-center justify-center text-white overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/hero-cover.jpg"
            alt="Karol Digital Strategy"
            fill
            priority
            className="object-cover brightness-[0.40]"
          />
          <div className="relative z-10 text-center px-6 max-w-5xl">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Stop Chasing Traffic. <br/><span className="text-yellow-400">Start Closing Clients.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
              We engineer high-performance websites and conversion systems that turn your digital presence into your most profitable salesperson.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-[#411b3f] hover:bg-[#102f35] text-white font-bold px-10 py-4 rounded-full transition shadow-lg">
                Claim My Growth Blueprint
              </Link>
            </div>
          </div>
        </motion.section>

        {/* === THE TRUST GAP & VALUE PROP === */}
        <section className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#102f35] mb-6">
                Your Website is Either Your <br/>Best Asset or a Ghost Town.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                In 2026, a pretty website isn't enough. Modern customers are skeptical and impatient. If your site doesn't load instantly, communicate your value in five seconds, and build immediate trust, you are losing revenue every single day.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Karol Digital, we specialize in bridging the "Trust Gap." We don't just build sites; we architect digital sales engines that convert visitors into loyal clients through strategic design, performance optimization, and helpful, expert-driven content.
              </p>
            </div>
            <div className="relative flex justify-center">
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
        </section>

        {/* === TESTIMONIALS === */}
        <section className="py-24 bg-gray-50 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#102f35] mb-16">Trusted by UK Market Leaders</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-[#411b3f]">
                <p className="italic text-gray-600 mb-6">"Karol Digital completely overhauled our digital presence. Since the launch, our inquiry quality has jumped significantly. The technical expertise is unmatched."</p>
                <p className="font-bold text-[#102f35]">— 1st Call UK Immigration</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-[#102f35]">
                <p className="italic text-gray-600 mb-6">"Our new platform is not just a website; it is a financial lead generation engine. The attention to detail in the UX and SEO is exactly what we needed."</p>
                <p className="font-bold text-[#102f35]">— 1st Call UK Finance</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-yellow-400">
                <p className="italic text-gray-600 mb-6">"Professional, fast, and results-focused. They understood our brand identity perfectly and translated it into a high-converting digital storefront."</p>
                <p className="font-bold text-[#102f35]">— Food Mama's Kitchen</p>
              </div>
            </div>
          </div>
        </section>

        {/* === ARCHITECTURE TIERS === */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#102f35] mb-4">Strategic Solutions Architecture</h2>
            <p className="text-gray-600 text-lg">Engineered for growth, regardless of your current business size.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-gray-200 rounded-2xl hover:shadow-xl transition">
              <h3 className="text-2xl font-bold mb-4">Foundation Build</h3>
              <p className="text-gray-600 mb-6">For enterprises entering the digital space with authority.</p>
              <Link href="/contact" className="block text-center py-3 bg-gray-100 rounded-full font-bold">Get My Growth Blueprint</Link>
            </div>
            <div className="bg-[#102f35] p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Scaling Strategy</h3>
              <p className="text-gray-300 mb-6">For brands ready to dominate search and maximize funnels.</p>
              <Link href="/contact" className="block text-center py-3 bg-yellow-400 text-[#102f35] rounded-full font-bold">Scale My Business Now</Link>
            </div>
            <div className="bg-white p-8 border border-gray-200 rounded-2xl hover:shadow-xl transition">
              <h3 className="text-2xl font-bold mb-4">Full Identity & Sales</h3>
              <p className="text-gray-600 mb-6">The premier choice for market disruption and total control.</p>
              <Link href="/contact" className="block text-center py-3 bg-[#411b3f] text-white rounded-full font-bold">Claim My Strategy Session</Link>
            </div>
          </div>
        </section>

        {/* === PARTNERSHIP SECTION === */}
        <section className="py-20 px-6 md:px-12 bg-gray-50 border-t border-b border-gray-200">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#102f35] mb-12">Partner with SBC Marketing and 1st Call UK Group</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <Link href="https://sbc-marketing.co.uk/" target="_blank" className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition flex items-center justify-center h-[180px]">
                <Image src="/sbc-marketing-logo.jpg" alt="SBC Marketing" width={200} height={80} />
              </Link>
              <Link href="https://www.1stcalluk.co.uk/" target="_blank" className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition flex items-center justify-center h-[180px]">
                <Image src="/1stcalluk-logo.jpg" alt="1st Call UK Group" width={200} height={80} />
              </Link>
            </div>
          </div>
        </section>

        {/* === EXTENDED PHILOSOPHY: THE 2026 IMPERATIVE === */}
        <section className="py-24 bg-white px-6">
          <div className="max-w-4xl mx-auto text-gray-800 leading-relaxed space-y-8">
            <h2 className="text-4xl font-bold text-[#102f35]">The 2026 Digital Imperative: From Brochure to Business Asset</h2>
            <p>
              In an era dominated by AI-driven search, voice-integrated assistants, and increasingly volatile consumer behavior, the traditional "brochure" website is effectively obsolete. To survive and thrive in 2026, your digital infrastructure must evolve into a proactive, high-intelligence commercial asset. At Karol Digital, we operate under a "helpful-first" methodology. This means every line of code, every UI design decision, and every word of content is obsessively crafted to solve your customers' problems before they even think to voice them.
            </p>
            <p>
              We view your website as a complex, living ecosystem. By leveraging advanced React and Next.js frameworks, we deliver lightning-fast load speeds that search engines prioritize and users demand. We complement this with semantic schema markup that feeds AI search engines the precise data they need to position you as the definitive authority in your industry. Whether you are a specialized professional service, a retail conglomerate, or a national construction firm, our goal remains constant: to eliminate friction and guide your visitors through a deliberate, high-conversion customer journey.
            </p>
            
            <h3 className="text-2xl font-bold text-[#102f35]">Why Engineering Matters: Eliminating Bloat</h3>
            <p>
              The most common mistake we see in modern business design is the reliance on "bloated" templates and heavy, third-party plugin stacks. These shortcuts sacrifice long-term performance for short-term visual ease. They may look functional for a week, but they eventually degrade into slow, insecure, and unmaintainable technical debt. We choose the harder path: custom-coded, bespoke instances built for performance, security, and scalability. 
            </p>
            <p>
              By opting for a custom-engineered approach, we ensure your site passes Core Web Vitals with flying colors, significantly lowering your bounce rates and boosting your organic rankings. We focus on lean, modular codebases that keep your backend secure against emerging threats and ensure your site is ready to scale when you are. Your business needs a partner who understands that technical excellence is the bedrock of marketing success. By integrating intelligent lead pipelines and automated conversational systems, we ensure that your website isn't just taking up space—it’s actively working to capture value, qualify inquiries, and drive revenue while you focus on running your business.
            </p>
            <p>
              Choosing Karol Digital means choosing a partner who understands the nuance between "being online" and "achieving digital dominance." We are not just service providers; we are strategic engineers focused on your bottom line.
            </p>
          </div>
        </section>

        {/* === AUTHORITY FAQ SECTION (Accordion) === */}
        <section className="py-24 bg-gray-50 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#102f35] mb-12">Expert Answers for Modern Businesses</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full text-left p-6 font-bold text-[#102f35] flex justify-between items-center"
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

        {/* FINAL CTA */}
        <section className="py-24 bg-gray-900 text-white text-center px-6">
          <h2 className="text-4xl font-bold mb-6">Ready to stop chasing vanity traffic and start closing deals?</h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">Let’s conduct a comprehensive architectural assessment of your current presence and unlock your site's true potential.</p>
          <Link href="/contact" className="bg-yellow-400 hover:bg-yellow-500 text-[#102f35] font-bold px-10 py-4 rounded-full transition shadow-xl">
            Book My Consultation
          </Link>
        </section>
      </main>
    </FadeIn>
  );
}