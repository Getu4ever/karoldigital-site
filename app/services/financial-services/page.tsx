"use client";

import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function FinanceWebDesign() {
  return (
    <FadeIn>
      <main className="min-h-screen bg-white text-gray-900 font-sans">

        {/* === HERO: TRUST & STABILITY === */}
       <motion.section
  className="relative min-h-[65vh] pt-24 md:pt-24 flex items-center justify-center text-center text-white"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
          <Image
            src="/hero-page-banner.jpg" 
            alt="Financial Services Web Design"
            fill
            className="object-cover brightness-[0.35]"
          />
         <div className="relative z-10 px-6 max-w-2xl mx-auto">
  <h1 className="text-4xl md:text-6xl font-bold mb-6">
    Digital Excellence for <span className="text-yellow-400">Financial&nbsp;Professionals</span>
  </h1>
  <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-100">
    High-trust, secure, and professional websites for UK Mortgage Brokers, 
    Accountants, and Financial Advisors.
  </p>
  <Link
    href="/contact"
    className="bg-white text-[#102f35] hover:bg-yellow-400 px-10 py-4 rounded-full font-bold transition-all inline-block shadow-lg"
  >
    Request a Professional Consultation
  </Link>
</div>



        </motion.section>

        {/* === SEO CONTENT: THE AUTHORITY SECTION === */}
        <section className="py-16 px-6 max-w-5xl mx-auto">
          <div className="text-center md:text-left grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#102f35] mb-6">Built on <span className="text-yellow-600">Trust & Security</span></h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In the financial sector, your website is often the first point of due diligence a client performs. A slow or unprofessional site creates doubt. At <strong>Karol Digital</strong>, we specialise in creating "Authority Sites" that mirror the professionalism of your firm.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We focus on <strong>GDPR-compliant lead capture</strong>, secure SSL encryption, and clean UI/UX that allows your clients to find information quickly, whether they are looking for mortgage advice or corporate tax services.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border-l-8 border-yellow-400 shadow-sm">
              <h4 className="font-bold text-xl mb-4 text-[#102f35]">Key Finance Features:</h4>
              <ul className="space-y-3 text-gray-600">
                <li>🛡️ SSL Secure & GDPR Compliant</li>
                <li>📊 Interactive Financial Calculators</li>
                <li>📑 Secure Document Download Areas</li>
                <li>🔗 Professional Third-Party Integrations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* === CASE STUDY: 1ST CALL FINANCIAL === */}
        <section className="py-20 px-6 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row-reverse border border-gray-100">
              <div className="lg:w-1/2 relative min-h-[400px]">
                <Image
                  src="/1stcall-finance-showcase.jpg" // Screenshot of 1st-call-financial.vercel.app
                  alt="1st Call Financial Website Design"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-8 md:p-14 flex flex-col justify-center">
                <span className="text-yellow-600 font-bold text-sm uppercase tracking-widest mb-2">Live Project</span>
                <h3 className="text-3xl font-bold text-[#102f35] mb-6">1st Call Financial</h3>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  We developed a clean, corporate-grade platform for <strong>1st Call Financial</strong>. The design emphasises clarity and trust, featuring a structured navigation system to guide users through various mortgage and insurance services.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8 text-center">
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <span className="block text-lg font-bold text-[#411b3f]">UX Driven</span>
                    <span className="text-xs text-gray-500 uppercase">Lead Funnels</span>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <span className="block text-lg font-bold text-[#411b3f]">Clean Code</span>
                    <span className="text-xs text-gray-500 uppercase">SEO Optimized</span>
                  </div>
                </div>
                <Link href="https://1st-call-financial.vercel.app/" target="_blank" className="bg-[#102f35] text-white text-center px-6 py-3 rounded-md font-bold hover:bg-[#411b3f] transition">
                  Review the Architecture ↗
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* === CTA === */}
        <section className="py-20 bg-[#102f35] text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 italic underline decoration-yellow-400">Scale Your Practice Digitally</h2>
          <p className="text-lg mb-8 opacity-80 max-w-2xl mx-auto">Modernise your firm with a website that reflects your expertise and drives qualified leads.</p>
          <Link href="/contact" className="inline-block border-2 border-white px-10 py-3 rounded-md font-bold hover:bg-white hover:text-[#102f35] transition">
            Start Your Finance Project
          </Link>
        </section>

      </main>
    </FadeIn>
  );
}
