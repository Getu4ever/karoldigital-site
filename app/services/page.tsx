"use client";

import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Monitor,
  Code2,
  Search,
  Zap,
  Landmark,
  Scale,
  HardHat,
  Briefcase,
} from "lucide-react";

export default function ServicesPage() {
  const servicePills = [
    {
      href: "/services/web-design",
      label: "Web Design",
      icon: <Monitor size={18} />,
    },
    {
      href: "/services/custom-web-development",
      label: "Custom Web Development",
      icon: <Code2 size={18} />,
    },
    {
      href: "/services/nextjs-development",
      label: "Next.js Development",
      icon: <Zap size={18} />,
    },
    {
      href: "/services/website-audits",
      label: "Website Audits",
      icon: <Search size={18} />,
    },
  ];

  const industryLinks = [
    {
      href: "/industries/financial-services",
      label: "Financial Services",
      icon: <Landmark size={18} />,
    },
    {
      href: "/industries/immigration-services",
      label: "Immigration Lawyers",
      icon: <Scale size={18} />,
    },
    {
      href: "/industries/building-services",
      label: "Construction & Trades",
      icon: <HardHat size={18} />,
    },
    {
      href: "/industries",
      label: "All Industries",
      icon: <Briefcase size={18} />,
    },
  ];

  const serviceCards = [
    {
      title: "Web Design for Service Businesses",
      description:
        "Professional website design built around trust, clarity, and lead generation. Ideal for businesses that need a stronger first impression and a clearer path to enquiry.",
      points: [
        "Clear messaging and page structure",
        "Mobile-responsive layouts",
        "Stronger trust and credibility signals",
      ],
      href: "/book",
      cta: "Book a Free Consultation",
    },
    {
      title: "Custom Web Development",
      description:
        "Custom website development for businesses that need more flexibility, better performance, and a build shaped around how they actually sell and operate.",
      points: [
        "Tailored functionality",
        "No template bloat",
        "Built around your goals and user journey",
      ],
      href: "/book?service=Custom+Web+Development",
      cta: "Discuss Your Project",
    },
    {
      title: "Next.js Development Services",
      description:
        "High-performance websites built with a modern technical foundation for speed, maintainability, and long-term scalability.",
      points: [
        "Fast load times",
        "Clean technical foundation",
        "Better performance across devices",
      ],
      href: "/book?service=Next.js+Development",
      cta: "Talk About Next.js Development",
    },
    {
      title: "Website Audits and Improvement Plans",
      description:
        "A practical review of your current website to identify what is hurting trust, visibility, speed, or conversions - and what to fix first.",
      points: [
        "Messaging and UX review",
        "Performance and SEO checks",
        "Clear next-step recommendations",
      ],
      href: "/book?service=Website+Audit",
      cta: "Request a Website Audit",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery and audit",
      description:
        "We review your business, your current site, your competitors, and the kind of enquiries you want more of.",
    },
    {
      step: "02",
      title: "Structure and messaging",
      description:
        "We shape the page structure, user journey, and messaging so visitors can quickly understand what you do and why they should trust you.",
    },
    {
      step: "03",
      title: "Design and development",
      description:
        "We design and build a fast, custom website with clean structure, strong mobile usability, and conversion-focused detail.",
    },
    {
      step: "04",
      title: "Launch and refinement",
      description:
        "We launch the site, test key journeys, and refine based on real-world use so the website continues to support growth.",
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
            alt="Web design and development services for UK service businesses"
            fill
            priority
            className="object-cover brightness-[0.5]"
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 px-6 max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-400 mb-4">
              Services
            </p>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
              Web design and development services built for enquiries
            </h1>
            <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto">
              Fast, conversion-focused websites for UK service businesses that need
              stronger credibility, clearer messaging, and better lead generation.
            </p>
          </div>
        </motion.section>

        <FadeIn>
          <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-[#f9fafb] to-[#f1f5f9] pb-16">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <span className="text-sm font-bold uppercase tracking-widest text-[#411b3f] block mb-3">
                  Engineered for Results
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#102f35] mb-6">
                  Strategic Solutions Rooted in Technical Excellence
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  At Karol Digital, we don’t just design good-looking websites. We build
                  fast, reliable, and conversion-focused platforms that support how you
                  actually sell, deliver, and communicate as a business.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  By combining clean, professional layouts with strong technical SEO and
                  modern architecture, we create websites that feel effortless to use,
                  load quickly on any device, and act as a dependable source of new
                  enquiries.
                </p>
              </div>

              <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/strategic-engineering-visual.webp"
                  alt="Karol Digital Strategic Infrastructure"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>
        </FadeIn>


        <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-[#f9fafb] to-[#f1f5f9]">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center mb-12">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#102f35]/60 mb-8">
                Core Services
              </h2>

              <div className="flex flex-wrap items-center justify-center gap-4">
                {servicePills.map((pill) => (
                  <Link
                    key={pill.href}
                    href={pill.href}
                    className="group relative flex items-center gap-3 px-8 py-4 bg-[#102f35]/5 border border-[#102f35]/10 text-[#102f35] rounded-full font-bold text-sm transition-all duration-500 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#102f35]/10 active:scale-95"
                  >
                    <span className="absolute inset-0 w-0 bg-gradient-to-r from-[#102f35] to-[#411b3f] transition-all duration-500 ease-out group-hover:w-full" />
                    <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors duration-500">
                      <span className="text-[#411b3f] group-hover:text-yellow-400 transition-colors duration-500">
                        {pill.icon}
                      </span>
                      <span className="tracking-tight">{pill.label}</span>
                      <ArrowRight
                        size={16}
                        className="opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-yellow-400"
                      />
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#411b3f]/60 mb-8">
                Industry Pages
              </h2>

              <div className="flex flex-wrap items-center justify-center gap-4">
                {industryLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group relative flex items-center gap-3 px-8 py-4 bg-[#411b3f]/5 border border-[#102f35]/10 text-[#102f35] rounded-full font-bold text-sm transition-all duration-500 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#102f35]/10 active:scale-95"
                  >
                    <span className="absolute inset-0 w-0 bg-gradient-to-r from-[#411b3f] to-[#102f35] transition-all duration-500 ease-out group-hover:w-full" />
                    <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors duration-500">
                      <span className="text-[#102f35] group-hover:text-yellow-400 transition-colors duration-500">
                        {item.icon}
                      </span>
                      <span className="tracking-tight">{item.label}</span>
                      <ArrowRight
                        size={16}
                        className="opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-yellow-400"
                      />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 md:px-12 bg-white">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-extrabold text-[#102f35] mb-4">
              Services designed around trust, speed, and conversion
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The goal is not just to launch a better-looking website. The goal is to
              give your business a stronger digital presence that helps the right people
              trust you faster and get in touch more easily.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {serviceCards.map((card) => (
              <div
                key={card.title}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-[#102f35] mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {card.description}
                </p>

                <div className="space-y-2 mb-8">
                  {card.points.map((point) => (
                    <p
                      key={point}
                      className="text-xs font-bold uppercase tracking-wide text-[#411b3f]"
                    >
                      {point}
                    </p>
                  ))}
                </div>

                <Link
                  href={card.href}
                  className="inline-flex items-center gap-2 font-semibold text-[#102f35] hover:text-[#411b3f]"
                >
                  {card.cta}
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24 px-6 md:px-12 bg-gray-50 border-y border-gray-100">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-[#411b3f] block mb-3">
                Why this approach works
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#102f35] mb-6">
                Built to support both rankings and real enquiries
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A strong business website needs more than attractive design. It needs
                clear messaging, strong structure, fast performance, and a smoother path
                from first visit to first contact.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                We build custom websites with mobile usability, technical SEO, and user
                experience in mind from the start. That means fewer compromises, better
                performance, and a site that is easier to grow over time.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <p className="font-bold text-[#102f35]">Performance-first builds</p>
                    <p className="text-sm text-gray-600">
                      Lean builds, responsive layouts, and a cleaner technical setup help
                      your site feel faster and work better.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-2xl">🔎</span>
                  <div>
                    <p className="font-bold text-[#102f35]">SEO-ready foundations</p>
                    <p className="text-sm text-gray-600">
                      Better structure, clearer hierarchy, and technical best practices
                      support stronger visibility over time.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-2xl">📱</span>
                  <div>
                    <p className="font-bold text-[#102f35]">Mobile-focused usability</p>
                    <p className="text-sm text-gray-600">
                      Your website should be easy to understand and easy to act on across
                      every device.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
              <p className="text-xl font-bold text-[#102f35] mb-6 text-center">
                What a stronger website should improve
              </p>
              <div className="space-y-6">
                {[
                  { label: "Clarity of offer", value: "Stronger" },
                  { label: "Trust and credibility", value: "Higher" },
                  { label: "Mobile experience", value: "Smoother" },
                  { label: "Lead generation path", value: "Clearer" },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm font-semibold mb-2">
                      <span className="text-gray-700">{stat.label}</span>
                      <span className="text-[#411b3f]">{stat.value}</span>
                    </div>
                    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-[#102f35] h-full rounded-full"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 md:px-12 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-extrabold text-[#102f35] mb-4">
                A clear process from first conversation to launch
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A straightforward process helps keep projects focused, collaborative,
                and commercially useful from the start.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((step) => (
                <div
                  key={step.step}
                  className="relative bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between"
                >
                  <div>
                    <div className="text-3xl font-extrabold text-[#411b3f] mb-4">
                      {step.step}
                    </div>
                    <p className="text-xl font-bold text-[#102f35] mb-3">
                      {step.title}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6 md:px-12 bg-gray-50 border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#102f35] mb-4">
                Services FAQ
              </h2>
              <p className="text-gray-600">
                A few common questions about how projects are approached.
              </p>
            </div>

            <div className="space-y-6">
              <details className="border rounded-xl p-6 shadow-sm group transition-all">
                <summary className="font-semibold cursor-pointer text-[#102f35] list-none flex justify-between items-center">
                  <span>Do you build custom websites or use templates?</span>
                  <span className="text-xl group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  We focus on custom website design and development built around your
                  business goals, messaging, and user journey. That usually leads to a
                  cleaner, faster, and more effective result than forcing a business into
                  a generic template.
                </p>
              </details>

              <details className="border rounded-xl p-6 shadow-sm group transition-all">
                <summary className="font-semibold cursor-pointer text-[#102f35] list-none flex justify-between items-center">
                  <span>Can you improve an existing website instead of replacing it?</span>
                  <span className="text-xl group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  Yes. Some businesses need a full rebuild, while others benefit more from
                  a focused audit, structural improvements, or performance work on the
                  existing site.
                </p>
              </details>

              <details className="border rounded-xl p-6 shadow-sm group transition-all">
                <summary className="font-semibold cursor-pointer text-[#102f35] list-none flex justify-between items-center">
                  <span>Is Next.js the right fit for every website?</span>
                  <span className="text-xl group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  Not always. It is a strong fit when speed, flexibility, and performance
                  matter, but the right solution depends on your business goals, content
                  needs, and how the site will be managed.
                </p>
              </details>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-r from-[#102f35] via-[#513356] to-[#102f35] text-white text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Start with the right service for your business
          </h2>
          <p className="text-lg mb-8 text-gray-100 max-w-2xl mx-auto px-6">
            If you need a new website, better performance, or clearer direction on what
            to improve, the next step is a focused conversation.
          </p>
          <Link
            href="/book"
            className="inline-block bg-white text-[#102f35] hover:bg-[#411b3f] hover:text-white font-semibold px-8 py-4 rounded-full shadow-lg transition"
          >
            Book a Free Consultation
          </Link>
        </section>
      </main>
    </FadeIn>
  );
}
