/**
 * Expand staged blog drafts to 800+ words with rich blog styling
 * (✅ checkmarks, bullets, numbered lists, emojis, strong text).
 * Preserves titles/SEO/slugs/images from existing drafts.
 *
 * Run: node --env-file=.env.local scripts/expand-premium-blog-drafts.mjs
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

const key = () => randomBytes(6).toString("hex");

function richText(parts) {
  // parts: string | { text, marks?: string[] }
  const children = [];
  for (const part of parts) {
    if (typeof part === "string") {
      children.push({ _type: "span", _key: key(), marks: [], text: part });
    } else {
      children.push({
        _type: "span",
        _key: key(),
        marks: part.marks || [],
        text: part.text,
      });
    }
  }
  return children;
}

function block({ style = "normal", listItem, level = 1, parts }) {
  const b = {
    _type: "block",
    _key: key(),
    style,
    markDefs: [],
    children: richText(parts),
  };
  if (listItem) {
    b.listItem = listItem;
    b.level = level;
  }
  return b;
}

const p = (...parts) => block({ parts });
const h2 = (text) =>
  block({ style: "h2", parts: [{ text, marks: ["strong"] }] });
const h3 = (text) =>
  block({ style: "h3", parts: [{ text, marks: ["strong"] }] });
const bullet = (...parts) => block({ listItem: "bullet", parts });
const numbered = (...parts) => block({ listItem: "number", parts });
const check = (text) => bullet("✅ ", { text, marks: ["strong"] }, " — ", text.includes("—") ? "" : text.replace(/^✅\s*/, ""));
// Better check helper:
function checkItem(label, detail) {
  return bullet("✅ ", { text: label, marks: ["strong"] }, detail ? `: ${detail}` : "");
}

