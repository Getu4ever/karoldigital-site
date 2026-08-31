import { LEAD_STATUS_VALUES, type LeadStatusLabel } from "@/lib/leads";

type Props = {
  counts: Record<LeadStatusLabel, number>;
  total: number;
};

export default function PipelineSummary({ counts, total }: Props) {
  return (
    <section>
      <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
        <p className="text-xs font-bold uppercase tracking-widest text-[#411b3f]">
          Pipeline snapshot
        </p>
        <p className="text-xs font-medium tabular-nums text-gray-500">
          {total} total lead{total === 1 ? "" : "s"}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        <article className="rounded-xl bg-[#102f35] px-4 py-3 text-white">
          <p className="text-[10px] font-bold uppercase tracking-widest text-brand-gold-muted">
            Total
          </p>
          <p className="mt-1 text-2xl font-bold tabular-nums">{total}</p>
        </article>
        {LEAD_STATUS_VALUES.map((status) => (
          <article
            key={status}
            className="rounded-xl border border-gray-100 bg-white px-4 py-3 shadow-sm"
          >
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
              {status}
            </p>
            <p className="mt-1 text-2xl font-bold tabular-nums text-[#102f35]">
              {counts[status]}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
