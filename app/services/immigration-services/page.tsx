"use client";

import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Home, Layers, Scale, ChevronRight, CheckCircle2, HelpCircle, ShieldAlert } from "lucide-react";

/**
 * ImmigrationWebDesign Page
 * Fully expanded for maximum search visibility while tightening the primary hero typography footprint.
 * Full code provided as requested.
 */
export default function ImmigrationWebDesign() {
  // JSON-LD Structured Data Schema for Professional Legal & Regulatory Web Services
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Immigration Law Firm Website Design Systems",
    "image": "https://www.karoldigital.co.uk/1st-call-uk-immigration-services.jpg",
    "description": "Premium, high-trust corporate website design and specialized SEO frameworks for OISC and SRA-regulated UK immigration law firms, consultants, and corporate visa advisors.",
    "brand": {
      "@type": "Brand",
      "name": "Karol Digital"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "GBP",
      "price": "Variable"
    }
  };

  return (
    <FadeIn>
      {/* Structural Schema Indexing Insertion */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      <main className="min-h-screen bg-white text-gray-900 font-sans">

        {/* === HERO: TIGHTENED MAIN CONTENT CONTAINER FOOTPRINT & OVERLAP PROTECTION === */}
        <motion.section
          className="relative min-h-[75vh] md:min-h-[80vh] w-full flex flex-col items-center justify-center text-center text-white px-6 pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/hero-page-banner.jpg" 
            alt="Premium Web Design and SEO Architecture for Immigration Law Firms"
            fill
            priority
            className="object-cover brightness-[0.3]"
          />
          
          {/* Main Hero Content Box Container - Tightened Max Width Footprint */}
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center justify-center">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-yellow-400 block mb-4">
              High-Trust Web Frameworks for OISC & SRA Regulated Practices
            </span>
            <h1 className="text-4xl sm:text-5xl font-black mb-6 tracking-tight leading-tight md:leading-[1.15]">
              Web Design for <br className="hidden sm:inline" />
              <span className="text-yellow-400">Immigration Services</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-10 text-gray-200 leading-relaxed font-medium">
              Building premium, high-trust, regulatory-compliant websites engineered to transform complex global inquiries into successful client casework.
            </p>
            <Link 
              href="/contact" 
              className="bg-white text-[#102f35] hover:bg-yellow-400 hover:scale-105 px-10 py-4.5 rounded-full font-extrabold transition-all duration-300 inline-block shadow-xl active:scale-95 text-sm uppercase tracking-wider"
            >
              Get a Law Firm Quote
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
              <Scale size={14} className="text-yellow-500" />
              <span>Immigration Web Design</span>
            </span>
          </nav>
        </div>

        {/* === SECTION 1: THE TRUST FACTOR & COMPLIANCE === */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <Image
                src="/immigration-hero-bg.jpg" 
                alt="Immigration Law Website UI Case Study Showcase"
                width={600}
                height={500}
                className="rounded-3xl shadow-2xl z-10 relative object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-yellow-400 rounded-3xl -z-10 hidden md:block" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#411b3f] block mb-3">
                Authoritative Legal Credibility
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#102f35] mb-6 tracking-tight">
                Expertise in <span className="text-[#411b3f]">Regulatory Compliance</span>
              </h2>
              <p className="text-gray-700 text-lg mb-6 italic border-l-4 border-yellow-400 pl-4 font-medium">
                "In immigration law, your website isn't simply a digital brochure; it functions as your initial consultation and client vetting process."
              </p>
              <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">
                Operating a successful legal practice inside the UK requires strict alignment with **OISC and SRA data mandates**. Prospective corporate partners and family applicants perform immense due diligence before instructing a firm. An unoptimized or slow layout structure creates operational doubt immediately. 
              </p>
              <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">
                My bespoke legal web design services establish maximum authority branding, integrate clear statutory price transparency displays, and embed clean UI pathways to reassure users during life-altering application tracking.
              </p>
              <ul className="space-y-3 mb-8 text-sm font-semibold text-gray-800">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600">✔</span> Absolute GDPR-compliant client data management systems
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600">✔</span> Secure document upload and encrypted repository fields
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600">✔</span> Structural OISC/SRA verification badge layout assets
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600">✔</span> Multi-language accessibility integrations for global users
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* === NEW SECTION: ADVANCED LONG-TAIL SEO CASE TARGETING MATRIX === */}
        <section className="py-24 px-6 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#411b3f] block mb-3">
                High-Value Client Acquisition
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#102f35] tracking-tight">
                Optimized Layout Profiles for Target Visa Sectors
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-sm leading-relaxed">
                Generic copy fails to convert targeted traffic. I construct landing pages built to answer explicit legal user inquiries across specific operational sub-sectors.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold text-[#102f35] mb-3">Corporate & Sponsor Licences</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  B2B-targeted landing modules focusing on global business mobility, Skilled Worker routes, and sponsor compliance protection dashboards. Crafted to capture high-value corporate retainers.
                </p>
                <span className="text-xs font-bold uppercase text-[#411b3f] tracking-wide">Corporate Lead Generation</span>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold text-[#102f35] mb-3">Family Settlement & ILR Paths</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Empathy-driven structural flows for Spouse Visas, Indefinite Leave to Remain (ILR), and British Citizenship. Built with ultra-clear layout paths to handle stressful personal inquiries seamlessly.
                </p>
                <span className="text-xs font-bold uppercase text-[#411b3f] tracking-wide">High Conversion Funnels</span>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold text-[#102f35] mb-3">Appeals & Administrative Reviews</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Urgent-action lead pipelines targeting immediate refusal response captures, Upper Tribunal structural mapping, and time-critical intake form processing elements.
                </p>
                <span className="text-xs font-bold uppercase text-[#411b3f] tracking-wide">Fast Response Systems</span>
              </div>
            </div>
          </div>
        </section>

        {/* === SECTION 2: INDUSTRY-SPECIFIC CARDS === */}
        <section id="features" className="py-24 px-6 bg-gray-50 border-y border-gray-100">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#411b3f] block mb-3">
              Workflow Automation
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#102f35] tracking-tight">
              Designed for Your <span className="text-[#411b3f]">Workload</span>
            </h2>
            <p className="text-gray-600 mt-4 text-sm max-w-xl mx-auto">
              Custom infrastructural components deployed directly into your codebase to save consultancies manual administrative screening hours.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                title: "Client Intake Forms",
                desc: "Smart intake forms that pre-screen and filter incoming applicants by visa category, automatically separating high-intent cases from low-value leads.",
                icon: "📝",
              },
              {
                title: "Resource & Visa Hubs",
                desc: "Dedicated static field sectors for visa updates, global changes, and advisory posts to scale your digital presence as a trusted legal authority.",
                icon: "⚖️",
              },
              {
                title: "Appointment Booking",
                desc: "Seamless calendar integration allowing prospective clients to instantly schedule, pay for, and lock down consultations natively on your domain.",
                icon: "📅",
              },
            ].map((card) => (
              <motion.div
                key={card.title}
                whileHover={{ y: -5 }}
                className="p-10 bg-white rounded-3xl shadow-sm border border-gray-100/80 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-6">{card.icon}</div>
                <h3 className="text-xl font-bold text-[#102f35] mb-4">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* === SECTION 3: THE VALUES OVERRIDES === */}
        <section className="py-24 px-6 bg-[#102f35] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(65,27,63,0.15),transparent)]" />
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-400 block mb-3">
                The Karol Digital Difference
              </span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight">
                Why Immigration Firms Partner with Karol Digital
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center md:text-left">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-yellow-400 font-bold text-lg mb-6">
                  01
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-tight">UK Local SEO Focus</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Deeply familiar with targeted UK legal search volumes. I tailor internal navigation maps specifically to intercept high-volume phrases like "Sponsor Licence lawyers London" or "OISC immigration consultants".
                </p>
              </div>
              <div className="text-center md:text-left">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-yellow-400 font-bold text-lg mb-6">
                  02
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-tight">Agile Architecture</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Operating independently without massive agency communication overhead means your legal portal receives immediate, customized execution. Launch complex frameworks in weeks instead of months.
                </p>
              </div>
              <div className="text-center md:text-left">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-yellow-400 font-bold text-lg mb-6">
                  03
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-tight">Conversion-First Funnels</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  A beautiful website is useless if it stays hidden. Every container block, heading hierarchy, and button element is engineered to maximize conversion rates and drive qualified inquiries.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* === CASE STUDY: 1ST CALL UK === */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gray-50 rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 flex flex-col lg:flex-row">

              {/* Project Image */}
              <div className="lg:w-1/2 relative min-h-[450px]">
                <Image
                  src="/1st-call-uk-immigration-services.jpg" 
                  alt="1st Call UK Immigration High-Authority Interface Platform"
                  fill
                  sizes="(max-w-1024px) 100vw, 600px"
                  className="object-cover object-top"
                />
              </div>

              {/* Project Details */}
              <div className="lg:w-1/2 p-8 md:p-14 flex flex-col justify-center">
                <span className="text-[#411b3f] font-bold tracking-widest text-sm uppercase mb-3 block">
                  Featured Case Study
                </span>
                <h2 className="text-3xl font-black text-[#102f35] mb-6 tracking-tight">
                  1st Call UK Immigration Services
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
                  I engineered and launched a secure, high-authority platform for <strong className="text-[#102f35]">1st Call UK</strong>. The architecture focuses explicitly on clean navigation trails to help users navigate complex rules for work, study, and family visa streams. The site balances lightning-fast layout loads with strict regulatory transparency requirements.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8 text-center">
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-200/60">
                    <span className="block text-xl font-bold text-[#411b3f]">OISC Ready</span>
                    <span className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Compliance Mapped</span>
                  </div>
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-200/60">
                    <span className="block text-xl font-bold text-[#411b3f]">Fast Load</span>
                    <span className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Core Web Vitals</span>
                  </div>
                </div>

                <Link
                  href="https://1stcalluk.com/"
                  target="_blank"
                  className="inline-flex items-center justify-center bg-[#102f35] text-white px-6 py-4 rounded-full font-bold hover:bg-[#411b3f] transition-all text-sm uppercase tracking-wider group shadow-md"
                >
                  <span>Visit Live Site</span>
                  <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* === NEW SECTION: UK LEGAL REGULATORY TECHNICAL DISCLOSURE BAR === */}
        <section className="py-16 px-6 bg-gradient-to-br from-[#411b3f] to-[#251024] text-white rounded-[2.5rem] max-w-7xl mx-auto my-12 shadow-xl">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center">
            <div className="bg-white/10 p-4 rounded-2xl shrink-0">
              <ShieldAlert className="text-yellow-400 w-10 h-10" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 tracking-tight">Statutory Transparency Mandates</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                UK legal platforms face mandatory price, service definition, and complaint tracking disclosure rules. I structure robust universal global footer blocks layout sectors to house these legal conditions cleanly, ensuring your practice remains protected against structural oversight compliance strikes.
              </p>
            </div>
          </div>
        </section>

        {/* === NEW SECTION: LEGAL LOCALIZED FAQS (SEO RICH SNIPPETS CAPTURE) === */}
        <section className="py-24 px-6 bg-gray-50 border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <HelpCircle className="mx-auto text-[#411b3f] w-10 h-10 mb-4" />
              <h2 className="text-3xl font-extrabold text-[#102f35] tracking-tight">
                Immigration Web Platform Architecture FAQ
              </h2>
              <p className="text-gray-600 mt-2 text-sm">
                Technical guidance regarding OISC validation rules, data encryption metrics, and organic visibility tracks.
              </p>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-base font-bold text-[#102f35] mb-2">How are OISC and SRA validation guidelines handled across the site layout?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  I map dedicated structural layout elements across global header and footer files explicitly reserved for statutory credentials, firm registration identifiers, and network logos. This keeps your legal requirements permanently visible across all landing pages without altering user flow paths.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-base font-bold text-[#102f35] mb-2">Can intake forms route files and passport scans into secure database locations?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Yes. Using custom endpoint route configurations, client data and document uploads can be securely passed through encrypted transmission paths straight to external CRM tools or secure servers. This bypasses the vulnerabilities of storing documents inside standard WordPress databases.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-base font-bold text-[#102f35] mb-2">What makes custom headless architectures rank higher for competitive UK visa terms?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Google assesses YMYL legal domains with a strict checklist. Sluggish template frameworks filled with unoptimized tracking elements face organic penalties. A lightweight, bespoke framework loads near-instantly, presents a flawlessly structured semantic hierarchy, and establishes a secure codebase that builds long-term domain authority.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* === CTA SECTION === */}
        <section className="py-20 bg-white text-center px-6">
          <div className="max-w-3xl mx-auto p-12 rounded-[3rem] bg-gradient-to-br from-[#411b3f] to-[#102f35] text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Ready to Modernise Your Immigration Firm?
            </h2>
            <p className="text-base mb-10 text-gray-200 max-w-xl mx-auto">
              Stop losing high-value caseload inquiries to outdated interfaces. Let’s build an authoritative digital layout system that accurately mirrors your practice's legal expertise.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black px-10 py-4 rounded-full font-black text-sm uppercase tracking-wider shadow-lg transition transform hover:scale-105 active:scale-95"
            >
              Start Your Project
            </Link>
          </div>
        </section>

      </main>
    </FadeIn>
  );
}