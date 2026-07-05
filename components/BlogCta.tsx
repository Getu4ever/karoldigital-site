import Link from "next/link";

interface BlogCtaProps {
  title?: string;
  description?: string;
}

export default function BlogCta({
  title = "Need a website that turns readers into enquiries?",
  description = "Book a free consultation if you want a new website, or request an audit if you want to improve the one you already have.",
}: BlogCtaProps) {
  return (
    <section className="rounded-3xl bg-gray-900 px-6 py-12 text-center text-white">
      <h2 className="mb-4 text-2xl font-bold md:text-3xl">{title}</h2>
      <p className="mx-auto mb-8 max-w-2xl text-gray-400">{description}</p>
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Link
          href="/book"
          className="inline-block rounded-full bg-yellow-400 px-10 py-3 font-bold text-[#102f35] transition hover:bg-yellow-500"
        >
          Book a Free Consultation
        </Link>
        <Link
          href="/book?service=Website+Audit"
          className="inline-block rounded-full border border-white/20 bg-white/10 px-10 py-3 font-bold text-white transition hover:bg-white/20"
        >
          Request a Website Audit
        </Link>
      </div>
    </section>
  );
}
