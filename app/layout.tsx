import "./globals.css";
import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimateWrapper from "@/components/AnimateWrapper";
import { Metadata } from "next";

// ❗ Refined Metadata: Adding mobile optimization and standardized theme colors
export const metadata: Metadata = {
  title: "Karol Digital | Affordable Web Design for UK Small Business",
  description:
    "Karol Digital provides professional web design and SEO services for UK small businesses. Modern websites built to grow your brand. Get a free quote today!",
  metadataBase: new URL("https://www.karoldigital.co.uk"),
  alternates: {
    canonical: "/",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#102f35",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.karoldigital.co.uk",
    siteName: "Karol Digital",
    images: [
      {
        url: "/seo-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Karol Digital - Web Design Services",
      },
    ],
  },
};

// JSON-LD: ProfessionalService with Opening Hours (Vital for Local SEO)
const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Karol Digital",
  url: "https://www.karoldigital.co.uk",
  image: "https://www.karoldigital.co.uk/seo-cover.jpg",
  logo: "https://www.karoldigital.co.uk/logo.png",
  priceRange: "££",
  telephone: "+447432241315", // Replace with your actual business number if different
  address: {
    "@type": "PostalAddress",
    addressLocality: "London",
    postalCode: "SW20 8DN",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.4093,
    longitude: -0.2104,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  description:
    "Affordable web design and digital marketing agency specializing in bespoke websites for small businesses across the UK.",
  sameAs: [
    "https://www.facebook.com/karoldigital",
    "https://www.linkedin.com/company/karoldigital",
    "https://x.com/karoldigital",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Karol Digital",
  url: "https://www.karoldigital.co.uk",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />

        {/* Chatbase Script Integration */}
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