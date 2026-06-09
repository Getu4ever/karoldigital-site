"use client";

import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Define the shape of the props
interface PricingCardProps {
  title: string;
  desc: string;
  price: string;
  features: string[];
  buttonText: string;
  highlighted?: boolean;
  link?: string;
}

// Applying the interface to the component
const PricingCard = ({ title, desc, price, features, buttonText, highlighted = false, link = "/contact" }: PricingCardProps) => {
  return (
    <div className={`relative bg-white shadow-xl rounded-2xl p-8 border-t-4 ${highlighted ? "border-yellow-400 scale-105 z-10 shadow-2xl" : "border-[#102f35]"} flex flex-col hover:-translate-y-2 transition-all duration-300`}>
      {highlighted && (
        <div className="absolute top-0 right-8 -translate-y-1/2 bg-yellow-400 text-[#102f35] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          Most Powerful
        </div>
      )}
      <p className="text-3xl font-bold text-[#102f35] text-center mb-4">{title}</p>
      <p className="text-gray-600 text-center mb-6 h-12">{desc}</p>
      <ul className="space-y-3 text-gray-700 mb-8 flex-grow">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-yellow-500">✔</span> {feature}
          </li>
        ))}
      </ul>
      <p className="text-2xl font-extrabold text-[#102f35] text-center mb-6">{price}</p>
      <Link href={link} className={`block text-center py-3 rounded-full font-semibold transition ${highlighted ? "bg-yellow-400 text-[#102f35] hover:bg-yellow-500" : "bg-[#102f35] text-white hover:bg-[#411b3f]"}`}>
        {buttonText}
      </Link>
    </div>
  );
};

