/**
 * Stage premium blog rewrites as Sanity drafts.
 * Preserves published _id, slug, author, likes, image assets.
 * Run: node --env-file=.env.local scripts/stage-premium-blog-drafts.mjs
 */
import { createClient } from "@sanity/client";
import { randomBytes } from "crypto";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
});

function key() {
  return randomBytes(6).toString("hex");
}

function span(text, marks = []) {
  return { _type: "span", _key: key(), marks, text };
}

function p(text, style = "normal") {
  return {
    _type: "block",
    _key: key(),
    style,
    markDefs: [],
    children: [span(text)],
  };
}

function h2(text) {
  return p(text, "h2");
}

function h3(text) {
  return p(text, "h3");
}

function bullet(text) {
  return {
    _type: "block",
    _key: key(),
    style: "normal",
    listItem: "bullet",
    level: 1,
    markDefs: [],
    children: [span(text)],
  };
}

function bodyFromSections(sections) {
  const blocks = [];
  for (const section of sections) {
    if (section.h2) blocks.push(h2(section.h2));
    if (section.h3) blocks.push(h3(section.h3));
    if (section.paras) {
      for (const para of section.paras) blocks.push(p(para));
    }
    if (section.bullets) {
      for (const item of section.bullets) blocks.push(bullet(item));
    }
  }
  return blocks;
}

