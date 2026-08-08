"use client";

import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CustomMobileApplicationsPage() {
  return (
    <FadeIn>
      <main className="min-h-screen bg-white text-gray-900">
        {/* === HERO SECTION === */}
        <section className="relative min-h-[80vh] flex items-center justify-center text-center text-white pt-24 pb-12">
          <Image
            src="/heroes/custom-mobile-applications.png"
            alt="Custom mobile app development UK for growing small businesses"
            fill
            priority
            className="object-cover brightness-[0.7]"
          />
          <div className="absolute inset-0 bg-black/25" />

          <div className="relative z-10 px-6 max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Custom Mobile Applications{" "}
              <span className="text-brand-gold-muted">
                — High-Quality Apps Built for Loyalty &amp; Growth
              </span>
            </motion.h1>

            <p className="text-lg md:text-xl text-gray-100 leading-relaxed mb-4">
              Bespoke iOS and Android apps for growing small businesses—modern,
              incredibly fast, secure, and seamlessly integrated with the systems
              you already use.
            </p>
            <p className="text-sm md:text-base text-gray-200 max-w-2xl mx-auto">
              Ideal for service companies and ambitious SMEs that want to deepen
              customer loyalty, simplify bookings and accounts, and keep customers
              coming back.
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
              Custom Mobile Applications
            </li>
          </ol>
        </nav>

        {/* === INTRODUCTION === */}
        <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="max-w-5xl mb-10">
                <h2 className="text-4xl font-bold text-[#102f35] mb-8">
                  Mobile Apps That Keep Customers Coming Back
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  A high-quality mobile app puts your business in your customers&apos;
                  pocket—making it easier to book, buy, manage accounts, and stay
                  connected. At Karol Digital, we build custom mobile applications
                  from the ground up for small businesses that need more than a
                  generic off-the-shelf tool.
                </p>
              </div>

              <div className="space-y-7 text-gray-700 text-lg leading-relaxed">
                <p>
                  Because we use a modern unified workflow, your custom website,
                  e-commerce engine, and mobile app can sync data perfectly
                  together in real time. Update a product, service, or booking
                  slot once—and it appears instantly everywhere your customers
                  interact with you.
                </p>

                <p>
                  That means fewer manual updates, fewer mistakes, and a smoother
                  experience for your team and your customers. Your digital systems
                  work as one connected platform—not a patchwork of disconnected tools.
                </p>

                <p>
                  Whether you need a loyalty-focused customer app, a streamlined
                  booking experience, or a secure account hub for clients, we
                  engineer bespoke mobile solutions that are modern, incredibly fast,
                  secure, and built to grow with your business.
                </p>
              </div>
            </div>

            <div className="relative h-[360px] md:h-[420px] w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/custom-mobile-applications.webp"
                alt="High-performance custom mobile app development for small businesses — iOS and Android apps that sync with websites and e-commerce stores"
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
                Loyalty &amp; Retention
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Custom apps make it easier for customers to return—whether through
                faster bookings, personalised offers, account access, or a smoother
                way to stay in touch with your business.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#411b3f] mb-4">
                Real-Time Sync Everywhere
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Your website, online store, and mobile app share the same modern
                foundation—so product and service data updates instantly across
                every channel your customers use.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#411b3f] mb-4">
                Fast, Secure &amp; Built for You
              </h3>
              <p className="text-gray-700 leading-relaxed">
                No generic template apps. We engineer high-performance mobile
                experiences from scratch—rock-solid security, incredible speed, and
                features shaped around how your business actually operates.
              </p>
            </div>
          </div>
        </section>

        {/* === PROCESS SECTION === */}
        <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-[#102f35] mb-8">
              Our Mobile App Process
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              A clear, structured process keeps your project focused on business
              outcomes—loyalty, retention, and seamless day-to-day operations.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-6 border-l-4 border-[#102f35]">
              <h4 className="text-xl font-bold mb-3">Discover &amp; Define</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                We learn how your customers interact with you today, what friction
                slows them down, and which app features will deliver the biggest
                impact for loyalty and efficiency.
              </p>
            </div>

            <div className="p-6 border-l-4 border-[#102f35]">
              <h4 className="text-xl font-bold mb-3">Design the Experience</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Clear screens, intuitive journeys, and a polished mobile experience
                that feels modern and easy to use—on both iOS and Android devices.
              </p>
            </div>

            <div className="p-6 border-l-4 border-[#102f35]">
              <h4 className="text-xl font-bold mb-3">Build &amp; Connect</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                We engineer a high-quality, secure app and connect it to your
                website and store so data stays in sync—bookings, products, and
                accounts updating in real time.
              </p>
            </div>

            <div className="p-6 border-l-4 border-[#102f35]">
              <h4 className="text-xl font-bold mb-3">Launch &amp; Grow</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Thorough testing, a smooth launch, and optional ongoing support so
                your app continues to perform as your business grows.
              </p>
            </div>
          </div>
        </section>

        {/* === CTA SECTION === */}
        <section className="bg-[#102f35] py-20 px-6 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready for a Mobile App That Works With Your Business?
            </h2>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              Let&apos;s talk about a bespoke iOS and Android app that boosts
              loyalty, streamlines operations, and syncs seamlessly with your
              website and e-commerce systems.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/book"
                className="inline-block bg-white text-[#102f35] font-semibold px-10 py-4 rounded-full hover:bg-brand-gold transition"
              >
                Discuss Your Mobile App
              </Link>
              <Link
                href="/services"
                className="inline-block border border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white hover:text-[#102f35] transition"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </FadeIn>
  );
}
