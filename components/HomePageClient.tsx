"use client";

import FadeIn from "@/components/FadeIn";
import { setBookServicePrefill } from "@/lib/book-prefill";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Calendar,
  Code2,
  Gauge,
  GitBranch,
  HardHat,
  Landmark,
  LayoutTemplate,
  MapPin,
  Scale,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";
import {
  homeCaseStudies,
  homeDifference,
  homeFaqs,
  homeIndustries,
  homeServices,
  homeTestimonials,
} from "@/lib/home-content";

function IconBadge({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className="mx-auto mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#102f35] to-[#411b3f] text-yellow-400 shadow-md ring-1 ring-[#102f35]/10">
      <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
    </div>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#411b3f]">
      {children}
    </p>
  );
}

const serviceIcons: LucideIcon[] = [LayoutTemplate, Code2, Zap, SearchCheck];
const differenceIcons: LucideIcon[] = [Target, ShieldCheck, GitBranch];
const industryIcons: LucideIcon[] = [Landmark, Scale, HardHat];

const statItems = [
  { value: "98+", label: "PageSpeed scores on core pages", icon: Gauge },
  { value: "3-6", label: "Weeks for most website projects", icon: Calendar },
  { value: "100%", label: "Custom-built, no template bloat", icon: Sparkles },
  { value: "UK", label: "Focused on service-led businesses", icon: MapPin },
] as const;

