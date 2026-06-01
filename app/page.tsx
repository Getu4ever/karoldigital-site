"use client";

import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/**
 * Karol Digital Homepage
 * Updated with 2026 strategic fit tiers and high-performance branding.
 * Enterprise-grade presentation without explicit pricing modules.
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
                Explore Services
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
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                <strong>Karol Digital</strong> provides engineered web design and premium digital marketing tailored specifically for small to mid-sized UK operations. We formulate High-Performance Web Design & Branding frameworks, delivering mobile-first, semantic, and deeply optimized technical solutions that consistently amplify inbound customer acquisitions, lead qualification systems, and online transactional values.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our portfolio spans hyper-competitive sectors, partnering with retail conglomerates, high-growth e-commerce ventures, elite professional services, corporate hospitality groups, and national construction contractors across the United Kingdom. We fuse <strong>Strategic Brand Identity</strong> protocols with unmatched local SEO engineering and modular front-end code bases. This calculated methodology guarantees long-term search vertical authority, minimizes technical overhead, and secures an uncompromising return on your digital capital.
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

        {/* === STRATEGIC SOLUTIONS ARCHITECTURE === */}
        <FadeIn>
          <section className="py-24 px-6 md:px-12 bg-gray-50">
            <div className="max-w-7xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#102f35] mb-4">
                💼 Performance Web Infrastructure
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Engineered digital architecture designed to scale with your enterprise, capture high-value market intent, and maximize operational efficiency.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {/* STARTER */}
              <div className="bg-white shadow-lg rounded-2xl p-8 border-t-4 border-[#411b3f] flex flex-col h-full hover:shadow-2xl transition-all">
                <h3 className="text-2xl font-bold text-[#411b3f] text-center mb-2">Foundation Build</h3>
                <p className="text-xs text-center text-gray-500 mb-6 uppercase tracking-wider font-bold">Market Entry Optimization</p>
                <p className="text-sm text-gray-600 mb-6 text-center">
                  Perfect for developing enterprises seeking a clean, compliant, and highly interactive digital anchor capable of processing local customer queries efficiently.
                </p>
                <ul className="space-y-3 text-gray-700 mb-8 flex-grow text-sm">
                  <li>✔ 5–7 Fully Optimized Dynamic Pages</li>
                  <li>✔ Fluidly Responsive Across All Screen Sizes</li>
                  <li>✔ Semantic On-Page SEO Core Parameters</li>
                  <li>✔ Secure Lead Form & CRM Endpoint Integration</li>
                  <li>✔ Lightning-Fast Component Load Protocols</li>
                </ul>
                <Link href="/contact" className="text-center bg-gray-100 hover:bg-[#411b3f] hover:text-white text-[#411b3f] py-3 rounded-full font-bold transition">
                  Initiate Build
                </Link>
              </div>

              {/* GROWTH */}
              <div className="bg-white shadow-lg rounded-2xl p-8 border-t-4 border-[#102f35] flex flex-col h-full hover:shadow-2xl transition-all">
                <h3 className="text-2xl font-bold text-[#102f35] text-center mb-2">Scaling Strategy</h3>
                <p className="text-xs text-center text-gray-500 mb-6 uppercase tracking-wider font-bold">Market Dominance Architecture</p>
                <p className="text-sm text-gray-600 mb-6 text-center">
                  Tailored for aggressively expanding brands looking to capture broad search queries, implement deep automation, and optimize end-user engagement funnels.
                </p>
                <ul className="space-y-3 text-gray-700 mb-8 flex-grow text-sm">
                  <li>✔ Up to 10 Bespoke Content Architectures</li>
                  <li>✔ Advanced Search Engine Positioning Blueprint</li>
                  <li>✔ Specialized High-Conversion UX Frameworks</li>
                  <li>✔ Intelligent AI Automations & Conversational Systems</li>
                  <li>✔ Global Edge CDN Asset Optimization</li>
                </ul>
                <Link href="/contact" className="text-center bg-[#102f35] hover:bg-[#411b3f] text-white py-3 rounded-full font-bold transition">
                  Deploy Strategy
                </Link>
              </div>

              {/* PREMIUM */}
              <div className="relative bg-white shadow-2xl rounded-2xl p-8 border-t-4 border-yellow-400 scale-105 z-10 flex flex-col h-full ring-2 ring-yellow-400/20">
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-yellow-400 text-[#102f35] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Maximum Impact
                </div>
                <h3 className="text-2xl font-bold text-[#102f35] text-center mb-2">Full Identity & Sales</h3>
                <p className="text-sm text-gray-600 mb-6 text-center">
                  Our premier option for absolute disruption. Integrates customized visual branding vectors, full copywriting, and sophisticated, secure logic modules.
                </p>
                <ul className="space-y-3 text-gray-700 mb-8 flex-grow text-sm">
                  <li className="font-bold">✔ High-Fidelity Custom Brand Systems</li>
                  <li>✔ Unlimited Modular Sub-Pages & Layouts</li>
                  <li>✔ Fully Custom React/Next.js Code Compilations</li>
                  <li>✔ Direct Pipeline AI and Agent Processing Integrations</li>
                  <li>✔ Psychological & Conversion-First Technical Copywriting</li>
                </ul>
                <Link href="/contact" className="text-center bg-[#102f35] hover:bg-[#411b3f] text-white py-3 rounded-full font-bold transition shadow-md">
                  Secure Consultation
                </Link>
              </div>

              {/* ENTERPRISE */}
              <div className="bg-white shadow-lg rounded-2xl p-8 border-t-4 border-[#102f35] flex flex-col h-full hover:shadow-2xl transition-all">
                <h3 className="text-2xl font-bold text-[#102f35] text-center mb-2">Custom Logic</h3>
                <p className="text-xs text-center text-gray-500 mb-6 uppercase tracking-wider font-bold">Complex Systems Management</p>
                <p className="text-sm text-gray-600 mb-6 text-center">
                  Designed for heavy operational demands requiring bespoke backend databases, specialized user access layers, and massive database capabilities.
                </p>
                <ul className="space-y-3 text-gray-700 mb-8 flex-grow text-sm">
                  <li>✔ Custom Web App Logic and Cloud Databases</li>
                  <li>✔ Two-Way Complex ERP & CRM Synchronizations</li>
                  <li>✔ Multi-tiered Role and User Infrastructure</li>
                  <li>✔ High-Volume Transactional E-commerce Units</li>
                  <li>✔ Dedicated Architectural Support SLA Access</li>
                </ul>
                <Link href="/contact" className="text-center border-2 border-[#102f35] hover:bg-[#102f35] hover:text-white text-[#102f35] py-3 rounded-full font-bold transition">
                  Request Technical Audit
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
              📱 Growth, Visibility & Continuous Maintenance
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Long-term proactive engineering and audience generation strategies to ensure continuous uptime, bulletproof threat prevention, and predictable lead generation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 text-center border hover:border-[#411b3f] transition-all">
              <h3 className="text-xl font-bold text-[#411b3f] mb-3">Paid Advertising Campaigns</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Hyper-targeted customer acquisition via Google Search Network, Bing Ads, and Social Meta channels. Every campaign is meticulously structured around strict CPA tracking parameters, absolute conversion analytics, and continuous A/B test variations to eliminate wasted ad spend.
              </p>
              <Link href="/services/social-media" className="text-[#102f35] font-bold underline">Explore Campaign Frameworks</Link>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center border hover:border-[#102f35] transition-all">
              <h3 className="text-xl font-bold text-[#102f35] mb-3">SEO & Content Architecture</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Persistent organic visibility engineered through data-supported search optimization. We craft high-authority digital assets, conduct thorough semantic entity mapping, design structured silos, and deploy premium backlink acquisition pipelines to capture dominant commercial intent.
              </p>
              <Link href="/services/digital-marketing" className="text-[#102f35] font-bold underline">Explore SEO Solutions</Link>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center border hover:border-[#102f35] transition-all">
              <h3 className="text-xl font-bold text-[#102f35] mb-3">Technical Platform Maintenance</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Comprehensive multi-layered platform oversight including routine dependency updates, threat vulnerability testing, programmatic daily server snapshots, schema microdata revisions, performance optimizations, and agile user-interface enhancements.
              </p>
              <Link href="/contact" className="text-[#102f35] font-bold underline">Request Dedicated SLA Scope</Link>
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
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              We provide the deep engineering expertise and strategic creative execution of a top-tier national agency, combined with the extreme responsiveness, agility, and absolute transparency of an invested corporate partner.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <div className="p-8 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-yellow-400 mb-2">Technical Excellence</h3>
              <p className="text-gray-300 leading-relaxed">
                We design clean, maintainable code architectures using React, Next.js, and specialized CSS compilers. Your site runs lean, loads instantaneously, resists security threats, and offers exceptional core web vitals.
              </p>
            </div>

            <div className="p-8 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-yellow-400 mb-2">Strategy-First Execution</h3>
              <p className="text-gray-300 leading-relaxed">
                We avoid generic templates and shallow designs. Every interactive element, information silo, page layout, and backend system we build is meticulously planned to drive actionable inquiries and measurable revenue.
              </p>
            </div>

            <div className="p-8 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-yellow-400 mb-2">Scalable Partnership</h3>
              <p className="text-gray-300 leading-relaxed">
                Our scalable methodology adapts seamlessly to your operational changes. We support growth transitions efficiently, moving platforms from initial setups to advanced, high-performance web systems.
              </p>
            </div>
          </div>
        </motion.section>
        
        {/* === PARTNERSHIP SECTION === */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="py-20 px-6 md:px-12 bg-white border-t border-gray-100"
        >
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#102f35] mb-4">
              Partner with SBC Marketing and 1st Call UK Group
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-sm md:text-base leading-relaxed">
              Through strategic cross-industry alliances, we combine expert digital execution with established corporate insights to deliver full-scale infrastructure for UK enterprises. This ecosystem unifies design performance with deep corporate strategy.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto items-center justify-items-center">
              {/* SBC Marketing */}
              <Link 
                href="https://sbc-marketing.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-[280px] p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center group h-[180px]"
              >
                <div className="relative w-full h-[80px] transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/sbc-marketing-logo.jpg"
                    alt="SBC Marketing Logo — Visit Website"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
              </Link>

              {/* 1st Call UK Group */}
              <Link 
                href="https://www.1stcalluk.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-[280px] p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center group h-[180px]"
              >
                <div className="relative w-full h-[80px] transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/1stcalluk-logo.jpg"
                    alt="1st Call UK Group Logo — Visit Website"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
              </Link>
            </div>
          </div>
        </motion.section>

        {/* === DEEP CORPORATE KNOWLEDGE PROFILE === */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="py-20 px-6 md:px-12 bg-gray-50 border-t border-b border-gray-200"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-[#102f35] mb-6">Elevating Digital Expectations for UK Businesses</h2>
            <p className="text-gray-700 text-base leading-relaxed mb-6 text-left">
              The contemporary UK digital ecosystem demands more than aesthetic templates. Modern search ranking algorithms heavily prioritize precise markup, layout stability, responsive interactions, and fast server execution. At Karol Digital, we address these challenges directly. We eliminate slow third-party visual plugins and build custom web instances tailored for optimal speed and search performance.
            </p>
            <p className="text-gray-700 text-base leading-relaxed text-left">
              Additionally, our design framework recognizes that digital visibility is ineffective without a strong conversion architecture. We balance complex backend systems with clean, accessible interface designs. By planning each navigation path around user trends and industry-validated UX paths, we turn standard visitors into loyal clients, keeping your company ahead of the competition.
            </p>
          </div>
        </motion.section>

        {/* === PROCESS TIMELINE (INTERACTIVE STEPS) === */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="py-24 px-6 md:px-12 bg-[#c2c2c2]/10"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#102f35] text-center mb-6">
              Our Proven Process
            </h2>

            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
              Success isn’t accidental; it’s engineered. We follow a clear, transparent, and iterative approach designed 
              to transform your digital presence into a high-performing asset. From initial research to post-launch 
              scaling, we ensure every decision is backed by data and aligned with your long-term commercial goals.
            </p>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {[
                {
                  step: "01",
                  title: "Discovery & Strategy",
                  text: "Every great project begins with deep immersion. We dive into your business model, identifying core user personas and competitive advantages. By auditing your existing data and defining clear KPIs, we build a strategic roadmap that ensures your new website doesn't just look beautiful, but serves as a precise tool for customer acquisition and market positioning.",
                },
                {
                  step: "02",
                  title: "Design & Development",
                  text: "This is where vision meets execution. Our design team crafts bespoke user experiences (UX) that guide visitors effortlessly toward conversion points. Simultaneously, our developers build on a foundation of clean, scalable code. We prioritise lightning-fast load speeds, mobile-first responsiveness, and intuitive content management systems that empower your team to make updates with ease.",
                },
                {
                  step: "03",
                  title: "Launch & Growth",
                  text: "Deployment is only the beginning of our partnership. After a rigorous pre-launch testing phase covering SEO, security, and cross-browser compatibility, we take your site live. Post-launch, we shift focus to continuous growth. Through detailed analytics, conversion rate optimisation (CRO), and ongoing technical support, we ensure your platform evolves alongside your business.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="group rounded-3xl border border-gray-200 bg-white p-8 lg:p-10 shadow-sm hover:shadow-2xl transition-all duration-300"
                >
                  <span className="text-6xl font-black text-[#411b3f]/10 group-hover:text-[#411b3f]/20 transition-colors duration-300">
                    {item.step}
                  </span>

                  <h3 className="mt-8 text-2xl font-bold text-[#102f35]">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-gray-600 text-base leading-7">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* === CTA SECTION === */}
        <section className="py-24 text-center px-6 bg-white">
          <h2 className="text-4xl font-extrabold text-[#102f35] mb-4">Ready to dominate your market?</h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-8 text-base">
            Get in touch with our team today for a comprehensive architectural assessment. Discover how we can optimize your performance, enhance your digital brand footprint, and increase your inbound conversions.
          </p>
          <Link href="/contact" className="inline-block bg-[#411b3f] hover:bg-[#102f35] text-white font-bold px-10 py-4 rounded-full transition-all scale-110 hover:scale-115 shadow-xl">
            Book Your Strategy Consultation
          </Link>
        </section>

      </main>
    </FadeIn>
  );
}