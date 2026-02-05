"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  const industries = [
    { name: "Immigration Services", href: "/services/immigration-services" },
    { name: "Building & Construction", href: "/services/building-services" },
    { name: "Catering & Food", href: "/services/catering-services" },
    { name: "Financial Services", href: "/services/financial-services" },
  ];

  return (
    <footer className="relative bg-[#102f35] text-gray-200 pt-16 pb-0">
      {/* Thin yellow separator line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-yellow-400"></div>

      {/* MAIN CONTENT */}
      <div className="px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-10 gap-x-12 border-b border-gray-700 pb-12 mt-4">
          
          {/* Column 1: Brand */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center space-x-2">
              <img
                src="/logo.png"
                alt="Karol Digital Logo"
                className="h-[50px] w-auto"
              />
              <span className="text-2xl font-semibold text-white leading-none">
                Karol <span className="text-yellow-400 text-xl block sm:inline">Digital</span>
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm max-w-xs">
              Providing affordable, professional web design and SEO across the UK. We help small businesses grow with high-converting digital platforms.
            </p>
          </div>

          {/* Column 2: Industries (The SEO Booster) */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white border-l-2 border-yellow-400 pl-3">Industries</h4>
            <ul className="space-y-3 text-sm">
              {industries.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-300 hover:text-yellow-400 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white border-l-2 border-yellow-400 pl-3">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services" className="hover:text-yellow-400 transition">Our Services</Link></li>
              <li><Link href="/pricing" className="hover:text-yellow-400 transition">Packages</Link></li>
              <li><Link href="/blog" className="hover:text-yellow-400 transition">Expert Blog</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-400 transition">Free Quote</Link></li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white border-l-2 border-yellow-400 pl-3">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link href="/privacy-policy" className="hover:text-yellow-400 transition">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-yellow-400 transition">Terms of Service</Link></li>
              <li><Link href="/cookie-policy" className="hover:text-yellow-400 transition">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Column 5: Social & Contact */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-white">Let&apos;s Connect</h4>
              <p className="text-sm text-gray-400">London, United Kingdom</p>
              <a href="tel:+447565472445" className="block text-sm hover:text-yellow-400 transition">07565472445</a>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: <FaFacebookF />, url: "https://www.facebook.com/karolgraphics" },
                { icon: <FaInstagram />, url: "https://www.instagram.com/karoldigital2025/" },
                { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/karol-digital/" },
                { icon: <FaYoutube />, url: "https://www.youtube.com/@KarolDigital-26" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 hover:bg-yellow-400 hover:text-[#102f35] rounded-lg transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* FULL-WIDTH BLACK COPYRIGHT BAR */}
      <div className="w-full bg-black py-6 mt-12">
        <p className="text-center text-xs text-gray-500 tracking-wider">
          © {year} KAROL DIGITAL. ALL RIGHTS RESERVED. CRAFTED IN THE UK.
        </p>
      </div>
    </footer>
  );
}
