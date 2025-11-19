"use client";

import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SEO from "@/components/SEO";

export default function Home() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Karol Digital",
    url: "https://www.karoldigital.co.uk",
    image: "https://www.karoldigital.co.uk/seo-cover.jpg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "London",
      postalCode: "SW20 8DN",
      addressCountry: "GB",
    },
    description:
      "Karol Digital provides affordable web design, AI-ready websites, social media setup and digital marketing for small businesses in the UK.",
  };

  return (
    <FadeIn>
      {/* SEO MUST BE FIRST INSIDE THE COMPONENT */}
      <SEO
        title="Karol Digital — Affordable Web Design & Digital Marketing"
        description="Affordable web design, digital marketing, and social media services for small businesses. Modern, mobile-friendly websites built to grow your brand online."
        url="https://www.karoldigital.co.uk/"
        image="/hero-cover.jpg"
      />

      <main className="min-h-screen bg-white text-gray-900">
        {/* === HERO SECTION === */}
        <motion.section
          className="relative h-[90vh] text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/hero-cover.jpg"
            alt="Karol Digital Cover"
            fill
            priority
            className="object-cover brightness-[0.45]"
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 flex flex-col items-center text-center px-6 pt-28 md:pt-36">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg">
              <span className="text-white">Karol </span>
              <span className="text-yellow-400">Digital</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-100 drop-shadow-md mb-8 max-w-2xl">
              Empowering Brands Online — Affordable Web Design & Digital Marketing
              for Small Businesses.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-[#411b3f] hover:bg-[#102f35] text-white font-semibold px-8 py-3 rounded-full transition"
              >
                Let’s Get Started
              </Link>

              <Link
                href="/services"
                className="bg-white text-[#411b3f] hover:bg-gray-100 font-semibold px-8 py-3 rounded-full transition"
              >
                View Services
              </Link>
            </div>
          </div>
        </motion.section>

        {/* === SECTION 1 === */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative py-20 px-6 md:px-12 bg-white text-gray-800"
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#411b3f] mb-4">
                Affordable Web Design{" "}
                <span className="text-[#102f35]">For Small Businesses</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                <strong>Karol Digital</strong> specialises in affordable web design for
                small businesses. We build professional, mobile-friendly websites for cafés,
                shops, and local trades — helping you attract more local customers and
                start getting bookings and calls fast.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-block bg-[#102f35] hover:bg-[#411b3f] text-white px-6 py-3 rounded-full font-semibold transition shadow-md"
                >
                  Get a Free Quote
                </Link>
                <Link
                  href="/services"
                  className="inline-block border border-[#102f35] text-[#102f35] hover:border-[#411b3f] hover:text-[#411b3f] px-6 py-3 rounded-full font-semibold transition"
                >
                  View Services
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center">
              <Image
                src="/digital-marketing-bg.jpg"
                alt="Digital Marketing Service"
                width={500}
                height={400}
                className="rounded-2xl shadow-lg w-full max-w-md object-cover"
              />
            </div>
          </div>
        </motion.section>

        {/* === SECTION 2 === */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative py-20 px-6 md:px-12 bg-gradient-to-b from-[#f9fafb] to-[#f1f5f9]"
        >
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
            {/* Image */}
            <div className="flex justify-center">
              <Image
                src="/laptop-mockup.jpg"
                alt="Website Mockup"
                width={560}
                height={420}
                className="rounded-xl shadow-lg w-full max-w-xl object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>

            {/* Text */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#102f35]">
                Why Choose <span className="text-[#411b3f]">Karol Digital</span>
              </h2>

              <p className="text-gray-700 leading-relaxed">
                We help small businesses thrive online with clear strategy and clean
                execution. From professional websites to effective social setup and
                digital marketing, we focus on visibility, enquiries, and growth.
              </p>

              <p className="text-xl font-semibold text-[#102f35]">
                Let’s build something <span className="text-[#411b3f]">great together.</span>
              </p>
            </div>
          </div>
        </motion.section>

        {/* === SECTION 3: Pricing Packages (Redesigned) === */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative py-24 px-6 md:px-12 bg-white"
        >
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#102f35] mb-4">
              💼 Web Design Packages
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Clear, affordable packages designed to help your business grow online.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {/* === STARTER PACKAGE === */}
            <div className="bg-white shadow-xl rounded-2xl p-8 border-t-4 border-[#411b3f] hover:-translate-y-2 transition">
              <h3 className="text-3xl font-bold text-[#411b3f] text-center mb-4">
                Starter
              </h3>

              <p className="text-gray-600 text-center mb-6">
                Perfect for new businesses needing a clean, simple online presence.
              </p>

              <ul className="space-y-3 text-gray-700 mb-8">
                <li>✔ Up to 3 pages</li>
                <li>✔ WordPress or Google Sites</li>
                <li>✔ No coding required</li>
                <li>✔ Mobile-responsive design</li>
                <li>✔ Basic contact form</li>
                <li>✔ Fast turnaround</li>
                <li className="text-gray-400 line-through">✘ SEO</li>
                <li className="text-gray-400 line-through">✘ AI Chatbot</li>
              </ul>

              <p className="text-2xl font-extrabold text-[#102f35] text-center mb-6">
                £150 – £300
              </p>

              <Link
                href="/contact"
                className="block text-center bg-[#102f35] hover:bg-[#411b3f] text-white font-semibold py-3 rounded-full transition"
              >
                Choose Starter
              </Link>
            </div>

            {/* === GROWTH PACKAGE === */}
            <div className="bg-white shadow-xl rounded-2xl p-8 border-t-4 border-[#102f35] hover:-translate-y-2 transition transform scale-105">
              <h3 className="text-3xl font-bold text-[#102f35] text-center mb-4">
                Growth
              </h3>

              <p className="text-gray-600 text-center mb-6">
                Ideal for growing businesses wanting a stronger online presence.
              </p>

              <ul className="space-y-3 text-gray-700 mb-8">
                <li>✔ Up to 6 pages</li>
                <li>✔ WordPress or Google Sites</li>
                <li>✔ On-page SEO</li>
                <li>✔ Speed optimisation</li>
                <li>✔ Mobile-responsive</li>
                <li>✔ Contact form + integrations</li>
                <li>✔ Google Business optimisation</li>
                <li className="text-gray-400 line-through">✘ Coding</li>
                {/* Added Chatbot */}
                <li>✔ AI Chatbot (Basic Version)</li>
              </ul>

              <p className="text-2xl font-extrabold text-[#102f35] text-center mb-6">
                £350 – £600
              </p>

              <Link
                href="/contact"
                className="block text-center bg-[#102f35] hover:bg-[#411b3f] text-white font-semibold py-3 rounded-full transition"
              >
                Choose Growth
              </Link>
            </div>

            {/* === PREMIUM PACKAGE === */}
            <div className="bg-white shadow-xl rounded-2xl p-8 border-t-4 border-[#411b3f] hover:-translate-y-2 transition">
              <h3 className="text-3xl font-bold text-[#411b3f] text-center mb-4">
                Premium
              </h3>

              <p className="text-gray-600 text-center mb-6">
                Best for businesses wanting custom, high-end functionality & SEO.
              </p>

              <ul className="space-y-3 text-gray-700 mb-8">
                <li>✔ 6–10 pages</li>
                <li>✔ Custom coding included</li>
                <li>✔ WordPress or fully custom</li>
                <li>✔ Advanced SEO</li>
                <li>✔ Speed optimisation</li>
                <li>✔ Blog integration</li>
                <li>✔ Custom animations</li>
                {/* Added Chatbot */}
                <li>✔ AI Chatbot (Advanced Version)</li>
              </ul>

              <p className="text-2xl font-extrabold text-[#102f35] text-center mb-6">
                £650 – £1,200
              </p>

              <Link
                href="/contact"
                className="block text-center bg-[#102f35] hover:bg-[#411b3f] text-white font-semibold py-3 rounded-full transition"
              >
                Choose Premium
              </Link>
            </div>
          </div>
        </motion.section>

        {/* === SECTION 4: Social Media + Digital Marketing === */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="py-24 px-6 md:px-12 bg-gradient-to-b from-gray-50 to-gray-100"
        >
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-extrabold text-[#102f35] mb-4">
              📱 Social Media & Digital Marketing
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Boost your online visibility with professional branding & practical strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            <div className="bg-white shadow-lg rounded-2xl p-8 text-center border border-gray-200">
              <h3 className="text-xl font-bold text-[#411b3f] mb-3">
                Social Media Setup
              </h3>
              <p className="text-gray-600 mb-4">
                Optimised bios, branding, and content setup for key platforms.
              </p>
              <p className="font-bold text-[#102f35] mb-4">From £80</p>
              <Link
                href="/services/social-media"
                className="text-[#102f35] font-semibold underline"
              >
                Learn More
              </Link>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-8 text-center border border-gray-200">
              <h3 className="text-xl font-bold text-[#102f35] mb-3">
                Digital Marketing
              </h3>
              <p className="text-gray-600 mb-4">
                SEO, email marketing, content planning & brand visibility.
              </p>
              <p className="font-bold text-[#411b3f] mb-4">From £60</p>
              <Link
                href="/services/digital-marketing"
                className="text-[#102f35] font-semibold underline"
              >
                Learn More
              </Link>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-8 text-center border border-gray-200">
              <h3 className="text-xl font-bold text-[#102f35] mb-3">
                Brand Identity
              </h3>
              <p className="text-gray-600 mb-4">
                Logos, colour palettes, typography & social templates.
              </p>
              <p className="font-bold text-[#411b3f] mb-4">Custom pricing</p>
              <Link
                href="/contact"
                className="text-[#102f35] font-semibold underline"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </motion.section>

        {/* === WHY WORK WITH US === */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="py-24 px-6 md:px-12 bg-white"
        >
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-extrabold text-[#102f35] mb-4">
              Why Work With <span className="text-[#411b3f]">Karol Digital</span>?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A modern, reliable and transparent partner for small businesses who want
              to grow online — without big agency prices.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {/* Trust Card 1 */}
            <div className="p-8 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-[#102f35] mb-2">
                Fast Delivery
              </h3>
              <p className="text-gray-700">
                Get your website live quickly without compromising quality or design.
              </p>
            </div>

            {/* Trust Card 2 */}
            <div className="p-8 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-[#102f35] mb-2">
                Professional Design
              </h3>
              <p className="text-gray-700">
                Clean, modern, mobile-friendly websites built with care and attention.
              </p>
            </div>

            {/* Trust Card 3 */}
            <div className="p-8 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-xl font-bold text-[#102f35] mb-2">
                Small Business Friendly
              </h3>
              <p className="text-gray-700">
                Fair pricing, flexible packages, and support tailored to your needs.
              </p>
            </div>
          </div>
        </motion.section>
      </main>
    </FadeIn>
  );
}
