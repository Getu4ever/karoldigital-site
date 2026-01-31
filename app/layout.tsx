import "./globals.css";
import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimateWrapper from "@/components/AnimateWrapper";

// ❗ Updated SEO-optimised metadata (perfect length)
export const metadata = {
  title: "Karol Digital – Affordable Web Design for Small Businesses",
  description:
    "Karol Digital - Affordable web design, SEO-ready websites and digital marketing for UK small businesses. Professional, modern and built to help your business grow online.",
};

// JSON-LD: LocalBusiness (your existing schema)
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Karol Digital",
  url: "https://www.karoldigital.co.uk",
  image: "https://www.karoldigital.co.uk/seo-cover.jpg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "London",
    postalCode: "SW20 8DN",
    addressCountry: "GB",
  },
  description:
    "Karol Digital provides affordable web design, AI-ready websites, social media setup and digital marketing for small businesses in the UK.",
};

// ✅ NEW: Organization Schema
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Karol Digital",
  url: "https://www.karoldigital.co.uk",
  logo: "https://www.karoldigital.co.uk/logo.png", // update if needed
  sameAs: [
    "https://www.facebook.com/karoldigital",
    "https://www.linkedin.com/company/karoldigital",
    "https://x.com/karoldigital",
  ],
};

// ✅ NEW: WebSite Schema + SearchAction (helps Google generate sitelinks)
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Karol Digital",
  url: "https://www.karoldigital.co.uk",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.karoldigital.co.uk/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />

        {/* ✅ Added Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />

        {/* ✅ Added WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />

        {/* Chatbase Script (unchanged) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                if(!window.chatbase || window.chatbase("getState")!=="initialized"){
                  window.chatbase=(...arguments)=>{
                    if(!window.chatbase.q){window.chatbase.q=[]}
                    window.chatbase.q.push(arguments)
                  };
                  window.chatbase=new Proxy(window.chatbase,{
                    get(target,prop){
                      if(prop==="q"){return target.q}
                      return(...args)=>target(prop,...args)
                    }
                  })
                }

                const onLoad=function(){
                  const script=document.createElement("script");
                  script.src="https://www.chatbase.co/embed.min.js";
                  script.id="cn8XxlevKOTIx0z1Oyy4S";
                  script.domain="www.chatbase.co";
                  document.body.appendChild(script)
                };
                
                if(document.readyState==="complete"){onLoad()}
                else{window.addEventListener("load",onLoad)}
              })();
            `,
          }}
        />
      </head>

      <body className="relative min-h-screen flex flex-col bg-white text-gray-900">
        <Header />

        <AnimateWrapper>{children}</AnimateWrapper>

        <Footer />
      </body>
    </html>
  );
}
