export interface BlogCtaCopy {
  title: string;
  description: string;
}

const bySlug: Record<string, BlogCtaCopy> = {
  "homepage-has-3-seconds-are-you-wasting-them": {
    title: "Want a sharper first impression on your homepage?",
    description:
      "Book a free consultation and we will tell you what to keep, what to cut, and what belongs above the fold so more visitors enquire.",
  },
  "best-website-design-immigration-lawyers-london-2026": {
    title: "Ready to build an immigration website that wins trust?",
    description:
      "Book a free consultation for a conversion-focused legal website, or request an audit if your current site is losing qualified applicants.",
  },
  "turn-visitors-into-loyal-clients-2026": {
    title: "Traffic without enquiries? Let’s fix the conversion path.",
    description:
      "Book a free consultation to rebuild your site around trust and next steps, or request an audit to uncover what is stopping visitors from contacting you.",
  },
  "beyond-brochure-websites-building-brands-that-generate-leads-and-sales": {
    title: "Ready to move beyond a brochure website?",
    description:
      "Book a free consultation and we will map a lead-generating site around your brand, offer, and sales process — or request an audit of what you have now.",
  },
  "is-your-business-ready-for-ai-search-2026-guide": {
    title: "Want your business cited in AI search results?",
    description:
      "Book a free consultation for an AI-ready content and schema plan, or request an SEO audit to see where your site is being overlooked.",
  },
  "financial-services-website-design-trust-factor": {
    title: "Does your financial website look as trustworthy as your advice?",
    description:
      "Book a free consultation for a credibility-led redesign, or request an audit if your current site is undermining client confidence.",
  },
  "how-much-does-a-professional-website-cost-uk-small-business-2026": {
    title: "Need a clear website budget for your business?",
    description:
      "Book a free consultation and we will recommend the right package for your goals — without upselling you into something you do not need.",
  },
  "immigration-consultant-website-essentials": {
    title: "Ready to turn stressed visitors into paying immigration clients?",
    description:
      "Book a free consultation for a trust-first immigration website, or request an audit if your current site feels cluttered or unclear.",
  },
  "construction-website-design-tips-uk-builders": {
    title: "Ready to win higher-value building contracts online?",
    description:
      "Book a free consultation for a modern construction website that showcases your work, or request an audit of the site you already have.",
  },
  "interactive-catering-menu-vs-pdf-sales": {
    title: "Ready to replace your PDF menu with something that sells?",
    description:
      "Book a free consultation for a mobile-friendly catering website with an interactive menu, or request an audit of your current booking journey.",
  },
  "why-every-small-business-needs-a-modern-website-in-2025": {
    title: "Ready for a modern website that works as hard as you do?",
    description:
      "Book a free consultation for a new build, or request an audit if you want to improve the site you already run.",
  },
  "how-to-choose-the-right-website-design-package-for-your-small-business-in-2025": {
    title: "Not sure which website package fits your business?",
    description:
      "Book a free consultation and we will match you to the right scope, budget, and features — clearly and without pressure.",
  },
  "the-importance-of-website-speed-for-small-businesses-in-2025": {
    title: "Is a slow website quietly costing you enquiries?",
    description:
      "Book a free consultation for a performance-focused rebuild, or request an audit to pinpoint what is slowing your site down.",
  },
  "enhancing-web-accessibility-for-better-user-experience": {
    title: "Want a website that works for every visitor?",
    description:
      "Book a free consultation for accessibility-led design improvements, or request an audit to find usability barriers on your current site.",
  },
  "why-every-small-business-needs-a-conversion-optimised-website-2025-guide": {
    title: "Ready for a website built to convert, not just look good?",
    description:
      "Book a free consultation for a conversion-focused redesign, or request an audit to see where your enquiry path is breaking.",
  },
  "diy-vs-professional-website-design-which-is-right-for-your-business-in-2025": {
    title: "Outgrown DIY? Let’s build the professional site next.",
    description:
      "Book a free consultation to plan a proper website for growth, or request an audit if you want an honest view of what DIY is holding back.",
  },
};

const defaultCopy: BlogCtaCopy = {
  title: "Want help applying this to your website?",
  description:
    "Book a free consultation for a new build, or request an audit if you want to improve the site you already have.",
};

export function getBlogCtaCopy(
  slug: string,
  keywords?: string[] | null
): BlogCtaCopy {
  if (bySlug[slug]) return bySlug[slug];

  const haystack = `${slug} ${(keywords ?? []).join(" ")}`.toLowerCase();

  if (haystack.match(/immigration|oisc|visa|legal|solicitor/)) {
    return {
      title: "Ready for an immigration website that builds trust fast?",
      description:
        "Book a free consultation for a lead-focused legal website, or request an audit of your current online presence.",
    };
  }
  if (haystack.match(/financial|mortgage|accountant|ifa|advisor/)) {
    return {
      title: "Ready for a financial website that earns confidence?",
      description:
        "Book a free consultation for a trust-led redesign, or request an audit if your site is not reflecting your professionalism.",
    };
  }
  if (haystack.match(/construction|builder|trade|contractor/)) {
    return {
      title: "Ready to win better building work through your website?",
      description:
        "Book a free consultation for a modern construction site, or request an audit of what you have today.",
    };
  }
  if (haystack.match(/catering|restaurant|food|menu|hospitality/)) {
    return {
      title: "Ready for a catering website that drives bookings?",
      description:
        "Book a free consultation for a mobile-first hospitality site, or request an audit of your menu and enquiry flow.",
    };
  }
  if (haystack.match(/speed|performance|core web vitals/)) {
    return {
      title: "Ready to make your website feel instant?",
      description:
        "Book a free consultation for performance work, or request an audit to find what is slowing visitors down.",
    };
  }
  if (haystack.match(/ai search|aeo|seo|schema/)) {
    return {
      title: "Ready to improve your search visibility?",
      description:
        "Book a free consultation for an SEO and content plan, or request an audit of your current rankings and structure.",
    };
  }
  if (haystack.match(/pricing|cost|package|diy/)) {
    return {
      title: "Need help choosing the right website approach?",
      description:
        "Book a free consultation and we will recommend a clear, practical next step for your budget and goals.",
    };
  }

  return defaultCopy;
}
