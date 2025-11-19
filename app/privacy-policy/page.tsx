"use client";

import SEO from "@/components/SEO";
import LegalHero from "@/components/LegalHero";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy — Karol Digital"
        description="Learn how Karol Digital collects, stores and protects your personal information. GDPR-compliant privacy policy for all website visitors and clients."
        url="https://www.karoldigital.co.uk/privacy-policy"
        image="/seo-cover.jpg"
      />

      <LegalHero
        title="Privacy Policy"
        subtitle="How Karol Digital collects, protects, and uses your personal information."
      />

      <div className="max-w-4xl mx-auto py-24 px-6 text-gray-700">

        <h2 className="text-2xl font-semibold text-[#411b3f] mb-4">Introduction</h2>
        <p className="leading-7 mb-6">
          This Privacy Policy explains how Karol Digital (“we”, “our”, “us”) collects,
          uses and protects your personal information when you visit our website or use
          our services.
        </p>

        <h2 className="text-2xl font-semibold text-[#411b3f] mt-10 mb-4">
          Information We Collect
        </h2>
        <p className="leading-7 mb-6">
          We may collect personal information such as your name, email address, phone
          number, business details and enquiry form data when you submit information
          through our website.
        </p>

        <h2 className="text-2xl font-semibold text-[#411b3f] mt-10 mb-4">
          How We Use Your Information
        </h2>
        <p className="leading-7 mb-6">
          We use your information to provide services, communicate with you, process
          enquiries, and improve the overall user experience of our website.
        </p>

        <h2 className="text-2xl font-semibold text-[#411b3f] mt-10 mb-4">
          Cookies & Analytics
        </h2>
        <p className="leading-7 mb-6">
          Cookies help us analyse website behaviour and improve performance. You may
          disable cookies in your browser settings at any time.
        </p>

        <h2 className="text-2xl font-semibold text-[#411b3f] mt-10 mb-4">
          Data Sharing
        </h2>
        <p className="leading-7 mb-6">
          We do not sell personal data. Information may be shared with trusted
          providers only when necessary to operate our website or provide services.
        </p>

        <h2 className="text-2xl font-semibold text-[#411b3f] mt-10 mb-4">
          Your Rights
        </h2>
        <p className="leading-7 mb-6">
          You have the right to request access, correction or deletion of your
          personal information in accordance with GDPR regulations.
        </p>

        <h2 className="text-2xl font-semibold text-[#411b3f] mt-10 mb-4">
          Contact
        </h2>
        <p className="leading-7">
          Email: info@karoldigital.co.uk <br />
          Phone: 07565472445 <br />
          Location: London, United Kingdom
        </p>
      </div>
    </>
  );
}
