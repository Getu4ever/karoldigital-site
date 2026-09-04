import {
  PRIMARY_DISCOVERABILITY,
  SECONDARY_DISCOVERABILITY,
} from "@/lib/discoverability";

/**
 * Crawlable, speakable answers for target intents.
 * Styled quietly so it does not compete with the hero composition.
 */
export default function DiscoverabilityAnswers() {
  return (
    <section
      className="geo-keyword-answers border-t border-gray-100 bg-[#f7f5f2] px-6 py-16 md:px-10 md:py-20"
      aria-labelledby="discoverability-heading"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="discoverability-heading"
          className="geo-offer text-2xl font-bold tracking-tight text-[#102f35] md:text-3xl"
        >
          Who we help — and what we build
        </h2>
        <p className="geo-citation mt-4 text-base leading-relaxed text-gray-700">
          Custom studio booking systems UK for pole and aerial studios, plus
          conversion-focused websites for immigration lawyers, financial firms,
          London trades, and corporate catering.
        </p>

        <div className="mt-10 space-y-8">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#411b3f]">
              Primary — pole &amp; aerial studios
            </h3>
            <dl className="mt-4 space-y-5">
              {PRIMARY_DISCOVERABILITY.map((item) => (
                <div key={item.q}>
                  <dt className="font-semibold text-[#102f35]">{item.q}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-gray-700">
                    {item.a}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#411b3f]">
              Also — service industries
            </h3>
            <dl className="mt-4 space-y-5">
              {SECONDARY_DISCOVERABILITY.map((item) => (
                <div key={item.q}>
                  <dt className="font-semibold text-[#102f35]">{item.q}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-gray-700">
                    {item.a}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
