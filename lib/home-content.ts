export const homeFaqs = [
  {
    q: "What is Karol Digital?",
    a: "Karol Digital is a UK web design agency that builds conversion-focused websites for service businesses, with expertise in SEO, AI search optimisation (GEO), and lead generation. The studio is based in London SW20 and led by Karol, Founder & Web Designer.",
  },
  {
    q: "How much does a professional website cost?",
    a: "Karol Digital website packages start at £95 for a performance audit. Custom builds typically range from £1,250 to £6,000 depending on pages, e-commerce, and integrations. You receive a clear fixed quote before work starts.",
  },
  {
    q: "What is GEO (generative engine optimisation)?",
    a: "GEO is the practice of structuring your website, schema, and content so AI search engines such as ChatGPT, Perplexity, and Google AI Overviews can understand, cite, and recommend your business accurately.",
  },
  {
    q: "Who do you work best with?",
    a: "We work best with growing service businesses whose phones should be ringing more — firms that need a clear offer, a professional first impression, and enquiry journeys that save the team time.",
  },
  {
    q: "Can you improve an existing website?",
    a: "Yes. If your current website feels slow, unclear, outdated, or is not bringing in the right enquiries, we can audit it, improve it, or rebuild it into a faster, clearer, and more effective lead generation website.",
  },
  {
    q: "Do you build custom websites or use templates?",
    a: "We build every site around how you win work — clear offers, trust, and enquiry paths — rather than forcing your business into a generic template. The result is a faster site that looks more professional and converts more visitors into real conversations.",
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
      "Our new website is admired by our community and friends — it finally feels like us. Booking is clearer, the brand feels warm and inclusive, and people are proud to share it.",
    author: "Wild Hearts Collective",
  },
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
] as const;

export const homeCaseStudies = [
  {
    title: "Wild Hearts Collective",
    logo: "/wild-hearts-showcase.png",
    logoAlt: "Wild Hearts Collective studio website",
    description:
      "Latest completed project — an inclusive aerial and pole studio site with online class booking, clear schedules, and a brand presence the founders and their friends are proud to share.",
    metric: "Latest",
    metricLabel: "Featured studio build",
    industryHref: "/industries/fitness-studios",
    industryLabel: "Studio case study",
    featured: true,
    coverImage: true,
    liveUrl: "https://www.wildheartscollective.org/",
  },
  {
    title: "1st Call UK Immigration",
    logo: "/logos/1st-calluk-immigration.webp",
    logoAlt: "1st Call UK Immigration logo",
    description:
      "Visa paths explained in plain English, with intake flows that help stressed clients instruct the firm — and help the team qualify cases faster.",
    metric: "↑ Instructed",
    metricLabel: "Clearer client journeys",
    industryHref: "/industries/immigration-services",
    industryLabel: "Immigration case study",
    featured: false,
  },
  {
    title: "1st Call UK Financial",
    logo: "/logos/1st-call-financial.webp",
    logoAlt: "1st Call UK Financial logo",
    description:
      "A clearer path from first visit to mortgage or finance enquiry — built so serious prospects trust the brand and take the next step on mobile.",
    metric: "↑ Lead quality",
    metricLabel: "Stronger enquiry journeys",
    industryHref: "/industries/financial-services",
    industryLabel: "Financial case study",
    featured: false,
  },
] as const;

export const homeServices = [
  {
    title: "High-Performance Websites",
    description:
      "Websites that make your offer obvious, earn trust in seconds, and turn more visitors into phone calls, form fills, and booked consultations.",
    href: "/services/web-design",
    cta: "Custom website design",
  },
  {
    title: "Custom Web Development",
    description:
      "Built around how you sell — packages, quotes, bookings, and lead capture that fit your workflows, so enquiries stop falling through the cracks.",
    href: "/services/custom-web-development",
    cta: "Bespoke web builds",
  },
  {
    title: "High-Quality E-Commerce Websites",
    description:
      "Online stores with a smooth path from browse to buy — clear products, secure checkout, and fewer abandoned baskets on mobile.",
    href: "/services/custom-web-development",
    cta: "Explore e-commerce",
  },
  {
    title: "Custom Mobile Applications",
    description:
      "Apps that keep customers coming back — bookings, accounts, and loyalty in one place, synced with how you already run the business.",
    href: "/services/custom-mobile-applications",
    cta: "Mobile app builds",
  },
  {
    title: "Website Audits",
    description:
      "A plain-English review of what is costing you trust, visibility, and enquiries — plus a clear fix list before you invest in a rebuild.",
    href: "/services/website-audits",
    cta: "Site audit details",
  },
  {
    title: "AI Search Optimisation",
    description:
      "Show up when buyers ask ChatGPT or Google AI who to hire — structured content and signals so engines can recommend your business accurately.",
    href: "/services/ai-search-optimisation",
    cta: "AI search optimisation",
  },
] as const;

export const homeDifference = [
  {
    title: "More completed enquiries",
    description:
      "Pages that load quickly on mobile keep prospects on your site instead of bouncing to a competitor — so more people finish the form or call.",
  },
  {
    title: "A site that earns trust",
    description:
      "Clear offers, professional presentation, and fewer broken experiences mean busy buyers feel safe enough to contact you.",
  },
  {
    title: "Less admin, fewer lost leads",
    description:
      "Enquiry systems that capture the right details and keep website, app, and follow-up in sync — so your team spends less time chasing paperwork.",
  },
] as const;

export const homeIndustries = [
  {
    title: "Fitness & Wellness Studios",
    description:
      "Studio sites with clear class discovery, online booking, and a brand people admire — as with Wild Hearts Collective.",
    href: "/industries/fitness-studios",
    linkLabel: "Studio websites",
  },
  {
    title: "Immigration Lawyers",
    description:
      "Sites for immigration firms that need to build authority, explain visa routes clearly, and turn more enquiries into instructed cases.",
    href: "/industries/immigration-services",
    linkLabel: "Immigration sites",
  },
  {
    title: "Financial Services",
    description:
      "Websites for accountants, brokers, and advisers that need credibility, clarity, and a smoother path from first visit to consultation.",
    href: "/industries/financial-services",
    linkLabel: "Financial sites",
  },
  {
    title: "Construction and Trades",
    description:
      "Websites for builders and specialist trades — clear packages, local trust, and quote-ready journeys that win booked work.",
    href: "/industries/building-services",
    linkLabel: "Construction sites",
  },
  {
    title: "Catering & Hospitality",
    description:
      "Menu-led sites for UK caterers — clear packages, event enquiry paths, and mobile journeys that win corporate and private bookings.",
    href: "/industries/catering-services",
    linkLabel: "Catering sites",
  },
  {
    title: "Corporate Office Catering",
    description:
      "B2B sites for office lunch providers — bulk order flows, crisp menus, and fast enquiry paths built for workplace teams.",
    href: "/industries/catering-services",
    linkLabel: "Office lunch sites",
  },
] as const;
