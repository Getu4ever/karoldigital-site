"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Home, User, Layers, FileText, Phone, Tag } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { href: "/", label: "Home", icon: <Home size={18} /> },
    { href: "/about", label: "About", icon: <User size={18} /> },
    { href: "/services", label: "Services", icon: <Layers size={18} /> },
    { href: "/pricing", label: "Pricing", icon: <Tag size={18} /> }, // ⭐ NEW ITEM
    { href: "/blog", label: "Blog", icon: <FileText size={18} /> },
    { href: "/contact", label: "Contact", icon: <Phone size={18} /> },
  ];

  const itemVariants = {
    hidden: { opacity: 0, x: -12 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.07 },
    }),
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-black shadow-md" : "bg-transparent backdrop-blur-md"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-center">
          <img src="/logo.png" className="h-[60px] w-auto mb-1" alt="" />
          <span className="text-xl md:text-2xl font-semibold text-white">
            Karol <span className="text-yellow-400">Digital</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {menuItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`relative group transition-all duration-300 ${
                pathname === href
                  ? "text-yellow-400"
                  : "text-white hover:text-yellow-300"
              }`}
            >
              {label}
              <span
                className={`absolute left-0 -bottom-[6px] h-[4px] bg-yellow-400 rounded-full transition-all duration-300 ${
                  pathname === href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col items-center space-y-1.5"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${
              open ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${
              open ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -15, height: 0 }}
            transition={{ duration: 0.35 }}
            className="
              md:hidden absolute left-3 right-3 top-[115px]
              rounded-2xl overflow-hidden shadow-2xl z-50
              bg-gradient-to-br from-[#102f35] to-[#411b3f]
              backdrop-blur-xl bg-opacity-80 border border-white/10
            "
          >
            {/* Glowing Divider */}
            <div className="h-[3px] w-full bg-gradient-to-r from-yellow-400/40 via-white/30 to-yellow-400/40" />

            <nav className="flex flex-col px-6 py-5 space-y-4 text-base font-medium text-white">
              {menuItems.map(({ href, label, icon }, i) => (
                <motion.div
                  key={href}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                >
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 py-1 hover:text-yellow-300 transition"
                  >
                    <div className="opacity-80">{icon}</div>
                    {label}
                  </Link>
                </motion.div>
              ))}

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="
                    mt-4 block text-center px-6 py-3 rounded-full
                    bg-white text-[#102f35] font-semibold
                    hover:bg-[#0c2428] hover:text-white transition shadow-lg
                  "
                >
                  Let’s Get Started
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
