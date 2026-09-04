"use client";

import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Home,
  Layers,
  Scale,
  ChevronRight,
  HelpCircle,
  ShieldAlert,
} from "lucide-react";

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Web Design & Automated Systems for UK Immigration Firms",
  description:
    "Websites and enquiry systems for UK immigration law firms, OISC-regulated consultants, and visa advisers — built to earn trust, explain complex services clearly, and turn more enquiries into instructed cases.",
  image: "https://www.karoldigital.co.uk/1st-call-uk-immigration-services.jpg",
  provider: {
    "@type": "ProfessionalService",
    name: "Karol Digital",
    url: "https://www.karoldigital.co.uk",
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
  },
  category: "Web Design Services for Legal & Immigration Sector",
};

export default function ImmigrationWebDesign() {
  return (
    <FadeIn>
      {/* Structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      <main className="min-h-screen bg-white text-gray-900 font-sans">
        {/* HERO */}
        <motion.section
          className="relative min-h-[75vh] md:min-h-[80vh] w-full flex flex-col items-center justify-center text-center text-white px-6 pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/heroes/immigration-services.png"
            alt="Premium web design and SEO for immigration law firms"
            fill
            priority
            className="object-cover brightness-[0.5]"
          />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center justify-center">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-gold-muted block mb-4">
              Web Design &amp; Automated Systems for UK Immigration Firms
            </span>

            <h1 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight leading-tight md:leading-[1.15]">
              Websites that turn visa enquiries into{" "}
              <br className="hidden sm:inline" />
              <span className="text-brand-gold-muted">instructed cases</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-8 text-gray-200 leading-relaxed font-medium">
              For UK immigration firms that need more of the right clients —
              not another generic brochure site. We build clear visa journeys,
              trust-first layouts, and intake forms that save your team hours
              while stopping good cases from slipping away.
            </p>

            <p className="text-xs sm:text-sm text-gray-300 mb-8 max-w-md">
              Ideal for OISC and SRA-regulated practices that want a website
              which reflects real expertise and makes instructing you feel safe.
            </p>

            <Link
              href="/book"
              className="bg-white text-[#102f35] hover:bg-brand-gold px-10 py-4.5 rounded-full font-semibold transition-all duration-300 inline-block shadow-md active:scale-95 text-sm uppercase tracking-wider"
            >
              Get a Quote for Your Firm
            </Link>
          </div>
        </motion.section>

        {/* BREADCRUMB */}
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
              href="/services"
              className="flex items-center gap-1 text-[#102f35] hover:text-[#411b3f] transition-colors"
            >
              <Layers size={14} />
              <span>Services</span>
            </Link>
            <ChevronRight size={12} className="text-gray-400" />
            <span className="flex items-center gap-1 text-[#411b3f]">
              <Scale size={14} className="text-brand-gold-deep" />
              <span>Immigration Web Design</span>
            </span>
          </nav>
        </div>

        {/* SECTION 1 – TRUST & COMPLIANCE */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <Image
                src="/immigration-hero-bg.jpg"
                alt="Immigration law firm website design example"
                width={600}
                height={500}
                className="rounded-3xl shadow-2xl z-10 relative object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-gold/50 rounded-3xl -z-10 hidden md:block" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#411b3f] block mb-3">
                Legal Credibility &amp; Compliance
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#102f35] mb-6 tracking-tight">
                Built for{" "}
                <span className="text-[#411b3f]">Regulated Immigration Practices</span>
              </h2>

              <p className="text-gray-700 text-lg mb-6 italic border-l-4 border-brand-gold/70 pl-4 font-medium">
                “For immigration clients, your website feels like the first
                consultation. If it’s unclear or outdated, they quietly look
                elsewhere.”
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                Operating a successful UK immigration practice means working
                within OISC and SRA rules, while handling highly sensitive
                personal data. Prospective clients — and corporate partners —
                carry out serious due diligence before they instruct a firm.
                Slow, confusing, or outdated websites instantly undermine trust.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">
                We design immigration websites that combine clear service
                explanations, strong trust signals, and compliant information
                displays. The result is a site that supports your reputation,
                makes it easy for people to understand how you help, and helps
                your team handle enquiries efficiently.
              </p>

              <ul className="space-y-3 mb-8 text-sm font-semibold text-gray-800">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600">✔</span> GDPR-considered
                  intake and data handling patterns for sensitive cases
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600">✔</span> Secure document
                  upload options and encrypted storage integrations
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600">✔</span> Space for clear
                  OISC / SRA credentials, accreditations and complaints
                  procedures
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600">✔</span> Optional
                  multi-language content support for global audiences
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 2 – VISA SECTOR PAGES */}
        <section className="py-24 px-6 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#411b3f] block mb-3">
                High-Value Client Acquisition
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#102f35] tracking-tight">
                Pages Tailored to Key Visa Practice Areas
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-sm leading-relaxed">
                Generic “services” pages rarely convert well in immigration law.
                We structure focused pages around the specific visa routes and
                case types that matter most to your practice — so visitors find
                the right path and your team gets better-qualified enquiries.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold text-[#102f35] mb-3">
                  Corporate &amp; Sponsor Licences
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Landing pages focused on sponsor licences, Skilled Worker
                  routes, and corporate immigration support. Designed to speak
                  to HR directors and business owners, and to drive high-value
                  B2B enquiries.
                </p>
                <span className="text-xs font-bold uppercase text-[#411b3f] tracking-wide">
                  Corporate Lead Generation
                </span>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold text-[#102f35] mb-3">
                  Family, Settlement &amp; ILR
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Empathetic page structures for spouse visas, ILR, and
                  citizenship routes. Clear language, expectations and next
                  steps — helping stressed clients feel guided and supported
                  from the very first click.
                </p>
                <span className="text-xs font-bold uppercase text-[#411b3f] tracking-wide">
                  High-Conversion Journeys
                </span>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold text-[#102f35] mb-3">
                  Refusals, Appeals &amp; Reviews
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Urgent enquiry flows for refusals, appeals, and
                  administrative/judicial reviews. Built to capture
                  time-sensitive cases quickly and route them to your team
                  without bottlenecks.
                </p>
                <span className="text-xs font-bold uppercase text-[#411b3f] tracking-wide">
                  Fast Response Pipelines
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 – WORKFLOW & AUTOMATION */}
        <section
          id="features"
          className="py-24 px-6 bg-gray-50 border-y border-gray-100"
        >
          <div className="max-w-6xl mx-auto text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#411b3f] block mb-3">
              Workflow &amp; Client Experience
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#102f35] tracking-tight">
              Designed Around Your{" "}
              <span className="text-[#411b3f]">Day-to-Day Casework</span>
            </h2>
            <p className="text-gray-600 mt-4 text-sm max-w-xl mx-auto">
              We build tools that reduce admin and make it easier for your team
              to handle enquiries, rather than adding more complexity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                title: "Client Intake Forms",
                desc: "Structured intake forms that capture key details by visa type and urgency, helping you quickly assess which cases are viable and where to focus your time.",
                icon: "📝",
              },
              {
                title: "Resource & Visa Hubs",
                desc: "Dedicated areas for guides, FAQs and visa updates that position your practice as a trusted authority, and reduce repetitive “quick question” emails.",
                icon: "⚖️",
              },
              {
                title: "Appointment Booking",
                desc: "Calendar integrations so potential clients can request or book consultations online, with clear fees and time slots that work for your team.",
                icon: "📅",
              },
            ].map((card) => (
              <motion.div
                key={card.title}
                whileHover={{ y: -5 }}
                className="p-10 bg-white rounded-3xl shadow-sm border border-gray-100/80 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-6">{card.icon}</div>
                <h3 className="text-xl font-bold text-[#102f35] mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 4 – WHY KAROL DIGITAL */}
        <section className="py-24 px-6 bg-[#102f35] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(65,27,63,0.15),transparent)]" />
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold-muted block mb-3">
                The Karol Digital Difference
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Why Immigration Firms Choose to Partner Here
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center md:text-left">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-brand-gold-soft font-medium text-lg mb-6">
                  01
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-tight">
                  UK Legal &amp; Local SEO Focus
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Deep familiarity with how people search for immigration help
                  in the UK. Sites are structured around real search phrases
                  like “sponsor licence lawyers London” and “OISC immigration
                  adviser near me”, not just generic headings.
                </p>
              </div>
              <div className="text-center md:text-left">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-brand-gold-soft font-medium text-lg mb-6">
                  02
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-tight">
                  Lean, Independent Delivery
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  You work directly with the person doing the work, not a
                  rotating agency team. That means faster decisions, clearer
                  communication, and timelines measured in weeks rather than
                  months.
                </p>
              </div>
              <div className="text-center md:text-left">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-brand-gold-soft font-medium text-lg mb-6">
                  03
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-tight">
                  Conversion-Focused from Day One
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Every page is built with a job to do — whether that’s
                  enquiries, booked calls, or newsletter sign-ups. Design,
                  copy, and layout are all aligned to bring in better quality
                  enquiries over time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION — BUSINESS OUTCOMES */}
        <section className="py-24 px-6 bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#411b3f] block mb-3">
                Business Outcomes, Not Tech Speak
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#102f35] tracking-tight">
                Built around how immigration firms actually make money
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-sm leading-relaxed">
                High-value visa work lives or dies on clarity and follow-through.
                We design for the commercial reality: stressed clients, multi-step
                forms, and teams who cannot afford lost enquiries.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
                <h3 className="text-lg font-bold text-[#102f35] mb-3">
                  Small conversion lifts, large revenue impact
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  On spouse visa, ILR, and corporate routes, even a modest lift in
                  completed enquiries or booked consultations can translate into
                  tens of thousands of pounds in high-margin instructed work over
                  a year — without buying more ads.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
                <h3 className="text-lg font-bold text-[#102f35] mb-3">
                  Forms that qualify cases early
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Structured intake by visa type and urgency means your team spends
                  less time on incomplete or poorly matched enquiries — and more
                  time on cases you can actually take.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
                <h3 className="text-lg font-bold text-[#102f35] mb-3">
                  Multi-brand lead routing
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  For groups running immigration alongside finance or related
                  brands, we design journeys that route the right lead to the right
                  practice — so cross-referrals become seamless instead of manual.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CASE STUDY */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gray-50 rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 flex flex-col lg:flex-row">
              {/* Project Image */}
              <div className="lg:w-1/2 relative min-h-[450px]">
                <Image
                  src="/1st-call-uk-immigration-services.jpg"
                  alt="1st Call UK Immigration website design"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover object-top"
                />
              </div>

              {/* Project Details */}
              <div className="lg:w-1/2 p-8 md:p-14 flex flex-col justify-center">
                <span className="text-[#411b3f] font-bold tracking-widest text-sm uppercase mb-3 block">
                  Featured Case Study · 1st Call UK Group
                </span>
                <h2 className="text-3xl font-bold text-[#102f35] mb-6 tracking-tight">
                  1st Call UK Immigration Services
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base">
                  For{" "}
                  <strong className="text-[#102f35]">
                    1st Call UK Immigration
                  </strong>
                  , we rebuilt the digital front door around how clients actually
                  decide: plain-English visa paths, visible credentials, and
                  enquiry flows that feel safe when the stakes are high.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
                  As part of a multi-brand group that also serves financial
                  clients, the site needed to explain complex services clearly
                  while routing serious enquiries efficiently — so the team wins
                  more instructed cases with less admin chase.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8 text-center">
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-200/60">
                    <span className="block text-xl font-bold text-[#411b3f]">
                      ↑ Lead quality
                    </span>
                    <span className="text-xs text-gray-500 font-semibold uppercase tracking-wide">
                      Clearer enquiry journeys
                    </span>
                  </div>
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-200/60">
                    <span className="block text-xl font-bold text-[#411b3f]">
                      OISC Ready
                    </span>
                    <span className="text-xs text-gray-500 font-semibold uppercase tracking-wide">
                      Trust &amp; compliance visible
                    </span>
                  </div>
                </div>

                <Link
                  href="https://1stcalluk.com/"
                  target="_blank"
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

        {/* REGULATORY BAR */}
        <section className="py-16 px-6 bg-gradient-to-br from-[#411b3f] to-[#251024] text-white rounded-[2.5rem] max-w-7xl mx-auto my-12 shadow-xl">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center">
            <div className="bg-white/10 p-4 rounded-2xl shrink-0">
              <ShieldAlert className="text-brand-gold-soft w-10 h-10" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 tracking-tight">
                Statutory Information &amp; Transparency
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                UK legal websites must show clear information about prices,
                services, and complaints procedures. We design global header and
                footer areas to house this content cleanly, so you stay
                compliant without cluttering your key pages or confusing users.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-6 bg-gray-50 border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <HelpCircle className="mx-auto text-[#411b3f] w-10 h-10 mb-4" />
              <h2 className="text-3xl font-bold text-[#102f35] tracking-tight">
                Immigration Website FAQ
              </h2>
              <p className="text-gray-600 mt-2 text-sm">
                Practical answers on compliance, data handling, and how these
                websites help you win better cases.
              </p>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-base font-bold text-[#102f35] mb-2">
                  How do you handle OISC and SRA requirements on the site?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We reserve space in your global header and footer for key
                  statutory information: credentials, registration numbers,
                  regulatory logos, and complaints information. This keeps you
                  compliant across every page without disrupting your main
                  content or user journeys.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-base font-bold text-[#102f35] mb-2">
                  Can the website safely handle documents and ID scans?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Yes. Where needed, we can connect secure upload tools and
                  external storage or CRM systems, so sensitive documents are
                  handled through encrypted channels rather than sitting in a
                  basic web host database. The exact approach depends on your
                  existing systems and risk appetite.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-base font-bold text-[#102f35] mb-2">
                  How does a custom build help with rankings for visa-related
                  searches?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Search engines look closely at speed, structure, and trust
                  signals — especially for legal and immigration topics. A
                  lightweight, custom build lets us control headings, internal
                  links, schema, and performance, which together give you a
                  better foundation to compete for competitive UK immigration
                  keywords.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 bg-white text-center px-6">
          <div className="max-w-3xl mx-auto p-12 rounded-[3rem] bg-gradient-to-br from-[#411b3f] to-[#102f35] text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Ready for a website that wins more instructed cases?
            </h2>
            <p className="text-base mb-10 text-gray-200 max-w-xl mx-auto">
              If your current site feels dated, slow, or unclear, high-value
              cases will quietly go elsewhere. Let’s build a credible website
              that reflects your expertise and makes it easier for clients to
              instruct you.
            </p>
            <Link
              href="/book"
              className="inline-block bg-brand-gold hover:bg-brand-gold-deep text-[#102f35] px-10 py-4 rounded-full font-semibold text-sm uppercase tracking-wider shadow-md transition active:scale-95"
            >
              Start Your Project
            </Link>
          </div>
        </section>
      </main>
    </FadeIn>
  );
}
