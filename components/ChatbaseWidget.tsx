"use client";

import Script from "next/script";

const CHATBASE_ID = "cn8XxlevKOTIx0z1Oyy4S";

/**
 * Official Chatbase embed via next/script.
 * Loads immediately on afterInteractive (body is already available),
 * avoiding the window "load" race that breaks App Router embeds.
 */
export default function ChatbaseWidget() {
  return (
    <Script id="chatbase-embed" strategy="afterInteractive">{`
      (function(){
        if(!window.chatbase||window.chatbase("getState")!=="initialized"){
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
        if(document.getElementById("${CHATBASE_ID}")) return;
        var script=document.createElement("script");
        script.src="https://www.chatbase.co/embed.min.js";
        script.id="${CHATBASE_ID}";
        script.domain="www.chatbase.co";
        document.body.appendChild(script);
      })();
    `}</Script>
  );
}
