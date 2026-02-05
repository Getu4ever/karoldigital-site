"use client";

import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function CateringWebDesign() {
  return (
    <FadeIn>
      <main className="min-h-screen bg-white text-gray-900">

        {/* === HERO: THE APPETISER === */}
        <motion.section
  className="relative min-h-[65vh] pt-24 md:pt-28 flex items-center justify-center text-center text-white"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
          <Image
            src="/hero-page-banner.jpg" 
            alt="Web Design for Catering Businesses"
            fill
            className="object-cover brightness-[0.4]"
          />
          <div className="relative z-10 px-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Websites That Look <span className="text-yellow-400">Good Enough To Eat</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-100">
              Professional web design for UK caterers, meal prep services, and dark kitchens. 
              Turn hungry visitors into loyal customers.
            </p>
            <Link href="/contact" className="bg-white text-[#102f35] hover:bg-yellow-400 px-10 py-4 rounded-full font-bold transition-all inline-block shadow-lg">
              Start My Food Website
            </Link>
          </div>
        </motion.section>

        {/* === THE VALUE PROPOSITION === */}
        <section className="py-16 px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#102f35] mb-6">
            Stand Out in the Competitive <span className="text-[#411b3f]">UK Food Scene</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            In the catering industry, your website is your digital tasting menu. Potential clients for weddings, corporate events, and parties judge your food by the quality of your website. At <strong>Karol Digital</strong>, we create vibrant, mobile-first sites that highlight your culinary skills and make booking your services effortless.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            From seamless <strong>online ordering systems</strong> to high-definition food galleries, we provide the tools you need to manage your kitchen more effectively and grow your brand across the UK.
          </p>
        </section>

        {/* === CASE STUDY: FOOD MAMA KITCHENS === */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row border border-gray-100">
              <div className="md:w-1/2 relative min-h-[400px]">
                <Image
                  src="/foodmama-showcase-new.jpg" // Screenshot of foodmamakitchens.co.uk
                  alt="Food Mama Kitchens Web Design"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-14 flex flex-col justify-center">
                <span className="text-red-600 font-bold text-sm uppercase tracking-widest mb-2">Success Story</span>
                <h3 className="text-3xl font-bold text-[#102f35] mb-6">Food Mama Kitchens</h3>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  We designed a vibrant, user-friendly platform for <strong>Food Mama Kitchens</strong> to showcase their authentic West African flavours. The site focuses on visual impact and clear navigation for meal prep and catering enquiries.
                </p>
                <div className="flex gap-4 mb-8">
                  <div className="bg-red-50 p-4 rounded-xl flex-1">
                    <span className="block text-xl font-bold text-red-600">Digital Menu</span>
                    <span className="text-xs text-gray-500 uppercase">Easily Updateable</span>
                  </div>
                  <div className="bg-red-50 p-4 rounded-xl flex-1">
                    <span className="block text-xl font-bold text-red-600">Mobile First</span>
                    <span className="text-xs text-gray-500 uppercase">Seamless Booking</span>
                  </div>
                </div>
                <Link href="https://www.foodmamakitchens.co.uk/" target="_blank" className="text-[#102f35] font-bold flex items-center hover:underline">
                  Visit Food Mama Kitchens <span className="ml-2">↗</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* === FEATURE GRID === */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
            {[
              { title: "Dynamic Menus", desc: "Digital menus that look great on any device and are easy to update as your specials change.", icon: "🍱" },
              { title: "Ordering Systems", desc: "Integrate with platforms like Shopify, WooCommerce, or custom forms for direct sales.", icon: "💳" },
              { title: "Social Integration", desc: "Sync your Instagram feed directly to your site to show off your latest creations in real-time.", icon: "📸" },
            ].map((f) => (
              <div key={f.title} className="p-8 bg-[#f9fafb] rounded-2xl hover:shadow-md transition">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* === CTA === */}
        <section className="py-20 bg-gradient-to-r from-[#102f35] to-[#411b3f] text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to serve something special?</h2>
          <Link href="/contact" className="inline-block bg-yellow-400 text-black px-10 py-4 rounded-full font-black hover:scale-105 transition">
            Let's Cook Up a Website
          </Link>
        </section>

      </main>
    </FadeIn>
  );
}
