"use client";

import { Fragment, useState, useTransition, type Dispatch, type SetStateAction } from "react";
import {
  createInvoiceAction,
  deleteInvoiceAction,
  updateInvoiceAction,
} from "@/app/admin/actions/invoices";
import type { DatabaseStorageSnapshot, RecentInvoice, SystemHealthCheck } from "@/lib/ops-dashboard";
import {
  INVOICE_STATUS_VALUES,
  deriveFinancialOverview,
  formatGbp,
  type InvoiceStatus,
} from "@/lib/ops-dashboard";

type Props = {
  invoices: RecentInvoice[];
  onInvoicesChange: Dispatch<SetStateAction<RecentInvoice[]>>;
  storage: DatabaseStorageSnapshot;
  checks: SystemHealthCheck[];
};

const INVOICE_STATUS_CLASS: Record<InvoiceStatus, string> = {
  Paid: "bg-emerald-50 text-emerald-800 ring-1 ring-emerald-200",
  Sent: "bg-[#102f35]/10 text-[#102f35] ring-1 ring-[#102f35]/15",
  Overdue: "bg-amber-50 text-amber-900 ring-1 ring-amber-200",
};

type InvoiceDraft = {
  reference: string;
  clientName: string;
  amountGbp: string;
  status: InvoiceStatus;
  email: string;
};

function toDraft(invoice: RecentInvoice): InvoiceDraft {
  return {
    reference: invoice.reference,
    clientName: invoice.clientName,
    amountGbp: String(invoice.amountGbp),
    status: invoice.status,
    email: invoice.email || "",
  };
}

const EMPTY_ADD_DRAFT: InvoiceDraft = {
  reference: "",
  clientName: "",
  amountGbp: "",
  status: "Sent",
  email: "",
};

function storagePercent(usedMb: number, capacityMb: number): number {
  if (capacityMb <= 0) return 0;
  return Math.min(100, Math.max(0, (usedMb / capacityMb) * 100));
}

function remindMailto(invoice: RecentInvoice): string {
  const subject = encodeURIComponent(`Payment reminder — ${invoice.reference}`);
  const body = encodeURIComponent(
    `Hi ${invoice.clientName},\n\nThis is a reminder that invoice ${invoice.reference} for ${formatGbp(invoice.amountGbp)} is currently marked ${invoice.status}.\n\nKind regards,\nKarol Digital`
  );
  const to = invoice.email ? encodeURIComponent(invoice.email) : "";
  return `mailto:${to}?subject=${subject}&body=${body}`;
}

function currentMonthLabel(): string {
  return new Date().toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
  });
}