export default function HomePageClient() {
  return (
    <FadeIn>
      <main className="min-h-screen bg-white text-gray-900">
        {/* HERO */}
        <motion.section
          className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pt-28 pb-16 text-white md:pt-32 md:pb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/home-banner03.png"
            alt="Web design for UK service businesses"
            fill
            priority
            className="object-cover brightness-[0.45]"
            sizes="100vw"
            quality={82}
            style={{ objectPosition: "center" }}
          />

          <div className="absolute inset-0 bg-gradient-to-br from-[#102f35]/75 via-[#102f35]/45 to-[#411b3f]/55" />

          <div className="relative z-20 w-full px-6 md:px-10">
            <div className="mx-auto max-w-5xl text-center">
              <p className="mb-5 inline-flex rounded-full border border-yellow-300/60 bg-[#102f35]/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-yellow-200 shadow-lg backdrop-blur-md md:text-sm">
                Web design for UK service businesses
              </p>

              <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
                High-performance websites built to turn
                <span className="text-yellow-400"> more visitors into qualified enquiries</span>
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-200 md:text-2xl">
                Custom web design and development for businesses that need clearer messaging,
                stronger credibility, faster load times, and a better flow of leads.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/book"
                  className="inline-block rounded-full bg-yellow-400 px-10 py-4 text-lg font-bold text-black shadow-xl transition hover:bg-yellow-500 hover:shadow-2xl"
                >
                  Book a Free Consultation
                </Link>

                <Link
                  href="/book"
                  onClick={() => setBookServicePrefill("Website Audit")}
                  className="inline-block rounded-full border border-white/30 bg-white/10 px-10 py-4 text-lg font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  Request a Website Audit
                </Link>
              </div>

              <p className="mx-auto mt-6 max-w-2xl text-sm text-gray-300">
                Built for service businesses that want a website to look credible, load fast,
                and help the right people get in touch.
              </p>
            </div>
          </div>
        </motion.section>

        {/* POSITIONING */}
        <section className="px-6 py-20 md:px-10 md:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
            <div>
              <SectionEyebrow>Why it matters</SectionEyebrow>
              <h2 className="mb-8 text-4xl font-bold leading-tight text-[#102f35] md:text-5xl">
                If your website is not generating enquiries,
                <br />
                it is not doing its job
              </h2>

              <p className="mb-6 text-lg leading-relaxed text-gray-700">
                Many UK service businesses have a traffic problem, but most have a conversion problem.
                We focus on building <strong>high-performance websites</strong> that do more than just exist—they are engineered to turn <strong>more visitors into qualified enquiries</strong>.
              </p>

              <p className="mb-6 text-lg leading-relaxed text-gray-700">
                Slow page speeds, vague messaging, and outdated design are quietly costing you leads.
                Even when people are interested in your services, a lack of clarity stops them from taking action.
                We transform these barriers into a seamless journey that builds trust and authority.
              </p>

              <p className="mb-8 text-lg leading-relaxed text-gray-700">
                Karol Digital designs custom <strong>websites</strong> for service businesses that need better positioning, stronger trust signals, and a clearer path from a first visit to a <strong>qualified enquiry</strong>.
              </p>

              <Link
                href="/book"
                className="inline-flex items-center gap-2 rounded-full bg-[#102f35] px-8 py-3 font-bold text-white transition hover:bg-[#411b3f]"
              >
                Get a free website review
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>

            <div className="flex flex-col gap-5">
              <Image
                src="/karol-digital-home.WebP"
                alt="Custom website design for UK service businesses"
                width={640}
                height={400}
                className="w-full rounded-3xl shadow-2xl ring-1 ring-gray-200/80"
                sizes="(max-width: 768px) 100vw, 640px"
                quality={82}
              />
              <p className="text-center text-sm text-gray-500">
                Fast, modern websites designed around trust, clarity, and lead generation
              </p>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="bg-[#102f35] py-16 text-white">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
            {statItems.map(({ value, label, icon: Icon }) => (
              <div key={label} className="text-center">
                <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-yellow-400">
                  <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
                </div>
                <div className="text-5xl font-bold text-yellow-400">{value}</div>
                <p className="mt-2 text-sm text-gray-200 md:text-base">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section className="bg-gray-50 px-6 py-20 md:px-10 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <SectionEyebrow>What we offer</SectionEyebrow>
              <h2 className="mb-4 text-4xl font-bold text-[#102f35] md:text-5xl">
                Website services built around growth
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                From full website builds to audits and performance improvements, the focus is
                always the same: a stronger website that helps your business win more of the
                right enquiries.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {homeServices.map((service, index) => (
                <article
                  key={service.title}
                  className="group flex flex-col rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-400/40 hover:shadow-lg"
                >
                  <IconBadge icon={serviceIcons[index]} />
                  <p className="mb-4 text-2xl font-bold text-[#102f35]">{service.title}</p>
                  <p className="mb-6 flex-grow leading-relaxed text-gray-700">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center justify-center gap-1 font-semibold text-[#102f35] transition group-hover:text-[#411b3f]"
                  >
                    {service.cta}
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </article>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-[#102f35]/20 bg-white px-8 py-3 font-semibold text-[#102f35] shadow-sm transition hover:border-[#102f35] hover:shadow-md"
              >
                View all services
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* DIFFERENCE */}
        <section className="bg-white px-6 py-20 md:px-10 md:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <SectionEyebrow>Our approach</SectionEyebrow>
              <h2 className="mb-4 text-4xl font-bold text-[#102f35] md:text-5xl">
                Why service businesses choose Karol Digital
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                The goal is not just to make your website look better. The goal is to make it
                easier for the right people to trust you and get in touch.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {homeDifference.map((item, index) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-gray-100 bg-gray-50 p-8 text-center shadow-sm transition hover:border-[#102f35]/15 hover:shadow-md"
                >
                  <IconBadge icon={differenceIcons[index]} />
                  <p className="mb-4 text-2xl font-bold text-[#102f35]">{item.title}</p>
                  <p className="leading-relaxed text-gray-700">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="bg-gray-50 px-6 py-20 md:px-10 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <SectionEyebrow>Sectors we know</SectionEyebrow>
              <h2 className="mb-4 text-4xl font-bold text-[#102f35] md:text-5xl">
                Industry-focused website design
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                Different service businesses need different messaging, trust signals, and user
                journeys. We build websites around how your industry wins work.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {homeIndustries.map((industry, index) => (
                <article
                  key={industry.title}
                  className="flex flex-col rounded-3xl border border-gray-200 bg-white p-8 text-center transition duration-300 hover:-translate-y-1 hover:border-[#102f35]/20 hover:shadow-lg"
                >
                  <IconBadge icon={industryIcons[index]} />
                  <p className="mb-3 text-2xl font-bold text-[#102f35]">{industry.title}</p>
                  <p className="mb-6 flex-grow text-gray-700">{industry.description}</p>
                  <Link
                    href={industry.href}
                    className="inline-flex items-center justify-center gap-1 text-sm font-semibold text-[#102f35] hover:text-[#411b3f]"
                  >
                    {industry.linkLabel}
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </article>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/industries"
                className="inline-flex items-center gap-2 font-semibold text-[#102f35] hover:text-[#411b3f]"
              >
                See all industries
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* PROOF */}
        <section className="bg-white px-6 py-20 md:px-10 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 text-center">
              <SectionEyebrow>Client work</SectionEyebrow>
              <h2 className="mb-4 text-4xl font-bold text-[#102f35] md:text-5xl">
                Built for performance, visibility, and lead generation
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                Strong websites do more than look good. They load fast, follow best practices,
                and create a better experience for both visitors and search engines.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {homeCaseStudies.map((study) => (
                <article
                  key={study.title}
                  className="flex flex-col rounded-3xl border border-gray-200 bg-gray-50 p-8 transition hover:border-[#102f35]/15 hover:shadow-md"
                >
                  <div className="mb-5 flex h-20 items-center justify-start rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-gray-100">
                    <Image
                      src={study.logo}
                      alt={study.logoAlt}
                      width={180}
                      height={56}
                      className="h-12 w-auto max-w-[180px] object-contain object-left"
                    />
                  </div>
                  <p className="mb-4 text-xl font-bold text-[#102f35] md:text-2xl">
                    {study.title}
                  </p>
                  <p className="mb-6 flex-grow leading-relaxed text-gray-700">
                    {study.description}
                  </p>
                  <Link
                    href={study.industryHref}
                    className="inline-flex items-center gap-1 font-semibold text-[#102f35] hover:text-[#411b3f]"
                  >
                    {study.industryLabel}
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* LEAD STRIP */}
        <section className="border-y border-gray-200 bg-gradient-to-r from-[#102f35] via-[#1a4a54] to-[#411b3f] px-6 py-14 text-white">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <p className="text-2xl font-bold md:text-3xl">
                Ready to turn your website into a lead generation asset?
              </p>
              <p className="mt-2 text-gray-200">
                Free consultation. Clear advice. No pressure to commit.
              </p>
            </div>
            <Link
              href="/book"
              className="shrink-0 rounded-full bg-yellow-400 px-8 py-3 font-bold text-[#102f35] shadow-lg transition hover:bg-yellow-500"
            >
              Book a Free Call
            </Link>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="bg-gray-50 px-6 py-20 md:px-10 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 text-center">
              <SectionEyebrow>Social proof</SectionEyebrow>
              <h2 className="text-4xl font-bold text-[#102f35] md:text-5xl">
                Trusted by growing UK businesses
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {homeTestimonials.map((testimonial, index) => (
                <blockquote
                  key={testimonial.author}
                  className={`rounded-3xl border-t-4 bg-white p-8 shadow-md ${
                    index === 0
                      ? "border-[#411b3f]"
                      : index === 1
                        ? "border-[#102f35]"
                        : "border-yellow-400"
                  }`}
                >
                  <p className="mb-6 italic text-gray-600">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <footer className="font-bold text-[#102f35]">— {testimonial.author}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* PARTNERS */}
        <section className="border-y border-gray-200 bg-white px-6 py-20 md:px-10">
          <div className="mx-auto max-w-5xl text-center">
            <SectionEyebrow>Partners</SectionEyebrow>
            <p className="mb-12 text-3xl font-bold text-[#102f35] md:text-4xl">
              Selected clients and partners
            </p>

            <div className="mx-auto grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-2">
              <Link
                href="https://sbc-marketing.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[180px] items-center justify-center rounded-2xl bg-gray-50 p-8 shadow-sm ring-1 ring-gray-100 transition hover:shadow-md"
              >
                <Image
                  src="/logos/sbc.webp"
                  alt="SBC Marketing"
                  width={220}
                  height={80}
                  className="h-auto max-h-20 w-auto object-contain"
                />
              </Link>

              <Link
                href="https://www.1stcalluk.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[180px] items-center justify-center rounded-2xl bg-gray-50 p-8 shadow-sm ring-1 ring-gray-100 transition hover:shadow-md"
              >
                <Image
                  src="/1stcalluk-logo.jpg"
                  alt="1st Call UK Group"
                  width={220}
                  height={80}
                  className="h-auto max-h-20 w-auto object-contain"
                />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-gray-50 px-6 py-20 md:px-10 md:py-24">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <SectionEyebrow>Questions</SectionEyebrow>
              <h2 className="text-4xl font-bold text-[#102f35] md:text-5xl">
                Frequently asked questions
              </h2>
            </div>

            <div className="space-y-4">
              {homeFaqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between p-6 font-bold text-[#102f35] hover:bg-gray-50">
                    {faq.q}
                    <span className="text-2xl text-[#411b3f] transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="px-6 pb-6 text-gray-600">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-gray-900 px-6 py-24 text-center text-white">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              If your website should be bringing in better enquiries, start there
            </h2>

            <p className="mb-10 text-lg text-gray-400">
              Book a consultation if you need a new website, or request an audit if you want
              to improve the one you already have.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/book"
                className="inline-block rounded-full bg-yellow-400 px-12 py-4 text-lg font-bold text-[#102f35] shadow-xl transition hover:bg-yellow-500"
              >
                Start Your Project
              </Link>

              <Link
                href="/services/website-audits"
                className="inline-block rounded-full border border-white/20 bg-white/10 px-12 py-4 text-lg font-bold text-white transition hover:bg-white/20"
              >
                Explore audit services
              </Link>
            </div>

            <p className="mt-5 text-sm text-gray-500">
              Clear advice, honest next steps, and no pressure to commit before you are ready.
            </p>
          </div>
        </section>
      </main>
    </FadeIn>
  );
}
