import LegalHero from "@/components/LegalHero";

export default function TermsOfService() {
  return (
    <>
      <LegalHero
        title="Terms of Service"
        subtitle="Please review the conditions that apply when using Karol Digital’s website and services."
      />

      <div className="max-w-4xl mx-auto py-24 px-6 text-gray-700">

        <h2 className="text-2xl font-semibold text-[#411b3f] mb-4">
          Agreement
        </h2>
        <p className="leading-7 mb-6">
          By accessing or using our website, you agree to comply with these Terms.
          If you do not agree, you must discontinue use immediately.
        </p>

        <h2 className="text-2xl font-semibold text-[#411b3f] mt-10 mb-4">
          Use of Services
        </h2>
        <p className="leading-7 mb-6">
          You may not misuse our services, engage in harmful activity, or attempt
          to copy or distribute our intellectual property without permission.
        </p>

        <h2 className="text-2xl font-semibold text-[#411b3f] mt-10 mb-4">
          Payments & Billing
        </h2>
        <p className="leading-7 mb-6">
          All payments must be completed through authorised channels. Work begins
          only after payment confirmation, unless otherwise agreed in writing.
        </p>

        <h2 className="text-2xl font-semibold text-[#411b3f] mt-10 mb-4">
          Intellectual Property
        </h2>
        <p className="leading-7 mb-6">
          All designs, content, graphics and digital materials created by Karol
          Digital remain our intellectual property unless a transfer agreement is made.
        </p>

        <h2 className="text-2xl font-semibold text-[#411b3f] mt-10 mb-4">
          Limitation of Liability
        </h2>
        <p className="leading-7 mb-6">
          Karol Digital is not liable for any damages arising from misuse of our
          services, third-party issues, hosting problems or website downtime.
        </p>
      </div>
    </>
  );
}