/** @type {Record<string, object>} */
const rewrites = {
  "diy-vs-professional-website-design-which-is-right-for-your-business-in-2025": {
    title:
      "Why Unstable Website Templates and Plugins Are Costing Your Business Conversions (And the Custom Code Alternative)",
    subtitle:
      "Template platforms and plugin stacks quietly kill speed, security, and enquiries. Here is why ambitious small businesses are moving to 100% custom-built digital systems.",
    seoTitle:
      "Unstable Templates vs Custom Code | High-Performance Web Development",
    seoDescription:
      "Discover why template builders and fragile plugins cost conversions — and how bespoke, high-performance custom web development protects growth for UK small businesses.",
    seoKeywords: [
      "High-Performance Web Development",
      "Custom Code Alternative",
      "Conversion Optimization",
      "Bespoke Mobile Apps",
      "Next.js Engineering",
      "template bloat",
      "custom websites UK",
    ],
    mainImageAlt:
      "Custom high-performance website engineering versus unstable template platforms for UK small businesses",
    mobileFocus: false,
    sections: [
      {
        paras: [
          "Many small businesses start with a drag-and-drop template because it feels fast and inexpensive. The hidden cost shows up later: slow pages, broken plugins after updates, weak security, and visitors who bounce before they enquire.",
          "Karol Digital partners with ambitious small businesses as an engineering partner — building modern, fast, high-quality websites and applications from scratch, without template bloat.",
        ],
      },
      {
        h2: "How templates quietly drain conversions",
        bullets: [
          "Heavy themes and plugins slow load times and push customers away",
          "Third-party add-ons conflict and break during routine updates",
          "Generic layouts make it harder to present a premium, trustworthy brand",
          "Enquiry journeys are bolted on instead of designed around how you sell",
        ],
      },
      {
        h2: "The custom code alternative",
        paras: [
          "Custom-built systems are engineered for your workflows: clearer messaging, lightning-fast performance, rock-solid security, and conversion-focused journeys from first visit to qualified enquiry.",
          "When you are ready to grow further, the same modern foundation can power e-commerce modules and custom mobile applications that share one unified database with your website — so product, booking, and customer data stay in sync.",
        ],
      },
      {
        h2: "What to do next",
        paras: [
          "If your current site feels fragile, slow, or stuck in a template box, start with a Website Performance & Growth Audit — then plan a high-performance custom rebuild that protects long-term business value.",
        ],
      },
    ],
  },

  "how-much-does-a-professional-website-cost-uk-small-business-2026": {
    title:
      "Investing in High-Performance Digital Infrastructure: A Small Business Guide to Custom Web Assets",
    subtitle:
      "Stop thinking in cheap packages. Learn how UK small businesses should invest in custom websites, conversion-focused stores, and connected mobile apps that deliver lasting value.",
    seoTitle:
      "Custom Web Assets Investment Guide | High-Performance Web Development",
    seoDescription:
      "A practical guide for UK small businesses investing in high-performance digital infrastructure — custom websites, e-commerce platforms, and bespoke mobile apps.",
    seoKeywords: [
      "High-Performance Web Development",
      "Custom Web Assets",
      "Bespoke Mobile Apps",
      "Conversion Optimization",
      "Next.js Engineering",
      "digital infrastructure UK",
      "custom e-commerce",
    ],
    mainImageAlt:
      "Small business leaders reviewing investment in custom high-performance web and app infrastructure",
    mobileFocus: false,
    sections: [
      {
        paras: [
          "Asking “what is the cheapest website?” usually leads to template platforms that limit growth. A better question for ambitious small businesses is: what digital infrastructure will win trust, convert visitors, and scale with us?",
          "High-performance custom web assets are an investment in speed, security, and conversion — not a disposable brochure.",
        ],
      },
      {
        h2: "What you are really investing in",
        bullets: [
          "100% custom-built websites engineered for clarity and conversion",
          "Modern, secure content systems that are easy for your team to use",
          "Conversion-focused e-commerce engines when you sell online",
          "Optional custom mobile applications that share the same unified database",
        ],
      },
      {
        h2: "How pricing should be framed",
        paras: [
          "Premium custom builds are scoped around outcomes: performance targets, enquiry flow, store capability, and whether a mobile app should sync bookings, loyalty, or accounts in real time.",
          "Karol Digital provides clear fixed quotes before work starts — so you invest with confidence in modern, high-quality systems rather than low-tier template options.",
        ],
      },
      {
        h2: "A smarter next step",
        paras: [
          "Review our high-performance website and application packages, or book a consultation to map the right custom infrastructure for your growth stage.",
        ],
      },
    ],
  },

  "how-to-choose-the-right-website-design-package-for-your-small-business-in-2025": {
    title:
      "Scaling Past Basic Builders: Designing Custom Software Systems and E-Commerce Modules for Growth",
    subtitle:
      "Choosing a digital package should mean selecting custom systems that scale — not picking a low-tier template tier that holds your business back.",
    seoTitle:
      "Custom Software Systems & E-Commerce Modules | Growth Packages",
    seoDescription:
      "Scale past basic website builders. Learn how to choose custom software systems, high-performance websites, and e-commerce modules engineered for small business growth.",
    seoKeywords: [
      "Custom Software Systems",
      "E-Commerce Modules",
      "High-Performance Web Development",
      "Conversion Optimization",
      "Bespoke Mobile Apps",
      "Next.js Engineering",
      "small business growth",
    ],
    mainImageAlt:
      "Planning custom software systems and conversion-focused e-commerce modules for small business growth",
    mobileFocus: false,
    sections: [
      {
        paras: [
          "Basic builders make it easy to launch something that looks like a website. Scaling a real business needs something stronger: custom software systems, conversion-focused e-commerce modules, and digital journeys designed around how you win customers.",
        ],
      },
      {
        h2: "What a growth-ready package should include",
        bullets: [
          "Bespoke information architecture — not recycled template sections",
          "Lightning-fast performance and rock-solid security foundations",
          "Conversion paths for enquiries, quotes, or checkout",
          "Room to add custom mobile applications that sync with your website and store",
        ],
      },
      {
        h2: "How Karol Digital scopes packages",
        paras: [
          "Our Professional, Core Growth, Growth, Premium, and Enterprise packages are framed around custom engineering outcomes — from high-performance websites to conversion-focused stores and custom-scoped mobile apps.",
          "The goal is a modern, high-quality digital ecosystem you own, control, and can extend without fighting plugin bloat.",
        ],
      },
    ],
  },

  "turn-visitors-into-loyal-clients-2026": {
    title:
      "From First Visit to Loyal Customer: Building Custom Mobile Apps That Keep Clients Coming Back",
    subtitle:
      "Traffic alone is not loyalty. Learn how high-performance websites and bespoke mobile apps create retention systems small businesses can actually use.",
    seoTitle:
      "Custom Mobile Apps for Customer Loyalty | Bespoke Mobile Apps UK",
    seoDescription:
      "Turn visitors into loyal clients with conversion-focused websites and custom mobile applications for bookings, accounts, and retention — built for UK small businesses.",
    seoKeywords: [
      "Bespoke Mobile Apps",
      "customer loyalty apps",
      "Conversion Optimization",
      "High-Performance Web Development",
      "unified database",
      "mobile bookings",
      "Next.js Engineering",
    ],
    mainImageAlt:
      "Custom mobile application boosting customer loyalty alongside a high-performance business website",
    mobileFocus: true,
    sections: [
      {
        paras: [
          "Getting a click is only the start. Loyal clients return because your digital experience makes booking, buying, and staying in touch effortless — on the website and on mobile.",
          "Karol Digital builds conversion-focused websites and custom mobile applications (iOS & Android) that work as one modern digital ecosystem.",
        ],
      },
      {
        h2: "Why loyalty needs more than a contact form",
        bullets: [
          "Customers expect fast mobile experiences for bookings and account access",
          "Fragmented tools create friction and missed follow-ups",
          "A bespoke app can deepen retention with loyalty features and reminders",
          "Shared data means your website, store, and app stay consistent in real time",
        ],
      },
      {
        h2: "A unified database advantage",
        paras: [
          "When your website, e-commerce engine, and mobile app share a unified database, product details, appointments, and customer records update everywhere instantly. That is high-performance engineering translated into everyday business clarity.",
          "The result is a modern, fast, high-quality retention system — not a patchwork of disconnected platforms.",
        ],
      },
    ],
  },

  "interactive-catering-menu-vs-pdf-sales": {
    title:
      "Beyond PDF Menus: Custom Ordering Apps and High-Performance Catering Platforms",
    subtitle:
      "Replace static PDFs with conversion-focused menus, booking flows, and bespoke mobile apps that help catering brands win more orders.",
    seoTitle:
      "Custom Catering Ordering Apps | Bespoke Mobile Apps for Food Brands",
    seoDescription:
      "Ditch PDF menus. Build high-performance catering websites and custom mobile ordering apps that sync menus, bookings, and customer data in real time.",
    seoKeywords: [
      "Bespoke Mobile Apps",
      "catering ordering apps",
      "Conversion Optimization",
      "High-Performance Web Development",
      "hospitality digital systems",
      "unified database",
    ],
    mainImageAlt:
      "Custom catering ordering app and interactive menu on smartphone for UK food businesses",
    mobileFocus: true,
    sections: [
      {
        paras: [
          "PDF menus frustrate mobile customers, hide from search engines, and create friction between interest and booking. Growing catering brands need interactive, high-performance digital experiences instead.",
        ],
      },
      {
        h2: "What replaces the PDF",
        bullets: [
          "Fast, mobile-ready interactive menus engineered from scratch",
          "Conversion-focused enquiry and booking journeys",
          "Custom mobile applications for repeat orders and loyalty",
          "Real-time sync so website menus and app offerings stay aligned",
        ],
      },
      {
        h2: "Business outcomes that matter",
        paras: [
          "A modern digital ecosystem — website, optional store, and mobile app sharing one database — helps catering businesses update dishes once and sell everywhere. That is practical growth engineering, not template decoration.",
        ],
      },
    ],
  },

  "construction-website-design-tips-uk-builders": {
    title:
      "Win More Contracts with Custom Quote Apps and High-Performance Builder Websites",
    subtitle:
      "Local builders need more than a gallery page. Use custom websites and mobile booking tools that turn site visits into quote-ready enquiries.",
    seoTitle:
      "Custom Quote Apps for Builders | High-Performance Construction Websites",
    seoDescription:
      "Help UK builders win contracts with high-performance websites and bespoke mobile apps for quotes, project updates, and faster customer response.",
    seoKeywords: [
      "Bespoke Mobile Apps",
      "construction quote apps",
      "High-Performance Web Development",
      "Conversion Optimization",
      "builder websites UK",
      "Next.js Engineering",
    ],
    mainImageAlt:
      "Construction business using a custom mobile quote app alongside a high-performance website",
    mobileFocus: true,
    sections: [
      {
        paras: [
          "Word-of-mouth still matters in construction — but decision-makers also check your digital presence before they call. Slow template sites and awkward contact forms lose quote opportunities.",
        ],
      },
      {
        h2: "Digital systems that win work",
        bullets: [
          "High-performance project websites that load fast on mobile",
          "Clear service journeys from portfolio to quote request",
          "Custom mobile applications for faster quote capture and follow-up",
          "Unified data so leads from web and app land in one place",
        ],
      },
      {
        h2: "Built for trade businesses",
        paras: [
          "Karol Digital engineers modern, conversion-focused platforms for builders and trades — custom code, rock-solid security, and optional iOS & Android apps that support how field teams actually work.",
        ],
      },
    ],
  },

  "immigration-consultant-website-essentials": {
    title:
      "Client Portal Apps and High-Trust Websites for Immigration Consultants",
    subtitle:
      "Stressed applicants need clarity and secure access. Pair a high-performance immigration website with bespoke mobile tools that streamline bookings and case updates.",
    seoTitle:
      "Immigration Client Portal Apps | Bespoke Mobile Apps for Legal Services",
    seoDescription:
      "Build trust with high-performance immigration websites and custom mobile applications for secure bookings, updates, and conversion-focused client journeys.",
    seoKeywords: [
      "Bespoke Mobile Apps",
      "client portal apps",
      "immigration websites",
      "High-Performance Web Development",
      "Conversion Optimization",
      "secure digital systems",
    ],
    mainImageAlt:
      "Immigration consultant client portal mobile app with secure high-trust website experience",
    mobileFocus: true,
    sections: [
      {
        paras: [
          "Immigration clients arrive anxious and research-heavy. A cheap-looking template site undermines trust instantly. High-performance custom websites — and thoughtfully scoped mobile applications — help consultants look credible and respond faster.",
        ],
      },
      {
        h2: "Essentials for a premium immigration presence",
        bullets: [
          "Clear service pathways and strong trust signals",
          "Secure enquiry and consultation booking flows",
          "Optional client-facing mobile apps for updates and document readiness",
          "A unified database so website and app share accurate case-related requests",
        ],
      },
      {
        h2: "Engineering for confidence",
        paras: [
          "Karol Digital designs modern, secure systems for regulated service businesses — focusing on clarity, speed, and conversion without developer jargon getting in the way of client outcomes.",
        ],
      },
    ],
  },

  "beyond-brochure-websites-building-brands-that-generate-leads-and-sales": {
    title:
      "Beyond Brochure Sites: Building Conversion-Focused Digital Ecosystems That Sell",
    subtitle:
      "Pretty pages are not a growth system. Create high-performance websites, e-commerce modules, and connected apps that generate measurable enquiries and sales.",
    seoTitle:
      "Conversion-Focused Digital Ecosystems | High-Performance Web Development",
    seoDescription:
      "Move beyond brochure websites. Build conversion-focused digital ecosystems — custom websites, e-commerce, and mobile apps sharing a unified database.",
    seoKeywords: [
      "Conversion Optimization",
      "High-Performance Web Development",
      "digital ecosystems",
      "Bespoke Mobile Apps",
      "custom e-commerce",
      "Next.js Engineering",
    ],
    mainImageAlt:
      "Conversion-focused digital ecosystem connecting website, e-commerce store, and mobile app",
    mobileFocus: false,
    sections: [
      {
        paras: [
          "A brochure site displays information. A growth system engineers action: enquiries, bookings, and purchases. That requires custom structure, performance, and often a connected mobile experience.",
        ],
      },
      {
        h2: "What a selling ecosystem includes",
        bullets: [
          "Brand positioning that builds trust in seconds",
          "Conversion-focused page journeys and calls to action",
          "E-commerce modules when you need online sales infrastructure",
          "Optional mobile apps that keep customers engaged after the first purchase",
        ],
      },
      {
        h2: "One database, many channels",
        paras: [
          "When website, store, and app share a unified database, you stop duplicating work and start delivering a modern, high-quality customer experience everywhere.",
        ],
      },
    ],
  },

  "homepage-has-3-seconds-are-you-wasting-them": {
    title:
      "Your Homepage Has 3 Seconds: Engineering High-Performance First Impressions That Convert",
    subtitle:
      "Above-the-fold clarity, lightning-fast loads, and conversion-focused structure — how custom-built homepages win enquiries for UK service businesses.",
    seoTitle:
      "High-Performance Homepage Design | Conversion Optimization UK",
    seoDescription:
      "Fix the first three seconds. Learn how high-performance custom homepages convert UK service visitors into qualified enquiries with speed, clarity, and trust.",
    seoKeywords: [
      "Conversion Optimization",
      "High-Performance Web Development",
      "homepage design",
      "above the fold",
      "Next.js Engineering",
      "custom websites UK",
    ],
    mainImageAlt:
      "High-performance custom homepage with clear headline and conversion-focused call to action",
    mobileFocus: false,
    sections: [
      {
        paras: [
          "Visitors decide quickly. If your homepage is slow, vague, or built on bloated templates, those three seconds become a bounce — not an enquiry.",
          "Custom high-performance engineering puts your offer, proof, and next step above the fold without dragging load times down.",
        ],
      },
      {
        h2: "What a converting first screen needs",
        bullets: [
          "Immediate clarity on who you help and what to do next",
          "Trust signals that feel premium, not generic",
          "Lightning-fast performance on mobile and desktop",
          "A path into deeper services, store, or app experiences when relevant",
        ],
      },
      {
        h2: "Custom beats template first impressions",
        paras: [
          "Template themes often bury the offer under stock sections. Karol Digital builds homepages as conversion instruments — modern, fast, and designed around real business goals.",
        ],
      },
    ],
  },

  "best-website-design-immigration-lawyers-london-2026": {
    title:
      "High-Performance Web Platforms for London Immigration Lawyers in 2026",
    subtitle:
      "Authority, speed, and conversion-focused journeys for competitive London immigration practices — engineered without template limitations.",
    seoTitle:
      "High-Performance Immigration Lawyer Websites London | Custom Web Engineering",
    seoDescription:
      "Build authority in London’s immigration market with high-performance custom websites engineered for trust, clarity, and qualified consultation enquiries.",
    seoKeywords: [
      "High-Performance Web Development",
      "immigration lawyer websites London",
      "Conversion Optimization",
      "Next.js Engineering",
      "legal lead generation",
      "custom web engineering",
    ],
    mainImageAlt:
      "High-performance custom website for London immigration lawyers built for trust and conversions",
    mobileFocus: false,
    sections: [
      {
        paras: [
          "London immigration practices compete on trust and responsiveness. A standard template storefront rarely communicates the authority clients expect in 2026.",
        ],
      },
      {
        h2: "What high-performance legal websites deliver",
        bullets: [
          "Clear service pathways for complex visa and immigration needs",
          "Fast, secure experiences that protect credibility",
          "Conversion-focused consultation booking journeys",
          "Foundations ready for secure client tools and mobile extensions",
        ],
      },
      {
        h2: "Engineered for professional services",
        paras: [
          "Karol Digital creates modern, conversion-focused platforms for legal and immigration brands — custom code, premium presentation, and measurable enquiry outcomes.",
        ],
      },
    ],
  },

  "is-your-business-ready-for-ai-search-2026-guide": {
    title:
      "Is Your Business Ready for AI Search? High-Performance Content Systems for 2026 Visibility",
    subtitle:
      "AI Overviews reward clear, structured, high-quality digital platforms. Prepare your custom website so answer engines can cite and recommend you.",
    seoTitle:
      "AI Search Readiness 2026 | High-Performance Web Development & GEO",
    seoDescription:
      "Rank in Google AI Overviews with high-performance custom websites, structured content systems, and conversion-focused technical foundations.",
    seoKeywords: [
      "AI search",
      "High-Performance Web Development",
      "GEO",
      "Conversion Optimization",
      "Next.js Engineering",
      "answer engine optimization",
    ],
    mainImageAlt:
      "AI search visibility dashboard for a high-performance custom small business website",
    mobileFocus: false,
    sections: [
      {
        paras: [
          "AI search experiences summarise answers from sources they trust. Slow, unclear, template-heavy sites struggle to be cited. High-performance custom platforms with structured content fare far better.",
        ],
      },
      {
        h2: "Foundations AI engines prefer",
        bullets: [
          "Fast, stable technical performance",
          "Clear definitions and answer-ready service pages",
          "Modern secure content systems your team can maintain",
          "Conversion paths so visibility still becomes enquiries",
        ],
      },
      {
        h2: "Visibility with business outcomes",
        paras: [
          "Karol Digital combines classic SEO strength with AI search readiness — so your custom digital assets are findable, citable, and built to convert.",
        ],
      },
    ],
  },

  "financial-services-website-design-trust-factor": {
    title:
      "The Trust Factor: High-Performance Web Platforms for Financial Firms",
    subtitle:
      "High-net-worth clients judge credibility in seconds. Engineer secure, conversion-focused financial websites — and optional private client apps — that reinforce confidence.",
    seoTitle:
      "High-Performance Financial Websites | Trust & Conversion Optimization",
    seoDescription:
      "Build client confidence with high-performance financial websites and secure digital systems engineered for UK advisors, IFAs, and professional firms.",
    seoKeywords: [
      "High-Performance Web Development",
      "financial services websites",
      "Conversion Optimization",
      "secure digital systems",
      "Bespoke Mobile Apps",
      "Next.js Engineering",
    ],
    mainImageAlt:
      "Secure high-performance financial services website building trust with professional clients",
    mobileFocus: false,
    sections: [
      {
        paras: [
          "In financial services, your website is a digital handshake. Template aesthetics and fragile plugins signal risk. Custom high-performance platforms signal care, clarity, and professionalism.",
        ],
      },
      {
        h2: "Trust-building digital essentials",
        bullets: [
          "Premium presentation with unambiguous service positioning",
          "Rock-solid security and dependable performance",
          "Conversion-focused pathways for qualified consultations",
          "Optional secure client apps that share a unified modern database",
        ],
      },
      {
        h2: "Engineered for regulated confidence",
        paras: [
          "Karol Digital helps financial brands replace outdated brochure sites with modern, fast, high-quality systems designed to attract and reassure discerning clients.",
        ],
      },
    ],
  },

  "why-every-small-business-needs-a-modern-website-in-2025": {
    title:
      "Why Growing Small Businesses Need Custom High-Performance Digital Platforms",
    subtitle:
      "A modern presence is no longer a basic brochure. Invest in custom websites and connected applications that build trust and convert demand.",
    seoTitle:
      "Custom High-Performance Digital Platforms for Small Businesses",
    seoDescription:
      "Why ambitious small businesses need custom high-performance websites — and how e-commerce and bespoke mobile apps extend growth beyond a basic online page.",
    seoKeywords: [
      "High-Performance Web Development",
      "custom digital platforms",
      "Bespoke Mobile Apps",
      "Conversion Optimization",
      "Next.js Engineering",
      "small business websites UK",
    ],
    mainImageAlt:
      "Custom high-performance digital platform for a growing UK small business",
    mobileFocus: false,
    sections: [
      {
        paras: [
          "Customers expect speed, clarity, and mobile-ready experiences. A dated or template-limited site quietly costs credibility every day.",
          "Custom high-performance platforms help small businesses look established, load instantly, and guide people toward enquiry or purchase.",
        ],
      },
      {
        h2: "Modern means engineered for growth",
        bullets: [
          "100% custom builds without template bloat",
          "Conversion-focused structure and messaging",
          "Secure, easy-to-manage content systems",
          "A path to e-commerce modules and mobile apps when you scale",
        ],
      },
    ],
  },

  "the-importance-of-website-speed-for-small-businesses-in-2025": {
    title:
      "Website Speed Is a Growth Strategy: Why Custom Performance Beats Template Bloat",
    subtitle:
      "Slow pages lose customers and rankings. Learn how high-performance custom engineering protects SEO, conversions, and trust.",
    seoTitle:
      "Website Speed & Custom Performance | High-Performance Web Development",
    seoDescription:
      "Website speed drives SEO and conversions. See why custom high-performance engineering outperforms heavy templates for UK small businesses.",
    seoKeywords: [
      "High-Performance Web Development",
      "website speed",
      "Conversion Optimization",
      "Next.js Engineering",
      "Core Web Vitals",
      "custom performance",
    ],
    mainImageAlt:
      "Performance metrics showing lightning-fast custom website speed for small businesses",
    mobileFocus: false,
    sections: [
      {
        paras: [
          "Every extra second of load time increases bounce risk. Template themes packed with plugins are a common cause of drag — especially on mobile.",
        ],
      },
      {
        h2: "Custom performance advantages",
        bullets: [
          "Lean codebases without unused theme features",
          "Faster Core Web Vitals and stronger search signals",
          "Smoother journeys into enquiry, checkout, or app experiences",
          "Infrastructure that stays fast as you add features intentionally",
        ],
      },
      {
        h2: "Speed with business outcomes",
        paras: [
          "Karol Digital treats performance as a conversion feature — engineering modern, incredibly fast digital assets that keep visitors engaged long enough to take action.",
        ],
      },
    ],
  },

  "enhancing-web-accessibility-for-better-user-experience": {
    title:
      "Accessible by Design: High-Performance Custom Websites That Include Every Customer",
    subtitle:
      "Inclusive experiences are premium experiences. Build custom websites that are clear, usable, fast, and conversion-focused for every visitor.",
    seoTitle:
      "Accessible High-Performance Websites | Inclusive Custom Web Development",
    seoDescription:
      "Enhance UX and trust with accessible, high-performance custom websites engineered for clarity, inclusion, and stronger conversions.",
    seoKeywords: [
      "web accessibility",
      "High-Performance Web Development",
      "Conversion Optimization",
      "inclusive design",
      "Next.js Engineering",
      "custom UX",
    ],
    mainImageAlt:
      "Accessible high-performance custom website experience designed for inclusive usability",
    mobileFocus: false,
    sections: [
      {
        paras: [
          "Accessibility is not a bolt-on checklist for template sites. It is part of high-quality custom engineering: readable structure, keyboard-friendly journeys, and clear calls to action.",
        ],
      },
      {
        h2: "Inclusive systems that still convert",
        bullets: [
          "Clear hierarchy and understandable service language",
          "Fast interfaces that work across devices and assistive tools",
          "Forms and booking flows designed for ease, not friction",
          "A foundation that can extend into accessible mobile applications",
        ],
      },
    ],
  },

  "why-every-small-business-needs-a-conversion-optimised-website-2025-guide": {
    title:
      "Conversion-Focused Digital Systems: Websites, Stores, and Apps That Turn Interest Into Revenue",
    subtitle:
      "Optimisation is not a tweak — it is how custom platforms are engineered to move visitors toward enquiries, checkouts, and repeat business.",
    seoTitle:
      "Conversion-Focused Digital Systems | Web, E-Commerce & Mobile Apps",
    seoDescription:
      "Build conversion-focused websites, e-commerce stores, and mobile apps that turn interest into revenue for ambitious small businesses.",
    seoKeywords: [
      "Conversion Optimization",
      "High-Performance Web Development",
      "Bespoke Mobile Apps",
      "custom e-commerce",
      "Next.js Engineering",
      "lead generation",
    ],
    mainImageAlt:
      "Conversion-focused website, store, and mobile app working as one digital growth system",
    mobileFocus: false,
    sections: [
      {
        paras: [
          "A conversion-optimised presence removes friction. Custom engineering lets you design that journey properly — from first impression to enquiry, purchase, or app re-engagement.",
        ],
      },
      {
        h2: "Where conversions actually happen",
        bullets: [
          "Homepage and service pages that make the next step obvious",
          "E-commerce checkout paths built for speed and trust",
          "Mobile apps that increase retention after the first transaction",
          "Shared data so every channel supports the same customer journey",
        ],
      },
      {
        h2: "Engineered outcomes over cosmetic redesigns",
        paras: [
          "Karol Digital focuses on high-performance, conversion-focused digital ecosystems — modern systems that help small businesses grow with clarity and measurable results.",
        ],
      },
    ],
  },
};

