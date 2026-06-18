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
              <Image
                src="/logo.WebP"
                alt="Karol Digital Logo"
                width={84}
                height={50}
                className="h-[50px] w-auto"
              />
              <span className="text-2xl font-semibold text-white leading-none">
                Karol{" "}
                <span className="text-yellow-400 text-xl block sm:inline">
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
            <h3 className="text-lg font-semibold text-white border-l-2 border-yellow-400 pl-3">
              Industries
            </h3>
            <ul className="space-y-3 text-sm">
              {industries.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-yellow-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-l-2 border-yellow-400 pl-3">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/services/web-design"
                  className="hover:text-yellow-400 transition"
                >
                  Web Design Services
                </Link>
              </li>
              <li>
                <Link href="/services/social-media" className="hover:text-yellow-400 transition">
                  Social Media Services
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="hover:text-yellow-400 transition">
                  Digital Marketing Services
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-yellow-400 transition">
                  Activity Feed
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-l-2 border-yellow-400 pl-3">
              Legal
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-yellow-400 transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="hover:text-yellow-400 transition"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="hover:text-yellow-400 transition"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Social & Contact */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-white">Let&apos;s Connect</h3>
              <p className="text-sm text-gray-400">London, United Kingdom</p>
              <a
                href="tel:+447565472445"
                className="block text-sm hover:text-yellow-400 transition"
              >
                07565472445
              </a>
              <p className="text-xs text-gray-400">
                Clear advice, honest pricing, and a practical recommendation for
                your next step.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-block bg-yellow-400 text-[#102f35] px-4 py-2 rounded-full text-xs font-bold leading-none hover:bg-yellow-300 transition shadow-md"
            >
              Request a Quote
            </Link>

            <div className="flex flex-wrap gap-3">
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
  ].map((social, i) => (
    <a
      key={i}
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.label}
      className="w-8 h-8 flex items-center justify-center bg-white/5 border border-white/10 hover:bg-yellow-400 hover:text-[#102f35] rounded-lg transition-all duration-300 text-sm"
    >
      {social.icon}
    </a>
  ))}
</div>
          </div>
        </div>
      </div>

      {/* FULL-WIDTH CTA BAR */}
      <div className="w-full bg-white py-8 mt-12 flex justify-center">
        <div className="max-w-4xl text-center px-6">
          <p className="text-[#102f35] leading-relaxed text-lg font-semibold mb-3">
            Need a website that looks credible and brings in better enquiries?
          </p>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            We help UK businesses grow with fast, professional, conversion-focused
            websites built around real business goals.
          </p>
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
