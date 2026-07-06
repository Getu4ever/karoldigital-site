"use client";

import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function WebDesignPage() {
  return (
    <FadeIn>
      <main className="min-h-screen bg-white text-gray-900">

        {/* === HERO SECTION === */}
        
<section className="relative min-h-[80vh] flex items-center justify-center text-center text-white pt-24 pb-12">          <Image
            src="/hero-page-banner.jpg"
            alt="Professional Web Design Services"
            fill
            priority
            className="object-cover brightness-[0.5]"
          />
          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 px-6 max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-extrabold mb-6"
            >
              Professional Web Design
              <span className="block text-yellow-400 mt-2">
                Built for Growth, Performance &amp; Trust
              </span>
            </motion.h1>

            <p className="text-lg md:text-xl text-gray-100 leading-relaxed mb-4">
              We design high-impact websites that position your business as credible,
              authoritative, and conversion-ready — engineered to support long-term
              growth in competitive digital markets.
            </p>
            <p className="text-sm md:text-base text-gray-200 max-w-2xl mx-auto">
              Ideal for UK service businesses and SMEs who are ready to move beyond
              basic templates and turn their website into a reliable source of enquiries.
            </p>
          </div>
        </section>

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
              Web Design
            </li>
          </ol>
        </nav>

        {/* === INTRODUCTION (NOW WITH IMAGE ON RIGHT) === */}
        <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Text Column */}
            <div>
              <div className="max-w-5xl mb-10">
                <h2 className="text-4xl font-bold text-[#102f35] mb-8">
                  Web Design That Goes Beyond Visual Appeal
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  At Karol Digital, web design is not treated as a cosmetic exercise.
                  Every website we create is built with a clear strategic purpose —
                  to communicate value, build trust, guide user behaviour, and support
                  measurable business objectives.
                </p>
              </div>

              <div className="space-y-7 text-gray-700 text-lg leading-relaxed">
                <p>
                  Your website is often the first meaningful interaction a potential
                  customer has with your brand. In seconds, visitors decide whether
                  they trust your business, understand your offer, and feel confident
                  enough to engage further. Poor design, slow performance, or unclear
                  messaging can silently cost you opportunities every single day.
                </p>

                <p>
                  Our approach to web design combines strategic planning, user-centred
                  design principles, and modern development standards. We focus on
                  clarity, usability, and performance to ensure that your website
                  functions as a powerful business asset rather than a static brochure.
                </p>

                <p>
                  Whether you&apos;re refreshing an outdated website or starting from
                  scratch, we align design decisions with your sales process, marketing
                  activity, and long-term positioning — so your website actively helps
                  you win more of the right clients.
                </p>
              </div>
            </div>

            {/* Image Column */}
            <div className="relative h-[360px] md:h-[420px] w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/web-design-services.webp"
                alt="High-performance web design by Karol Digital"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* === CORE BENEFITS === */}
        <section className="bg-gray-50 py-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#411b3f] mb-4">
                Strategy-Driven Design
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We design with intent. Layouts, content structure, and user flows
                are planned around your business goals — whether that is lead
                generation, enquiries, bookings, or product sales.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#411b3f] mb-4">
                Performance &amp; Accessibility
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Fast load times, mobile optimisation, and accessibility best
                practices are baked into every project. This ensures a smooth
                experience for users and improved visibility in search engines.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#411b3f] mb-4">
                Scalable Architecture
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Your website is built to grow with your business. From simple
                brochure sites to advanced digital systems, our solutions are
                designed with scalability and future expansion in mind.
              </p>
            </div>
          </div>
        </section>

        {/* === PROCESS SECTION === */}
        <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-[#102f35] mb-8">
              Our Web Design Process
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              A structured and transparent process ensures clarity, efficiency,
              and results at every stage of your project.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-6 border-l-4 border-[#102f35]">
              <h4 className="text-xl font-bold mb-3">Discovery &amp; Planning</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                We begin by understanding your business, audience, competitors,
                and objectives. This phase defines the foundation of the project
                and the role your website will play in your wider strategy.
              </p>
            </div>

            <div className="p-6 border-l-4 border-[#102f35]">
              <h4 className="text-xl font-bold mb-3">Design &amp; UX</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Visual concepts and user journeys are crafted to ensure clarity,
                engagement, and intuitive navigation across all devices. Every
                page has a clear job and a clear next step for the user.
              </p>
            </div>

            <div className="p-6 border-l-4 border-[#102f35]">
              <h4 className="text-xl font-bold mb-3">Development</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Clean, modern code brings the design to life, focusing on speed,
                security, and technical excellence. We build with maintainability
                in mind so updates are easier later on.
              </p>
            </div>

            <div className="p-6 border-l-4 border-[#102f35]">
              <h4 className="text-xl font-bold mb-3">Launch &amp; Support</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Thorough testing precedes launch, followed by guidance and
                optional ongoing support to ensure long-term success and
                continuous improvement.
              </p>
            </div>
          </div>
        </section>

        {/* === CTA SECTION === */}
        <section className="bg-[#102f35] py-20 px-6 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-extrabold mb-6">
              Ready to Build a Website That Works for Your Business?
            </h2>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              Explore our structured packages and find the solution that aligns
              with your business goals, growth stage, and budget.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/pricing"
                className="inline-block bg-[#ffffff] text-[#102f35] font-bold px-10 py-4 rounded-full hover:bg-yellow-300 transition"
              >
                View Web Design Packages &amp; Pricing
              </Link>
              <Link
                href="/book"
                className="inline-block border border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white hover:text-[#102f35] transition"
              >
                Start Your Website Project
              </Link>
            </div>
          </div>
        </section>

      </main>
    </FadeIn>
  );
}
