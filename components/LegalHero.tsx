"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface LegalHeroProps {
  title: string;
  subtitle: string;
}

export default function LegalHero({ title, subtitle }: LegalHeroProps) {
  return (
    <motion.section
      className="relative min-h-[55vh] flex items-center justify-center text-center text-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Background Image */}
      <Image
        src="/hero-page-banner.jpg"
        alt={title}
        fill
        priority
        className="object-cover brightness-[0.45]"
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 px-6 pt-12 md:pt-24">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          {title}
        </h1>

        <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
    </motion.section>
  );
}
