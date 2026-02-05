"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  Home,
  User,
  Layers,
  FileText,
  Phone,
  Tag,
  ChevronDown,
  Scale,
  HardHat,
  Utensils,
  Landmark,
  Newspaper,
} from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const serviceItems = [
    { href: "/services/immigration-services", label: "Immigration Firms", icon: <Scale size={16} /> },
    { href: "/services/building-services", label: "Building & Trades", icon: <HardHat size={16} /> },
    { href: "/services/catering-services", label: "Catering & Food", icon: <Utensils size={16} /> },
    { href: "/services/financial-services", label: "Financial Services", icon: <Landmark size={16} /> },
  ];

  const menuItems = [
    { href: "/", label: "Home", icon: <Home size={18} /> },
    { href: "/about", label: "About", icon: <User size={18} /> },
    {
      href: "/services",
      label: "Services",
      icon: <Layers size={18} />,
      dropdown: serviceItems,
    },
    { href: "/pricing", label: "Pricing", icon: <Tag size={18} /> },
    { href: "/blog", label: "Blog", icon: <FileText size={18} /> },
    { href: "/news", label: "News", icon: <Newspaper size={18} /> },
    { href: "/contact", label: "Contact", icon: <Phone size={18} /> },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-black shadow-md" : "bg-transparent backdrop-blur-md"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" className="h-[60px] w-auto" alt="Karol Digital" />
          <span className="text-xl md:text-2xl font-semibold text-white">
            Karol <span className="text-yellow-400">Digital</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {menuItems.map((item) => (
            <div
              key={item.href}
              className="relative group"
              onMouseEnter={() => item.dropdown && setServicesOpen(true)}
              onMouseLeave={() => item.dropdown && setServicesOpen(false)}
            >
              {item.dropdown ? (
                <button
                  type="button"
                  className={`flex items-center gap-1 transition-all duration-300 ${
                    servicesOpen ? "text-yellow-400" : "text-white hover:text-yellow-300"
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
              ) : (
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 transition-all duration-300 ${
                    pathname === item.href ? "text-yellow-400" : "text-white hover:text-yellow-300"
                  }`}
                >
                  {item.label}
                </Link>
              )}

              {/* Desktop Dropdown */}
              {item.dropdown && (
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 top-full pt-4 w-64"
                    >
                      <div className="bg-[#102f35] border border-white/10 rounded-xl shadow-2xl overflow-hidden p-2">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="flex items-center gap-3 px-4 py-3 text-white hover:bg-[#411b3f] hover:text-yellow-400 rounded-lg transition"
                          >
                            <span className="text-yellow-400">{sub.icon}</span>
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col items-center space-y-1.5"
        >
          <span className={`block h-0.5 w-6 bg-white transition-transform ${open ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-transform ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div className="md:hidden absolute left-3 right-3 top-[100px] rounded-2xl bg-gradient-to-br from-[#102f35] to-[#411b3f] text-white p-6 shadow-2xl border border-white/10">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <div key={item.href}>
                  {item.dropdown ? (
                    <div className="flex items-center gap-3 text-lg font-semibold">
                      {item.label}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 text-lg font-semibold"
                    >
                      {item.label}
                    </Link>
                  )}

                  {item.dropdown && (
                    <div className="mt-2 ml-4 flex flex-col space-y-3 border-l border-white/20 pl-4">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setOpen(false)}
                          className="text-sm text-gray-300 hover:text-yellow-400"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="bg-white text-[#102f35] py-3 rounded-full text-center font-bold"
              >
                Let's Get Started
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
