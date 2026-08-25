"use client";

import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Home,
  Layers,
  HardHat,
  ChevronRight,
  CheckCircle2,
  HelpCircle,
  Sun,
  FileText,
  Sparkles,
} from "lucide-react";

export default function BuildersWebDesign() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Construction & Trades Website Development",
    description:
      "High-performance websites for UK builders, contractors, and specialist trades — featuring British Solar Direct, a conversion-focused solar installation platform for Nottingham homeowners.",
    image: "https://www.karoldigital.co.uk/british-solar-direct-showcase.png",
    provider: {
      "@type": "ProfessionalService",
      name: "Karol Digital",
      url: "https://www.karoldigital.co.uk",
    },
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    category: "Web Design Services for Construction & Trades",
  };

  return (
    <FadeIn>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      <main className="min-h-screen bg-white text-gray-900">
        <motion.section
          className="relative min-h-[75vh] md:min-h-[80vh] w-full flex flex-col items-center justify-center text-center text-white px-6 pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/heroes/building-services.png"
            alt="High-performance website design for construction and trade businesses"
            fill
            priority
            className="object-cover brightness-[0.5]"
          />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center justify-center">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-gold-muted block mb-4">
              High-Performance Website Development
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-tight md:leading-[1.15]">
              Construction &amp; Trades{" "}
              <span className="text-brand-gold-muted">Websites</span>
            </h1>
            <p className="text-base sm:text-lg max-w-2xl mx-auto mb-10 text-gray-200 leading-relaxed font-medium">
              Custom websites for builders, installers, and specialist trades
              that need clear packages, trusted proof, and a fast path from
              enquiry to booked work.
            </p>
            <Link
              href="/book"
              className="bg-white text-[#102f35] hover:bg-brand-gold px-10 py-4.5 rounded-full font-semibold transition-all duration-300 inline-block shadow-md active:scale-95 text-sm uppercase tracking-wider"
            >
              Book a Free Consultation
            </Link>
          </div>
        </motion.section>

        <div className="bg-[#102f35]/5 border-b border-[#102f35]/10 py-4 px-6">
          <nav className="max-w-7xl mx-auto flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500">
            <Link
              href="/"
              className="flex items-center gap-1 text-[#102f35] hover:text-[#411b3f] transition-colors"
            >
              <Home size={14} />
              <span>Home</span>
            </Link>
            <ChevronRight size={12} className="text-gray-400" />
            <Link
              href="/industries"
              className="flex items-center gap-1 text-[#102f35] hover:text-[#411b3f] transition-colors"
            >
              <Layers size={14} />
              <span>Industries</span>
            </Link>
            <ChevronRight size={12} className="text-gray-400" />
            <span className="flex items-center gap-1 text-[#411b3f]">
              <HardHat size={14} className="text-brand-gold-deep" />
              <span>Construction &amp; Trades</span>
            </span>
          </nav>
        </div>

        <section className="py-24 px-6 max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#411b3f] block mb-3">
            Built for trades that win on trust
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#102f35] mb-6 tracking-tight">
            Your website should work as hard as{" "}
            <span className="text-[#411b3f]">your team on site</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Homeowners and commercial clients check your site before they
            request a quote. If packages are vague, proof is buried, or the
            enquiry form feels slow, they move on — even when your workmanship
            is excellent.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            At <strong className="text-[#102f35]">Karol Digital</strong>, we
            build high-performance websites for construction and trade
            businesses: clear installation packages, strong local credibility,
            and conversion journeys that turn browsers into fixed-quote
            enquiries.
          </p>
        </section>

        <section className="py-24 px-6 bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#411b3f] block mb-3">
                What we deliver
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#102f35] tracking-tight">
                High-performance sites for builders and specialists
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-sm leading-relaxed">
                Custom web development shaped around how trade customers
                actually choose — packages, proof, and a simple next step.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Clear Package Journeys",
                  desc: "Guide pricing, installation scopes, and comparison layouts that help homeowners understand what they get before they enquire.",
                  icon: <FileText size={22} />,
                },
                {
                  title: "Trust & Local Proof",
                  desc: "Project storytelling, director-led credibility, certifications, and reviews presented cleanly so visitors feel safe to commit.",
                  icon: <Sparkles size={22} />,
                },
                {
                  title: "Quote-Ready Conversion",
                  desc: "Fast, mobile-first enquiry flows — from estimate tools to fixed-quote forms — built to capture serious local leads.",
                  icon: <Sun size={22} />,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#102f35]/5 flex items-center justify-center text-[#411b3f] mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#102f35] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured project: British Solar Direct */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#411b3f] block mb-3">
                Latest completed project
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#102f35] tracking-tight">
                British Solar Direct
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-sm leading-relaxed">
                A conversion-focused website for Nottingham&apos;s turnkey home
                solar specialist — clear installation packages, fixed-quote
                journeys, and a fast path from enquiry to booking.
              </p>
            </div>

            <div className="bg-gray-50 rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 flex flex-col lg:flex-row">
              <div className="lg:w-1/2 relative min-h-[420px]">
                <Image
                  src="/british-solar-direct-showcase.png"
                  alt="British Solar Direct website project for home solar installations"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover"
                />
              </div>

              <div className="lg:w-1/2 p-8 md:p-14 flex flex-col justify-center">
                <span className="text-[#411b3f] font-bold tracking-widest text-sm uppercase mb-3 block">
                  Featured Case Study
                </span>
                <h3 className="text-3xl font-bold text-[#102f35] mb-4 tracking-tight">
                  British Solar Direct
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base">
                  We built a high-performance website for{" "}
                  <strong className="text-[#102f35]">
                    British Solar Direct
                  </strong>{" "}
                  — Nottingham&apos;s residential supply-and-install partner for
                  LONGi EcoLife home solar. The site presents turnkey packages,
                  technology, and a director-led installation story with the
                  clarity homeowners need before requesting a fixed quote.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
                  From package comparison and a live system estimator to local
                  proof and a structured quote form, every step is designed to
                  turn interest into qualified enquiries — without sales
                  pressure or template clutter.
                </p>

                <ul className="space-y-2 mb-8 text-sm text-gray-700">
                  {[
                    "High-performance custom website",
                    "Clear installation packages & guide pricing",
                    "Interactive system size estimator",
                    "Fixed-quote enquiry journey for local homeowners",
                    "Trust-led storytelling for MCS-certified installs",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <CheckCircle2
                        size={16}
                        className="text-[#411b3f] shrink-0 mt-0.5"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="grid grid-cols-2 gap-4 mb-8 text-center">
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-200/60">
                    <span className="block text-lg font-bold text-[#411b3f]">
                      Custom Build
                    </span>
                    <span className="text-xs text-gray-500 font-semibold uppercase tracking-wide">
                      Web Development
                    </span>
                  </div>
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-200/60">
                    <span className="block text-lg font-bold text-[#411b3f]">
                      Quote-Ready
                    </span>
                    <span className="text-xs text-gray-500 font-semibold uppercase tracking-wide">
                      Lead Conversion
                    </span>
                  </div>
                </div>

                <Link
                  href="https://www.britishsolardirect.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#102f35] text-white px-6 py-4 rounded-full font-bold hover:bg-[#411b3f] transition-all text-sm uppercase tracking-wider group shadow-md"
                >
                  <span>Visit Live Site</span>
                  <span className="ml-2 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-gradient-to-br from-[#102f35] to-[#1c4850] text-white rounded-[2.5rem] max-w-7xl mx-auto my-12 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(65,27,63,0.2),transparent)]" />
          <div className="relative z-10 max-w-4xl mx-auto grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-3">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold-muted block mb-3">
                Ideal for trade businesses
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">
                From solar installers to builders and specialist contractors
              </h2>
              <p className="text-gray-200 text-sm leading-relaxed mb-6">
                If your growth depends on local trust and quote-ready enquiries,
                a custom high-performance website is the foundation — not a
                brochure afterthought.
              </p>
              <div className="space-y-3 text-sm font-medium text-gray-100">
                {[
                  "Solar, electrical, and renewable installers",
                  "Builders, extensions, and renovation firms",
                  "Specialist trades that sell packages or fixed-scope work",
                ].map((line) => (
                  <p key={line} className="flex items-center gap-2">
                    <CheckCircle2
                      size={16}
                      className="text-brand-gold-soft shrink-0"
                    />
                    <span>{line}</span>
                  </p>
                ))}
              </div>
            </div>

            <div className="md:col-span-2 bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm text-center">
              <p className="text-brand-gold-muted text-xs font-bold uppercase tracking-widest mb-3">
                Next step
              </p>
              <p className="text-lg font-semibold mb-6">
                Ready for a trade website that wins more quotes?
              </p>
              <Link
                href="/book"
                className="inline-flex w-full items-center justify-center rounded-full bg-brand-gold px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-[#102f35] transition hover:bg-white"
              >
                Schedule a Free Call
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-gray-50 border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <HelpCircle className="mx-auto text-[#411b3f] w-10 h-10 mb-4" />
              <h2 className="text-3xl font-bold text-[#102f35] tracking-tight">
                Construction &amp; trades website FAQ
              </h2>
              <p className="text-gray-600 mt-2 text-sm">
                Practical answers on packages, local leads, and what makes a
                trade site convert.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: "Why not use a generic builder template?",
                  a: "Templates often look the same as your competitors, load slowly with heavy project photos, and bury the quote journey. A custom build puts your packages, proof, and enquiry path front and centre.",
                },
                {
                  q: "Can you show installation packages and guide pricing clearly?",
                  a: "Yes. We structure package comparison, inclusions, and next steps so homeowners understand scope before they enquire — as we did for British Solar Direct.",
                },
                {
                  q: "Will this help with local enquiries?",
                  a: "That is the goal. Clear service areas, trust signals, and fast mobile quote forms help serious local customers take action instead of bouncing to another contractor.",
                },
              ].map((item) => (
                <div
                  key={item.q}
                  className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm"
                >
                  <h3 className="text-lg font-bold text-[#102f35] mb-3">
                    {item.q}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-14 text-center">
              <Link href="/book" className="btn-primary px-8 py-4 inline-block">
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
    </FadeIn>
  );
}
