// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimateWrapper from "@/components/AnimateWrapper";
import { Metadata, Viewport } from "next";

/* Mobile viewport and theme styling must be exported separately in App Router */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#102f35",
};

// Refined Metadata: Optimized to eliminate keyword conflict with child routes
export const metadata: Metadata = {
  title: "Karol Digital — High-Performance Web Design & Branding",
  description:
    "We build conversion-focused digital infrastructure and professional identities that help UK businesses outrank the competition. Get a free quote today!",
  metadataBase: new URL("https://www.karoldigital.co.uk"),
  alternates: {
    canonical: "/",
  },
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
        alt: "Karol Digital - High-Performance Web Design & Branding",
      },
    ],
  },
  icons: {
    apple: "/apple-touch-icon.png",
  },
};

// JSON-LD: ProfessionalService with local parameter tracking configurations
const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Karol Digital",
  url: "https://www.karoldigital.co.uk",
  image: "https://www.karoldigital.co.uk/seo-cover.jpg",
  logo: "https://www.karoldigital.co.uk/logo.png",
  priceRange: "££",
  telephone: "07565472445", // Matches your exact commercial phone registry entry
  address: {
    "@type": "PostalAddress",
    addressLocality: "London",
    addressCountry: "GB",
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
    <html lang="en GB">
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
