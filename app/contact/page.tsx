"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactPage() {

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setLoading(true);
  setStatus("");

  const form = e.currentTarget;

  const formData = {
    name: (form.elements.namedItem("name") as HTMLInputElement).value,
    email: (form.elements.namedItem("email") as HTMLInputElement).value,
    phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
    message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
  };

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("Message sent successfully!");
      form.reset();
    } else {
      setStatus("Failed to send message.");
    }
  } catch {
    setStatus("Something went wrong.");
  }

  setLoading(false);
};

  return (
    <FadeIn>
      <main className="min-h-screen bg-white text-gray-900">

        {/* HERO */}
        <motion.section
          className="relative min-h-[60vh] flex items-center justify-center text-center text-white pt-8 md:pt-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/hero-page-banner.jpg"
            alt="Contact Us"
            fill
            priority
            className="object-cover brightness-[0.45]"
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 px-6">

            <h1 className="text-5xl md:text-6xl font-extrabold">
              <span className="text-white">Contact </span>
              <span className="text-yellow-400">Us</span>

              <span className="sr-only">
                Contact Karol Digital for affordable web design and digital marketing support in the UK
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto mt-3">
              We are here to help you grow your digital presence. Get in Touch today.
            </p>

          </div>
        </motion.section>

        {/* CONTACT SECTION */}
        <FadeIn>
          <section className="py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

              {/* FORM */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">

                <h2 className="text-3xl font-bold text-[#102f35] mb-6">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">

                  <div>
                    <label className="block text-gray-700 font-medium mb-1">
                      Full Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#102f35] outline-none"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-1">
                      Email Address
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#102f35] outline-none"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-1">
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#102f35] outline-none"
                      placeholder="Optional"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#102f35] outline-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#102f35] hover:bg-[#411b3f] text-white font-semibold py-3 rounded-lg transition shadow-md"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>

                  {status && (
                    <p className="text-sm text-center mt-3 text-green-600">
                      {status}
                    </p>
                  )}

                </form>
              </div>

              {/* MAP */}
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <iframe
                  src="https://www.google.com/maps?q=SW20+8DN&output=embed"
                  className="w-full h-full min-h-[450px] border-0"
                  loading="lazy"
                ></iframe>
              </div>

            </div>
          </section>
        </FadeIn>

      </main>
    </FadeIn>
  );
}