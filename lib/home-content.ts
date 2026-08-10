export const homeFaqs = [
  {
    q: "Who do you work best with?",
    a: "We work best with growing small businesses and service providers that need modern, fast digital systems—whether that is a high-performance website, a conversion-focused e-commerce store, or a custom mobile application that keeps customers coming back.",
  },
  {
    q: "Can you improve an existing website?",
    a: "Yes. If your current website feels slow, unclear, outdated, or is not bringing in the right enquiries, we can audit it, improve it, or rebuild it into a faster, clearer, and more effective lead generation website.",
  },
  {
    q: "Do you build custom websites or use templates?",
    a: "We build 100% custom digital solutions—no template bloat and no slow drag-and-drop platforms. Custom-built websites and apps load faster, stay more secure, and are shaped around how your business actually wins customers.",
  },
  {
    q: "What if I am not ready for a full website project?",
    a: "That is completely fine. Many businesses start with a website audit to understand what is hurting trust, visibility, and conversions before deciding on a larger rebuild.",
  },
  {
    q: "How long does a typical project take?",
    a: "Most website projects take between 3 and 6 weeks depending on the scope, number of pages, and feedback turnaround. E-commerce and custom mobile app projects are scoped separately based on features and complexity.",
  },
] as const;

export const homeTestimonials = [
  {
    quote:
      "Karol Digital transformed our digital presence. The website made it easier for clients to understand what we offer and contact us.",
    author: "1st Call UK Immigration",
  },
  {
    quote:
      "A true lead generation engine. We saw a clear uplift in the quality of leads coming through the site.",
    author: "1st Call UK Financial",
  },
  {
    quote:
      "Professional, fast, and results-driven. The new branding and website gave the business a much stronger online presence.",
    author: "British Solar Direct",
  },
] as const;

export const homeCaseStudies = [
  {
    title: "1st Call UK Financial",
    logo: "/logos/1st-call-financial.webp",
    logoAlt: "1st Call UK Financial logo",
    description:
      "A mobile-first website experience with strong speed, accessibility, best practices, and SEO performance.",
    metric: "98+",
    metricLabel: "PageSpeed on core pages",
    industryHref: "/industries/financial-services",
    industryLabel: "Financial case study",
    featured: true,
  },
  {
    title: "1st Call UK Immigration",
    logo: "/logos/1st-calluk-immigration.webp",
    logoAlt: "1st Call UK Immigration logo",
    description:
      "A high-performing service website built to combine trust, clarity, and strong mobile usability.",
    metric: "↑ Lead quality",
    metricLabel: "Clearer enquiry journeys",
    industryHref: "/industries/immigration-services",
    industryLabel: "Immigration case study",
    featured: false,
  },
  {
    title: "British Solar Direct",
    logo: "/logos/british-solar-direct-logo.png",
    logoAlt: "British Solar Direct logo",
    description:
      "A conversion-focused website for Nottingham’s turnkey home solar specialist—clear installation packages, fixed-quote journeys, and a fast path from enquiry to booking.",
    metric: "3–6 wks",
    metricLabel: "Launch-ready build cycle",
    industryHref: "https://www.britishsolardirect.co.uk/",
    industryLabel: "British Solar Direct",
    featured: false,
  },
] as const;

export const homeServices = [
  {
    title: "High-Performance Websites",
    description:
      "100% custom-built, modern digital solutions for growing small businesses—designed for clarity, credibility, and conversion, without template bloat or slow loading speeds.",
    href: "/services/web-design",
    cta: "Custom website design",
  },
  {
    title: "Custom Web Development",
    description:
      "Modern, fast websites built from the ground up around how you sell—eliminating drag-and-drop limitations so your site stays quick, flexible, and ready to grow.",
    href: "/services/custom-web-development",
    cta: "Bespoke web builds",
  },
  {
    title: "High-Quality E-Commerce Websites",
    description:
      "Conversion-focused online stores built for speed, secure payments, and a smooth checkout experience that turns browsers into paying customers.",
    href: "/services/custom-web-development",
    cta: "Explore e-commerce",
  },
  {
    title: "Custom Mobile Applications",
    description:
      "High-quality mobile apps built to increase customer loyalty and sync seamlessly with your business systems—so your website and app work as one.",
    href: "/services/custom-mobile-applications",
    cta: "Mobile app builds",
  },
  {
    title: "Website Audits",
    description:
      "Clear advice for businesses whose current site feels slow, unclear, outdated, or underperforming.",
    href: "/services/website-audits",
    cta: "Site audit details",
  },
  {
    title: "AI Search Optimisation",
    description:
      "GEO, content systems, interactive lead magnets, and analytics so AI engines can find, cite, and recommend your business.",
    href: "/services/ai-search-optimisation",
    cta: "AI search optimisation",
  },
] as const;

export const homeDifference = [
  {
    title: "Lightning-fast performance",
    description:
      "Custom-built websites and apps load faster than template platforms—so visitors stay engaged and search engines reward your speed.",
  },
  {
    title: "Rock-solid security",
    description:
      "Modern custom builds avoid the plugin bloat and weak spots common in template sites, giving your business a safer digital foundation.",
  },
  {
    title: "Unified enquiry systems",
    description:
      "Clearer calls-to-action and shared modern databases mean your website and mobile app can work together—so leads and customers flow into one place.",
  },
] as const;

export const homeIndustries = [
  {
    title: "Financial Services",
    description:
      "Website design for financial businesses that need trust, clarity, and a more professional lead generation journey.",
    href: "/industries/financial-services",
    linkLabel: "Financial sites",
  },
  {
    title: "Immigration Lawyers",
    description:
      "Websites for immigration-focused firms that need to build authority, reduce confusion, and make it easier for clients to enquire.",
    href: "/industries/immigration-services",
    linkLabel: "Immigration sites",
  },
  {
    title: "Construction and Trades",
    description:
      "Lead generation websites for construction companies and tradespeople that need stronger credibility and more quote-ready enquiries.",
    href: "/industries/building-services",
    linkLabel: "Construction sites",
  },
] as const;
