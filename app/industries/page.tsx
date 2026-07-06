"use client";

import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Scale,
  HardHat,
  Landmark,
  Briefcase,
  Building2,
  Calculator,
} from "lucide-react";

export default function IndustriesPage() {
  const industries = [
    {
      href: "/industries/financial-services",
      label: "Financial Services",
      linkLabel: "Financial sites",
      icon: <Landmark size={20} />,
      description:
        "Web design for financial businesses that need clarity, trust, and a more professional route to enquiry.",
    },
    {
      href: "/industries/immigration-services",
      label: "Immigration Lawyers",
      linkLabel: "Immigration sites",
      icon: <Scale size={20} />,
      description:
        "Website design for immigration-focused firms that need to build authority, reduce confusion, and make it easier for clients to get in touch.",
    },
    {
      href: "/industries/building-services",
      label: "Construction and Trades",
      linkLabel: "Construction sites",
      icon: <HardHat size={20} />,
      description:
        "Lead generation websites for construction companies and tradespeople that need stronger credibility and more quote-ready enquiries.",
    },
    
  ];

  const industryPrinciples = [
    {
      title: "Trust matters more in some sectors",
      description:
        "For legal, financial, and advisory businesses, the website often shapes the first impression before any conversation happens.",
    },
    {
      title: "Different industries ask different questions",
      description:
        "A construction client looks for proof, reliability, and local credibility. A legal or financial client looks for clarity, professionalism, and reassurance.",
    },
    {
      title: "The best websites reflect how clients choose",
      description:
        "Industry-specific messaging, page structure, and calls-to-action help the website feel more relevant and more persuasive.",
    },
  ];

  return (
    <FadeIn>
      <main className="min-h-screen bg-white text-gray-900">
        <motion.section
          className="relative min-h-[60vh] flex items-center justify-center text-center text-white pt-8 md:pt-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/hero-page-banner.jpg"
            alt="Industry-focused web design for UK service businesses"
            fill
            priority
            className="object-cover brightness-[0.5]"
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 px-6 max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-400 mb-4">
              Industries
            </p>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
              Industry-focused websites for service businesses
            </h1>
            <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto">
              Industry-focused websites for service businesses that need stronger
              credibility, clearer messaging, and better lead generation.
            </p>
          </div>
        </motion.section>

        <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-[#f9fafb] to-[#f1f5f9]">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <span className="text-sm font-bold uppercase tracking-widest text-[#411b3f] block mb-3">
                Who we help
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#102f35] mb-6">
                Websites shaped around how your industry wins trust
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                The best service-business websites are not generic. They reflect what
                matters in your market, what clients need to see, and what helps them
                feel ready to take the next step.
              </p>
              <p className="text-gray-600 leading-relaxed">
                That is why industry context matters. The structure, tone, and proof that
                works for a law firm is different from what works for a construction
                company or a mortgage broker.
              </p>
            </div>

            <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/strategic-engineering-visual.webp"
                alt="Industry-focused website strategy"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="py-24 px-6 md:px-12 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-extrabold text-[#102f35] mb-4">
                Industry pages
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Explore the sectors where trust, clarity, and enquiry quality matter most.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry) => (
                <article
                  key={industry.href}
                  className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-5 text-[#102f35]">
                    {industry.icon}
                    <h3 className="text-2xl font-bold">{industry.label}</h3>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {industry.description}
                  </p>

                  <Link
                    href={industry.href}
                    className="inline-flex items-center gap-2 font-semibold text-[#102f35] hover:text-[#411b3f]"
                  >
                    {industry.linkLabel}
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6 md:px-12 bg-gray-50 border-y border-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#102f35] mb-4">
                Why industry-specific positioning matters
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A generic website can look fine and still underperform. Relevance is what
                helps visitors feel they are in the right place.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {industryPrinciples.map((item) => (
                <div
                  key={item.title}
                  className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm"
                >
                  <h3 className="text-2xl font-bold text-[#102f35] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6 md:px-12 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-extrabold text-[#102f35] mb-4">
                What changes from one sector to another
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                The framework stays strong, but the messaging, proof, and user journey
                should adapt to the type of client you want to attract.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <h3 className="text-2xl font-bold text-[#102f35] mb-4">
                  Legal and immigration
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Authority, clarity, reassurance, and a professional first impression are
                  essential. Visitors need to understand services quickly and feel safe
                  taking the next step.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <h3 className="text-2xl font-bold text-[#102f35] mb-4">
                  Financial and advisory
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Trust, precision, and structure matter most. The site needs to feel
                  credible, organised, and easy to navigate without overwhelming the user.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <h3 className="text-2xl font-bold text-[#102f35] mb-4">
                  Construction and trades
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Proof of work, service areas, reliability, and quote-focused journeys
                  matter more. Visitors often want confidence and fast next steps.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 md:px-12 bg-gray-50 border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#102f35] mb-4">
                Industries FAQ
              </h2>
              <p className="text-gray-600">
                A few common questions about industry-specific website work.
              </p>
            </div>

            <div className="space-y-6">
              <details className="border rounded-xl p-6 shadow-sm group transition-all bg-white">
                <summary className="font-semibold cursor-pointer text-[#102f35] list-none flex justify-between items-center">
                  <span>Do you only work with the industries listed here?</span>
                  <span className="text-xl group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  No. These are priority sectors, but the wider focus is UK service
                  businesses that need stronger credibility, clearer messaging, and more
                  qualified enquiries.
                </p>
              </details>

              <details className="border rounded-xl p-6 shadow-sm group transition-all bg-white">
                <summary className="font-semibold cursor-pointer text-[#102f35] list-none flex justify-between items-center">
                  <span>Why not use the same website structure for every industry?</span>
                  <span className="text-xl group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  Because different buyers make decisions differently. The questions,
                  objections, and trust signals that matter in one sector are not always
                  the same in another.
                </p>
              </details>

              <details className="border rounded-xl p-6 shadow-sm group transition-all bg-white">
                <summary className="font-semibold cursor-pointer text-[#102f35] list-none flex justify-between items-center">
                  <span>Can you create a page for my specific niche later on?</span>
                  <span className="text-xl group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  Yes. As your SEO strategy develops, you can add more sector-specific
                  landing pages around the industries and services that matter most to
                  your business.
                </p>
              </details>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-r from-[#102f35] via-[#513356] to-[#102f35] text-white text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Find the best fit for your industry
          </h2>
          <p className="text-lg mb-8 text-gray-100 max-w-2xl mx-auto px-6">
            If your business depends on trust, clarity, and qualified enquiries, the
            right website structure can make a major difference.
          </p>
          <Link
            href="/book"
            className="inline-block bg-white text-[#102f35] hover:bg-[#411b3f] hover:text-white font-semibold px-8 py-4 rounded-full shadow-lg transition"
          >
            Book a Consultation
          </Link>
        </section>
      </main>
    </FadeIn>
  );
}
