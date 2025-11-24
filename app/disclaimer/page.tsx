"use client";

import LegalHero from "@/components/LegalHero";

export default function Disclaimer() {
  return (
    <>
      <LegalHero
        title="Disclaimer"
        subtitle="Important information regarding accuracy, reliability and use of our website content."
      />

      <div className="max-w-4xl mx-auto py-24 px-6 text-gray-700">

        <h2 className="text-2xl font-semibold text-[#411b3f] mb-4">
          General Information
        </h2>
        <p className="leading-7 mb-6">
          The information presented on this website is intended for general guidance
          only. We do not guarantee accuracy, completeness or suitability.
        </p>

        <h2 className="text-2xl font-semibold text-[#411b3f] mt-10 mb-4">
          No Professional Advice
        </h2>
        <p className="leading-7 mb-6">
          Nothing published on this website constitutes legal, financial or
          professional advice. You should always seek independent guidance.
        </p>

        <h2 className="text-2xl font-semibold text-[#411b3f] mt-10 mb-4">
          External Links
        </h2>
        <p className="leading-7 mb-6">
          We may include links to third-party websites. Karol Digital is not
          responsible for the content or reliability of external websites.
        </p>

        <h2 className="text-2xl font-semibold text-[#411b3f] mt-10 mb-4">
          Limitation of Responsibility
        </h2>
        <p className="leading-7">
          Karol Digital is not liable for any losses or damages arising from the use
          of our website or any third-party services or information.
        </p>
      </div>
    </>
  );
}
