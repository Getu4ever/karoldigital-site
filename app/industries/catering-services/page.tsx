"use client";

import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Home, Layers, UtensilsCrossed, ChevronRight, CheckCircle2, HelpCircle, ShoppingBag } from "lucide-react";

/**
 * CateringWebDesign Page
 * Fully expanded for advanced SEO while tightening the primary hero content footprint.
 * Full code provided as requested.
 */
export default function CateringWebDesign() {
  // JSON-LD Structured Data Schema for Food Industry Web Services
  const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Hospitality & Catering Website Design Systems",
  "description":
    "Bespoke online ordering platforms, digital menus, and premium web design frameworks tailored for UK corporate caterers, premium meal prep providers, and dark kitchens.",
  "image": "https://www.karoldigital.co.uk/office-lunch-showcase.jpg",
  "provider": {
    "@type": "ProfessionalService",
    "name": "Karol Digital",
    "url": "https://www.karoldigital.co.uk"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United Kingdom"
  },
  "category": "Web Design Services for Hospitality & Catering"
};

  return (
    <FadeIn>
      {/* Structural Schema Indexing Insertion */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      <main className="min-h-screen bg-white text-gray-900">

        {/* === HERO: TIGHTENED MAIN CONTENT CONTAINER FOOTPRINT === */}
        <motion.section
          className="relative min-h-[75vh] md:min-h-[80vh] w-full flex flex-col items-center justify-center text-center text-white px-6 pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/heroes/catering-services.png" 
            alt="Premium Web Design for Catering and Hospitality Businesses"
            fill
            priority
            className="object-cover brightness-[0.5]"
          />
          
          {/* Main Hero Content Box Container - Reduced Max Width to 2xl */}
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center justify-center">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-gold-muted block mb-4">
              Menus, Bookings &amp; Corporate Enquiries That Convert
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight leading-tight md:leading-[1.15]">
              Catering Website Design & <br className="hidden sm:inline" />
              <span className="text-brand-gold-muted">Hospitality Systems</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-10 text-gray-200 leading-relaxed font-medium">
              Websites for UK caterers and food brands that turn hungry visitors into booked events, office lunch orders, and fewer missed enquiries on mobile.
            </p>
            <Link 
              href="/book" 
              className="bg-white text-[#102f35] hover:bg-brand-gold px-10 py-4.5 rounded-full font-semibold transition-all duration-300 inline-block shadow-md active:scale-95 text-sm uppercase tracking-wider"
            >
              Start My Food Website
            </Link>
          </div>
        </motion.section>
        {/* === BRANDED BREADCRUMB NAVIGATION BAR === */}
        <div className="bg-[#102f35]/5 border-b border-[#102f35]/10 py-4 px-6">
          <nav className="max-w-7xl mx-auto flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500">
            <Link href="/" className="flex items-center gap-1 text-[#102f35] hover:text-[#411b3f] transition-colors">
              <Home size={14} />
              <span>Home</span>
            </Link>
            <ChevronRight size={12} className="text-gray-400" />
            <Link href="/services" className="flex items-center gap-1 text-[#102f35] hover:text-[#411b3f] transition-colors">
              <Layers size={14} />
              <span>Services</span>
            </Link>
            <ChevronRight size={12} className="text-gray-400" />
            <span className="flex items-center gap-1 text-[#411b3f]">
              <UtensilsCrossed size={14} className="text-brand-gold-deep" />
              <span>Catering & Hospitality</span>
            </span>
          </nav>
        </div>

        {/* === THE VALUE PROPOSITION === */}
        <section className="py-24 px-6 max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#411b3f] block mb-3">
            Digital Tasting Menus
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#102f35] mb-6 tracking-tight">
            Stand Out in the Competitive <span className="text-[#411b3f]">UK Food Scene</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            In hospitality, your website is your digital flagship menu. Planners booking weddings, corporate functions, and private events judge your standards by how professional and easy your site feels. At <strong className="text-[#102f35]">Karol Digital</strong>, we build mobile-first sites that showcase your food beautifully and make it simple to enquire.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            From <strong className="text-[#411b3f]">online ordering and bulk office lunch flows</strong> to clear package menus and event enquiry forms, we focus on the journeys that turn hungry visitors into booked work — without losing margin to third-party apps.
          </p>
        </section>

        {/* === NEW SECTION: EXPANDED SUB-NICHE SPECIFIC VERTICALS === */}
        <section className="py-24 px-6 bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#411b3f] block mb-3">
                Industry Specific Focus
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#102f35] tracking-tight">
                Tailor-Made Platforms for Hospitality Sectors
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-sm leading-relaxed">
                Different business models need completely distinct customer journeys. We develop targeted layout maps tailored precisely to your specific transactional goals.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#102f35]/5 flex items-center justify-center text-[#102f35] font-bold text-xl mb-6">
                  01
                </div>
                <h3 className="text-xl font-bold text-[#102f35] mb-3">Event & Wedding Caterers</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Showcase layouts designed to win weddings, corporate functions, and private parties — with galleries, clear packages, and enquiry forms that capture dates, guest counts, and dietary needs.
                </p>
                <span className="text-xs font-bold uppercase text-[#411b3f] tracking-wide">Built for Inquiries & Lead Capture</span>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#102f35]/5 flex items-center justify-center text-[#102f35] font-bold text-xl mb-6">
                  02
                </div>
                <h3 className="text-xl font-bold text-[#102f35] mb-3">Premium Meal Prep Brands</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Online stores for subscriptions, custom boxes, and nutritional choices — with smooth checkout so customers finish the order instead of abandoning the basket.
                </p>
                <span className="text-xs font-bold uppercase text-[#411b3f] tracking-wide">Built for Subscription E-Commerce</span>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#102f35]/5 flex items-center justify-center text-[#102f35] font-bold text-xl mb-6">
                  03
                </div>
                <h3 className="text-xl font-bold text-[#102f35] mb-3">Dark Kitchens & Delivery Hubs</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Local landing pages built to win direct orders — so you keep more margin instead of handing it to delivery apps. Fast mobile checkout and clear delivery options included.
                </p>
                <span className="text-xs font-bold uppercase text-[#411b3f] tracking-wide">Built for Direct On-Demand Sales</span>
              </div>
            </div>
          </div>
        </section>

        {/* === CASE STUDY 1: THE OFFICE LUNCH === */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="bg-[#fcfcfc] rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row-reverse border border-gray-100/80">
              <div className="md:w-1/2 relative min-h-[400px]">
                <Image
                  src="/office-lunch-showcase.jpg" 
                  alt="The Office Lunch Corporate Catering Web Architecture"
                  fill
                  sizes="(max-w-768px) 100vw, 600px"
                  className="object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-14 flex flex-col justify-center">
                <span className="text-[#411b3f] font-bold text-sm uppercase tracking-widest mb-2">Corporate Catering Integration</span>
                <h3 className="text-3xl font-bold text-[#102f35] mb-6">The Office Lunch</h3>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  For <strong className="text-[#102f35]">The Office Lunch</strong>, we built a clear B2B ordering experience for workplace teams — bulk corporate orders, crisp menus, and a fast path from browse to booked lunch without the chase.
                </p>
                <div className="flex gap-4 mb-8">
                  <div className="bg-[#102f35]/5 p-4 rounded-2xl flex-1 border border-[#102f35]/10">
                    <span className="block text-xl font-bold text-[#102f35]">B2B Orders</span>
                    <span className="text-xs text-gray-500 font-bold uppercase tracking-wide">Built for Teams</span>
                  </div>
                  <div className="bg-[#102f35]/5 p-4 rounded-2xl flex-1 border border-[#102f35]/10">
                    <span className="block text-xl font-bold text-[#102f35]">Clear Menus</span>
                    <span className="text-xs text-gray-500 font-bold uppercase tracking-wide">Faster Bookings</span>
                  </div>
                </div>
                <Link 
                  href="https://the-office-lunch.vercel.app/" 
                  target="_blank" 
                  className="text-[#411b3f] font-bold flex items-center gap-1 hover:text-[#102f35] transition-colors group"
                >
                  <span>Visit The Office Lunch</span> 
                  <span className="inline-block transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* === CASE STUDY 2: FOOD MAMA KITCHENS === */}
        <section className="py-20 px-6 bg-gray-50 border-y border-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row border border-gray-100/80">
              <div className="md:w-1/2 relative min-h-[400px]">
                <Image
                  src="/foodmama-showcase-new.jpg" 
                  alt="Food Mama Kitchens E-commerce Showcase Architecture"
                  fill
                  sizes="(max-w-768px) 100vw, 600px"
                  className="object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-14 flex flex-col justify-center">
                <span className="text-[#411b3f] font-bold text-sm uppercase tracking-widest mb-2">E-commerce Success Story</span>
                <h3 className="text-3xl font-bold text-[#102f35] mb-6">Food Mama Kitchens</h3>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  For <strong className="text-[#102f35]">Food Mama Kitchens</strong>, we built a vibrant storefront that showcases authentic West African cooking — clear menus, smooth booking forms, and a mobile experience that turns interest into orders.
                </p>
                <div className="flex gap-4 mb-8">
                  <div className="bg-[#411b3f]/5 p-4 rounded-2xl flex-1 border border-[#411b3f]/10">
                    <span className="block text-xl font-bold text-[#411b3f]">Digital Menu</span>
                    <span className="text-xs text-gray-500 font-bold uppercase tracking-wide">Easy Updates</span>
                  </div>
                  <div className="bg-[#411b3f]/5 p-4 rounded-2xl flex-1 border border-[#411b3f]/10">
                    <span className="block text-xl font-bold text-[#411b3f]">Mobile First</span>
                    <span className="text-xs text-gray-500 font-bold uppercase tracking-wide">Seamless Booking</span>
                  </div>
                </div>
                <Link 
                  href="https://www.foodmamakitchens.co.uk/" 
                  target="_blank" 
                  className="text-[#102f35] font-bold flex items-center gap-1 hover:text-[#411b3f] transition-colors group"
                >
                  <span>Visit Food Mama Kitchens</span> 
                  <span className="inline-block transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* === NEW SECTION: ADVANCED CONVERSION & INFRASTRUCTURE LOGIC === */}
        <section className="py-20 px-6 bg-gradient-to-br from-[#102f35] to-[#1c4850] text-white rounded-[2.5rem] max-w-7xl mx-auto my-12 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(65,27,63,0.2),transparent)]" />
          <div className="relative z-10 max-w-4xl mx-auto grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-3">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold-muted block mb-3">
                Direct Orders, Higher Margins
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">
                Keep More Profit Off Third-Party Apps
              </h2>
              <p className="text-gray-200 text-sm leading-relaxed mb-6">
                Relying on aggregators eats into margins. We build sites that make direct ordering easy — so more customers book with you, not a marketplace.
              </p>
              <div className="space-y-3 text-sm font-medium text-gray-100">
                <p className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-brand-gold-soft shrink-0" />
                  <span>Menus that load quickly so hungry buyers stay and order</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-brand-gold-soft shrink-0" />
                  <span>Forms that capture collection details, dates, and allergen needs</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-brand-gold-soft shrink-0" />
                  <span>Optional links to printers and POS so kitchen ops stay simple</span>
                </p>
              </div>
            </div>
            
            <div className="md:col-span-2 bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
              <ShoppingBag className="text-brand-gold-soft w-10 h-10 mb-4" />
              <h3 className="text-lg font-bold mb-2">Want a Commission-Free Funnel?</h3>
              <p className="text-gray-300 text-xs leading-relaxed mb-4">
                We engineer standalone transactional checkout environments that give your business complete ownership of its sales workflows, lists, and customer lifetime records.
              </p>
              <span className="text-xs font-bold uppercase text-brand-gold-soft tracking-wider">Keep 100% of Profits</span>
            </div>
          </div>
        </section>

        {/* === FEATURE GRID === */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#102f35] mb-4">
                Conversion Assets Engineered For Food Brands
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Clean architectural functionality to ensure zero friction between an enthusiastic user browsing items and an actual completed inquiry.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                { title: "Dynamic Digital Menus", desc: "Interactive presentation arrays that look stunning across any mobile device viewport and update directly without site bloat.", icon: "🍱" },
                { title: "Ordering Integrations", desc: "Connect checkout and intake forms to the payment tools you already use — so orders and enquiries reach the kitchen without friction.", icon: "💳" },
                { title: "Social Feed Synchronization", desc: "Secure integration points streaming dynamic real-time imagery layers directly onto your platform without reducing page speeds.", icon: "📸" },
              ].map((f) => (
                <div 
                  key={f.title} 
                  className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-b-4 border-b-[#102f35]"
                >
                  <div className="text-4xl mb-4">{f.icon}</div>
                  <h3 className="text-xl font-bold text-[#102f35] mb-2">{f.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === NEW SECTION: LOCALIZED HOSPITALITY FAQS (SEO RICH SNIPPETS CAPTURE) === */}
        <section className="py-24 px-6 bg-gray-50 border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <HelpCircle className="mx-auto text-[#411b3f] w-10 h-10 mb-4" />
              <h2 className="text-3xl font-bold text-[#102f35] tracking-tight">
                Catering & Hospitality Web Design FAQ
              </h2>
              <p className="text-gray-600 mt-2 text-sm">
                Practical answers on updating menus, capturing corporate enquiries, and winning bookings on mobile.
              </p>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-white rounded-2xl border border-gray-100/60 shadow-sm">
                <h3 className="text-base font-bold text-[#102f35] mb-2">Can we update our food and catering menus easily without needing coding skills?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Yes. You get a simple dashboard to edit menu items, prices, seasonal boxes, and allergen notes from any phone or computer — without waiting on a developer for every change.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-gray-100/60 shadow-sm">
                <h3 className="text-base font-bold text-[#102f35] mb-2">How do you ensure our corporate catering inquiry forms capture premium leads?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We ask for the details that matter early — headcount, date, budget range, and menu preferences — so your team spends time on real corporate opportunities instead of incomplete spam enquiries.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-gray-100/60 shadow-sm">
                <h3 className="text-base font-bold text-[#102f35] mb-2">Why is high page performance vital for localized UK catering rankings?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Most planners search on mobile under time pressure. If your site is slow, they bounce to a competitor. Faster pages keep them long enough to enquire — and search engines reward sites that do that well.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* === CALL TO ACTION === */}
        <section className="py-20 bg-gradient-to-r from-[#102f35] via-[#1c4850] to-[#411b3f] text-white text-center px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Ready to Serve Something Spectacular Online?
            </h2>
            <p className="text-gray-200 max-w-xl mx-auto mb-8 text-sm">
              Incorporate lightning-fast order conversion maps, maximize local geographic reach, and establish structural digital dominance.
            </p>
            <Link
              href="/book"
              className="inline-block bg-brand-gold text-[#102f35] px-10 py-4 rounded-full font-semibold hover:bg-white transition-all shadow-md active:scale-95"
            >
              Let's Cook Up Your Website
            </Link>
          </div>
        </section>

      </main>
    </FadeIn>
  );
}