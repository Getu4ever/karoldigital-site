"use client";

import LegalHero from "@/components/LegalHero";

export default function CookiePolicy() {
  return (
    <>
    <h1 className="sr-only">
    Cookie policy explaining how Karol Digital uses cookies on its web design and digital marketing website
  </h1>
      <LegalHero
        title="Cookie Policy"
        subtitle="Find out how Karol Digital uses cookies to enhance your website experience."
      />

      <div className="max-w-4xl mx-auto py-24 px-6 text-gray-700">

        <h2 className="text-2xl font-semibold text-[#411b3f] mb-4">
          What Are Cookies?
        </h2>
        <p className="leading-7 mb-6">
          Cookies are small text files used to store information and enhance the
          functionality, performance and personalisation of websites.
        </p>

        <h2 className="text-2xl font-semibold text-[#411b3f] mt-10 mb-4">
          Types of Cookies We Use
        </h2>
        <ul className="list-disc ml-6 leading-7 mb-6">
          <li><strong>Essential cookies:</strong> Required for website functionality.</li>
          <li><strong>Analytics cookies:</strong> Help us understand user behaviour.</li>
          <li><strong>Marketing cookies:</strong> Used for personalised advertising.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#411b3f] mt-10 mb-4">
          Managing Cookies
        </h2>
        <p className="leading-7 mb-6">
          You may disable cookies via your browser settings. Disabling certain cookie
          categories may affect website performance or features.
        </p>
      </div>
    </>
  );
}
