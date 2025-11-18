"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#102f35] text-gray-200 pt-16 pb-0">
      {/* Thin yellow separator line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-yellow-400"></div>

      {/* MAIN CONTENT WITH PADDING */}
      <div className="px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-20 border-b border-gray-700 pb-10 mt-4">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/logo.png" alt="Karol Digital Logo" className="h-[50px] w-auto" />
              <h3 className="text-2xl font-semibold text-white">
                Karol <span className="text-yellow-400">Digital</span>
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm max-w-xs">
              Empowering small businesses through affordable web design, SEO, and digital marketing.
              Helping local brands grow online with confidence and creativity.
            </p>
          </div>

          {/* Legal */}
          <div className="space-y-4 pl-6 lg:pl-12">
            <h4 className="text-lg font-semibold text-white">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/privacy-policy" className="hover:text-yellow-400 transition">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-yellow-400 transition">Terms of Service</Link></li>
              <li><Link href="/cookie-policy" className="hover:text-yellow-400 transition">Cookie Policy</Link></li>
              <li><Link href="/disclaimer" className="hover:text-yellow-400 transition">Disclaimer</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                Email:{" "}
                <a href="mailto:info@karoldigital.co.uk" className="hover:text-yellow-400 transition">
                  info@karoldigital.co.uk
                </a>
              </li>
              <li>
                Phone:{" "}
                <a href="tel:+447565472445" className="hover:text-yellow-400 transition">
                  07565472445
                </a>
              </li>
              <li>Location: London, United Kingdom</li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Follow Us</h4>
            <div className="flex flex-wrap gap-3 text-lg">
              <a href="https://www.facebook.com/karolgraphics" target="_blank" rel="noopener noreferrer"
                 className="p-3 bg-[#102f35] border border-white hover:bg-yellow-400 hover:text-[#102f35] rounded-full transition">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/karoldigital2025/" target="_blank" rel="noopener noreferrer"
                 className="p-3 bg-[#102f35] border border-white hover:bg-yellow-400 hover:text-[#102f35] rounded-full transition">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/in/karol-digital/" target="_blank" rel="noopener noreferrer"
                 className="p-3 bg-[#102f35] border border-white hover:bg-yellow-400 hover:text-[#102f35] rounded-full transition">
                <FaLinkedinIn />
              </a>
              <a href="https://www.youtube.com/@KarolDigital-26" target="_blank" rel="noopener noreferrer"
                 className="p-3 bg-[#102f35] border border-white hover:bg-yellow-400 hover:text-[#102f35] rounded-full transition">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FULL-WIDTH BLACK COPYRIGHT BAR (NO PADDING!) */}
      <div className="w-full bg-black py-4">
        <p className="text-center text-sm text-gray-400">
          © {year} Karol Digital. All rights reserved. Website crafted with ❤️ by Karol Digital Team.
        </p>
      </div>
    </footer>
  );
}
