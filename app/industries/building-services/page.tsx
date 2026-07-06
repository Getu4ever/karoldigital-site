"use client";

import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Home, Layers, HardHat, ChevronRight, CheckCircle2, HelpCircle, Briefcase } from "lucide-react";

/**
 * BuildersWebDesign Page
 * Fully expanded for advanced UK SEO visibility while synchronizing header architecture.
 * Full code provided as requested.
 */
export default function BuildersWebDesign() {
  // JSON-LD Structured Data Schema for Local Industry Targeting
  const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Bespoke website Designing Services for Construction & Trades",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "GBP",
    "price": "0.00", // Replace with your actual base price if applicable
    "lowPrice": "500", // Add this minimum price
    "highPrice": "5000", // Add this maximum price
    "url": "https://www.karoldigital.co.uk/industries/building-services"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United Kingdom"
  },
  "category": "Web Design Services"
};

  return (
    <FadeIn>
      {/* Structural Schema Indexing Insertion */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      <main className="min-h-screen bg-white text-gray-900 font-sans">

        {/* === HERO: CONGRUENT HEADER LOGIC & TIGHTENED FOOTPRINT === */}
        <motion.section
          className="relative min-h-[75vh] md:min-h-[80vh] w-full flex flex-col items-center justify-center text-center text-white px-6 pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/hero-page-banner.jpg"
            alt="Custom Web Design and Local SEO Architecture for Builders and Contractors UK"
            fill
            priority
            className="object-cover brightness-[0.4]"
          />
          
          {/* Main Hero Content Box Container - Unified Max Width Footprint */}
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center justify-center">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-yellow-400 block mb-4">
              High-Performance Custom Next.js Systems for the Trade Sector
            </span>
            <h1 className="text-4xl sm:text-5xl font-black mb-6 tracking-tight leading-tight md:leading-[1.15]">
              Construction Website Design <br className="hidden sm:inline" />
              That <span className="text-yellow-400">Builds Your Business</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-10 text-gray-200 leading-relaxed font-medium">
              High-performance, secure web development and trade SEO for UK builders,
              contractors, and trade specialists — engineered to turn local search
              intent into high-value booked contracts.
            </p>
            <Link
              href="/book"
              className="bg-white text-[#102f35] hover:bg-yellow-400 hover:scale-105 px-10 py-4.5 rounded-full font-extrabold transition-all duration-300 inline-block shadow-xl active:scale-95 text-sm uppercase tracking-wider"
            >
              Get My Free Quote
            </Link>
          </div>
        </motion.section>

        {/* === BRANDED BREADCRUMB NAVIGATION BAR === */}
        <div className="bg-[#102f35]/5 border-b border-[#102f35]/10 py-4 px-6">
          <nav className="max-w-7xl mx-auto flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500">
            <Link href="/" className="flex items-center gap-1 text-[#102f35] hover:text-[#411b3f] transition-colors">
              <Home size={14} />
              <span>Home</span>
            </Link>
            <ChevronRight size={12} className="text-gray-400" />
            <Link href="/services" className="flex items-center gap-1 text-[#102f35] hover:text-[#411b3f] transition-colors">
              <Layers size={14} />
              <span>Services</span>
            </Link>
            <ChevronRight size={12} className="text-gray-400" />
            <span className="flex items-center gap-1 text-[#411b3f]">
              <HardHat size={14} className="text-yellow-500" />
              <span>Building & Trades</span>
            </span>
          </nav>
        </div>

        {/* === SECTION 1: BUILDING TRUST & AUTHORITY === */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

            {/* Optimized Visual Frame Container */}
            <div className="relative w-full h-[400px] md:h-[500px]">
              <Image
                src="/building-services-hero.jpg"
                alt="Professional Web Design and Local SEO Architecture for Builders"
                fill
                sizes="(max-w-768px) 100vw, 600px"
                className="rounded-3xl shadow-2xl z-10 object-cover"
              />
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-[#411b3f] rounded-2xl -z-10 hidden md:block opacity-90" />
            </div>

            {/* Core Semantic Layout */}
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#411b3f] block mb-3">
                UK Local Authority Engineering
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
                <span className="block text-[#102f35]">
                  High-Performance Websites for
                </span>
                <span className="block text-[#411b3f]">
                  Builders & Trade Professionals
                </span>
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">
                In the UK construction industry, digital validation is everything. Before a commercial client or domestic homeowner evaluates your quote for a tender, they inspect your digital profile. A slow, outdated, or broken layout structure costs you lucrative extensions, conversions, and builds without your knowledge.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">
                I engineer <strong className="text-[#102f35]">conversion-focused frameworks</strong> for independent builders, structural contractors, and specialist tradespeople. My setups dynamically display your craftsmanship portfolio, localized regional case studies, and corporate safety certifications. The result is a robust pipeline tailored specifically to turn traffic into high-value inquiries.
              </p>

              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Whether you run an established regional construction company or function as an elite specialist trade, I construct your digital asset to project structural reliability, safety compliance, and dominant local keyword visibility.
              </p>
            </div>
          </div>
        </section>

        {/* === NEW SECTION: TRADES CONTRACTING INDUSTRY TARGETING MATRIX === */}
        <section className="py-24 px-6 bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#411b3f] block mb-3">
                Industry Specific Architecture
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#102f35] tracking-tight">
                Targeting Your Target Contracting Segments
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-sm leading-relaxed">
                A simple generic template fails to generate elite local inquiries. I craft specialized layouts matching the target transactional profiles of your core services.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl border border-gray-100/80 shadow-sm hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold text-[#102f35] mb-3">Residential Extensions & Builds</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  High-impact layouts showcasing loft conversions, home expansions, and renovations. Features crisp before-and-after image carousels and location-based local landing modules to catch premium domestic leads.
                </p>
                <span className="text-xs font-bold uppercase text-[#411b3f] tracking-wide">Domestic Contract Acquisition</span>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-100/80 shadow-sm hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold text-[#102f35] mb-3">Commercial & Main Contractors</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Corporate authority profiles structured for procurement directors and estimators. Focuses on tender capabilities, health and safety compliance records, structural insurance verification, and major commercial case files.
                </p>
                <span className="text-xs font-bold uppercase text-[#411b3f] tracking-wide">Commercial B2B Tender Systems</span>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-100/80 shadow-sm hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold text-[#102f35] mb-3">Specialist Trade Engineers</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Optimized call-to-action designs tailored for high-end electrical contractors, gas engineers, and mechanical firms. Emphasizes instant mobile inquiry access and localized emergency search ranking maps.
                </p>
                <span className="text-xs font-bold uppercase text-[#411b3f] tracking-wide">Direct Urgent Inquiries</span>
              </div>
            </div>
          </div>
        </section>

        {/* === FEATURE CARDS: TECHNICAL SEO FOR BUILDERS === */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#411b3f] block mb-3">
                Engineered Performance
              </span>
              <h2 className="text-3xl font-extrabold text-[#102f35] mb-4">
                Essential Operational Assets for Trade Sites
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm leading-relaxed">
                Every component is hand-coded to address explicit speed standards, mobile core web vitals, and geographical visibility maps.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Sleek Project Galleries",
                  desc: "Zero-latency, responsive layout galleries designed to present clean transitions of your craftsmanship and build phases beautifully.",
                  icon: "🏗️",
                },
                {
                  title: "Local Search Optimization",
                  desc: "I manually optimize content layers, structural tags, and schema records to dominate localized searches in your specific UK operational area.",
                  icon: "📍",
                },
                {
                  title: "Instant Conversion Forms",
                  desc: "Mobile-responsive lead interfaces built to capture precise site measurements and project scope options directly from active work environments.",
                  icon: "📱",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100/80 border-b-4 border-b-[#102f35] hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-[#102f35] mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === THE "WHY US" SECTION === */}
        <section className="py-24 px-6 bg-gray-50 border-t border-gray-100">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#411b3f] block mb-3">
                Bespoke vs Templates
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#102f35] mb-6 tracking-tight">
                Outpace Your Local{" "}
                <span className="text-[#411b3f]">Template Competitors</span>
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
                Most general construction websites suffer from heavy template bloat, making them sluggish over cellular networks out on site. At <strong className="text-[#411b3f]">Karol Digital</strong>, I construct lightweight custom architectures from the ground up, guaranteeing optimal search indexation and performance.
              </p>
              <div className="space-y-3 text-sm font-semibold text-gray-800">
                <p className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  <span>Google Maps API integration for hyper-localized geographic coverage</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  <span>Automated Checkatrade, FMB, and Trustpilot credential layouts</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  <span>Fast edge network rendering meeting absolute Core Web Vitals guidelines</span>
                </p>
              </div>
            </div>

            <div className="md:w-1/2 bg-gradient-to-br from-[#411b3f] to-[#102f35] p-10 rounded-3xl text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 text-white/5 font-black text-7xl select-none">
                UK
              </div>
              <Briefcase className="text-yellow-400 w-10 h-10 mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">
                Fixed-Scope Deployments
              </h3>
              <p className="mb-6 text-sm text-gray-200 leading-relaxed">
                Transparent milestone development plans with zero unexpected expenses. I specialize in developing high-performance frameworks for independent premium specialists and commercial enterprise groups alike.
              </p>
              <Link 
                href="/pricing" 
                className="inline-flex items-center gap-2 text-white font-bold border-b-2 border-yellow-400 pb-1 hover:text-yellow-300 hover:border-yellow-300 transition-all text-sm uppercase tracking-wider"
              >
                <span>View Trade Layout Pricing</span>
              </Link>
            </div>
          </div>
        </section>

        {/* === NEW SECTION: LOCALIZED TRADES FAQS (SEO RICH SNIPPETS CAPTURE) === */}
        <section className="py-24 px-6 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <HelpCircle className="mx-auto text-[#411b3f] w-10 h-10 mb-4" />
              <h2 className="text-3xl font-extrabold text-[#102f35] tracking-tight">
                Construction Web Optimization FAQ
              </h2>
              <p className="text-gray-600 mt-2 text-sm">
                Expert technical responses regarding organic local ranking signals, portfolio compression mechanics, and contract conversion tracks.
              </p>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100/80 shadow-sm">
                <h3 className="text-base font-bold text-[#102f35] mb-2">How do heavy high-definition project photos impact our builder site performance?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Standard builds slow down drastically when loaded with high-res construction portfolio photos. I configure smart Next.js optimization modules that automatically compress, scale, and deliver your images in modern formats (like WebP). This ensures your project galleries display crisp craftsmanship metrics without impacting page speeds.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100/80 shadow-sm">
                <h3 className="text-base font-bold text-[#102f35] mb-2">Can my website target specific local catchments and boroughs for building jobs?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Yes. By generating optimized regional landing architectures backed by localized schema records, I position your site to capture traffic from target operational areas. This intercepts high-intent searches like "home extension contractors [Your Area]" cleanly.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100/80 shadow-sm">
                <h3 className="text-base font-bold text-[#102f35] mb-2">Can we display safety accreditations and badges like CHAS or FMB smoothly?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Absolutely. I integrate dedicated, optimized vector rows into your code specifically built to display regulatory trade badges, insurance parameters, and review credentials across all page footers. This rapidly validates your authority profile to prospective commercial clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* === CALL TO ACTION === */}
        <section className="py-20 bg-gradient-to-r from-[#102f35] via-[#1c4850] to-[#411b3f] text-white text-center px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Ready to Architect a High-Performance Digital Lead Machine?
            </h2>
            <p className="text-gray-200 max-w-xl mx-auto mb-8 text-sm">
              Incorporate structured asset workflows, maximize visibility parameters, and convert casual search patterns into stable business expansion.
            </p>
            <Link
              href="/book"
              className="inline-block bg-yellow-400 text-black px-10 py-4 rounded-full font-black hover:bg-white transition-all shadow-xl hover:scale-[1.02] active:scale-95"
            >
              Let's Talk Strategy
            </Link>
          </div>
        </section>

      </main>
    </FadeIn>
  );
}