"use client";

import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function LondonSmallBusinessWebDesignPage() {
  return (
    <FadeIn>
      <main className="min-h-screen bg-white text-gray-900">
        {/* === HERO SECTION === */}
        {/* HERO */}
<motion.section
  className="relative min-h-[75vh] md:min-h-[80vh] w-full flex flex-col items-center justify-center text-center text-white px-6 pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  <Image
    src="/heroes/london-web-design.png"
    alt="High-performance custom web engineering for London businesses"
    fill
    priority
    className="object-cover brightness-[0.5]"
  />

  <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center justify-center">
    <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-gold-muted block mb-4">
      London SW20 · Merton · Wimbledon · Raynes Park
    </span>

    <h1 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight leading-tight md:leading-[1.15]">
      Web Design for{" "}
      <br className="hidden sm:inline" />
      <span className="text-brand-gold-muted">London Small Businesses</span>
    </h1>

    <p className="text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-8 text-gray-200 leading-relaxed font-medium">
      Websites that help local service businesses look more professional, show up
      for nearby searches, and turn more visitors into phone calls and booked work.
    </p>

    <p className="text-xs sm:text-sm text-gray-300 mb-8 max-w-md">
      Based in London SW20 — serving Merton, Wimbledon, Raynes Park, and Greater London.
    </p>

    <Link
      href="/book?service=Website+Audit"
      className="bg-white text-[#102f35] hover:bg-brand-gold px-10 py-4.5 rounded-full font-semibold transition-all duration-300 inline-block shadow-md active:scale-95 text-sm uppercase tracking-wider"
    >
      Request a Local Lead Audit
    </Link>
  </div>
</motion.section>

        {/* === BREADCRUMB SECTION === */}
        <nav
          aria-label="Breadcrumb"
          className="bg-white border-b border-gray-100 py-4 px-6 md:px-12"
        >
          <ol className="max-w-7xl mx-auto flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-[#102f35] transition">
                Home
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link href="/services" className="hover:text-[#102f35] transition">
                Services
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-[#102f35] font-semibold">
              London Web Design
            </li>
          </ol>
        </nav>

        {/* === LOCAL MARKET INTRODUCTION === */}
        <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Column */}
            <div>
              <div className="max-w-5xl mb-8">
                <span className="text-sm font-bold tracking-wider text-[#411b3f] uppercase block mb-2">
                  Based in London SW20
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#102f35] mb-6">
                  Stop Losing Local Enquiries to a Weak First Impression
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  When a Wimbledon builder, Raynes Park caterer, or Merton adviser needs a better website, they do not type agency jargon into Google — they ask who looks professional and who is easy to work with. Your site has to prove that in seconds on mobile.
                </p>
              </div>

              <div className="space-y-6 text-gray-700 text-base leading-relaxed">
                <p>
                  At Karol Digital, we build websites for ambitious local firms that need clearer offers, stronger trust, and enquiry paths that actually convert. Fast pages matter because London prospects bounce quickly — but the promise is more booked work, not a technical score.
                </p>

                {/* Local Client Validation Box */}
                <div className="bg-gray-50 border-l-4 border-[#102f35] p-5 rounded-r-xl my-6">
                  <p className="font-semibold text-[#102f35] mb-1">Trusted by London Professionals</p>
                  <p className="text-sm text-gray-600">
                    From clearer financial enquiries for <strong>1st Call UK Finance</strong> to stronger client journeys for <strong>1st Call UK Immigration</strong> and catering visibility for <strong>Food Mama&apos;s Kitchen</strong>, we know what makes local customers take action.
                  </p>
                </div>

                <p>
                  Whether you serve trades across Merton and Wimbledon, immigration or advisory clients nearby, or hospitality around Raynes Park and Greater London, we align every page with commercial outcomes — more of the right enquiries, less wasted admin.
                </p>
              </div>
            </div>

            {/* Image Column */}
            <div className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <Image
                src="/services-london-web-engineering.webp"
                alt="High-performance custom web engineering for London small businesses"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* === THREE CORE PILLARS OF LOCAL PERFORMANCE === */}
        <section className="bg-gray-50 py-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-[#102f35] mb-4">
                Why Local Growth Starts with a Clearer Website
              </h2>
              <p className="text-gray-600">
                We connect local visibility, trust, and enquiry flow to the outcomes that matter: booked appointments and better-quality leads.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-[#102f35]">
                <h3 className="text-xl font-bold text-[#102f35] mb-4">
                  Local Search That Names Your Area
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We map your site to real local intent — London SW20, Merton, Wimbledon, Raynes Park, and nearby pockets — so Google Maps and regional search can connect nearby buyers to you.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-[#411b3f]">
                <h3 className="text-xl font-bold text-[#411b3f] mb-4">
                  Conversion-First Layout Design
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We remove friction that loses work. Clear calls-to-action and simple enquiry forms make booking consultations or requesting quotes effortless on a phone.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-[#102f35]">
                <h3 className="text-xl font-bold text-[#102f35] mb-4">
                  Fast Enough That Locals Stay
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Most London business searches happen on the go. Pages that load quickly keep prospects on your site long enough to enquire — before they tap a competitor.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* === BOROUGH FOCUS & TARGET INDUSTRIES === */}
        <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-[#102f35] mb-4">
              Serving Growth Sectors Across London
            </h2>
            <p className="text-gray-600 text-base">
              We tailor enquiry journeys to your sector and the local buyers you actually serve.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-6 border-l-4 border-[#102f35] bg-gray-50/50 rounded-r-xl">
              <h4 className="text-lg font-bold mb-2 text-[#102f35]">Construction &amp; Trades</h4>
              <p className="text-gray-600 text-xs leading-relaxed">
                Bespoke project showcase portfolios built to help commercial contractors win premium property development contracts and tenders across Greater London.
              </p>
            </div>

            <div className="p-6 border-l-4 border-[#411b3f] bg-gray-50/50 rounded-r-xl">
              <h4 className="text-lg font-bold mb-2 text-[#411b3f]">Immigration Services</h4>
              <p className="text-gray-600 text-xs leading-relaxed">
                High-trust, professional layouts highlighting OISC compliance frame structures and corporate sponsor client review tracks for maximum validation.
              </p>
            </div>

            <div className="p-6 border-l-4 border-[#102f35] bg-gray-50/50 rounded-r-xl">
              <h4 className="text-lg font-bold mb-2 text-[#102f35]">Financial &amp; Advisory</h4>
              <p className="text-gray-600 text-xs leading-relaxed">
                Security-focused platforms that establish clear authority for wealth managers and boutique financial consultancies, ensuring you capture leads from high-net-worth audiences.
              </p>
            </div>

            <div className="p-6 border-l-4 border-[#411b3f] bg-gray-50/50 rounded-r-xl">
              <h4 className="text-lg font-bold mb-2 text-[#411b3f]">Hospitality &amp; Catering</h4>
              <p className="text-gray-600 text-xs leading-relaxed">
                Visually immersive, mobile-optimized experience hubs designed to increase local event booking volumes and streamline corporate catering inquiries.
              </p>
            </div>
          </div>
        </section>

        {/* === LOCAL FOOTPRINT === */}
        <section className="py-16 px-6 md:px-12 bg-[#102f35] text-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Our London SW20 footprint
            </h2>
            <p className="text-white/75 mb-8 max-w-2xl mx-auto text-sm md:text-base">
              London is too broad to target passively. We focus local messaging and service-area language around the pockets where trust and word-of-mouth already matter.
            </p>
            <ul className="flex flex-wrap justify-center gap-3 text-sm font-semibold">
              {["London SW20", "Merton", "Wimbledon", "Raynes Park", "Kingston", "Greater London"].map(
                (area) => (
                  <li
                    key={area}
                    className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-brand-gold-muted"
                  >
                    {area}
                  </li>
                )
              )}
            </ul>
          </div>
        </section>

        {/* === ADDITIONAL SEO CONTENT === */}
        <section className="py-20 px-6 md:px-12 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#102f35] mb-8 text-center">
              Why London businesses need a clearer digital front door
            </h2>
            <div className="prose prose-lg text-gray-700 mx-auto">
              <p>
                In a city where attention spans are short and competition is everywhere, a weak website costs you work. London enterprises need a professional, search-visible site that turns nearby demand into booked appointments — not another generic brochure.
              </p>
              <p>
                Our <strong>area-focused approach</strong> names real places — London SW20, Merton, Wimbledon, Raynes Park — and pairs that with Google Business Profile support so local intent can find you. The goal is high-intent traffic that becomes conversations.
              </p>
              <p>
                Whether you need <strong>web design in London SW20</strong>, a stronger site for Wimbledon or Merton customers, or a UK-wide presence with a South West London base, we build for commercial growth first.
              </p>
            </div>
          </div>
        </section>

        {/* === CTA SECTION === */}
        <section className="py-24 bg-gradient-to-r from-[#102f35] via-[#513356] to-[#102f35] text-white text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to win more local work?
            </h2>
            <p className="text-lg mb-8 text-gray-100">
              Let&apos;s build a website that looks the part, shows up nearby, and turns more visitors into enquiries you actually want.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                className="bg-white text-[#102f35] hover:bg-brand-gold font-semibold px-8 py-4 rounded-full shadow-md transition-all"
                href="/book"
              >
                Book Your Local Lead Audit
              </Link>
            </div>
          </div>
        </section>
      </main>
    </FadeIn>
  );
}