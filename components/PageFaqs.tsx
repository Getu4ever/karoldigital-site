import type { FaqItem } from "@/lib/geo";

export default function PageFaqs({
  title = "Frequently asked questions",
  items,
}: {
  title?: string;
  items: readonly FaqItem[];
}) {
  if (!items.length) return null;

  return (
    <section className="border-t border-gray-100 bg-white py-20 px-6 md:px-12">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-10 text-center text-3xl font-bold text-[#102f35] md:text-4xl">
          {title}
        </h2>
        <div className="space-y-4">
          {items.map((item) => (
            <details
              key={item.q}
              className="group rounded-xl border border-gray-200 p-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[#102f35]">
                <span>{item.q}</span>
                <span className="text-xl transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
