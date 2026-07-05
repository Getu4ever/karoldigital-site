"use client";

import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Home, Layers, ShieldCheck, ChevronRight, CheckCircle2, HelpCircle, FileText } from "lucide-react";

/**
 * FinanceWebDesign Page
 * Fully expanded version featuring robust semantic copy layers, industry matrix segments, and localized FAQs.
 * Full code provided as requested.
 */
export default function FinanceWebDesign() {
  // JSON-LD Structured Data Schema for Professional Financial Digital Platforms
  const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Bespoke website Designing Services for Financial Sector",
  "description": "Bespoke digital solutions for the financial sector, focusing on secure lead generation, professional branding, and compliance-ready corporate web design for UK firms including accountants, mortgage brokers, and IFAs.",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "GBP",
    "price": "0.00",
    "lowPrice": "800", // Update this to your starting price for finance services
    "highPrice": "8000",
    "url": "https://www.karoldigital.co.uk/industries/financial-services"
  },
  "image": "https://www.karoldigital.co.uk/1stcall-finance-showcase.jpg",
  "provider": {
    "@type": "ProfessionalService",
    "name": "Karol Digital",
    "url": "https://www.karoldigital.co.uk",
    "areaServed": {
      "@type": "Country",
      "name": "United Kingdom"
    }
  },
  "category": "Web Design Services for Financial Sector"
};

  return (
    <FadeIn>
      {/* Structural Schema Indexing Insertion */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      <main className="min-h-screen bg-white text-gray-900 font-sans">

        {/* === HERO: TRUST, STABILITY & SAFE SPACING OVERRIDES === */}
        <motion.section
          className="relative min-h-[75vh] md:min-h-[80vh] w-full flex flex-col items-center justify-center text-center text-white px-6 pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/hero-page-banner.jpg" 
            alt="Financial Services Corporate Website Design and Architecture"
            fill
            priority
            className="object-cover brightness-[0.5]"
          />
          
          {/* Main Hero Content Box Container */}
          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-yellow-400 block mb-4">
              Enterprise Grade Frameworks for Professional Firms
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tight leading-tight md:leading-[1.15]">
              Financial Services Web Design <br className="hidden md:inline" />
              For <span className="text-yellow-400">Corporate Sector Trust</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 text-gray-200 leading-relaxed font-medium">
              High-trust, secure, and professional web platforms for UK Mortgage Brokers, Chartered Accountants, and Certified Financial Advisors.
            </p>
            <Link
              href="/book"
              className="bg-white text-[#102f35] hover:bg-yellow-400 hover:scale-105 px-10 py-4.5 rounded-full font-extrabold transition-all duration-300 inline-block shadow-xl active:scale-95 text-base"
            >
              Request a Professional Consultation
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
              <ShieldCheck size={14} className="text-yellow-500" />
              <span>Financial & Professional</span>
            </span>
          </nav>
        </div>

        {/* === SEO CONTENT: THE AUTHORITY SECTION === */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#411b3f] block mb-3">
                Institutional Credibility Formats
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#102f35] mb-6 tracking-tight">
                Built on <span className="text-[#411b3f]">Trust & Security</span>
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                In the financial sector, your digital profile represents the primary point of due diligence performed by prospective corporate clients, institutional partners, and high-net-worth individuals. A slow, unpolished, or generic template framework compromises your integrity instantly, driving traffic directly to your competitors.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                At <strong className="text-[#102f35]">Karol Digital</strong>, we construct absolute corporate authority platforms that echo the prestige, precision, and diligence of your physical firm. Our codebases are designed from the ground up to support modern search parameters while offering maximum performance metrics.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our deployments target strict <strong className="text-[#411b3f]">GDPR-compliant conversion architectures</strong>, airtight edge-network SSL credentials, and pristine usability indices to allow corporate leads to query parameters swiftly and securely.
              </p>
            </div>
            
            <div className="bg-[#102f35]/5 p-8 md:p-10 rounded-3xl border-l-8 border-l-yellow-400 border border-gray-100 shadow-sm">
              <h3 className="font-black text-xl mb-6 text-[#102f35] tracking-tight">Essential Compliance Assets:</h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Every asset we deploy for the professional financial space comes complete with core technical mechanisms required to process user parameters safely.
              </p>
              <ul className="space-y-4 text-gray-700 text-sm font-semibold">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 mt-0.5">✓</span>
                  <span>Full SSL Security Encryption & Secure GDPR Protocol Databases</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 mt-0.5">✓</span>
                  <span>Bespoke Interactive Financial API Lead Calculators</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 mt-0.5">✓</span>
                  <span>Encrypted Client Document Repository & Safe Download Areas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 mt-0.5">✓</span>
                  <span>Verified Third-Party CRM Middleware Integrations (HubSpot, Zoho)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* === NEW CONTENT SECTION: TARGETED INDUSTRY VERTICALS GRID === */}
        <section className="py-24 px-6 bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#411b3f] block mb-3">
                Tailored Solutions
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#102f35] tracking-tight">
                Specialized Web Architectures for Financial Sectors
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-sm leading-relaxed">
                Different sectors demand unique user journeys. We build tailor-made layout structures targeted directly toward your target clientele's search behavior.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#102f35]/5 flex items-center justify-center text-[#102f35] font-bold text-xl mb-6">
                  01
                </div>
                <h3 className="text-xl font-bold text-[#102f35] mb-3">Mortgage Brokers</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  High-conversion pipelines optimized for localized property searches. Features robust borrowing tool modules, real-time rates API panels, and lightning-fast onboarding links.
                </p>
                <span className="text-xs font-bold uppercase text-[#411b3f] tracking-wide">Optimized for Lead Volume</span>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#102f35]/5 flex items-center justify-center text-[#102f35] font-bold text-xl mb-6">
                  02
                </div>
                <h3 className="text-xl font-bold text-[#102f35] mb-3">Chartered Accountants</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Corporate design layouts built to emphasize commercial scale, structured tax solutions, and advisory credentials. Seamless calendar bookings keep client acquisitions smooth.
                </p>
                <span className="text-xs font-bold uppercase text-[#411b3f] tracking-wide">Optimized for Retainer Growth</span>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#102f35]/5 flex items-center justify-center text-[#102f35] font-bold text-xl mb-6">
                  03
                </div>
                <h3 className="text-xl font-bold text-[#102f35] mb-3">Financial Advisors (IFA)</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Bespoke authority websites focused entirely on wealth preservation, retirement planning, and heritage assets. Built with compliance transparency and long-form thought leadership layout fields.
                </p>
                <span className="text-xs font-bold uppercase text-[#411b3f] tracking-wide">Optimized for Institutional E-E-A-T</span>
              </div>
            </div>
          </div>
        </section>

        {/* === CASE STUDY: 1ST CALL FINANCIAL === */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row-reverse border border-gray-100/80">
              <div className="lg:w-1/2 relative min-h-[450px]">
                <Image
                  src="/1stcall-finance-showcase.jpg" 
                  alt="1st Call Financial High-Performance Web Interface Architecture"
                  fill
                  sizes="(max-w-1024px) 100vw, 600px"
                  className="object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-8 md:p-14 flex flex-col justify-center">
                <span className="text-[#411b3f] font-bold text-sm uppercase tracking-widest mb-2">Bespoke Enterprise Project</span>
                <h3 className="text-3xl font-black text-[#102f35] mb-6">1st Call Financial</h3>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  We engineered and launched a highly secure corporate platform for <strong className="text-[#102f35]">1st Call Financial</strong>. The architecture focuses completely on flawless typography weights and clarity, incorporating an enterprise navigation track to manage mortgage and brokerage funnels safely while strictly adhering to domain mapping best practices.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8 text-center">
                  <div className="bg-[#411b3f]/5 p-4 rounded-2xl border border-[#411b3f]/10">
                    <span className="block text-lg font-bold text-[#411b3f]">UX Driven</span>
                    <span className="text-xs text-gray-500 font-bold uppercase tracking-wide">Lead Pipelines</span>
                  </div>
                  <div className="bg-[#411b3f]/5 p-4 rounded-2xl border border-[#411b3f]/10">
                    <span className="block text-lg font-bold text-[#411b3f]">Clean Code</span>
                    <span className="text-xs text-gray-500 font-bold uppercase tracking-wide">SEO Engineered</span>
                  </div>
                </div>
                <Link 
                  href="https://1st-call-financial.vercel.app/" 
                  target="_blank" 
                  className="inline-flex items-center justify-center bg-[#102f35] text-white px-6 py-4 rounded-full font-bold hover:bg-[#411b3f] transition-all text-sm uppercase tracking-wider group shadow-md"
                >
                  <span>Review The Architecture</span>
                  <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* === NEW CONTENT SECTION: THE FCA & UK SEO TECHNICAL SECURITY COMPLIANCE LAYER === */}
        <section className="py-20 px-6 bg-gradient-to-br from-[#102f35] to-[#1c4850] text-white rounded-[2.5rem] max-w-7xl mx-auto my-12 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(65,27,63,0.2),transparent)]" />
          <div className="relative z-10 max-w-4xl mx-auto grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-3">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-400 block mb-3">
                Zero-Tolerance Data Compliance
              </span>
              <h2 className="text-2xl md:text-3xl font-black mb-6 tracking-tight">
                Designed to Exceed Strict UK Regulatory Standards
              </h2>
              <p className="text-gray-200 text-sm leading-relaxed mb-6">
                Financial web applications operating inside the UK marketplace face rigorous security and transparency validation protocols. Every digital asset we engineer incorporates baseline measures to protect your firm against vulnerability audits.
              </p>
              <div className="space-y-3 text-sm font-medium text-gray-100">
                <p className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-yellow-400 shrink-0" />
                  <span>FCA-Ready Header Disclosures & Footer Risk Text Placement Mapping</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-yellow-400 shrink-0" />
                  <span>Cookie Consent Integration with Granular Third-Party Analytics Toggling</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-yellow-400 shrink-0" />
                  <span>Next.js Built-In Content Security Policy (CSP) Headers Setup Support</span>
                </p>
              </div>
            </div>
            
            <div className="md:col-span-2 bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
              <FileText className="text-yellow-400 w-10 h-10 mb-4" />
              <h3 className="text-lg font-bold mb-2">Need Compliance Sign-off?</h3>
              <p className="text-gray-300 text-xs leading-relaxed mb-4">
                We work collaboratively alongside your internal compliance officers or network principal advisors to ensure all copies, forms, and disclosures meet regulatory code.
              </p>
              <span className="text-xs font-bold uppercase text-yellow-400 tracking-wider">Airtight Protection</span>
            </div>
          </div>
        </section>

        {/* === NEW CONTENT SECTION: SECURE LOCALIZED FAQS (SEO RICH SNIPPETS CAPTURE) === */}
        <section className="py-24 px-6 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <HelpCircle className="mx-auto text-[#411b3f] w-10 h-10 mb-4" />
              <h2 className="text-3xl font-extrabold text-[#102f35] tracking-tight">
                Frequently Asked Questions Regarding Finance Web Systems
              </h2>
              <p className="text-gray-600 mt-2 text-sm">
                Essential technical insights covering production times, security audits, and deployment mechanics.
              </p>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <h3 className="text-base font-bold text-[#102f35] mb-2">How do you manage FCA risk disclosures and data criteria during layout builds?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We integrate dedicated global block components within the Sanity Content Studio structure specifically configured for regulatory disclosures. This allows your team to easily edit required warning texts across all service landing paths globally instantly without diving into raw code updates.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <h3 className="text-base font-bold text-[#102f35] mb-2">Can your financial platforms integrate seamlessly with custom CRM and brokerage APIs?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Yes. Using standard Next.js route handlers, we build highly secure API connection channels to safely pipe localized user records directly into your CRM dashboards, booking links, or secure verification tools without risking local client exposure.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <h3 className="text-base font-bold text-[#102f35] mb-2">Why is a custom framework better for financial service SEO than standard templates?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Search systems grade high-security sectors on strict Core Web Vitals criteria. Standard template designs suffer from intense security code vulnerabilities and script bloating. Custom headless code layouts offer minimal script loading speeds, perfect indexation, and highly organized semantic markup out of the box.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* === CTA: PREMIUM REBRANDED SYSTEM === */}
        <section className="py-20 bg-gradient-to-r from-[#102f35] via-[#1c4850] to-[#411b3f] text-white text-center px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Scale Your Financial Practice Digitally
            </h2>
            <p className="text-gray-200 max-w-xl mx-auto mb-8 text-sm">
              Modernize your operations with a bespoke web architecture engineered to validate corporate expertise and funnel high-value client acquisitions.
            </p>
            <Link
              href="/book"
              className="inline-block bg-yellow-400 text-black px-10 py-4 rounded-full font-black hover:bg-white transition-all shadow-xl hover:scale-[1.02] active:scale-95"
            >
              Start Your Finance Project
            </Link>
          </div>
        </section>

      </main>
    </FadeIn>
  );
}