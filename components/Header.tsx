"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-black shadow-md" : "bg-transparent backdrop-blur-md"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + Brand below */}
        <Link href="/" className="flex flex-col items-center group">
          <img
            src="/logo.png"
            alt="Karol Digital Logo"
            className="h-[60px] w-auto mb-1"
          />
          <span className="text-xl md:text-2xl font-semibold text-white tracking-wide">
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
                className={`absolute left-0 -bottom-[6px] h-[4px] bg-yellow-400 rounded-full transition-all duration-300 ease-in-out ${
                  pathname === href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden flex flex-col justify-center items-center space-y-1.5"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
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

        {/* Mobile Menu */}
        {open && (
          <div className="absolute right-6 top-16 bg-white border border-gray-200 rounded-lg shadow-lg flex flex-col text-sm font-medium z-50">
            {menuItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="px-6 py-2 hover:bg-gray-50 border-b border-gray-100 text-gray-900"
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