async function main() {
  const posts = await client.fetch(
    `*[_type == "blogPost"]{
      _id, _type, title, slug, subtitle, seoTitle, seoDescription, seoKeywords,
      authorName, publishedAt, likes, comments, structuredData,
      mainImage, seoImage, body
    }`
  );

  console.log(`Fetched ${posts.length} posts`);
  const tx = client.transaction();
  const summary = [];

  for (const post of posts) {
    const slug = post.slug?.current;
    const rewrite = rewrites[slug];
    if (!rewrite) {
      console.warn(`No rewrite mapped for slug: ${slug}`);
      continue;
    }

    const publishedId = post._id.replace(/^drafts\./, "");
    const draftId = `drafts.${publishedId}`;

    const draftDoc = {
      _id: draftId,
      _type: "blogPost",
      title: rewrite.title,
      slug: post.slug, // keep URL slug intact
      subtitle: rewrite.subtitle,
      seoTitle: rewrite.seoTitle,
      seoDescription: rewrite.seoDescription,
      seoKeywords: rewrite.seoKeywords,
      authorName: post.authorName || "Karol Digital",
      publishedAt: post.publishedAt,
      likes: post.likes ?? 0,
      comments: post.comments,
      structuredData: post.structuredData,
      mainImage: post.mainImage
        ? {
            ...post.mainImage,
            alt: rewrite.mainImageAlt,
          }
        : post.mainImage,
      seoImage: post.seoImage,
      body: bodyFromSections(rewrite.sections),
    };

    tx.createOrReplace(draftDoc);
    summary.push({
      id: publishedId,
      slug,
      oldTitle: post.title,
      newTitle: rewrite.title,
      mobileFocus: !!rewrite.mobileFocus,
      draftId,
    });
  }

  await tx.commit({ visibility: "async" });
  console.log(JSON.stringify({ stagedDrafts: summary.length, summary }, null, 2));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
