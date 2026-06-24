"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Web Design",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Thank you! Your request has been received.");
        setFormData({ name: "", email: "", service: "Web Design", message: "" });
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Error connecting to server. Please try again.");
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative h-[60vh] flex items-center justify-center text-center text-white"
        >
          <Image
            src="/hero-page-banner.jpg"
            alt="Contact Us"
            fill
            priority
            className="object-cover brightness-[0.45]"
          />
          <div className="relative z-10 px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold">
              Let’s Start Your <span className="text-yellow-400">Growth Blueprint</span>
            </h1>
            <p className="text-lg text-gray-100 max-w-xl mx-auto mt-4">
              We are ready to architect your digital success. Send us a message and let’s begin.
            </p>
          </div>
        </motion.section>

        <FadeIn>
          <div className="-mt-20 relative z-20 max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100 mb-20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-[#102f35] mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#102f35] outline-none transition"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#102f35] mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#102f35] outline-none transition"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#102f35] mb-2">Service of Interest</label>
                <select
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#102f35] outline-none transition"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  <option>Web Design</option>
                  <option>Next.js Development</option>
                  <option>Website Audit</option>
                  <option>Digital Marketing</option>
                  <option>AI Logo Design</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#102f35] mb-2">Project Details</label>
                <textarea
                  rows={4}
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#102f35] outline-none transition"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#102f35] text-white py-4 rounded-full font-bold hover:bg-[#1a4a54] transition shadow-lg active:scale-95"
              >
                Submit Request
              </button>
            </form>

            {status && (
              <div className="mt-6 p-4 bg-[#102f35]/5 text-[#102f35] text-center rounded-lg font-semibold">
                {status}
              </div>
            )}
          </div>
        </FadeIn>
      </main>
      <Footer />
    </>
  );
}