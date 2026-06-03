"use client";

import { useState, useRef } from "react";
import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";
import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactPage() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [source, setSource] = useState("");
  const [otherSource, setOtherSource] = useState("");

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const onCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!captchaToken) {
      setStatus("Please complete the reCAPTCHA.");
      return;
    }

    if (source === "Other" && !otherSource.trim()) {
      setStatus("Please specify how you heard about us.");
      return;
    }

    setLoading(true);
    setStatus("");

    const form = e.currentTarget;

    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      source: source === "Other" ? otherSource : source,
      captchaToken,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        form.reset();
        setSource("");
        setOtherSource("");
        recaptchaRef.current?.reset();
        setCaptchaToken(null);
      } else {
        const errData = await res.json();
        setStatus(errData.error || "Failed to send message.");
      }
    } catch {
      setStatus("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <FadeIn>
      {/* Added overflow-x-hidden to prevent horizontal scroll wobbling */}
      <main className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
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
            </h1>
            <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto mt-3">
              We are here to help you grow your digital presence. Get in touch today.
            </p>
          </div>
        </motion.section>

        {/* CONTACT SECTION */}
        <FadeIn>
          <section className="py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
              {/* FORM */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 w-full">
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

                  {/* SOURCE FIELD */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">
                      Where did you hear about us?
                    </label>
                    <select
                      required
                      value={source}
                      onChange={(e) => setSource(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-[#102f35] outline-none"
                    >
                      <option value="">Select an option</option>
                      <option value="Online Search">Online / Digital Search</option>
                      <option value="Social Media">Social Media</option>
                      <option value="Referral">Referral / Word of Mouth</option>
                      <option value="Advertising">Advertising</option>
                      <option value="Job Platform">Job Platform / Recruiter</option>
                      <option value="Content">Blog / Email / Press</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {source === "Other" && (
                    <div>
                      <label className="block text-gray-700 font-medium mb-1">
                        Other (please specify)
                      </label>
                      <input
                        type="text"
                        required
                        value={otherSource}
                        onChange={(e) => setOtherSource(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#102f35] outline-none"
                        placeholder="Please specify"
                      />
                    </div>
                  )}

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

                  {/* reCAPTCHA */}
                  <div className="flex justify-start py-2 overflow-hidden">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey="6LdsKYQsAAAAAPaYefX2OaGGADRDRJljpKAKNMk1"
                      onChange={onCaptchaChange}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading || !captchaToken}
                    className="w-full bg-[#102f35] hover:bg-[#411b3f] text-white font-semibold py-3 rounded-lg transition shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>

                  {status && (
                    <p
                      className={`text-sm text-center mt-3 ${
                        status.includes("successfully")
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {status}
                    </p>
                  )}
                </form>
              </div>

              {/* MAP */}
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-[450px] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=..." // Ensure this is a valid embed URL
                  className="w-full h-full border-0"
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