export default function RevenueOpsPanel({
  invoices,
  onInvoicesChange,
  storage,
  checks,
}: Props) {
  const [pending, startTransition] = useTransition();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draft, setDraft] = useState<InvoiceDraft | null>(null);
  const [adding, setAdding] = useState(false);
  const [addDraft, setAddDraft] = useState<InvoiceDraft>(EMPTY_ADD_DRAFT);
  const [error, setError] = useState<string | null>(null);

  const financial = deriveFinancialOverview(invoices);
  const overdue = financial.overdueInvoiceCount > 0;
  const usedPct = storagePercent(storage.estimatedUsedMb, storage.capacityMb);
  const storageWarn = usedPct >= 80;
  const allOperational = checks.every((check) => check.operational);
  const downCount = checks.filter((check) => !check.operational).length;

  function startEdit(invoice: RecentInvoice) {
    setAdding(false);
    setEditingId(invoice.id);
    setDraft(toDraft(invoice));
  }

  function cancelEdit() {
    setEditingId(null);
    setDraft(null);
  }

  function saveEdit(id: string) {
    if (!draft) return;
    const amountGbp = Number(draft.amountGbp);
    setError(null);
    startTransition(async () => {
      try {
        const updated = await updateInvoiceAction(id, {
          reference: draft.reference,
          clientName: draft.clientName,
          amountGbp,
          status: draft.status,
          email: draft.email,
        });
        onInvoicesChange((prev) => prev.map((row) => (row.id === id ? updated : row)));
        setEditingId(null);
        setDraft(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Could not save invoice.");
      }
    });
  }

  function onDelete(invoice: RecentInvoice) {
    if (
      !confirm(
        `Delete invoice ${invoice.reference} for ${invoice.clientName}? This cannot be undone.`
      )
    ) {
      return;
    }
    setError(null);
    startTransition(async () => {
      try {
        await deleteInvoiceAction(invoice.id);
        onInvoicesChange((prev) => prev.filter((row) => row.id !== invoice.id));
        if (editingId === invoice.id) cancelEdit();
      } catch (err) {
        setError(err instanceof Error ? err.message : "Could not delete invoice.");
      }
    });
  }

  function saveNew() {
    const amountGbp = Number(addDraft.amountGbp);
    setError(null);
    startTransition(async () => {
      try {
        const created = await createInvoiceAction({
          clientName: addDraft.clientName,
          amountGbp,
          status: addDraft.status,
          email: addDraft.email,
        });
        onInvoicesChange((prev) => [created, ...prev]);
        setAddDraft(EMPTY_ADD_DRAFT);
        setAdding(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Could not create invoice.");
      }
    });
  }

  return (
    <section className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-[#411b3f]">
            Revenue operations &amp; system health
          </p>
          <h2 className="text-xl font-bold text-[#102f35]">
            Billing, collections, and stack monitors
          </h2>
        </div>
        <p className="text-xs text-gray-500">
          {financial.openInvoiceCount} open · {invoices.length} total invoices
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-[#411b3f]">
            Financial overview
          </p>
          <h3 className="mb-4 text-lg font-bold text-[#102f35]">
            Financial health
          </h3>

          <div className="grid gap-3 sm:grid-cols-3">
            <article className="rounded-xl bg-[#102f35] px-4 py-4 text-white">
              <p className="text-[10px] font-bold uppercase tracking-widest text-brand-gold-muted">
                Paid ({currentMonthLabel()})
              </p>
              <p className="mt-2 text-2xl font-bold tabular-nums">
                {formatGbp(financial.paidCurrentMonthGbp)}
              </p>
              <p className="mt-1 text-xs text-white/60">Collected this month</p>
            </article>

            <article
              className={`relative overflow-hidden rounded-xl bg-[#102f35] px-4 py-4 text-white ${
                overdue ? "ring-2 ring-amber-400/80" : ""
              }`}
            >
              {overdue ? (
                <span
                  className="absolute right-3 top-3 h-2 w-2 rounded-full bg-amber-400"
                  aria-hidden
                />
              ) : null}
              <p className="text-[10px] font-bold uppercase tracking-widest text-brand-gold-muted">
                Overdue invoices
              </p>
              <p className="mt-2 text-2xl font-bold tabular-nums">
                {financial.overdueInvoiceCount}
              </p>
              <p className="mt-1 text-xs text-white/60">
                {overdue
                  ? `${formatGbp(financial.overdueAmountGbp)} outstanding`
                  : "None outstanding"}
              </p>
            </article>

            <article className="rounded-xl bg-[#102f35] px-4 py-4 text-white">
              <p className="text-[10px] font-bold uppercase tracking-widest text-brand-gold-muted">
                Projected revenue
              </p>
              <p className="mt-2 text-2xl font-bold tabular-nums">
                {formatGbp(financial.projectedRevenueGbp)}
              </p>
              <p className="mt-1 text-xs text-white/60">
                Paid this month + open invoices
              </p>
            </article>
          </div>

          <div className="mt-6">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
              <h4 className="font-semibold text-[#102f35]">Recent invoices</h4>
              <button
                type="button"
                disabled={pending}
                onClick={() => {
                  cancelEdit();
                  setAdding((open) => !open);
                  setAddDraft(EMPTY_ADD_DRAFT);
                }}
                className="rounded-full bg-[#102f35] px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-[#1a4a54] disabled:opacity-60"
              >
                {adding ? "Cancel" : "Add invoice"}
              </button>
            </div>
            <div className="overflow-x-auto rounded-xl border border-gray-100">
              <table className="min-w-full text-sm">
                <thead className="bg-[#102f35] text-white">
                  <tr>
                    <th className="px-3 py-2 text-left font-semibold">Client name</th>
                    <th className="px-3 py-2 text-right font-semibold">Amount</th>
                    <th className="px-3 py-2 text-left font-semibold">Status</th>
                    <th className="px-3 py-2 text-left font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {adding ? (
                    <tr className="border-t border-gray-100 bg-brand-gold-muted/15">
                      <td className="px-3 py-2.5">
                        <div className="space-y-1.5">
                          <input
                            value={addDraft.clientName}
                            onChange={(e) =>
                              setAddDraft({
                                ...addDraft,
                                clientName: e.target.value,
                              })
                            }
                            placeholder="Client name"
                            className="w-full rounded-md border border-gray-200 px-2 py-1.5 text-xs"
                          />
                          <input
                            value={addDraft.email}
                            onChange={(e) =>
                              setAddDraft({ ...addDraft, email: e.target.value })
                            }
                            placeholder="Email (optional)"
                            className="w-full rounded-md border border-gray-200 px-2 py-1.5 text-xs"
                          />
                        </div>
                      </td>
                      <td className="px-3 py-2.5">
                        <input
                          type="number"
                          min={0}
                          step={50}
                          value={addDraft.amountGbp}
                          onChange={(e) =>
                            setAddDraft({
                              ...addDraft,
                              amountGbp: e.target.value,
                            })
                          }
                          placeholder="0.00"
                          className="w-full rounded-md border border-gray-200 px-2 py-1.5 text-right text-xs"
                        />
                      </td>
                      <td className="px-3 py-2.5">
                        <select
                          value={addDraft.status}
                          onChange={(e) =>
                            setAddDraft({
                              ...addDraft,
                              status: e.target.value as InvoiceStatus,
                            })
                          }
                          className="rounded-md border border-gray-200 px-2 py-1.5 text-xs"
                        >
                          {INVOICE_STATUS_VALUES.map((status) => (
                            <option key={status} value={status}>
                              {status}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="px-3 py-2.5">
                        <div className="flex flex-wrap gap-2">
                          <button
                            type="button"
                            disabled={pending || !addDraft.clientName.trim()}
                            onClick={saveNew}
                            className="rounded-full bg-[#102f35] px-3 py-1 text-xs font-semibold text-white disabled:opacity-60"
                          >
                            Save
                          </button>
                          <button
                            type="button"
                            disabled={pending}
                            onClick={() => {
                              setAdding(false);
                              setAddDraft(EMPTY_ADD_DRAFT);
                            }}
                            className="rounded-full border border-gray-300 px-3 py-1 text-xs font-semibold text-gray-700"
                          >
                            Cancel
                          </button>
                        </div>
                      </td>
                    </tr>
                  ) : null}
                  {financial.recentInvoices.length === 0 && !adding ? (
                    <tr>
                      <td
                        colSpan={4}
                        className="px-3 py-8 text-center text-gray-500"
                      >
                        No invoices yet. Add a record to start tracking collections.
                      </td>
                    </tr>
                  ) : (
                    financial.recentInvoices.map((invoice) => {
                      const isEditing = editingId === invoice.id && draft !== null;
                      return (
                        <Fragment key={invoice.id}>
                          <tr className="border-t border-gray-100">
                            <td className="px-3 py-2.5">
                              {isEditing && draft ? (
                                <div className="space-y-1.5">
                                  <input
                                    value={draft.clientName}
                                    onChange={(e) =>
                                      setDraft({
                                        ...draft,
                                        clientName: e.target.value,
                                      })
                                    }
                                    className="w-full rounded-md border border-gray-200 px-2 py-1.5 text-xs"
                                    placeholder="Client name"
                                  />
                                  <input
                                    value={draft.reference}
                                    onChange={(e) =>
                                      setDraft({
                                        ...draft,
                                        reference: e.target.value,
                                      })
                                    }
                                    className="w-full rounded-md border border-gray-200 px-2 py-1.5 text-xs"
                                    placeholder="Reference"
                                  />
                                  <input
                                    value={draft.email}
                                    onChange={(e) =>
                                      setDraft({
                                        ...draft,
                                        email: e.target.value,
                                      })
                                    }
                                    className="w-full rounded-md border border-gray-200 px-2 py-1.5 text-xs"
                                    placeholder="Email"
                                  />
                                </div>
                              ) : (
                                <div>
                                  <p className="font-medium text-[#102f35]">
                                    {invoice.clientName}
                                  </p>
                                  <p className="text-xs text-gray-500">
                                    {invoice.reference}
                                  </p>
                                </div>
                              )}
                            </td>
                            <td className="px-3 py-2.5 text-right font-semibold tabular-nums text-[#102f35]">
                              {isEditing && draft ? (
                                <input
                                  type="number"
                                  min={0}
                                  step={50}
                                  value={draft.amountGbp}
                                  onChange={(e) =>
                                    setDraft({
                                      ...draft,
                                      amountGbp: e.target.value,
                                    })
                                  }
                                  className="w-full rounded-md border border-gray-200 px-2 py-1.5 text-right text-xs"
                                />
                              ) : (
                                formatGbp(invoice.amountGbp)
                              )}
                            </td>
                            <td className="px-3 py-2.5">
                              {isEditing && draft ? (
                                <select
                                  value={draft.status}
                                  onChange={(e) =>
                                    setDraft({
                                      ...draft,
                                      status: e.target.value as InvoiceStatus,
                                    })
                                  }
                                  className="rounded-md border border-gray-200 px-2 py-1.5 text-xs"
                                >
                                  {INVOICE_STATUS_VALUES.map((status) => (
                                    <option key={status} value={status}>
                                      {status}
                                    </option>
                                  ))}
                                </select>
                              ) : (
                                <span
                                  className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${INVOICE_STATUS_CLASS[invoice.status]}`}
                                >
                                  {invoice.status}
                                </span>
                              )}
                            </td>
                            <td className="px-3 py-2.5">
                              <div className="flex flex-wrap gap-2">
                                {isEditing ? (
                                  <>
                                    <button
                                      type="button"
                                      disabled={pending}
                                      onClick={() => saveEdit(invoice.id)}
                                      className="rounded-full bg-[#102f35] px-3 py-1 text-xs font-semibold text-white"
                                    >
                                      Save
                                    </button>
                                    <button
                                      type="button"
                                      disabled={pending}
                                      onClick={cancelEdit}
                                      className="rounded-full border border-gray-300 px-3 py-1 text-xs font-semibold text-gray-700"
                                    >
                                      Cancel
                                    </button>
                                  </>
                                ) : (
                                  <button
                                    type="button"
                                    disabled={pending}
                                    onClick={() => startEdit(invoice)}
                                    className="rounded-full border border-[#102f35] px-3 py-1 text-xs font-semibold text-[#102f35]"
                                  >
                                    Edit
                                  </button>
                                )}
                                {invoice.status === "Paid" ? (
                                  <button
                                    type="button"
                                    disabled
                                    className="rounded-full border border-gray-200 px-3 py-1 text-xs font-semibold text-gray-400"
                                  >
                                    Remind
                                  </button>
                                ) : (
                                  <a
                                    href={remindMailto(invoice)}
                                    className="rounded-full bg-[#102f35] px-3 py-1 text-xs font-semibold text-white"
                                  >
                                    Remind
                                  </a>
                                )}
                                <button
                                  type="button"
                                  disabled={pending}
                                  onClick={() => onDelete(invoice)}
                                  className="rounded-full bg-[#411b3f] px-3 py-1 text-xs font-semibold text-white"
                                >
                                  Delete
                                </button>
                              </div>
                            </td>
                          </tr>
                        </Fragment>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
            {error ? (
              <p className="mt-2 text-xs text-red-600">{error}</p>
            ) : null}
            {pending ? (
              <p className="mt-2 text-xs text-gray-500">Saving invoice changes…</p>
            ) : null}
          </div>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#411b3f]">
                Dev &amp; system health
              </p>
              <h3 className="text-lg font-bold text-[#102f35]">Stack monitors</h3>
            </div>
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${
                allOperational
                  ? "bg-emerald-50 text-emerald-800 ring-emerald-200"
                  : "bg-red-50 text-red-800 ring-red-200"
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  allOperational ? "bg-emerald-500" : "bg-red-500"
                }`}
                aria-hidden
              />
              {allOperational
                ? "All systems operational"
                : `${downCount} issue${downCount === 1 ? "" : "s"}`}
            </span>
          </div>

          <div className="rounded-xl border border-gray-100 bg-gray-50/70 p-4">
            <div className="mb-2 flex items-baseline justify-between gap-2">
              <p className="text-sm font-semibold text-[#102f35]">
                Database storage
              </p>
              <p className="text-xs font-medium tabular-nums text-gray-500">
                {storage.estimatedUsedMb.toFixed(1)} / {storage.capacityMb} MB
              </p>
            </div>
            <div
              className="h-2 overflow-hidden rounded-full bg-gray-200"
              role="progressbar"
              aria-label="Estimated Vercel Postgres storage used"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(usedPct)}
            >
              <div
                className={`h-full rounded-full ${
                  storageWarn ? "bg-amber-500" : "bg-[#102f35]"
                }`}
                style={{ width: `${Math.max(usedPct, usedPct > 0 ? 2 : 0)}%` }}
              />
            </div>
            <p className="mt-2 text-xs text-gray-500">
              {storage.usedRows} application row{storage.usedRows === 1 ? "" : "s"}{" "}
              (leads + invoices) · ~{storage.estimatedUsedMb.toFixed(1)} MB of{" "}
              {storage.capacityMb} MB ({storage.planLabel} plan).
            </p>
          </div>

          <div className="mt-5">
            <p className="mb-3 text-sm font-semibold text-[#102f35]">
              Webhook &amp; system status
            </p>
            <ul className="space-y-2">
              {checks.map((check) => (
                <li
                  key={check.id}
                  className="flex items-start gap-3 rounded-xl border border-gray-100 px-3 py-2.5"
                >
                  <span
                    className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${
                      check.operational ? "bg-emerald-500" : "bg-red-500"
                    }`}
                    aria-hidden
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-sm font-medium text-[#102f35]">
                        {check.label}
                      </p>
                      <span
                        className={`inline-flex rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ring-1 ${
                          check.operational
                            ? "bg-emerald-50 text-emerald-800 ring-emerald-200"
                            : "bg-red-50 text-red-800 ring-red-200"
                        }`}
                      >
                        {check.operational ? "Operational" : "Down"}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">{check.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
