"use client";

import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ImmigrationWebDesign() {
  return (
    <FadeIn>
      <main className="min-h-screen bg-white text-gray-900">

                {/* === HERO SECTION: Trust & Authority (Identical to Finance) === */}
        <motion.section
  className="relative min-h-[65vh] pt-24 md:pt-24 flex items-center justify-center text-center text-white"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
          <Image
            src="/hero-page-banner.jpg" 
            alt="Web Design for Immigration Firms"
            fill
            priority
            className="object-cover brightness-[0.35]"
          />
          <div className="relative z-10 px-6 max-w-2xl mx-auto">
  <h1 className="text-4xl md:text-6xl font-bold mb-6">
    Web Design for <span className="text-yellow-400">Immigration&nbsp;Services</span>
  </h1>
  <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-100">
    Building high-trust, OISC-compliant websites that convert complex enquiries into successful cases.
  </p>
  <Link 
    href="/contact" 
    className="bg-white text-[#102f35] hover:bg-yellow-400 px-10 py-4 rounded-full font-bold transition-all inline-block shadow-lg"
  >
    Get a Law Firm Quote
  </Link>
</div>

        </motion.section>


        {/* === SECTION 1: THE TRUST FACTOR === */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <Image
                src="/immigration-hero-bg.jpg" // Show your previous immigration client work here
                alt="Immigration Website Case Study"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl z-10 relative"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-yellow-400 rounded-2xl -z-10 hidden md:block" />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#102f35]">
                Expertise in <span className="text-[#411b3f]">Regulatory Compliance</span>
              </h2>
              <p className="text-gray-700 text-lg mb-6 italic border-l-4 border-yellow-400 pl-4">
                "In immigration law, your website isn't just a brochure; it's your first consultation."
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                We understand that <strong>OISC and SRA-regulated firms</strong> require more than just a pretty design. You need secure lead capture, clear fee transparency displays, and a professional aesthetic that reassures clients during life-changing applications.
              </p>
              <ul className="space-y-3 mb-8">
                {['GDPR-compliant data handling', 'Secure document upload integration', 'Professional OISC/SRA badge placement', 'Multi-language accessibility options'].map((item) => (
                  <li key={item} className="flex items-center text-gray-800 font-medium">
                    <span className="text-green-600 mr-2">✔</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* === SECTION 2: INDUSTRY-SPECIFIC CARDS === */}
        <section id="features" className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#102f35]">Designed for Your <span className="text-[#411b3f]">Workload</span></h2>
            <p className="text-gray-600 mt-4">Features built to save immigration consultants time.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                title: "Client Intake Forms",
                desc: "Smart forms that pre-screen applicants, saving you hours of unqualified discovery calls.",
                icon: "📝",
              },
              {
                title: "Resource Hubs",
                desc: "Dedicated areas for visa guides and news updates to position your firm as a UK authority.",
                icon: "⚖️",
              },
              {
                title: "Appointment Booking",
                desc: "Integrated scheduling so clients can book and pay for consultations directly on your site.",
                icon: "📅",
              },
            ].map((card) => (
              <motion.div
                key={card.title}
                whileHover={{ y: -10 }}
                className="p-10 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="text-4xl mb-6">{card.icon}</div>
                <h3 className="text-xl font-bold text-[#102f35] mb-4">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* === SECTION 3: THE "WHY KAROL" VALUES === */}
        <section className="py-20 px-6 bg-[#102f35] text-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Why Immigration Firms Choose Karol Digital</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-yellow-400 text-2xl font-bold">01</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">UK Specialisation</h3>
                <p className="text-gray-300">We only work with UK businesses, meaning we understand the specific local SEO landscape for UK Visas.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-yellow-400 text-2xl font-bold">02</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Fast Turnaround</h3>
                <p className="text-gray-300">Working from home allows us to be agile. Get your firm online in weeks, not months.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-yellow-400 text-2xl font-bold">03</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Lead Generation</h3>
                <p className="text-gray-300">We don't just build sites; we build funnels designed to get you more immigration cases.</p>
              </div>
            </div>
          </div>
        </section>

        {/* === CASE STUDY: 1ST CALL UK === */}
<FadeIn>
  <section className="py-20 px-6 bg-white">
    <div className="max-w-6xl mx-auto">
      <div className="bg-[#f1f5f9] rounded-[3rem] overflow-hidden shadow-xl border border-gray-100 flex flex-col md:flex-row">

        {/* Project Image */}
        <div className="md:w-1/2 relative min-h-[400px]">
          <Image
            src="/1st-call-uk-immigration-services.jpg" // Use a screenshot of 1stcalluk-96op.vercel.app
            alt="1st Call UK Immigration Website"
            fill
            className="object-cover object-top"
          />
        </div>

        {/* Project Details */}
        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <span className="text-yellow-600 font-bold tracking-widest text-sm uppercase mb-4 block">
            Recent Work
          </span>
          <h2 className="text-3xl font-bold text-[#102f35] mb-6">
            1st Call UK Immigration Services
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We built a clean, high-authority platform for <strong>1st Call UK</strong>, focusing on making complex visa information easy to navigate. The site features dedicated sections for Work, Study, and Family visas, ensuring a seamless user journey for applicants.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
              <span className="block text-2xl font-bold text-[#411b3f]">OISC Ready</span>
              <span className="text-xs text-gray-500 uppercase">Compliance Focused</span>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
              <span className="block text-2xl font-bold text-[#411b3f]">Fast Load</span>
              <span className="text-xs text-gray-500 uppercase">Core Web Vitals</span>
            </div>
          </div>

          <Link
            href="https://1stcalluk-96op.vercel.app/"
            target="_blank"
            className="inline-flex items-center bg-[#102f35] text-white px-6 py-3 rounded-full font-bold hover:bg-[#411b3f] transition shadow-md"
          >
            Visit Live Site <span className="ml-2">↗</span>
          </Link>
        </div>
      </div>
    </div>
  </section>
</FadeIn>


        {/* === CTA SECTION === */}
        <section className="py-20 bg-white text-center px-6">
          <div className="max-w-3xl mx-auto p-12 rounded-[3rem] bg-gradient-to-br from-[#411b3f] to-[#102f35] text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to modernise your Immigration Firm?
            </h2>
            <p className="text-lg mb-10 text-gray-200">
              Stop losing potential clients to outdated competitors. Let’s build a digital presence that reflects your expertise.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black px-10 py-4 rounded-full font-bold text-lg shadow-lg transition transform hover:scale-105"
            >
              Start Your Project
            </Link>
          </div>
        </section>

      </main>
    </FadeIn>
  );
}
