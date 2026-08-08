"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";
import { trackLead } from "@/lib/analytics";
import { RECAPTCHA_SITE_KEY } from "@/lib/recaptcha";

function ContactFormSection() {
  const searchParams = useSearchParams();
  const isAuditIntent = searchParams.get("intent") === "audit";

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [source, setSource] = useState("");
  const [otherSource, setOtherSource] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [messagePlaceholder, setMessagePlaceholder] = useState(
    "Tell us about your goals for a custom website, e-commerce store, or mobile app..."
  );

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  useEffect(() => {
    if (isAuditIntent) {
      setMessagePlaceholder(
        "Share your website URL and what you want more of (calls, form fills, quote requests) — we will outline a high-performance improvement plan..."
      );
    }
  }, [isAuditIntent]);

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
    const service = (form.elements.namedItem("service") as HTMLSelectElement).value;
    const rawMessage = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;
    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: `Service of interest: ${service}\n\n${rawMessage}`,
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
        trackLead(isAuditIntent ? "audit" : "contact");
        setIsSent(true);
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
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
      {isSent ? (
        <div className="text-center py-20">
          <h3 className="text-2xl font-bold text-[#102f35]">Message Received!</h3>
          <p className="text-gray-600 mt-4">
            Thank you for reaching out. We have received your inquiry and will review
            your goals for a custom high-performance website, e-commerce platform, or
            mobile application. Expect a response from our team within 24 hours.
          </p>
          <Link
            href="/book"
            className="inline-block mt-8 bg-brand-gold text-[#102f35] px-8 py-3 rounded-full font-semibold hover:bg-brand-gold-deep transition"
          >
            Prefer to book a call instead?
          </Link>
        </div>
      ) : (
        <>
          <p className="text-xs font-bold text-[#411b3f] mb-2 uppercase tracking-wide">
            {isAuditIntent
              ? "Website performance & growth audit enquiry"
              : "Bespoke strategies. High-quality engineering outcomes."}
          </p>
          <h2 className="text-3xl font-bold text-[#102f35] mb-6">
            {isAuditIntent ? "Request Your Audit" : "Start Your Custom Project Inquiry"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="contact-name" className="block text-gray-700 font-medium mb-1">
                Full Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#102f35] outline-none"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-gray-700 font-medium mb-1">
                Email Address
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#102f35] outline-none"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="contact-phone" className="block text-gray-700 font-medium mb-1">
                Phone Number (Optional)
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#102f35] outline-none"
                placeholder="Enter your phone"
              />
            </div>
            <div>
              <label htmlFor="contact-service" className="block text-gray-700 font-medium mb-1">
                Service of Interest
              </label>
              <select
                id="contact-service"
                name="service"
                required
                defaultValue={
                  isAuditIntent ? "Website Performance & Growth Audit" : ""
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-[#102f35] outline-none"
              >
                <option value="">Select a service</option>
                <option value="High-Performance Website Development">
                  High-Performance Website Development
                </option>
                <option value="Conversion-Focused E-Commerce Store">
                  Conversion-Focused E-Commerce Store
                </option>
                <option value="Custom Mobile Application (iOS & Android)">
                  Custom Mobile Application (iOS &amp; Android)
                </option>
                <option value="Website Performance & Growth Audit">
                  Website Performance &amp; Growth Audit
                </option>
              </select>
            </div>
            <div>
              <label htmlFor="contact-source" className="block text-gray-700 font-medium mb-1">
                How did you find us?
              </label>
              <select
                id="contact-source"
                required
                value={source}
                onChange={(e) => setSource(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-[#102f35] outline-none"
              >
                <option value="">Select an option</option>
                <option value="Online Search">Online / Digital Search</option>
                <option value="Social Media">Social Media</option>
                <option value="Referral">Referral / Word of Mouth</option>
                <option value="Other">Other</option>
              </select>
            </div>
            {source === "Other" && (
              <input
                type="text"
                required
                value={otherSource}
                onChange={(e) => setOtherSource(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                placeholder="Please specify"
              />
            )}
            <div>
              <label htmlFor="contact-message" className="block text-gray-700 font-medium mb-1">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#102f35] outline-none"
                placeholder={messagePlaceholder}
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
              className="w-full bg-[#102f35] hover:bg-[#411b3f] text-white font-bold py-4 rounded-lg transition shadow-md disabled:opacity-60"
            >
              {loading
                ? "Sending..."
                : isAuditIntent
                  ? "Request My Performance Audit"
                  : "Request a Custom Project Quote"}
            </button>
            {status && (
              <p className="text-sm text-red-600 text-center" role="alert">
                {status}
              </p>
            )}
            <p className="text-xs text-gray-500 text-center">
              Join growing UK businesses investing in custom high-performance
              strategies and tailored web and app engineering. Typical response within
              24 hours on UK business days.
            </p>
          </form>
        </>
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <FadeIn>
      <main className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
        <motion.section
          className="relative min-h-[50vh] flex items-center justify-center text-center text-white pt-28 pb-12 md:pt-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/heroes/contact.png"
            alt="Contact Karol Digital"
            fill
            priority
            className="object-cover brightness-[0.45]"
          />
          <div className="relative z-10 px-6">
            <h1 className="text-5xl md:text-6xl font-bold">
              Let&apos;s Build Your{" "}
              <span className="text-brand-gold-muted">High-Performance Digital Solution</span>
            </h1>
            <p className="text-lg text-gray-100 max-w-xl mx-auto mt-4">
              Get in touch to discuss a modern custom website, e-commerce engine, or
              bespoke mobile application designed to drive growth—with clear advice and
              high-quality engineering outcomes.
            </p>
          </div>
        </motion.section>

        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
            <Suspense
              fallback={
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 text-center text-gray-600">
                  Loading form...
                </div>
              }
            >
              <ContactFormSection />
            </Suspense>
            <div className="flex flex-col gap-6">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <p className="text-xs font-bold text-[#411b3f] mb-2 uppercase tracking-wide">
                  Contact
                </p>
                <h2 className="text-2xl font-bold text-[#102f35] mb-3">
                  Email us
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Prefer email? Reach the team directly and we&apos;ll get back
                  to you on UK business days.
                </p>
                <a
                  href="mailto:info@karoldigital.co.uk"
                  className="block font-medium text-[#102f35] hover:text-[#411b3f] transition"
                >
                  info@karoldigital.co.uk
                </a>
                <p className="mt-4 text-sm text-gray-500">
                  London, United Kingdom
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex-1">
                <iframe
                  title="Karol Digital — London, United Kingdom"
                  src="https://www.google.com/maps?q=London,+United+Kingdom&z=10&output=embed"
                  className="w-full h-full min-h-[380px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </FadeIn>
  );
}
