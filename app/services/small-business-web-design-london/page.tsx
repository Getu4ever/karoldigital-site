"use client";

import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SITE_SERVICE_AREAS } from "@/lib/site-contact";

export default function LondonSmallBusinessWebDesignPage() {
  return (
    <FadeIn>
      <main className="min-h-screen bg-white text-gray-900">
        <motion.section
          className="relative min-h-[75vh] md:min-h-[80vh] w-full flex flex-col items-center justify-center text-center text-white px-6 pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/heroes/london-web-design.png"
            alt="Web design for London SW20 and nearby small businesses"
            fill
            priority
            className="object-cover brightness-[0.5]"
          />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center justify-center">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-gold-muted block mb-4">
              London SW20 · Raynes Park · Wimbledon · Merton
            </span>

            <h1 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight leading-tight md:leading-[1.15]">
              Web Design for{" "}
              <br className="hidden sm:inline" />
              <span className="text-brand-gold-muted">SW20 &amp; Nearby Small Businesses</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-8 text-gray-200 leading-relaxed font-medium">
              Websites that help local service businesses look more professional, show up for
              nearby searches, and turn more visitors into phone calls and booked work.
            </p>

            <p className="text-xs sm:text-sm text-gray-300 mb-8 max-w-md">
              Based in London SW20 — serving Raynes Park, Wimbledon, New Malden, Merton,
              Kingston, and Greater London.
            </p>

            <Link
              href="/book?service=Website+Audit"
              className="bg-white text-[#102f35] hover:bg-brand-gold px-10 py-4.5 rounded-full font-semibold transition-all duration-300 inline-block shadow-md active:scale-95 text-sm uppercase tracking-wider"
            >
              Request a Local Lead Audit
            </Link>
          </div>
        </motion.section>

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
              London SW20 Web Design
            </li>
          </ol>
        </nav>

        <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="max-w-5xl mb-8">
                <span className="text-sm font-bold tracking-wider text-[#411b3f] uppercase block mb-2">
                  Based in London SW20
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#102f35] mb-6">
                  Stop Losing Local Enquiries to a Weak First Impression
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  When a Raynes Park tradesperson, Wimbledon adviser, or Merton caterer needs a
                  better website, they rarely type agency jargon into Google — they ask who looks
                  professional and who is easy to work with. Your site has to prove that in seconds
                  on mobile.
                </p>
              </div>

              <div className="space-y-6 text-gray-700 text-base leading-relaxed">
                <p>
                  At Karol Digital, we build websites for ambitious local firms that need clearer
                  offers, stronger trust, and enquiry paths that actually convert. Fast pages matter
                  because London prospects bounce quickly — but the promise is more booked work, not
                  a technical score.
                </p>

                <div className="bg-gray-50 border-l-4 border-[#102f35] p-5 rounded-r-xl my-6">
                  <p className="font-semibold text-[#102f35] mb-1">Trusted by UK service brands</p>
                  <p className="text-sm text-gray-600">
                    From <strong>Wild Hearts Collective</strong> — a studio site admired by the
                    client and their community — to clearer journeys for{" "}
                    <strong>1st Call UK</strong> and catering visibility for{" "}
                    <strong>Food Mama&apos;s Kitchen</strong>, we know what makes buyers take action.
                  </p>
                </div>

                <p>
                  Whether you serve customers across SW20, Wimbledon, New Malden, or further across
                  Greater London, we align every page with commercial outcomes — more of the right
                  enquiries, less wasted admin.
                </p>
              </div>
            </div>

            <div className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <Image
                src="/services-london-web-engineering.webp"
                alt="Web design for London SW20 small businesses"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-[#102f35] mb-4">
                Why Local Growth Starts with a Clearer Website
              </h2>
              <p className="text-gray-600">
                We connect local visibility, trust, and enquiry flow to booked appointments and
                better-quality leads.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-[#102f35]">
                <h3 className="text-xl font-bold text-[#102f35] mb-4">
                  Local Search Around SW20
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We map your site to real local intent — SW20, Raynes Park, Wimbledon, New Malden,
                  Merton, and Kingston — so Maps and regional search can connect nearby buyers to you.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-[#411b3f]">
                <h3 className="text-xl font-bold text-[#411b3f] mb-4">
                  Conversion-First Layout Design
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We remove friction that loses work. Clear calls-to-action and simple enquiry forms
                  make booking consultations or requesting quotes effortless on a phone.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-[#102f35]">
                <h3 className="text-xl font-bold text-[#102f35] mb-4">
                  Fast Enough That Locals Stay
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Most London business searches happen on the go. Pages that load quickly keep
                  prospects on your site long enough to enquire — before they tap a competitor.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-[#102f35] mb-4">
              Serving Growth Sectors Across SW London
            </h2>
            <p className="text-gray-600 text-base">
              We tailor enquiry journeys to your sector and the local buyers you actually serve.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-6 border-l-4 border-[#102f35] bg-gray-50/50 rounded-r-xl">
              <h4 className="text-lg font-bold mb-2 text-[#102f35]">Fitness &amp; Studios</h4>
              <p className="text-gray-600 text-xs leading-relaxed">
                Class discovery and online booking sites people are proud to share — like Wild Hearts Collective.
              </p>
            </div>
            <div className="p-6 border-l-4 border-[#411b3f] bg-gray-50/50 rounded-r-xl">
              <h4 className="text-lg font-bold mb-2 text-[#411b3f]">Immigration Services</h4>
              <p className="text-gray-600 text-xs leading-relaxed">
                High-trust layouts that explain visa routes clearly and turn more enquiries into instructed cases.
              </p>
            </div>
            <div className="p-6 border-l-4 border-[#102f35] bg-gray-50/50 rounded-r-xl">
              <h4 className="text-lg font-bold mb-2 text-[#102f35]">Financial &amp; Advisory</h4>
              <p className="text-gray-600 text-xs leading-relaxed">
                Professional sites that establish authority and capture serious consultation requests.
              </p>
            </div>
            <div className="p-6 border-l-4 border-[#411b3f] bg-gray-50/50 rounded-r-xl">
              <h4 className="text-lg font-bold mb-2 text-[#411b3f]">Hospitality &amp; Trades</h4>
              <p className="text-gray-600 text-xs leading-relaxed">
                Menu-led and quote-ready journeys that win local bookings and reduce admin chase.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 md:px-12 bg-[#102f35] text-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Our SW20 footprint
            </h2>
            <p className="text-white/75 mb-8 max-w-2xl mx-auto text-sm md:text-base">
              London is too broad to target passively. We focus local messaging around SW20 and the
              neighbouring pockets where trust and word-of-mouth already matter.
            </p>
            <ul className="flex flex-wrap justify-center gap-3 text-sm font-semibold">
              {SITE_SERVICE_AREAS.map((area) => (
                <li
                  key={area}
                  className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-brand-gold-muted"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-20 px-6 md:px-12 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#102f35] mb-8 text-center">
              Why SW20 businesses need a clearer digital front door
            </h2>
            <div className="prose prose-lg text-gray-700 mx-auto">
              <p>
                In a city where attention spans are short and competition is everywhere, a weak
                website costs you work. Local enterprises need a professional, search-visible site
                that turns nearby demand into booked appointments — not another generic brochure.
              </p>
              <p>
                Our <strong>SW20-focused approach</strong> names real areas — Raynes Park,
                Wimbledon, New Malden, Merton, Kingston — and pairs that with Google Business
                Profile support so local intent can find you.
              </p>
              <p>
                Whether you need <strong>web design in SW20</strong>, a stronger site for Wimbledon
                customers, or a UK-wide presence with a South West London base, we build for
                commercial growth first.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-r from-[#102f35] via-[#513356] to-[#102f35] text-white text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to win more local work?
            </h2>
            <p className="text-lg mb-8 text-gray-100">
              Let&apos;s build a website that looks the part, shows up nearby, and turns more
              visitors into enquiries you actually want.
            </p>
            <Link
              className="bg-white text-[#102f35] hover:bg-brand-gold font-semibold px-8 py-4 rounded-full shadow-md transition-all inline-block"
              href="/book"
            >
              Book Your Local Lead Audit
            </Link>
          </div>
        </section>
      </main>
    </FadeIn>
  );
}
