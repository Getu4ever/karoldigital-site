import { getBlogIndexPosts } from "@/lib/sanity-blog";

export type SearchDoc = {
  title: string;
  url: string;
  description: string;
};

const STATIC_DOCS: SearchDoc[] = [
  {
    title: "Karol Digital — web design for UK service businesses",
    url: "/",
    description:
      "London web design studio. Conversion-focused websites, GEO, audits, and lead generation.",
  },
  {
    title: "About Karol Digital",
    url: "/about",
    description:
      "Meet Karol, founder of Karol Digital, a London studio building custom websites for UK service businesses.",
  },
  {
    title: "Contact Karol Digital",
    url: "/contact",
    description: "Call 07565 472445 or email info@karoldigital.co.uk. Book a free consultation.",
  },
  {
    title: "Book a free website consultation",
    url: "/book",
    description: "Book a free call to discuss web design, audits, GEO, or a rebuild.",
  },
  {
    title: "Website design pricing UK",
    url: "/pricing",
    description:
      "Packages from £95 audits to custom builds typically £1,250–£6,000. Clear fixed quotes.",
  },
  {
    title: "Web design and digital services",
    url: "/services",
    description: "Custom websites, Next.js, audits, GEO, marketing, and mobile apps.",
  },
  {
    title: "High-performance custom web design",
    url: "/services/web-design",
    description: "Custom-built websites for UK service businesses. Fast, conversion-focused, no template bloat.",
  },
  {
    title: "Custom web development",
    url: "/services/custom-web-development",
    description: "Bespoke websites engineered around how you sell.",
  },
  {
    title: "Next.js development",
    url: "/services/nextjs-development",
    description: "High-performance Next.js websites with strong SEO and GEO foundations.",
  },
  {
    title: "Website audits",
    url: "/services/website-audits",
    description: "Practical reviews of speed, SEO, UX, and conversions from £95.",
  },
  {
    title: "AI search optimisation (GEO)",
    url: "/services/ai-search-optimisation",
    description:
      "Generative engine optimisation so ChatGPT, Perplexity, and Google AI Overviews can cite you.",
  },
  {
    title: "Digital marketing",
    url: "/services/digital-marketing",
    description: "SEO, content, and visibility support for UK small businesses.",
  },
  {
    title: "Social media setup",
    url: "/services/social-media",
    description: "Professional profile and Google Business setup.",
  },
  {
    title: "AI logo design support",
    url: "/services/ai-logo-design",
    description: "Fast professional logo direction for UK businesses.",
  },
  {
    title: "Custom mobile applications",
    url: "/services/custom-mobile-applications",
    description: "Mobile apps that sync with your website and operations.",
  },
  {
    title: "Small business web design London",
    url: "/services/small-business-web-design-london",
    description: "London web design for local service firms that need speed and trust.",
  },
  {
    title: "Industry web design",
    url: "/industries",
    description: "Websites for financial, immigration, construction, catering, and fitness businesses.",
  },
  {
    title: "Financial services websites",
    url: "/industries/financial-services",
    description: "High-trust websites for UK accountants, brokers, and IFAs.",
  },
  {
    title: "Immigration services websites",
    url: "/industries/immigration-services",
    description: "Websites for UK immigration lawyers and advisers.",
  },
  {
    title: "Building and construction websites",
    url: "/industries/building-services",
    description: "Quote-ready websites for UK builders and trades.",
  },
  {
    title: "Catering websites",
    url: "/industries/catering-services",
    description: "Menu-led websites for UK catering and hospitality firms.",
  },
  {
    title: "Fitness studio websites",
    url: "/industries/fitness-studios",
    description: "Class booking and brand websites for studios.",
  },
  {
    title: "AI Search Readiness Scorecard",
    url: "/tools/ai-search-scorecard",
    description: "Free interactive GEO scorecard for schema, content, and lead capture.",
  },
  {
    title: "SEO content brief generator",
    url: "/tools/content-brief",
    description: "Free briefs with outlines, FAQs, and GEO tips.",
  },
  {
    title: "Blog",
    url: "/blog",
    description: "Practical web design, SEO, and lead generation advice for UK service businesses.",
  },
];

function haystack(doc: SearchDoc): string {
  return `${doc.title} ${doc.description} ${doc.url}`.toLowerCase();
}

export async function searchSite(query: string): Promise<SearchDoc[]> {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];

  const terms = q.split(/\s+/).filter(Boolean);
  let posts: SearchDoc[] = [];
  try {
    const blog = await getBlogIndexPosts();
    posts = blog.map((post) => ({
      title: post.title,
      url: `/blog/${post.slug}`,
      description: post.subtitle || "Karol Digital blog article",
    }));
  } catch {
    posts = [];
  }

  return [...STATIC_DOCS, ...posts]
    .map((doc) => {
      const text = haystack(doc);
      const score = terms.reduce((sum, term) => sum + (text.includes(term) ? 1 : 0), 0);
      return { doc, score };
    })
    .filter((row) => row.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 20)
    .map((row) => row.doc);
}
