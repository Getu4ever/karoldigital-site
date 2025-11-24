import "./globals.css";
import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimateWrapper from "@/components/AnimateWrapper";

// ❗ Minimal fallback metadata (allows pages to override SEO)
export const metadata = {
  title: "Karol Digital",
  description: "Affordable web design & digital services.",
};

// JSON-LD Schema
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

        {/* Chatbase Script */}
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
