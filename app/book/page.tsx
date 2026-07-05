"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";
import { trackLead } from "@/lib/analytics";
import {
  BOOK_SERVICE_OPTIONS,
  normalizeBookService,
  RECAPTCHA_SITE_KEY,
} from "@/lib/recaptcha";

function BookingForm() {
  const searchParams = useSearchParams();
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Web Design",
    message: "",
  });
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const service = searchParams.get("service");
    if (service) {
      setFormData((prev) => ({ ...prev, service: normalizeBookService(service) }));
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaToken) {
      setStatus("Please complete the reCAPTCHA.");
      return;
    }

    setLoading(true);
    setStatus("Sending...");

    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, captchaToken }),
      });

      if (response.ok) {
        const isAudit = formData.service === "Website Audit";
        trackLead(isAudit ? "audit" : "consultation");
        setStatus("Thank you! Your request has been received. We will respond within 24 hours.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: normalizeBookService(searchParams.get("service")),
          message: "",
        });
        recaptchaRef.current?.reset();
        setCaptchaToken(null);
      } else {
        const errData = await response.json();
        setStatus(errData.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("Error connecting to server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="-mt-20 relative z-20 max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100 mb-20">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="book-name" className="block text-sm font-bold text-[#102f35] mb-2">
            Full Name
          </label>
          <input
            id="book-name"
            type="text"
            className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#102f35] outline-none transition"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>

        <div>
          <label htmlFor="book-email" className="block text-sm font-bold text-[#102f35] mb-2">
            Email Address
          </label>
          <input
            id="book-email"
            type="email"
            className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#102f35] outline-none transition"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>

        <div>
          <label htmlFor="book-phone" className="block text-sm font-bold text-[#102f35] mb-2">
            Phone Number
          </label>
          <input
            id="book-phone"
            type="tel"
            className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#102f35] outline-none transition"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="Optional but recommended for a faster response"
          />
        </div>

        <div>
          <label htmlFor="book-service" className="block text-sm font-bold text-[#102f35] mb-2">
            Service of Interest
          </label>
          <select
            id="book-service"
            className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#102f35] outline-none transition"
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          >
            {BOOK_SERVICE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="book-message" className="block text-sm font-bold text-[#102f35] mb-2">
            Project Details
          </label>
          <textarea
            id="book-message"
            rows={4}
            className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#102f35] outline-none transition"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Tell us about your business, website URL, and what you want more of (calls, form fills, quote requests)..."
          />
        </div>

        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={RECAPTCHA_SITE_KEY}
          onChange={setCaptchaToken}
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#102f35] text-white py-4 rounded-full font-bold hover:bg-[#1a4a54] transition shadow-lg active:scale-95 disabled:opacity-60"
        >
          {loading ? "Sending..." : "Book My Free Consultation"}
        </button>

        <p className="text-xs text-gray-500 text-center">
          Typical response within 24 hours on UK business days. No pressure to commit.
        </p>
      </form>

      {status && (
        <div
          className="mt-6 p-4 bg-[#102f35]/5 text-[#102f35] text-center rounded-lg font-semibold"
          role="status"
        >
          {status}
        </div>
      )}
    </div>
  );
}

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[60vh] flex items-center justify-center text-center text-white"
      >
        <Image
          src="/hero-page-banner.jpg"
          alt="Book a free website consultation with Karol Digital"
          fill
          priority
          className="object-cover brightness-[0.45]"
        />
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold">
            Book a Free <span className="text-yellow-400">Website Consultation</span>
          </h1>
          <p className="text-lg text-gray-100 max-w-xl mx-auto mt-4">
            Tell us about your business. We will review your goals and recommend the best next
            step — new build, audit, or improvement plan.
          </p>
        </div>
      </motion.section>

      <FadeIn>
        <Suspense
          fallback={
            <div className="-mt-20 relative z-20 max-w-2xl mx-auto bg-white p-12 rounded-3xl shadow-2xl border border-gray-100 mb-20 text-center text-gray-600">
              Loading booking form...
            </div>
          }
        >
          <BookingForm />
        </Suspense>
      </FadeIn>
    </main>
  );
}
