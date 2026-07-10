"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  const industries = [
    { name: "Immigration Services", href: "/industries/immigration-services" },
    { name: "Building & Construction", href: "/industries/building-services" },
    { name: "Corporate & Event Catering", href: "/industries/catering-services" },
    { name: "Financial Firms", href: "/industries/financial-services" },
    {
      name: "Small Business Web Design",
      href: "/services/small-business-web-design-london",
    },
  ];

  return (
    <footer className="relative bg-[#102f35] text-gray-200 pt-16 pb-0">
      {/* Soft gold separator */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-gold/55"></div>

      {/* MAIN CONTENT */}
      <div className="px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-10 gap-x-12 border-b border-gray-700 pb-12 mt-4">
          {/* Column 1: Brand */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center space-x-2">
              <Image
                src="/logo.WebP"
                alt="Karol Digital Logo"
                width={84}
                height={50}
                className="h-[50px]"
                style={{ width: "auto" }}
              />
              <span className="text-2xl font-semibold text-white leading-none">
                Karol{" "}
                <span className="text-brand-gold-soft text-xl block sm:inline">
                  Digital
                </span>
              </span>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              We build professional, high-converting websites for UK businesses
              that want to look credible, load fast, and generate more enquiries.
            </p>
          </div>

          {/* Column 2: Industries */}
          <div className="space-y-4">
            <p className="text-lg font-semibold text-white border-l-2 border-brand-gold/70 pl-3">
              Industries
            </p>
            <ul className="space-y-3 text-sm">
              {industries.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-brand-gold-soft transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-4">
            <p className="text-lg font-semibold text-white border-l-2 border-brand-gold/70 pl-3">
              Quick Links
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/services/web-design"
                  className="hover:text-brand-gold-soft transition"
                >
                  Web Development & Coding
                </Link>
              </li>
              <li>
                <Link href="/services/social-media" className="hover:text-brand-gold-soft transition">
                  Social Media Management
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="hover:text-brand-gold-soft transition">
                  Digital Marketing Services
                </Link>
              </li>
              <li>
                <Link href="/services/ai-logo-design" className="hover:text-brand-gold-soft transition">
                  Ai Logo Design Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div className="space-y-4">
            <p className="text-lg font-semibold text-white border-l-2 border-brand-gold/70 pl-3">
              Legal
            </p>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-brand-gold-soft transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="hover:text-brand-gold-soft transition"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="hover:text-brand-gold-soft transition"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Social & Contact */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-lg font-semibold text-white">Let&apos;s Connect</p>
              <p className="text-sm text-gray-400">London, United Kingdom</p>
              <a
                href="tel:+447565472445"
                className="block text-sm hover:text-brand-gold-soft transition"
              >
                07565472445
              </a>
              <p className="text-xs text-gray-400">
                Clear advice, honest pricing, and a practical recommendation for
                your next step.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/book"
                className="btn-primary px-4 py-2 text-xs leading-none"
              >
                Schedule a Free Call
              </Link>

              <div className="flex items-center gap-3">
                {[
                  {
                    icon: <FaFacebookF />,
                    url: "https://www.facebook.com/karolgraphics",
                    label: "Follow us on Facebook",
                  },
                  {
                    icon: <FaInstagram />,
                    url: "https://www.instagram.com/karoldigital2025/",
                    label: "Follow us on Instagram",
                  },
                  {
                    icon: <FaLinkedinIn />,
                    url: "https://www.linkedin.com/in/karol-digital/",
                    label: "Follow us on LinkedIn",
                  },
                  {
                    icon: <FaYoutube />,
                    url: "https://www.youtube.com/@KarolDigital-26",
                    label: "Subscribe to our YouTube channel",
                  },
                ].map((social) => (
                  <a
                    key={social.url}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-sm transition-all duration-300 hover:bg-brand-gold hover:text-[#102f35]"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT BAR */}
      <div className="w-full bg-black py-6 mt-12">
        <p className="text-center text-[10px] leading-tight text-gray-300 tracking-wider">
          © {year} KAROL DIGITAL. ALL RIGHTS RESERVED. CRAFTED IN THE UK.
        </p>
      </div>
    </footer>
  );
}
