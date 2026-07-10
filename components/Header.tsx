"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  User,
  Layers,
  FileText,
  Phone,
  Tag,
  ChevronDown,
  Scale,
  HardHat,
  Landmark,
  Briefcase,
  Code2,
  Search,
  ArrowRight,
  Home,
  Sparkles,
} from "lucide-react";


export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setOpen(false);
    setMobileServicesOpen(false);
    setMobileIndustriesOpen(false);
  };

  const servicesItems = [
    {
      href: "/services/web-design",
      label: "Web Design",
      icon: <Briefcase size={16} />,
    },
    {
      href: "/services/digital-marketing",
      label: "Digital Marketing",
      icon: <Sparkles size={16} />,
    },
    {
      href: "/services/ai-logo-design",
      label: "AI Logo Design",
      icon: <Code2 size={16} />,
    },
    {
      href: "/services/website-audits",
      label: "Website Audits",
      icon: <Search size={16} />,
    },
  ];

  const industryItems = [
    {
      href: "/industries/financial-services",
      label: "Financial Services",
      icon: <Landmark size={16} />,
    },
    {
      href: "/industries/immigration-services",
      label: "Immigration Lawyers",
      icon: <Scale size={16} />,
    },
    {
      href: "/industries/building-services",
      label: "Construction & Trades",
      icon: <HardHat size={16} />,
    },
  ];

  const menuItems = [
    { href: "/about", label: "About", icon: <User size={18} /> },
    {
      href: "/services",
      label: "Services",
      icon: <Layers size={18} />,
      dropdown: servicesItems,
      type: "services",
    },
    {
      href: "/industries",
      label: "Industries",
      icon: <Layers size={18} />,
      dropdown: industryItems,
      type: "industries",
    },
    { href: "/pricing", label: "Pricing", icon: <Tag size={18} /> },
    { href: "/blog", label: "Blog", icon: <FileText size={18} /> },
    { href: "/contact", label: "Contact", icon: <Phone size={18} /> },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-[#102f35] shadow-md" : "bg-transparent backdrop-blur-md"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.WebP"
            alt="Karol Digital logo"
            width={100}
            height={60}
            priority
            className="h-[60px] w-auto"
          />
          <span className="text-xl md:text-2xl font-semibold text-white">
            Karol <span className="text-brand-gold-soft">Digital</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {menuItems.map((item) => {
            const isServices = item.type === "services";
            const isIndustries = item.type === "industries";
            const dropdownOpen = isServices ? servicesOpen : isIndustries ? industriesOpen : false;

            return (
              <div
                key={item.href}
                className="relative group"
                onMouseEnter={() => {
                  if (isServices) setServicesOpen(true);
                  if (isIndustries) setIndustriesOpen(true);
                }}
                onMouseLeave={() => {
                  if (isServices) setServicesOpen(false);
                  if (isIndustries) setIndustriesOpen(false);
                }}
              >
                {item.dropdown ? (
                  <button
                    type="button"
                    className={`flex items-center gap-1 transition-all duration-300 ${
                      dropdownOpen ? "text-brand-gold-soft" : "text-white hover:text-brand-gold-muted"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 transition-all duration-300 ${
                      pathname === item.href ? "text-brand-gold-soft" : "text-white hover:text-brand-gold-muted"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}

                {item.dropdown && dropdownOpen && (
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 top-full pt-4 w-72"
                    >
                      <div className="bg-[#102f35] border border-white/10 rounded-xl shadow-2xl overflow-hidden p-2 flex flex-col">
                        <div className="px-4 py-3 border-b border-white/10">
                          <p className="text-xs font-bold uppercase tracking-wider text-brand-gold-soft">
                            {item.label}
                          </p>
                          <p className="text-xs text-gray-300 mt-1">
                            {isServices
                              ? "Explore the website services available for your business."
                              : "Find the right industry fit for your business."}
                          </p>
                        </div>

                        <div className="flex flex-col gap-1 pt-2">
                          {item.dropdown.map((sub, index) => (
                            <Link
                              key={`${sub.href}-${index}`}
                              href={sub.href}
                              className="flex items-center gap-3 px-4 py-3 text-white hover:bg-[#411b3f] hover:text-brand-gold-soft rounded-lg transition"
                            >
                              <span className="text-brand-gold-soft">{sub.icon}</span>
                              {sub.label}
                            </Link>
                          ))}
                        </div>

                        <div className="mt-2 pt-2 border-t border-white/10 flex flex-col gap-1">
                          <Link
                            href={item.href}
                            className="flex items-center justify-between w-full px-4 py-3 text-xs font-bold uppercase tracking-wider text-brand-gold-soft hover:bg-white/5 rounded-lg transition group/btn"
                          >
                            <span>
                              {isServices ? "View All Services" : "View All Industries"}
                            </span>
                            <ArrowRight
                              size={14}
                              className="transition-transform group-hover/btn:translate-x-1"
                            />
                          </Link>

                          <Link
                            href="/pricing"
                            className="flex items-center justify-between w-full px-4 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/5 rounded-lg transition group/btn"
                          >
                            <span>
                              {isServices ? "View Pricing" : "Compare Website Packages"}
                            </span>
                            <ArrowRight
                              size={14}
                              className="transition-transform group-hover/btn:translate-x-1"
                            />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>
            );
          })}

          <Link
            href="/book"
            className="btn-primary px-6 py-3"
          >
            Book Consultation
          </Link>
        </div>

        <button
          onClick={() => {
            setOpen(!open);
            if (open) {
              setMobileServicesOpen(false);
              setMobileIndustriesOpen(false);
            }
          }}
          className="md:hidden flex flex-col items-center space-y-1.5"
          aria-label="Toggle Menu"
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

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="md:hidden absolute left-3 right-3 top-[100px] rounded-2xl bg-gradient-to-br from-[#102f35] to-[#411b3f] text-white p-6 shadow-2xl border border-white/10"
          >
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                onClick={closeMobileMenu}
                className={`flex items-center gap-3 text-lg font-semibold ${
                  pathname === "/" ? "text-brand-gold-soft" : "text-white"
                }`}
              >
                <Home size={18} />
                Home
              </Link>

              {menuItems.map((item) => {
                const isServices = item.type === "services";
                const isIndustries = item.type === "industries";
                const mobileOpen = isServices
                  ? mobileServicesOpen
                  : isIndustries
                  ? mobileIndustriesOpen
                  : false;

                return (
                  <div key={item.href}>
                    {item.dropdown ? (
                      <>
                        <button
                          type="button"
                          onClick={() => {
                            if (isServices) setMobileServicesOpen(!mobileServicesOpen);
                            if (isIndustries) setMobileIndustriesOpen(!mobileIndustriesOpen);
                          }}
                          className={`flex w-full items-center justify-between text-lg font-semibold transition ${
                            mobileOpen ? "text-brand-gold-soft" : "text-gray-200"
                          }`}
                        >
                          <span className="flex items-center gap-3">
                            {item.icon}
                            {item.label}
                          </span>
                          <ChevronDown
                            size={18}
                            className={`transition-transform ${mobileOpen ? "rotate-180" : ""}`}
                          />
                        </button>

                        <AnimatePresence>
                          {mobileOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden"
                            >
                              <div className="mt-3 ml-4 flex flex-col space-y-3 border-l border-white/20 pl-4">
                                {item.dropdown.map((sub, index) => (
                                  <Link
                                    key={`${sub.href}-${index}`}
                                    href={sub.href}
                                    onClick={closeMobileMenu}
                                    className={`flex items-center gap-2 text-sm ${
                                      pathname === sub.href
                                        ? "text-brand-gold-soft font-medium"
                                        : "text-gray-300 hover:text-brand-gold-soft"
                                    }`}
                                  >
                                    <span className="text-brand-gold-soft">{sub.icon}</span>
                                    {sub.label}
                                  </Link>
                                ))}

                                <Link
                                  href={item.href}
                                  onClick={closeMobileMenu}
                                  className="pt-1 text-sm font-medium text-brand-gold-soft underline decoration-dotted underline-offset-4"
                                >
                                  {isServices ? "All Services Overview" : "All Industries Overview"}
                                </Link>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={closeMobileMenu}
                        className={`flex items-center gap-3 text-lg font-semibold ${
                          pathname === item.href ? "text-brand-gold-soft" : "text-white"
                        }`}
                      >
                        {item.icon}
                        {item.label}
                      </Link>
                    )}
                  </div>
                );
              })}

              <div className="flex flex-col gap-2 pt-2 border-t border-white/10">
                <Link
                  href="/book"
                  onClick={closeMobileMenu}
                  className="btn-primary py-3 text-center active:scale-95"
                >
                  Schedule Free Consultation
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}