function wordCount(body = []) {
  return body
    .filter((b) => b._type === "block")
    .map((b) => (b.children || []).map((c) => c.text || "").join(""))
    .join(" ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

/** Shared closing CTA blocks */
function ctaClose(topic = "your next custom build") {
  return [
    h2("🚀 Ready to Move Forward with Karol Digital?"),
    p(
      "Karol Digital partners with ambitious small businesses as a high-performance technical partner — engineering modern websites, conversion-focused e-commerce platforms, and custom mobile applications from the ground up."
    ),
    p(
      "If you want clarity before you invest, start with a ",
      { text: "Website Performance & Growth Audit", marks: ["strong"] },
      ". If you already know you need a premium custom system, book a consultation and we will map the right scope for ",
      topic,
      "."
    ),
    p(
      "👉 ",
      { text: "Next step:", marks: ["strong"] },
      " Visit our services and pricing pages, or contact us to request a custom project quote. Clear advice. Fixed quotes before build. No template bloat."
    ),
  ];
}

/** Build long-form bodies keyed by slug */
const bodies = {
  "diy-vs-professional-website-design-which-is-right-for-your-business-in-2025": () => [
    h2("📌 Introduction"),
    p(
      "Many small businesses begin with a drag-and-drop template because it feels fast and inexpensive. The problem is not ambition — it is the long-term cost of unstable themes, fragile plugins, and generic layouts that were never engineered for conversion."
    ),
    p(
      "This guide explains why template stacks quietly drain enquiries — and how a ",
      { text: "custom code alternative", marks: ["strong"] },
      " from a premium engineering partner protects growth for UK small businesses."
    ),
    h2("🚀 Why “Basic” Websites Are Failing"),
    p(
      "A basic builder site can look acceptable on day one. Then traffic arrives. Pages load slowly on mobile. A plugin update breaks the contact form. Your competitors with high-performance custom platforms feel sharper, faster, and more trustworthy."
    ),
    p("Typical failure patterns include:"),
    checkItem("Plugin conflicts", "updates that break forms, booking widgets, or checkout"),
    checkItem("Theme bloat", "dozens of unused features slowing every page"),
    checkItem("Generic branding", "visitors cannot tell you apart from every other template site"),
    checkItem("Weak enquiry flow", "calls-to-action buried under stock sections"),
    checkItem("Security exposure", "outdated plugins creating avoidable risk"),
    h2("💡 What Unstable Templates Really Cost You"),
    h3("1. Lost conversions from slow performance"),
    p(
      "Customers rarely complain about speed — they simply leave. Lightning-fast experiences keep people reading long enough to trust you and enquire. Template-heavy pages often miss that window."
    ),
    h3("2. Operational drag on your team"),
    p(
      "When something breaks, you lose hours chasing hosting support, plugin vendors, and temporary workarounds. Custom systems are engineered for maintainability so your team can focus on customers — not firefighting."
    ),
    h3("3. A ceiling on growth features"),
    p(
      "Need a conversion-focused e-commerce module? A loyalty mobile app? Real-time sync between website and bookings? Template platforms fight you. Custom platforms are designed to expand with your business."
    ),
    h2("🛠️ The Custom Code Alternative"),
    p(
      "Karol Digital builds ",
      { text: "100% custom digital assets", marks: ["strong"] },
      " — modern, fast, high-quality websites and applications without template bloat. The goal is not “a nicer theme.” The goal is a high-performance system that turns visitors into qualified enquiries and customers."
    ),
    p("A premium custom foundation typically includes:"),
    numbered("A bespoke information architecture shaped around how you sell"),
    numbered("Lightning-fast performance across phones, tablets, and desktops"),
    numbered("Rock-solid security without unstable third-party plugin stacks"),
    numbered("Modern, secure content systems that are easy for your team to use"),
    numbered("Clear conversion journeys from first impression to enquiry or checkout"),
    h2("📱 Where Mobile Apps Fit In"),
    p(
      "As you grow, many businesses benefit from ",
      { text: "custom mobile applications (iOS & Android)", marks: ["strong"] },
      " that deepen loyalty and streamline bookings or accounts. Because we engineer with a unified workflow, your website, store, and app can share one modern database — so updates appear everywhere in real time."
    ),
    p("That is a conversion-focused digital ecosystem — not a patchwork of disconnected tools."),
    h2("✅ Checklist: Signs You Have Outgrown Templates"),
    checkItem("Speed issues", "mobile users bounce before they read your offer"),
    checkItem("Broken updates", "plugins fail after routine maintenance"),
    checkItem("Enquiry drop-off", "traffic exists but qualified leads do not"),
    checkItem("Feature limits", "you cannot launch the workflows your competitors already use"),
    checkItem("Brand mismatch", "your site looks generic compared with your real-world service quality"),
    h2("🎯 What Good Looks Like for Small Businesses"),
    p(
      "Ambitious small businesses do not need developer jargon. They need outcomes: faster pages, clearer messaging, safer systems, and digital tools customers enjoy using. That is exactly how we frame high-performance web development and bespoke app engineering."
    ),
    p(
      "Whether you are replacing a fragile builder site or planning a first premium build, invest in infrastructure that still looks smart two years from now — not a temporary template that becomes a liability."
    ),
    ...ctaClose("a custom website or connected mobile application"),
  ],

  "how-much-does-a-professional-website-cost-uk-small-business-2026": () => [
    h2("📌 Introduction"),
    p(
      "“How cheap can we go?” is the wrong starting question for a growth-minded business. A better question is: ",
      { text: "what digital infrastructure will win trust, convert demand, and scale with us?", marks: ["strong"] }
    ),
    p(
      "This guide reframes website spend as an investment in high-performance custom web assets — including websites, conversion-focused e-commerce modules, and optional mobile apps — for UK small businesses."
    ),
    h2("🚀 Why Low-Tier Pricing Mentality Holds You Back"),
    p(
      "Budget template packages often look attractive because the monthly fee is low. The hidden costs appear later: slow pages, limited design control, plugin fees, rebuilding work, and missed enquiries."
    ),
    p("Common low-tier traps:"),
    checkItem("Template ceilings", "you cannot shape journeys around how you actually sell"),
    checkItem("Performance debt", "themes and plugins drag Core Web Vitals down"),
    checkItem("Security overhead", "constant patching of fragile third-party code"),
    checkItem("Replatforming costs", "paying twice when the builder can no longer keep up"),
    h2("💡 What You Are Really Investing In"),
    h3("1. High-performance custom websites"),
    p(
      "A professional custom build is engineered for clarity, speed, and conversion. It is not a recycled layout with your logo dropped in. Messaging, structure, and calls-to-action are designed around qualified enquiries."
    ),
    h3("2. Modern secure content systems"),
    p(
      "Your team should update services, case studies, and offers confidently — without breaking the site. Premium builds include modern content systems that stay fast and secure."
    ),
    h3("3. Conversion-focused e-commerce when you sell online"),
    p(
      "If you take payments, you need more than a bolted-on shop widget. Conversion-focused e-commerce engines prioritise secure checkout, speed, and a smooth path from browse to buy."
    ),
    h3("4. Custom mobile applications as you scale"),
    p(
      "Loyalty, bookings, and account access often belong in a bespoke iOS & Android app. When website, store, and app share a unified database, operational friction drops and customer experience rises."
    ),
    h2("🛠️ How Karol Digital Frames Packages"),
    p("Instead of “starter template tiers,” our packaging language reflects custom engineering outcomes:"),
    bullet("🎯 ", { text: "Professional Custom Build", marks: ["strong"] }, " — premium foundation without template bloat"),
    bullet("📈 ", { text: "Core Growth / Growth", marks: ["strong"] }, " — stronger conversion architecture and performance tuning"),
    bullet("🛒 ", { text: "Premium / Enterprise", marks: ["strong"] }, " — advanced custom features and e-commerce capability"),
    bullet("📱 ", { text: "Custom Mobile Applications", marks: ["strong"] }, " — custom scoped iOS & Android engineering"),
    p(
      "Every serious build includes a clear fixed quote before work starts — so you invest with confidence."
    ),
    h2("✅ Investment Checklist for Small Businesses"),
    checkItem("Outcomes first", "define the enquiries, bookings, or sales you need"),
    checkItem("Performance targets", "insist on lightning-fast mobile experiences"),
    checkItem("Security posture", "avoid unstable plugin stacks as your core architecture"),
    checkItem("Scalability", "confirm you can add store modules or apps later without a rebuild"),
    checkItem("Ownership", "ensure you own the code and content systems"),
    h2("📌 Budgeting with Ambition (Not Austerity)"),
    p(
      "Think in phases if needed: audit → custom website → e-commerce extensions → mobile app. That path still beats launching on a fragile template and rebuilding under pressure later."
    ),
    p(
      "High-performance digital infrastructure is not vanity. It is how modern small businesses look credible, respond faster, and convert more of the right customers."
    ),
    ...ctaClose("custom web assets that match your growth stage"),
  ],

  "how-to-choose-the-right-website-design-package-for-your-small-business-in-2025": () => [
    h2("📌 Introduction"),
    p(
      "Choosing a website package should not mean picking the cheapest template tier. For ambitious small businesses, it means selecting ",
      { text: "custom software systems and e-commerce modules", marks: ["strong"] },
      " that can scale with demand."
    ),
    p(
      "This article shows how to evaluate packages through outcomes — performance, conversion, security, and future mobile capability — rather than feature checklists designed to upsell plugins."
    ),
    h2("🚀 Scaling Past Basic Builders"),
    p(
      "Basic builders help you publish pages. They rarely help you engineer growth. When competitors load faster, explain offers more clearly, and follow up through connected apps, a limited builder becomes a bottleneck."
    ),
    p("Signals you need a custom package:"),
    checkItem("Complex services", "your offer cannot fit a generic five-page template"),
    checkItem("Lead quality issues", "traffic arrives but enquiries are vague or low intent"),
    checkItem("Sales online", "you need a real conversion-focused store experience"),
    checkItem("Retention goals", "customers should return via app bookings or loyalty tools"),
    h2("💡 How to Compare Packages Like an Operator"),
    h3("1. Architecture over cosmetics"),
    p(
      "Ask whether the package produces a bespoke structure for your buyer journey — or a rearranged stock theme. Premium custom builds start with strategy, then engineering."
    ),
    h3("2. Performance and security as defaults"),
    p(
      "Lightning-fast speeds and rock-solid security should be baseline, not paid extras. Template bloat is usually incompatible with both."
    ),
    h3("3. Conversion instrumentation"),
    p(
      "Look for intentional CTAs, form strategy, trust signals, and page jobs. A growth package should improve enquiry rate — not just add more pages."
    ),
    h3("4. Expansion paths"),
    p(
      "Confirm you can add e-commerce modules or ",
      { text: "bespoke mobile apps", marks: ["strong"] },
      " later without throwing away the foundation. Unified databases keep website, store, and app aligned."
    ),
    h2("🛠️ What Karol Digital Packages Emphasise"),
    numbered("100% custom code with zero template bloat"),
    numbered("Modern secure content management your team can use"),
    numbered("Conversion-focused UX on the journeys that matter"),
    numbered("Performance tuning for search visibility and speed"),
    numbered("Optional custom iOS & Android application scoping"),
    h2("✅ Package Selection Checklist"),
    checkItem("Goals documented", "enquiries, bookings, sales, or retention"),
    checkItem("Audience clarity", "who must trust you in the first three seconds"),
    checkItem("Content readiness", "services, proof, FAQs, and offers prepared"),
    checkItem("Integration needs", "CRM, payments, booking, or analytics"),
    checkItem("Success metrics", "how you will judge performance after launch"),
    h2("🎯 Practical Recommendation"),
    p(
      "If you are replacing a builder site, prioritise a Professional or Core Growth custom build. If you already attract traffic, prioritise conversion and performance upgrades. If retention matters, plan mobile application capability early."
    ),
    p(
      "The winning choice is the package that creates a modern, high-quality digital ecosystem — not the one that merely looks busy."
    ),
    ...ctaClose("the right custom systems package"),
  ],

  "turn-visitors-into-loyal-clients-2026": () => [
    h2("📌 Introduction"),
    p(
      "Clicks are not loyalty. Loyalty is what happens after the first enquiry — when customers find it easy to return, book again, and recommend you."
    ),
    p(
      "In 2026, growing small businesses win retention with ",
      { text: "conversion-focused websites plus custom mobile applications", marks: ["strong"] },
      " that keep the relationship active on the device customers use every day."
    ),
    h2("🚀 From Traffic to Trust to Repeat Business"),
    p(
      "Most websites stop at “contact us.” That leaves retention to chance. A high-performance digital ecosystem continues the journey with accounts, bookings, reminders, and loyalty experiences."
    ),
    p("A stronger lifecycle looks like this:"),
    numbered("Discover you through a fast, clear website"),
    numbered("Enquire or purchase through a frictionless journey"),
    numbered("Return via a bespoke mobile app experience"),
    numbered("Stay updated because website and app share one database"),
    h2("📱 Why Custom Mobile Apps Drive Loyalty"),
    h3("1. Convenience beats goodwill alone"),
    p(
      "Customers reward businesses that remove friction. A polished iOS & Android app can make re-booking, reordering, or checking project status faster than email chains."
    ),
    h3("2. Presence without being intrusive"),
    p(
      "Thoughtful notifications and easy account access keep you relevant — especially for service businesses with recurring needs."
    ),
    h3("3. Data unity across channels"),
    p(
      "When your website, store, and mobile app sync in real time, customers stop receiving conflicting information. That reliability builds premium trust."
    ),
    h2("💡 Website Still Matters (A Lot)"),
    p(
      "Apps do not replace websites. They extend them. Your site remains the high-performance authority layer: positioning, proof, SEO/AI search visibility, and first conversion. The app becomes the retention layer."
    ),
    p("Together they create:"),
    checkItem("Faster first impressions", "custom pages engineered for conversion"),
    checkItem("Stronger second purchases", "mobile journeys designed for return visits"),
    checkItem("Cleaner operations", "one source of truth for products, slots, and customer records"),
    h2("🛠️ Features Small Businesses Actually Use"),
    bullet("📅 ", { text: "Mobile bookings", marks: ["strong"] }, " — reduce back-and-forth scheduling"),
    bullet("🔐 ", { text: "Account access", marks: ["strong"] }, " — secure areas for documents or order history"),
    bullet("🎁 ", { text: "Loyalty mechanics", marks: ["strong"] }, " — rewards that encourage repeat work"),
    bullet("⚡ ", { text: "Real-time updates", marks: ["strong"] }, " — status changes reflected everywhere instantly"),
    h2("✅ Loyalty Readiness Checklist"),
    checkItem("You have repeat purchase potential"),
    checkItem("Customers already message you for simple updates"),
    checkItem("Your website converts — but retention is manual"),
    checkItem("You want one connected system instead of disconnected tools"),
    h2("🎯 Business Outcomes Over Jargon"),
    p(
      "You do not need “full-stack” language to evaluate this. You need modern, fast, high-quality experiences that make customers stay. That is the promise of bespoke mobile apps paired with high-performance web development."
    ),
    ...ctaClose("a loyalty-focused website and mobile app system"),
  ],

  "interactive-catering-menu-vs-pdf-sales": () => [
    h2("📌 Introduction"),
    p(
      "If your catering menu still lives in a PDF, you are asking hungry mobile customers to pinch, zoom, and hope. That friction kills impulse bookings."
    ),
    p(
      "Forward-looking food brands replace static files with ",
      { text: "high-performance interactive menus", marks: ["strong"] },
      " — and increasingly, custom ordering apps that keep regulars coming back."
    ),
    h2("🚀 Why PDFs Quietly Damage Sales"),
    checkItem("Poor mobile UX", "customers abandon before they see signature dishes"),
    checkItem("Weak discoverability", "search engines struggle to understand PDF content"),
    checkItem("No conversion path", "interest does not flow into enquiry or checkout"),
    checkItem("Update pain", "every menu change means re-exporting and re-uploading files"),
    h2("💡 The Modern Catering Stack"),
    h3("1. Interactive website menus"),
    p(
      "Custom-built menu experiences load fast, look premium, and guide users toward quotes, tasting bookings, or orders. They are engineered for conversion — not bolted onto a generic restaurant theme."
    ),
    h3("2. Conversion-focused booking journeys"),
    p(
      "Clear CTAs, package options, and trust signals help corporate and private clients take action without calling during service hours."
    ),
    h3("3. Custom mobile applications"),
    p(
      "A bespoke iOS & Android app can support repeat ordering, loyalty perks, event reminders, and saved preferences — especially valuable for corporate catering relationships."
    ),
    h2("📱 Real-Time Sync Across Website and App"),
    p(
      "The operational win is huge: update a seasonal dish once and it appears on your website and mobile app instantly because both share a unified database. That is high-quality engineering translated into fewer mistakes and fresher offers."
    ),
    p("A connected ecosystem typically includes:"),
    numbered("A fast marketing website with interactive menus"),
    numbered("Optional e-commerce or deposit checkout where relevant"),
    numbered("A custom mobile app for loyal and corporate clients"),
    numbered("Shared product and availability data everywhere"),
    h2("✅ Catering Digital Checklist"),
    checkItem("Menus readable on mobile without zooming"),
    checkItem("Packages and dietary info structured clearly"),
    checkItem("Enquiry or order path visible on every key screen"),
    checkItem("Proof elements — photos, testimonials, event types — easy to scan"),
    checkItem("A plan for retention beyond the first booking"),
    h2("🎯 Outcomes That Matter to Owners"),
    p(
      "More completed enquiries. Fewer admin messages. Better repeat rates. A brand that feels premium on every device. Those are the business reasons to leave PDFs behind."
    ),
    ...ctaClose("interactive menus and a catering mobile app"),
  ],

  "construction-website-design-tips-uk-builders": () => [
    h2("📌 Introduction"),
    p(
      "Local reputation still wins construction work — but many high-value clients now shortlist online before they ever shake your hand."
    ),
    p(
      "Builders who invest in ",
      { text: "high-performance websites and custom quote apps", marks: ["strong"] },
      " respond faster, look more professional, and convert more site visits into quote-ready conversations."
    ),
    h2("🚀 Why a Basic Builder Site Is Not Enough"),
    p(
      "A thin brochure page with a phone number leaves money on the table. Decision-makers want proof, clarity, and an easy next step — especially on mobile while visiting sites or comparing contractors."
    ),
    checkItem("Slow template themes frustrate busy clients"),
    checkItem("Unclear service pages create the wrong type of leads"),
    checkItem("Photo galleries without structure fail to sell capability"),
    checkItem("Manual follow-up loses momentum after the first enquiry"),
    h2("💡 High-Performance Website Essentials for Trades"),
    h3("1. Trust in the first screen"),
    p(
      "Show who you help, where you work, and what to do next. Premium presentation signals reliability before anyone reads a case study."
    ),
    h3("2. Project storytelling that converts"),
    p(
      "Organise work by project type, budget band, or property style so visitors self-qualify quickly."
    ),
    h3("3. Lightning-fast mobile performance"),
    p(
      "Your buyers are on phones. Custom engineering keeps image-heavy portfolios fast without template bloat."
    ),
    h2("📱 Custom Quote Apps for Field-Ready Teams"),
    p(
      "A bespoke mobile application can capture quote requests, site notes, and follow-ups while you are still on location. When the app and website share a unified database, office and field stay aligned."
    ),
    bullet("📋 ", { text: "Faster quote intake", marks: ["strong"] }, " from mobile browsers or app forms"),
    bullet("🛠️ ", { text: "Clearer scope communication", marks: ["strong"] }, " with structured request fields"),
    bullet("⚡ ", { text: "Real-time status", marks: ["strong"] }, " so customers are not left guessing"),
    h2("✅ Construction Digital Checklist"),
    checkItem("Service pages for core trades and specialisms"),
    checkItem("Location cues for local search and trust"),
    checkItem("Strong CTAs for quote requests on every key page"),
    checkItem("Compliance and insurance signals where relevant"),
    checkItem("A retention path for maintenance or repeat projects"),
    h2("🎯 From Handshakes to Systems"),
    p(
      "You do not need to become a software company. You need modern, conversion-focused tools that match how construction sales actually happen. That is the role of custom web and app engineering for UK builders."
    ),
    ...ctaClose("a builder website and quote-ready mobile workflow"),
  ],

  "immigration-consultant-website-essentials": () => [
    h2("📌 Introduction"),
    p(
      "Immigration clients arrive under pressure. If your website feels unclear, slow, or “cheap,” trust collapses before your expertise gets a chance to speak."
    ),
    p(
      "High-performing practices combine a ",
      { text: "high-trust custom website", marks: ["strong"] },
      " with optional ",
      { text: "client portal style mobile apps", marks: ["strong"] },
      " that make bookings and updates calmer for everyone."
    ),
    h2("🚀 Why Template Legal Sites Undermine Authority"),
    checkItem("Generic layouts that look identical to unrelated industries"),
    checkItem("Confusing service menus that increase anxiety"),
    checkItem("Weak mobile journeys for evening researchers"),
    checkItem("Forms that create admin chaos instead of qualified consultations"),
    h2("💡 Five Essentials for Premium Immigration Platforms"),
    h3("1. Clarity under stress"),
    p(
      "Visitors should immediately understand who you help and how to start. Use plain language, clear pathways, and calm visual hierarchy."
    ),
    h3("2. Trust signals that feel specific"),
    p(
      "Professional presentation, process transparency, and credible proof matter more than stock icons. Custom design supports that seriousness."
    ),
    h3("3. Conversion-focused consultation booking"),
    p(
      "Make the next step obvious. Structured forms that capture visa context improve lead quality and reduce repetitive emails."
    ),
    h3("4. Secure foundations"),
    p(
      "Rock-solid security and dependable performance protect both reputation and client confidence."
    ),
    h3("5. Mobile tools for ongoing communication"),
    p(
      "A bespoke app can support appointment reminders, checklist readiness, and secure progress updates — especially valuable for multi-stage matters."
    ),
    h2("📱 Client Portal Apps Without the Jargon"),
    p(
      "Think outcomes, not stack diagrams: fewer missed messages, clearer expectations, faster responses. When website and app share a unified database, your team works from one source of truth."
    ),
    h2("✅ Immigration Website Checklist"),
    checkItem("Dedicated pages for major service lines"),
    checkItem("FAQ content that reduces repetitive queries"),
    checkItem("✅ Automated enquiry routing by matter type where helpful"),
    checkItem("Mobile-first performance on every key page"),
    checkItem("A defined path from first visit to booked consultation"),
    h2("🎯 Built for Regulated Service Brands"),
    p(
      "Karol Digital engineers modern, high-quality platforms for professional services — focusing on trust, speed, and conversion while keeping the experience human for applicants and families."
    ),
    ...ctaClose("an immigration website and client-friendly mobile layer"),
  ],

  "beyond-brochure-websites-building-brands-that-generate-leads-and-sales": () => [
    h2("📌 Introduction"),
    p(
      "A brochure website answers “what do you do?” A growth system answers “what should I do next?” and makes that action easy."
    ),
    p(
      "This article shows how small businesses move beyond static pages into ",
      { text: "conversion-focused digital ecosystems", marks: ["strong"] },
      " — websites, e-commerce modules, and connected apps engineered to generate leads and sales."
    ),
    h2("🚀 The Limits of Brochure Thinking"),
    p(
      "Pretty photography and a phone number are not a commercial strategy. Without intentional journeys, analytics, and follow-through, your site becomes an expensive business card."
    ),
    checkItem("No page-level jobs — visitors wander"),
    checkItem("No conversion hierarchy — everything shouts equally"),
    checkItem("No retention layer — first-time buyers disappear"),
    checkItem("No shared data — channels contradict each other"),
    h2("💡 Anatomy of a Selling Ecosystem"),
    h3("Brand positioning that converts"),
    p(
      "Clear messaging builds trust quickly. Custom structure lets you emphasise differentiators instead of default template sections."
    ),
    h3("High-performance web experiences"),
    p(
      "Speed and clarity keep people in the funnel. Custom engineering removes template weight that kills momentum."
    ),
    h3("E-commerce modules when revenue is online"),
    p(
      "Conversion-focused stores prioritise secure checkout and frictionless mobile buying — not plugin clutter."
    ),
    h3("Mobile apps for lifetime value"),
    p(
      "Bespoke apps extend the relationship after the first transaction with bookings, reorders, and loyalty features."
    ),
    h2("🛠️ Unified Database Advantage"),
    p(
      "When website, store, and app share one modern database, catalogue changes, availability, and customer records stay synchronised. Teams waste less time. Customers trust you more."
    ),
    h2("✅ Lead & Sales System Checklist"),
    checkItem("Homepage converts attention into a next step"),
    checkItem("Service or product pages answer objections"),
    checkItem("Proof is specific and easy to verify"),
    checkItem("Forms or checkout are short and purposeful"),
    checkItem("Retention channel exists beyond email alone"),
    h2("🎯 From Presence to Performance"),
    p(
      "Karol Digital builds digital ecosystems around commercial outcomes: more qualified enquiries, stronger sales paths, and modern experiences customers return to."
    ),
    ...ctaClose("a conversion-focused website-to-app ecosystem"),
  ],

  "homepage-has-3-seconds-are-you-wasting-them": () => [
    h2("📌 Introduction"),
    p(
      "You have roughly three seconds before a visitor decides to stay or leave. In that window, template clutter and vague headlines lose money silently."
    ),
    p(
      "High-performance custom homepages are engineered to win those seconds with clarity, speed, and an unmistakable next step."
    ),
    h2("🚀 What Happens in the First Scroll"),
    p("Visitors subconsciously ask:"),
    numbered("Do I understand what you do?"),
    numbered("Is this relevant to me?"),
    numbered("Do you look credible?"),
    numbered("What should I do now?"),
    p(
      "If any answer is fuzzy, they bounce — often before your best case study ever loads."
    ),
    h2("💡 Above-the-Fold Essentials"),
    checkItem("Specific headline", "who you help + outcome"),
    checkItem("Supporting line", "proof or differentiator in plain English"),
    checkItem("Primary CTA", "book, enquire, or get a quote"),
    checkItem("Trust cues", "logos, ratings, regulated badges, or results"),
    checkItem("Fast visual", "premium imagery that does not crush performance"),
    h2("⚡ Speed Is Part of the Message"),
    p(
      "A slow homepage feels low-quality even when the copy is strong. Custom builds avoid theme bloat so your first impression is lightning-fast on mobile."
    ),
    h2("🛠️ Conversion Structure Beyond the Hero"),
    p(
      "After the first screen, guide visitors through services, proof, process, and FAQs — each section with a job. Do not rely on a long undifferentiated template stack."
    ),
    bullet("🎯 Services framed around customer problems"),
    bullet("📈 Proof that reduces risk"),
    bullet("🧭 Process that sets expectations"),
    bullet("📞 Repeated CTAs without desperation"),
    h2("✅ Homepage Recovery Checklist"),
    checkItem("Offer visible without scrolling on mobile"),
    checkItem("CTA contrast and wording are unmistakable"),
    checkItem("No auto distractions competing with the message"),
    checkItem("Core Web Vitals support a premium feel"),
    checkItem("Path into deeper services, store, or app journeys is clear"),
    h2("🎯 Engineered First Impressions"),
    p(
      "Karol Digital treats the homepage as a conversion instrument — modern, fast, and designed for UK service businesses that need qualified enquiries, not vanity traffic."
    ),
    ...ctaClose("a homepage that converts in the first three seconds"),
  ],

  "best-website-design-immigration-lawyers-london-2026": () => [
    h2("📌 Introduction"),
    p(
      "London’s immigration market is crowded. Authority is not claimed with stock banners — it is engineered through clarity, performance, and conversion-focused journeys."
    ),
    p(
      "This 2026 guide outlines how immigration lawyers can use ",
      { text: "high-performance custom web platforms", marks: ["strong"] },
      " to attract qualified consultations."
    ),
    h2("🚀 Competitive Reality in London"),
    p(
      "Clients compare multiple firms in a single evening. The practices that win feel organised, responsive, and credible on every device."
    ),
    checkItem("Fast pages outperform heavy templates"),
    checkItem("Specific service pathways beat generic ‘we do visas’ copy"),
    checkItem("Strong CTAs convert research into booked calls"),
    checkItem("Secure presentation reinforces professional trust"),
    h2("💡 Design Principles for Legal Lead Generation"),
    h3("1. Authority without intimidation"),
    p(
      "Premium visuals and calm typography communicate competence while remaining accessible to stressed applicants."
    ),
    h3("2. Structured service architecture"),
    p(
      "Create dedicated journeys for major matter types so clients self-navigate and arrive more informed."
    ),
    h3("3. Conversion mechanics"),
    p(
      "Consultation booking should be obvious, mobile-friendly, and supported by expectation-setting copy."
    ),
    h2("🛠️ Technical Foundations That Matter"),
    bullet("⚡ Lightning-fast performance for mobile researchers"),
    bullet("🔒 Rock-solid security as a trust signal"),
    bullet("🧩 Modern content systems for updates and guides"),
    bullet("📱 Room to add client-friendly mobile extensions later"),
    h2("✅ London Immigration Website Checklist"),
    checkItem("Clear positioning for your ideal client segments"),
    checkItem("Proof and process pages that reduce anxiety"),
    checkItem("Local relevance without keyword stuffing"),
    checkItem("Accessibility and readability for diverse audiences"),
    checkItem("Analytics that show which pages create consultations"),
    h2("🎯 Custom Engineering for Professional Services"),
    p(
      "Karol Digital builds modern platforms for immigration and legal brands that need more than a template storefront — they need a lead generation system worthy of London competition."
    ),
    ...ctaClose("a high-performance immigration law firm website"),
  ],

  "is-your-business-ready-for-ai-search-2026-guide": () => [
    h2("📌 Introduction"),
    p(
      "AI Overviews and answer engines change how discovery works. Being listed in ten blue links is no longer the whole game — being cited as a trusted source matters."
    ),
    p(
      "High-performance custom websites with clear structure and strong technical foundations are far more likely to earn that visibility than slow, template-heavy pages."
    ),
    h2("🚀 What AI Search Changes for Small Businesses"),
    p(
      "Buyers ask conversational questions. Engines synthesise answers from entities they understand. If your services are vague, buried, or poorly structured, you get skipped."
    ),
    checkItem("Ambiguous service copy becomes invisible"),
    checkItem("Slow sites lose crawl and user trust signals"),
    checkItem("Thin brochure pages lack citable depth"),
    checkItem("Disconnected tools create inconsistent facts across the web"),
    h2("💡 ✅ Checklist: How to Rank in 2026"),
    checkItem("Speed", "prioritise experiences that load exceptionally fast"),
    checkItem("Security", "HTTPS and clean custom code support trusted-source status"),
    checkItem("Mobile-first", "most AI-assisted research happens on phones"),
    checkItem("Answer-ready pages", "define services clearly with practical detail"),
    checkItem("Consistent entities", "NAP, offers, and expertise align everywhere"),
    h2("🛠️ High-Performance Content Systems"),
    p(
      "Modern secure content systems help your team publish guides, FAQs, and service updates without wrecking performance. That operational ease supports both classic SEO and AI search readiness."
    ),
    h2("📈 From Visibility to Conversion"),
    p(
      "Ranking alone is incomplete. Pair AI-ready content with conversion-focused journeys so cited visibility still becomes enquiries, bookings, or sales."
    ),
    bullet("🎯 Clear CTAs on every answer-rich page"),
    bullet("📞 Contact paths that match search intent"),
    bullet("📱 Optional apps that continue the relationship after discovery"),
    h2("✅ AI Readiness Audit Prompts"),
    numbered("Can a stranger understand your offer in five seconds?"),
    numbered("Do key services have dedicated, substantive pages?"),
    numbered("Is your site measurably fast on mobile?"),
    numbered("Are facts consistent across site, profiles, and documents?"),
    numbered("Can you update content without plugin chaos?"),
    h2("🎯 Engineered for Findability and Action"),
    p(
      "Karol Digital helps UK businesses prepare for AI search with high-performance web development, structured content, and conversion discipline — so visibility has a commercial purpose."
    ),
    ...ctaClose("an AI-ready, high-performance website foundation"),
  ],

  "financial-services-website-design-trust-factor": () => [
    h2("📌 Introduction"),
    p(
      "In financial services, your website is a digital handshake. High-net-worth and cautious clients decide quickly whether you feel safe enough to contact."
    ),
    p(
      "This article explores how ",
      { text: "high-performance custom platforms", marks: ["strong"] },
      " — and optional secure client apps — build confidence instead of breaking it."
    ),
    h2("🚀 Trust Is a Design and Engineering Problem"),
    p(
      "Stock templates with playful illustrations can unintentionally signal inexperience. Slow pages feel careless. Broken forms feel unsafe. Premium brands need intentional craft."
    ),
    checkItem("Visual seriousness matched to financial advice contexts"),
    checkItem("Unambiguous service positioning"),
    checkItem("Performance that feels instantaneous"),
    checkItem("Security posture you can stand behind"),
    h2("💡 Trust-Building Website Essentials"),
    h3("1. Clarity over cleverness"),
    p(
      "Explain who you help and how engagement starts. Confusion is the enemy of conversion in regulated sectors."
    ),
    h3("2. Proof without hype"),
    p(
      "Credentials, process transparency, and calm case narratives outperform exaggerated claims."
    ),
    h3("3. Conversion paths for qualified conversations"),
    p(
      "Make consultation requests structured and respectful of client privacy expectations."
    ),
    h2("📱 Secure Client Apps as a Confidence Layer"),
    p(
      "For ongoing relationships, a bespoke mobile application can provide account-style access to updates or document readiness — while sharing a unified database with your website systems."
    ),
    p(
      "Done well, this feels modern and considerate — not gimmicky."
    ),
    h2("✅ Financial Firm Digital Checklist"),
    checkItem("Homepage communicates competence in seconds"),
    checkItem("Service pages reduce ambiguity"),
    checkItem("CTAs are clear but never aggressive"),
    checkItem("Mobile experience equals desktop quality"),
    checkItem("Content updates do not rely on fragile plugins"),
    h2("🎯 Engineered for Professional Credibility"),
    p(
      "Karol Digital builds high-performance web platforms for financial brands that need trust, conversion, and long-term technical reliability."
    ),
    ...ctaClose("a trust-led financial services platform"),
  ],

  "why-every-small-business-needs-a-modern-website-in-2025": () => [
    h2("📌 Introduction"),
    p(
      "A modern website is no longer a nice-to-have brochure. For growing small businesses, it is the front door to trust, visibility, and conversion."
    ),
    p(
      "In practical terms, “modern” means ",
      { text: "custom high-performance digital platforms", marks: ["strong"] },
      " — not recycled templates that look dated within a year."
    ),
    h2("🚀 What Customers Expect Now"),
    checkItem("Instant clarity on phones"),
    checkItem("Fast load times as a basic respect signal"),
    checkItem("Obvious next steps to enquire or buy"),
    checkItem("Professional presentation matching real-world service quality"),
    h2("💡 Why Custom Beats “Good Enough” Builders"),
    p(
      "Builder sites can publish content quickly, but they often cap your brand, speed, and feature roadmap. Custom platforms are engineered around your offer and can expand into e-commerce modules or mobile apps later."
    ),
    h3("Business risks of staying basic"),
    bullet("📉 Higher bounce rates from slow pages"),
    bullet("😕 Brand mismatch that reduces trust"),
    bullet("🔌 Plugin dependency and breakage"),
    bullet("🧱 No clean path to apps or advanced workflows"),
    h2("🛠️ Components of a Modern Platform"),
    numbered("Conversion-focused website architecture"),
    numbered("Lightning-fast front-end performance"),
    numbered("Modern secure content management"),
    numbered("Analytics that inform decisions"),
    numbered("Optional store and mobile application layers"),
    h2("✅ Modernisation Checklist"),
    checkItem("Homepage states offer and CTA above the fold"),
    checkItem("Services are structured for scan reading"),
    checkItem("Proof is current and specific"),
    checkItem("Contact journeys work flawlessly on mobile"),
    checkItem("You own a foundation you can extend"),
    h2("🎯 Growth Is the Point"),
    p(
      "Karol Digital helps small businesses replace fragile starter setups with modern, high-quality systems designed to attract customers and support long-term growth."
    ),
    ...ctaClose("a modern custom digital platform"),
  ],

  "the-importance-of-website-speed-for-small-businesses-in-2025": () => [
    h2("📌 Introduction"),
    p(
      "Website speed is not a technical vanity metric. It is a growth strategy. Slow pages reduce trust, hurt visibility, and cut conversions — especially on mobile."
    ),
    p(
      "Custom high-performance engineering beats template bloat because every unnecessary plugin is also unnecessary wait time."
    ),
    h2("🚀 What Slow Really Costs"),
    checkItem("Higher bounce rates before your offer is read"),
    checkItem("Weaker engagement signals for search"),
    checkItem("Lower enquiry and checkout completion"),
    checkItem("Brand perception that feels outdated"),
    h2("💡 Why Templates Struggle with Speed"),
    p(
      "Many themes ship with features you never use. Page builders inject heavy scripts. Plugins overlap. The result is a site that looks acceptable in a staging preview and disappoints in the real world."
    ),
    h2("🛠️ Custom Performance Advantages"),
    numbered("Lean code without unused theme modules"),
    numbered("Image and asset strategies designed for mobile"),
    numbered("Cleaner architecture for Core Web Vitals"),
    numbered("Intentional feature growth instead of plugin sprawl"),
    h2("📈 Speed and Conversion Working Together"),
    p(
      "A fast page that confuses visitors still fails. Pair performance with conversion-focused structure: clear offers, strong CTAs, and proof. That combination is where high-performance web development pays for itself."
    ),
    bullet("⚡ Fast first contentful experiences"),
    bullet("🎯 Immediate understanding of next steps"),
    bullet("📱 Consistent quality on mid-range phones"),
    h2("✅ Speed Improvement Checklist"),
    checkItem("Measure mobile performance where customers actually browse"),
    checkItem("Remove unused scripts and builders where possible"),
    checkItem("Compress and properly size media"),
    checkItem("Prioritise custom rebuilds when template debt is structural"),
    checkItem("Re-test after every major content or feature change"),
    h2("🎯 Performance as a Premium Signal"),
    p(
      "Karol Digital treats speed as part of brand and revenue — engineering modern, incredibly fast websites that keep small-business visitors engaged long enough to act."
    ),
    ...ctaClose("a faster, conversion-ready custom website"),
  ],

  "enhancing-web-accessibility-for-better-user-experience": () => [
    h2("📌 Introduction"),
    p(
      "Accessibility is not a bolt-on badge. It is how high-quality custom websites include more customers — and convert more of them — through clarity and usability."
    ),
    p(
      "When experiences work for more people, you reduce friction for everyone: busy mobile users, older clients, and customers using assistive tools."
    ),
    h2("🚀 Inclusive Design Is Premium Design"),
    checkItem("Readable hierarchy instead of decorative chaos"),
    checkItem("Keyboard-friendly journeys and forms"),
    checkItem("Colour contrast that holds up in real environments"),
    checkItem("Captions and text alternatives where media matters"),
    h2("💡 Accessibility and Conversion"),
    p(
      "Confusing navigation hurts sales. Unclear forms lose enquiries. Accessibility improvements often look like conversion optimisation because both remove obstacles."
    ),
    h2("🛠️ Custom Engineering Advantages"),
    p(
      "Template sites can be hard to remediate because accessibility issues are baked into theme code. Custom builds can implement inclusive patterns from the start — and extend them into mobile applications later."
    ),
    numbered("Semantic structure search engines and assistive tech understand"),
    numbered("Focus states and form labels done properly"),
    numbered("Performance that supports usability on modest devices"),
    numbered("Content systems that keep new pages consistent"),
    h2("✅ Practical Accessibility Checklist"),
    checkItem("Headings follow a logical order"),
    checkItem("Buttons and links describe actions clearly"),
    checkItem("Forms explain errors helpfully"),
    checkItem("Media is not the only way to receive critical information"),
    checkItem("Mobile tap targets are comfortable"),
    h2("🎯 Better UX, Broader Reach"),
    p(
      "Karol Digital builds high-performance custom websites that take inclusion seriously — because modern brands grow when more of the right people can use them with confidence."
    ),
    ...ctaClose("an accessible, high-performance custom website"),
  ],

  "why-every-small-business-needs-a-conversion-optimised-website-2025-guide": () => [
    h2("📌 Introduction"),
    p(
      "Traffic without conversion is expensive noise. Conversion-focused digital systems turn attention into enquiries, sales, and repeat business."
    ),
    p(
      "This guide explains how small businesses engineer that outcome across websites, stores, and mobile apps — not with random tweaks, but with intentional custom design."
    ),
    h2("🚀 What Conversion Optimisation Really Means"),
    p(
      "It is not about manipulative tricks. It is about making the next useful action obvious: book, buy, call, or message — with trust and speed supporting the decision."
    ),
    checkItem("Clear value proposition early"),
    checkItem("Reduced friction in forms and checkout"),
    checkItem("Proof placed where doubt appears"),
    checkItem("Mobile journeys equal to desktop quality"),
    h2("💡 System Thinking Beats Page Tweaks"),
    h3("Website layer"),
    p(
      "Service and product pages must answer questions and guide action. Custom structure beats template sections that exist only because the theme included them."
    ),
    h3("E-commerce layer"),
    p(
      "Conversion-focused stores emphasise secure payments, fast browsing, and reassurance at checkout."
    ),
    h3("App layer"),
    p(
      "Bespoke mobile apps improve retention after the first conversion — bookings, reorders, loyalty — while sharing a unified database with your site and store."
    ),
    h2("🛠️ Measurement That Matters"),
    bullet("📈 Enquiry rate and lead quality"),
    bullet("🛒 Checkout completion"),
    bullet("📱 Return usage inside an app"),
    bullet("⚡ Performance metrics tied to bounce and conversion"),
    h2("✅ Conversion System Checklist"),
    checkItem("Every key page has one primary job"),
    checkItem("CTAs are consistent and visible"),
    checkItem("Objections are handled with proof and FAQs"),
    checkItem("Thank-you and follow-up paths are deliberate"),
    checkItem("You can iterate without fighting plugin limitations"),
    h2("🎯 Engineered for Revenue Outcomes"),
    p(
      "Karol Digital builds conversion-focused digital ecosystems for ambitious small businesses — modern, fast, and designed to turn interest into measurable growth."
    ),
    ...ctaClose("a conversion-focused web and app system"),
  ],
};

async function main() {
  const drafts = await client.fetch(
    `*[_type == "blogPost" && _id in path("drafts.**")]{
      _id, _type, title, slug, subtitle, seoTitle, seoDescription, seoKeywords,
      authorName, publishedAt, likes, comments, structuredData, mainImage, seoImage
    }`
  );

  console.log(`Expanding ${drafts.length} drafts...`);
  const tx = client.transaction();
  const report = [];

  for (const draft of drafts) {
    const slug = draft.slug?.current;
    const builder = bodies[slug];
    if (!builder) {
      console.warn("Missing body builder for", slug);
      continue;
    }
    const body = builder();
    const words = wordCount(body);
    if (words < 800) {
      console.warn(`WARN ${slug}: only ${words} words`);
    }
    tx.patch(draft._id, (p) => p.set({ body }));
    report.push({ slug, words, title: draft.title });
  }

  await tx.commit({ visibility: "async" });
  report.sort((a, b) => a.words - b.words);
  console.log(JSON.stringify({ updated: report.length, report }, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
