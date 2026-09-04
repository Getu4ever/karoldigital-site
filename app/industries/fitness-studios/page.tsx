"use client";

import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Home,
  Layers,
  Heart,
  ChevronRight,
  CheckCircle2,
  HelpCircle,
  ShoppingBag,
  Sparkles,
} from "lucide-react";

export default function FitnessStudiosPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "High-Performance Website Development for Fitness Studios",
    description:
      "Custom web development and e-commerce for UK fitness and wellness studios, featuring online class booking and conversion-focused design. Featured project: Wild Hearts Collective.",
    image: "https://www.karoldigital.co.uk/wild-hearts-showcase.png",
    provider: {
      "@type": "ProfessionalService",
      name: "Karol Digital",
      url: "https://www.karoldigital.co.uk",
    },
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    category: "Web Design Services for Fitness & Wellness Studios",
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
            src="/heroes/fitness-studios.png"
            alt="High-performance website design for fitness and wellness studios"
            fill
            priority
            className="object-cover brightness-[0.5]"
          />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center justify-center">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-gold-muted block mb-4">
              Featuring Wild Hearts Collective
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-tight md:leading-[1.15]">
              Fitness &amp; Wellness Studio{" "}
              <span className="text-brand-gold-muted">Websites</span>
            </h1>
            <p className="text-base sm:text-lg max-w-2xl mx-auto mb-10 text-gray-200 leading-relaxed font-medium">
              Class discovery, online booking, and a brand presence clients are
              proud to share — like Wild Hearts Collective, admired by the
              founders and their community.
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
              <Heart size={14} className="text-brand-gold-deep" />
              <span>Fitness &amp; Wellness Studios</span>
            </span>
          </nav>
        </div>

        <section className="py-24 px-6 max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#411b3f] block mb-3">
            Built for studios that sell experiences
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#102f35] mb-6 tracking-tight">
            Your website should feel as inviting as{" "}
            <span className="text-[#411b3f]">your studio floor</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Fitness and wellness studios win on community, trust, and ease. If
            class information is hard to find, booking feels clunky, or the site
            looks generic, new members hesitate — and word-of-mouth stops short
            of the website.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            At <strong className="text-[#102f35]">Karol Digital</strong>, we
            build high-performance websites with custom development and
            e-commerce so studios can showcase classes beautifully, take
            bookings online, and look as polished as the experience they deliver
            in person.
          </p>
        </section>

        <section className="py-24 px-6 bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#411b3f] block mb-3">
                What we deliver
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#102f35] tracking-tight">
                High-performance websites for studio brands
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-sm leading-relaxed">
                Custom web development and e-commerce shaped around how
                members actually discover, choose, and book classes.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Custom Web Development",
                  desc: "Custom sites built around your brand, classes, and community — fast on mobile, easy to book, and free of the clutter that makes studios look amateur.",
                  icon: <Sparkles size={22} />,
                },
                {
                  title: "E-commerce & Online Booking",
                  desc: "Clear class catalogues, advance booking, and online payment flows so members can reserve and pay before they arrive — reducing no-shows and admin.",
                  icon: <ShoppingBag size={22} />,
                },
                {
                  title: "Conversion-Focused Design",
                  desc: "Inclusive storytelling, strong visuals, and obvious next steps. Every page helps visitors understand the studio and book with confidence.",
                  icon: <Heart size={22} />,
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

        {/* Featured project: Wild Hearts Collective */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#411b3f] block mb-3">
                Latest completed project
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#102f35] tracking-tight">
                Wild Hearts Collective
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-sm leading-relaxed">
                Highly admired by the client and their friends — an inclusive
                aerial and pole studio site with online booking, clear schedules,
                and a warm brand presence people are proud to share.
              </p>
            </div>

            <div className="bg-gray-50 rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 flex flex-col lg:flex-row">
              <div className="lg:w-1/2 relative min-h-[420px]">
                <Image
                  src="/wild-hearts-showcase.png"
                  alt="Wild Hearts Collective studio website project"
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
                  Wild Hearts Collective
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base">
                  We built a high-performance website for{" "}
                  <strong className="text-[#102f35]">
                    Wild Hearts Collective
                  </strong>{" "}
                  — an inclusive aerial and pole studio founded by qualified
                  instructors Rosie, Jacqui, and Sarah. The site presents pole,
                  aerial hoop, silks, family and kids classes, workshops, and
                  creative arts in a warm, body-positive voice that matches the
                  studio floor.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
                  Custom web development and e-commerce power advance online
                  booking and payment, clear class discovery, FAQs, and a
                  schedule members can trust. A dedicated admin area lets the
                  studio control bookings, memberships, and day-to-day
                  operations without developer help. The result is a digital
                  home the founders and their community are proud to share —
                  fast, credible, and built to convert browsers into booked
                  places.
                </p>

                <ul className="space-y-2 mb-8 text-sm text-gray-700">
                  {[
                    "High-performance custom website",
                    "E-commerce class booking & online payment",
                    "Inclusive brand storytelling & clear class journeys",
                    "Mobile-first experience for on-the-go booking",
                    "Admin page to control booking, membership & studio operations",
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
                      Client admired
                    </span>
                    <span className="text-xs text-gray-500 font-semibold uppercase tracking-wide">
                      Shared with friends
                    </span>
                  </div>
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-200/60">
                    <span className="block text-lg font-bold text-[#411b3f]">
                      Book online
                    </span>
                    <span className="text-xs text-gray-500 font-semibold uppercase tracking-wide">
                      Classes &amp; workshops
                    </span>
                  </div>
                </div>

                <Link
                  href="https://www.wildheartscollective.org/"
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
                Ideal for studio owners
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">
                From aerial studios to boutique gyms and wellness spaces
              </h2>
              <p className="text-gray-200 text-sm leading-relaxed mb-6">
                If your growth depends on people finding the right class and
                booking without friction, a custom high-performance site with
                e-commerce is the foundation — not a nice-to-have.
              </p>
              <div className="space-y-3 text-sm font-medium text-gray-100">
                {[
                  "Pole, aerial, yoga, pilates, and movement studios",
                  "Boutique gyms and specialist fitness brands",
                  "Community-led wellness collectives with workshops & events",
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
                Ready for a studio website people admire?
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
                Fitness studio website FAQ
              </h2>
              <p className="text-gray-600 mt-2 text-sm">
                Practical answers on custom builds, booking, and what makes a
                studio site convert.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: "Why not just use a fitness template or booking-only app?",
                  a: "Templates and bolt-on booking tools often look generic, load slowly, and fight your brand. A custom high-performance website puts your story, classes, and e-commerce booking in one polished experience members trust.",
                },
                {
                  q: "Can you integrate online class booking and payments?",
                  a: "Yes. We build e-commerce and booking journeys so members can browse classes, book in advance, and pay online — reducing admin and making it easier to fill the timetable.",
                },
                {
                  q: "Is this only for aerial or pole studios?",
                  a: "No. The same approach works for yoga, pilates, boutique gyms, dance schools, and wellness collectives — any studio that needs a credible site and a smooth path from interest to booked class.",
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
              <Link
                href="/book"
                className="btn-primary px-8 py-4 inline-block"
              >
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
    </FadeIn>
  );
}