export default function PricingPage() {
  return (
    <FadeIn>
      <main className="min-h-screen bg-white text-gray-900 font-sans">
        
        {/* HERO SECTION */}
        <motion.section className="relative min-h-[60vh] flex items-center justify-center text-center text-white pt-8 md:pt-4" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Image src="/hero-page-banner.jpg" alt="Karol Digital Services" fill priority className="object-cover brightness-[0.45]" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
              <span className="text-white">Bespoke </span>
              <span className="text-yellow-400">Digital Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
              High-performance websites and brand identities engineered to turn visitors into loyal customers.
            </p>
          </div>
        </motion.section>

        {/* TRUST SIGNALS */}
        <section className="py-12 bg-gray-50 border-b">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
            <div><p className="font-bold text-[#102f35]">✓ No Hidden Fees</p></div>
            <div><p className="font-bold text-[#102f35]">✓ 100% Code Ownership</p></div>
            <div><p className="font-bold text-[#102f35]">✓ Performance Guaranteed</p></div>
          </div>
        </section>

        {/* === INTRO VALUE PROPOSITION === */}
        <FadeIn>
          <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-[#f9fafb] to-[#f1f5f9]">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
              
              {/* Text Column */}
              <div className="space-y-6">
                <span className="text-sm font-bold uppercase tracking-widest text-[#411b3f]">
                  The Karol Digital Standard
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#102f35]">
                  Strategic Design Meets Technical Excellence
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  By engineering bespoke digital solutions, from full brand identities to custom-coded e-commerce platforms, I provide the technical infrastructure your business needs to compete, scale, and dominate its market.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We don't just build platforms; we create strategic assets. Our iterative, transparent workflow ensures every line of code serves your commercial goals—driving alignment from discovery call through launch and continuous optimization. We bridge the gap between creative vision and high-performance technical execution.
                </p>
              </div>

              {/* Image Column */}
              <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <Image
                  src="/strategic-web-development-visual.webp"
                  alt="Karol Digital Strategic Partnership"
                  fill
                  className="object-cover"
                />
              </div>

            </div>
          </section>
        </FadeIn>

        {/* PRICING PACKAGES */}
        <section className="py-24 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#102f35] mb-4">💼 Performance Web Packages</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Transparent pricing based on business outcomes.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <PricingCard title="Starter" desc="Professional online presence for new businesses." price="£800–£1,400" features={["5–7 Pages", "Basic SEO Setup", "CMS Setup", "Mobile Responsive"]} buttonText="Choose Starter" />
            <PricingCard title="Growth" desc="Conversion-focused to generate consistent leads." price="£1,600–£2,800" features={["UX & Conversion Optimisation", "Full On-page SEO", "Performance Tuning", "Lead Capture System"]} buttonText="Choose Growth" />
            <PricingCard title="Premium" desc="Complete digital growth system & branding." price="£3,200–£5,500" features={["Full Brand Identity", "6–10+ Custom Pages", "Advanced Custom Dev", "Conversion Strategy"]} buttonText="Choose Premium" highlighted />
            <PricingCard title="Enterprise" desc="Complex ecommerce & business systems." price="From £6,000" features={["Full Ecommerce/Shop", "Payment Integration", "CRM Integration", "High-Level Security"]} buttonText="Request Quote" />
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-24 px-6 bg-[#102f35] text-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Trusted by Growing UK Businesses</h2>
              <p className="text-gray-300">See how we have helped our partners scale through strategic digital solutions.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "SBC Marketing", link: "https://sbc-marketing.co.uk/", logo: "/logos/sbc.webp", quote: "A true partner in growth. Karol Digital understands the balance between aesthetics and high-converting marketing." },
                { name: "1st CallUK Immigration", link: "https://www.1stcalluk.com/", logo: "/logos/1st-calluk-immigration.webp", quote: "Karol Digital transformed our online presence, making it easier than ever for clients to reach us." },
                { name: "1st CallUK Financial", link: "https://www.1stcalluk.financial/", logo: "/logos/1st-call-financial.webp", quote: "Professional, efficient, and results-driven. Our lead generation has never been better." },
                { name: "Food Mama’s Kitchen", link: "https://www.foodmamakitchens.co.uk/", logo: "/logos/food-mama-kitchen.webp", quote: "The branding and website have truly elevated our business. Highly recommended." }
              ].map((t, i) => (
                <a key={i} href={t.link} target="_blank" rel="noopener noreferrer" className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 flex flex-col justify-between">
                  <div className="mb-8 h-24 w-full relative flex items-center justify-center bg-white rounded-xl overflow-hidden p-3">
                    <Image src={t.logo} alt={t.name} width={200} height={100} className="object-contain max-h-full" priority />
                  </div>
                  <div className="flex-grow">
                    <div className="text-yellow-400 text-3xl mb-4 opacity-50">“</div>
                    <p className="italic text-gray-100 mb-6 leading-relaxed text-sm">"{t.quote}"</p>
                  </div>
                  <div className="pt-4 border-t border-white/10 mt-auto">
                    <p className="font-bold text-white text-sm">{t.name}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* TRUST BANNER */}
        <section className="bg-[#102f35] py-8 text-center text-white">
          <p className="px-6 font-medium">All projects include 14-day post-launch support, CMS training, and performance guarantees.</p>
        </section>

        {/* MAINTENANCE PACKAGES */}
        <section className="py-24 px-6 md:px-12 bg-gray-50">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#102f35] text-center mb-16">Website Maintenance</h2>
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <div className="bg-white shadow-lg rounded-2xl p-8 border-t-4 border-[#102f35] text-center">
              <p className="text-2xl font-bold mb-4">Basic</p>
              <ul className="text-gray-600 space-y-2 mb-6"><li>Fixing bugs</li><li>Minor edits</li><li>Dependency updates</li></ul>
              <p className="font-bold text-xl mb-6">£150-£250/mo</p>
              <Link href="/contact" className="block bg-[#102f35] text-white py-3 rounded-full">Select Basic</Link>
            </div>
            <div className="bg-white shadow-lg rounded-2xl p-8 border-t-4 border-[#411b3f] text-center">
              <p className="text-2xl font-bold mb-4">Premium</p>
              <ul className="text-gray-600 space-y-2 mb-6"><li>Everything in Basic</li><li>New Feature Dev</li><li>Priority Response</li></ul>
              <p className="font-bold text-xl mb-6">£250-£350/mo</p>
              <Link href="/contact" className="block bg-[#411b3f] text-white py-3 rounded-full">Select Premium</Link>
            </div>
            <div className="bg-white shadow-lg rounded-2xl p-8 border-t-4 border-[#102f35] text-center">
              <p className="text-2xl font-bold mb-4">Custom</p>
              <ul className="text-gray-600 space-y-2 mb-6"><li>Major redesigns</li><li>Feature development</li><li>Troubleshooting</li></ul>
              <p className="font-bold text-xl mb-6">From £150/update</p>
              <Link href="/contact" className="block bg-[#102f35] text-white py-3 rounded-full">Request Work</Link>
            </div>
          </div>
        </section>

        {/* MARKETING RETAINERS */}
        <section className="py-24 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-[#102f35] mb-4">📱 Marketing & Growth Retainers</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Scalable growth strategies designed to keep your business ahead of the competition.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Paid Advertising", desc: "High-converting Google Ads and Social Media campaigns engineered to capture qualified leads.", price: "Starts at £200/mo", icon: "🚀" },
                { title: "SEO & Content", desc: "Continuous search engine optimization, technical audits, and content planning to boost organic visibility.", price: "Starts at £400/mo", icon: "📈" },
                { title: "Brand Identity", desc: "Consistent visual evolution—logos, color palettes, and marketing templates to keep your brand iconic.", price: "Custom Retainer", icon: "🎨" }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6 text-2xl">{item.icon}</div>
                  <h3 className="font-bold text-[#102f35] text-xl mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">{item.desc}</p>
                  <div className="pt-6 border-t border-gray-50">
                    <p className="text-[#102f35] font-bold">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DELIVERABLES & ADD-ONS */}
        <section className="py-24 px-6 md:px-12 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-extrabold text-[#102f35] text-center mb-12">What’s Included in Every Project</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl border-l-4 border-[#102f35] shadow-md">
                <h3 className="font-bold text-[#102f35] text-xl mb-6">Core Deliverables</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-center gap-3">✨ <span><strong>Bespoke Design:</strong> Tailored exclusively to your brand identity.</span></li>
                  <li className="flex items-center gap-3">📱 <span><strong>Mobile-First:</strong> Fully responsive across all devices.</span></li>
                  <li className="flex items-center gap-3">🔒 <span><strong>Secure Hosting:</strong> Enterprise-grade deployment and security.</span></li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl border-l-4 border-[#411b3f] shadow-md">
                <h3 className="font-bold text-[#411b3f] text-xl mb-6">Performance & Support</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-center gap-3">⚡ <span><strong>Speed Optimization:</strong> Built for top-tier Google PageSpeed scores.</span></li>
                  <li className="flex items-center gap-3">🛠 <span><strong>14-Day Hyper-Support:</strong> Direct access for post-launch questions.</span></li>
                  <li className="flex items-center gap-3">📚 <span><strong>CMS Training:</strong> Empowering you to manage your own content.</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS & NEXT STEPS */}
        <section className="py-24 px-6 md:px-12 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#102f35] mb-4">🛠 Our Strategic Process</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { title: "Discovery Call", desc: "A deep dive into your business goals, target audience, and unique requirements." },
                { title: "Strategic Proposal", desc: "We present a comprehensive, tailored roadmap aligned with your budget and timeline." },
                { title: "Build & Refine", desc: "Bespoke development with regular checkpoints to ensure every detail meets our standards." },
                { title: "Launch & Scale", desc: "Rigorous testing followed by a seamless deployment and long-term optimization strategy." }
              ].map((step, i) => (
                <div key={i} className="relative p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#102f35] transition-colors group">
                  <div className="text-[#411b3f]/20 font-black text-6xl mb-4 group-hover:text-[#411b3f]/10 transition-colors">0{i + 1}</div>
                  <h3 className="font-bold text-[#102f35] text-xl mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center bg-[#102f35] p-12 rounded-3xl text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to start your digital transformation?</h3>
              <Link href="/contact" className="inline-block bg-yellow-400 text-[#102f35] px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-500 transition shadow-lg">Get Started Today</Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-6 md:px-12 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-extrabold text-[#102f35] text-center mb-12">❓ FAQ</h2>
            <div className="space-y-6">
              {[
                { q: "How long does a project take?", a: "5 to 25 days depending on the scope." },
                { q: "Do you manage hosting?", a: "Yes, I handle deployment on enterprise platforms." },
                { q: "Can I update content?", a: "Yes, I provide full CMS training." }
              ].map((item, i) => (
                <details key={i} className="border rounded-lg p-6 bg-white"><summary className="font-semibold cursor-pointer">{item.q}</summary><p className="mt-3 text-gray-600">{item.a}</p></details>
              ))}
            </div>
          </div>
        </section>

      </main>
    </FadeIn>
  );
}