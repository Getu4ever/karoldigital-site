"use client";

import { setBookServicePrefill } from "@/lib/book-prefill";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  homeCaseStudies,
  homeDifference,
  homeFaqs,
  homeIndustries,
  homeServices,
  homeTestimonials,
} from "@/lib/home-content";
import "@/app/home-stack.css";

function SectionEyebrow({
  children,
  tone = "light",
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <p
      className={`mb-3 text-xs font-bold uppercase tracking-[0.22em] ${
        tone === "dark" ? "text-brand-gold-muted" : "text-[#411b3f]"
      }`}
    >
      {children}
    </p>
  );
}

function SectionImage({
  src,
  alt,
  size = "md",
}: {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizeClass =
    size === "sm"
      ? "h-14 w-14"
      : size === "lg"
        ? "mb-5 aspect-[4/3] w-full"
        : "mb-5 aspect-square w-full max-w-[11rem]";

  return (
    <div
      className={`relative mx-auto overflow-hidden rounded-2xl ring-1 ring-black/5 ${sizeClass}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes={
          size === "sm"
            ? "56px"
            : size === "lg"
              ? "(max-width: 768px) 100vw, 360px"
              : "(max-width: 768px) 50vw, 176px"
        }
      />
    </div>
  );
}

function PrimaryCta({
  className = "",
  label = "Book a Free Consultation",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <Link href="/book" className={`btn-primary ${className}`}>
      {label}
    </Link>
  );
}

function AuditCta({
  className = "",
  asButton = false,
}: {
  className?: string;
  asButton?: boolean;
}) {
  return (
    <Link
      href="/book"
      onClick={() => setBookServicePrefill("Website Audit")}
      className={
        asButton
          ? `btn-secondary ${className}`
          : `inline-flex items-center gap-1 font-semibold text-brand-gold-muted transition hover:text-brand-gold ${className}`
      }
    >
      Website Audit
      {!asButton && <ArrowRight size={16} aria-hidden="true" />}
    </Link>
  );
}

const serviceImages = [
  { src: "/home/sections/svc-websites.jpg", alt: "High-performance custom website design" },
  { src: "/home/sections/svc-web-dev.jpg", alt: "Custom web development and engineering" },
  { src: "/home/sections/svc-ecommerce.jpg", alt: "Conversion-focused e-commerce storefront" },
  { src: "/home/sections/svc-mobile.jpg", alt: "Custom mobile application development" },
  { src: "/home/sections/svc-audits.jpg", alt: "Website performance and growth audit" },
  { src: "/home/sections/svc-ai-search.jpg", alt: "AI search optimisation and visibility" },
] as const;

const differenceImages = [
  { src: "/home/sections/diff-speed.jpg", alt: "Lightning-fast website performance" },
  { src: "/home/sections/diff-security.jpg", alt: "Secure custom digital systems" },
  { src: "/home/sections/diff-unified.jpg", alt: "Unified website and app enquiry systems" },
] as const;

const industryImages = [
  { src: "/home/sections/ind-financial.jpg", alt: "Financial services website design" },
  { src: "/home/sections/ind-immigration.jpg", alt: "Immigration law firm website design" },
  { src: "/home/sections/ind-construction.jpg", alt: "Construction and trades website design" },
] as const;

const statItems = [
  {
    value: "98+",
    label: "PageSpeed scores on core pages",
    image: "/home/sections/stat-speed.jpg",
    alt: "Website performance speed",
  },
  {
    value: "3-6",
    label: "Weeks for most website projects",
    image: "/home/sections/stat-timeline.jpg",
    alt: "Project delivery timeline",
  },
  {
    value: "100%",
    label: "Custom-built, no template bloat",
    image: "/home/sections/stat-custom.jpg",
    alt: "Fully custom-built digital solutions",
  },
  {
    value: "UK",
    label: "Focused on service-led businesses",
    image: "/home/sections/stat-uk.jpg",
    alt: "UK service business focus",
  },
] as const;

const featuredCase = homeCaseStudies.find((s) => s.featured) ?? homeCaseStudies[0];
const secondaryCases = homeCaseStudies.filter((s) => s !== featuredCase);

export default function HomePageClient() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO — new photo + gentle brand veil */}
      <section className="home-hero relative flex min-h-[100svh] items-center justify-center overflow-hidden pt-28 pb-20 text-white md:pt-32 md:pb-24">
        <div className="absolute inset-0">
          <Image
            src="/heroes/home-hero.jpg"
            alt="Modern digital studio atmosphere for Karol Digital"
            fill
            priority
            className="home-hero__media object-cover"
            sizes="100vw"
            quality={88}
            style={{ objectPosition: "center" }}
          />
        </div>
        <div className="home-hero__veil absolute inset-0" aria-hidden="true" />

        <div className="relative z-20 w-full px-6 md:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <motion.p
              className="home-hero__brand mb-5 text-xs font-bold uppercase text-brand-gold-muted md:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              Karol Digital
            </motion.p>

            <motion.div
              className="home-hero__rule mx-auto mb-8"
              initial={{ opacity: 0, scaleX: 0.4 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              aria-hidden="true"
            />

            <motion.h1
              className="text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-7xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
            >
              Websites and apps that turn visitors into{" "}
              <span className="text-brand-gold-muted">qualified enquiries</span>
            </motion.h1>

            <motion.p
              className="mx-auto mt-7 max-w-xl text-base text-white/80 md:text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              Custom digital systems for growing UK service businesses — fast, credible, and built
              to convert.
            </motion.p>

            <motion.div
              className="mt-11 flex flex-col items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.9 }}
            >
              <PrimaryCta className="px-10 py-4 text-lg shadow-lg shadow-black/25" />
              <AuditCta />
            </motion.div>
          </div>
        </div>

        <div
          className="home-hero__scroll pointer-events-none absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-brand-gold-muted/80"
          aria-hidden="true"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* POSITIONING */}
      <section className="px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
          <div>
            <SectionEyebrow>Why it matters</SectionEyebrow>
            <h2 className="mb-8 text-4xl font-bold leading-tight text-[#102f35] md:text-5xl">
              Custom-built beats template builders
              <br />
              when growth is the goal
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              Template platforms and drag-and-drop builders are easy to start with—but they often
              leave small businesses with slow pages, weak security, and messy enquiry flows. We
              build <strong>high-performance websites and applications</strong> that turn{" "}
              <strong>more visitors into qualified enquiries and customers</strong>.
            </p>

            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              Custom code delivers lightning-fast speeds, rock-solid security, and a clearer path
              from first visit to contact or checkout. No template bloat. No plugin overload. Just
              modern digital systems built around how your business actually wins work.
            </p>

            <p className="mb-8 text-lg leading-relaxed text-gray-700">
              When you need both a website and a mobile app, we can connect them to the{" "}
              <strong>same modern database</strong>—so your customer data, enquiries, and operations
              stay unified instead of scattered across disconnected tools.
            </p>

            <Link href="/book" className="btn-teal">
              Book a Free Consultation
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>

          <div className="flex flex-col gap-5">
            <Image
              src="/home-why-it-matters.webp"
              alt="High-performance custom websites and mobile apps that sync together for growing small businesses"
              width={640}
              height={400}
              className="w-full rounded-3xl shadow-2xl ring-1 ring-gray-200/80"
              sizes="(max-width: 768px) 100vw, 640px"
              quality={82}
            />
            <p className="text-center text-sm text-gray-500">
              Fast, modern websites and apps designed around trust, speed, and conversion
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#102f35] py-16 text-white">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
          {statItems.map(({ value, label, image, alt }) => (
            <div key={label} className="text-center">
              <div className="mx-auto mb-3">
                <SectionImage src={image} alt={alt} size="sm" />
              </div>
              <div className="text-5xl font-bold text-white">{value}</div>
              <p className="mt-2 text-sm text-gray-300 md:text-base">{label}</p>
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
              Digital services built around growth
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              From high-performance websites and conversion-focused e-commerce stores to custom
              mobile applications and audits—the focus is always the same: modern digital solutions
              that help your business win more of the right customers.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {homeServices.map((service, index) => (
              <article
                key={service.title}
                className="group flex flex-col rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-lg"
              >
                <SectionImage
                  src={serviceImages[index].src}
                  alt={serviceImages[index].alt}
                  size="lg"
                />
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

      {/* Sticky stack: Approach → Industries */}
      <div className="home-stack">
        <section className="home-stack-card home-stack-card--approach px-6 py-20 md:px-10 md:py-24">
          <motion.div
            className="home-stack-card__inner mx-auto w-full max-w-5xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <div className="mb-12 text-center">
              <SectionEyebrow tone="dark">Our approach</SectionEyebrow>
              <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
                Why growing small businesses choose Karol Digital
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-white/70">
                The goal is not just a prettier site. It is a faster, safer, and more connected
                digital system that makes it easier for the right people to trust you and take
                action.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {homeDifference.map((item, index) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] p-8 text-center backdrop-blur-sm transition hover:border-brand-gold/40 hover:bg-white/[0.1]"
                >
                  <SectionImage
                    src={differenceImages[index].src}
                    alt={differenceImages[index].alt}
                  />
                  <p className="mb-4 text-2xl font-bold text-white">{item.title}</p>
                  <p className="leading-relaxed text-white/70">{item.description}</p>
                </article>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="home-stack-card home-stack-card--industries px-6 py-20 md:px-10 md:py-24">
          <motion.div
            className="home-stack-card__inner mx-auto w-full max-w-6xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <div className="mb-12 text-center">
              <SectionEyebrow tone="dark">Sectors we know</SectionEyebrow>
              <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
                Industry-focused website design
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-white/70">
                Different service businesses need different messaging, trust signals, and user
                journeys. We build websites around how your industry wins work.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {homeIndustries.map((industry, index) => (
                <article
                  key={industry.title}
                  className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.06] p-8 text-center backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-brand-gold/40 hover:bg-white/[0.1]"
                >
                  <SectionImage
                    src={industryImages[index].src}
                    alt={industryImages[index].alt}
                    size="lg"
                  />
                  <p className="mb-3 text-2xl font-bold text-white">{industry.title}</p>
                  <p className="mb-6 flex-grow text-white/70">{industry.description}</p>
                  <Link
                    href={industry.href}
                    className="inline-flex items-center justify-center gap-1 text-sm font-semibold text-brand-gold-muted transition hover:text-brand-gold"
                  >
                    {industry.linkLabel}
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </article>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/industries"
                className="inline-flex items-center gap-2 font-semibold text-brand-gold-muted transition hover:text-brand-gold"
              >
                See all industries
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        </section>
      </div>

      {/* PROOF — cases + testimonials as one polished block */}
      <section className="home-proof px-6 py-20 text-white md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <SectionEyebrow tone="dark">Proof</SectionEyebrow>
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              Built for performance, visibility, and lead generation
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-white/65">
              Strong websites do more than look good. They load fast, follow best practices, and
              create a better experience for both visitors and search engines.
            </p>
          </div>

          {/* Featured case */}
          <article className="mb-8 grid gap-8 rounded-3xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur-sm md:grid-cols-[1.2fr_1fr] md:items-center md:p-10">
            <div>
              <div className="mb-6 flex h-16 items-center rounded-2xl bg-white px-4 py-3">
                <Image
                  src={featuredCase.logo}
                  alt={featuredCase.logoAlt}
                  width={180}
                  height={56}
                  className="h-10 w-auto max-w-[180px] object-contain object-left"
                />
              </div>
              <p className="mb-3 text-2xl font-bold md:text-3xl">{featuredCase.title}</p>
              <p className="mb-6 leading-relaxed text-white/70">{featuredCase.description}</p>
              <Link
                href={featuredCase.industryHref}
                {...(featuredCase.industryHref.startsWith("http")
                  ? { target: "_blank" as const, rel: "noopener noreferrer" }
                  : {})}
                className="inline-flex items-center gap-1 font-semibold text-brand-gold-muted transition hover:text-brand-gold"
              >
                {featuredCase.industryLabel}
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
            <div className="rounded-2xl border border-brand-gold/30 bg-[#0a1f24]/60 px-8 py-10 text-center">
              <p className="text-5xl font-bold text-brand-gold-muted md:text-6xl">
                {featuredCase.metric}
              </p>
              <p className="mt-3 text-sm font-semibold uppercase tracking-widest text-white/60">
                {featuredCase.metricLabel}
              </p>
            </div>
          </article>

          <div className="mb-16 grid gap-8 md:grid-cols-2">
            {secondaryCases.map((study) => (
              <article
                key={study.title}
                className="flex flex-col rounded-3xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur-sm transition hover:border-brand-gold/35"
              >
                <div className="mb-5 flex h-16 items-center rounded-2xl bg-white px-4 py-3">
                  <Image
                    src={study.logo}
                    alt={study.logoAlt}
                    width={180}
                    height={56}
                    className="h-10 w-auto max-w-[180px] object-contain object-left"
                  />
                </div>
                <div className="mb-4 flex items-end justify-between gap-4">
                  <p className="text-xl font-bold md:text-2xl">{study.title}</p>
                  <div className="shrink-0 text-right">
                    <p className="text-lg font-bold text-brand-gold-muted">{study.metric}</p>
                    <p className="text-[11px] uppercase tracking-wide text-white/50">
                      {study.metricLabel}
                    </p>
                  </div>
                </div>
                <p className="mb-6 flex-grow leading-relaxed text-white/70">{study.description}</p>
                <Link
                  href={study.industryHref}
                  {...(study.industryHref.startsWith("http")
                    ? { target: "_blank" as const, rel: "noopener noreferrer" }
                    : {})}
                  className="inline-flex items-center gap-1 font-semibold text-brand-gold-muted transition hover:text-brand-gold"
                >
                  {study.industryLabel}
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>

          {/* Testimonials — same proof block */}
          <div className="mb-4 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-gold-muted">
              What clients say
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {homeTestimonials.map((testimonial) => (
              <blockquote
                key={testimonial.author}
                className="rounded-2xl border border-white/10 bg-white/[0.05] p-7"
              >
                <p className="mb-5 text-sm leading-relaxed text-white/75">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer className="text-sm font-bold text-brand-gold-muted">
                  — {testimonial.author}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Mid CTA — consistent labels */}
      <section className="border-y border-white/10 bg-gradient-to-r from-[#102f35] via-[#1a4a54] to-[#411b3f] px-6 py-14 text-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <p className="text-2xl font-bold md:text-3xl">
              Ready to turn your website—or app—into a growth asset?
            </p>
            <p className="mt-2 text-gray-200">
              Free consultation. Clear advice. No pressure to commit.
            </p>
          </div>
          <div className="flex shrink-0 flex-col items-center gap-3 sm:flex-row">
            <PrimaryCta className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold-muted" />
            <AuditCta className="text-sm" />
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="border-b border-gray-200 bg-white px-6 py-20 md:px-10">
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
    </main>
  );
}
