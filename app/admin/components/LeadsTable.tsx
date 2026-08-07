"use client";

import { Fragment, useMemo, useState, useTransition } from "react";
import type { LeadDTO } from "@/app/admin/actions/leads";
import {
  deleteLeadAction,
  updateLeadFieldsAction,
  updateLeadNotesAction,
  updateLeadStatusAction,
} from "@/app/admin/actions/leads";
import { LEAD_STATUS_VALUES } from "@/lib/leads";
import { BOOK_SERVICE_OPTIONS } from "@/lib/recaptcha";
import ProFormaInvoicePanel from "@/app/admin/components/ProFormaInvoicePanel";

type EditDraft = {
  name: string;
  email: string;
  company: string;
  phone: string;
  serviceOfInterest: string;
  status: string;
  customNotes: string;
};

type Props = {
  initialLeads: LeadDTO[];
};

function toDraft(lead: LeadDTO): EditDraft {
  return {
    name: lead.name,
    email: lead.email,
    company: lead.company || "",
    phone: lead.phone || "",
    serviceOfInterest: lead.serviceOfInterest || "",
    status: lead.status,
    customNotes: lead.customNotes || "",
  };
}

export default function LeadsTable({ initialLeads }: Props) {
  const [leads, setLeads] = useState(initialLeads);
  const [pending, startTransition] = useTransition();
  const [filter, setFilter] = useState<string>("All");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draft, setDraft] = useState<EditDraft | null>(null);
  /** null = all invoice accordions collapsed */
  const [invoiceOpenId, setInvoiceOpenId] = useState<string | null>(null);

  const visible = useMemo(() => {
    if (filter === "All") return leads;
    return leads.filter((l) => l.status === filter);
  }, [leads, filter]);

  function startEdit(lead: LeadDTO) {
    setEditingId(lead.id);
    setDraft(toDraft(lead));
  }

  function cancelEdit() {
    setEditingId(null);
    setDraft(null);
  }

  function saveEdit(id: string) {
    if (!draft) return;
    startTransition(async () => {
      const updated = await updateLeadFieldsAction(id, {
        name: draft.name,
        email: draft.email,
        company: draft.company,
        phone: draft.phone,
        serviceOfInterest: draft.serviceOfInterest,
      });
      await updateLeadStatusAction(id, draft.status);
      const withNotes = await updateLeadNotesAction(id, draft.customNotes);
      const merged: LeadDTO = {
        ...updated,
        status: withNotes.status,
        customNotes: withNotes.customNotes,
      };
      setLeads((prev) => prev.map((l) => (l.id === id ? merged : l)));
      setEditingId(null);
      setDraft(null);
    });
  }

  function onStatusChange(id: string, status: string) {
    if (editingId === id) return;
    startTransition(async () => {
      const updated = await updateLeadStatusAction(id, status);
      setLeads((prev) => prev.map((l) => (l.id === id ? updated : l)));
    });
  }

  function onNotesBlur(id: string, customNotes: string) {
    if (editingId === id) return;
    startTransition(async () => {
      const updated = await updateLeadNotesAction(id, customNotes);
      setLeads((prev) => prev.map((l) => (l.id === id ? updated : l)));
    });
  }

  function onDelete(id: string) {
    if (!confirm("Delete this lead permanently?")) return;
    startTransition(async () => {
      await deleteLeadAction(id);
      setLeads((prev) => prev.filter((l) => l.id !== id));
      if (invoiceOpenId === id) setInvoiceOpenId(null);
      if (editingId === id) cancelEdit();
    });
  }

  function toggleInvoice(id: string) {
    setInvoiceOpenId((prev) => (prev === id ? null : id));
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-xl font-bold text-[#102f35]">Lead pipeline</h2>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm"
        >
          <option value="All">All statuses</option>
          {LEAD_STATUS_VALUES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-gray-100 bg-white shadow-sm">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-[#102f35] text-white">
            <tr>
              <th className="px-4 py-3 font-semibold">Lead</th>
              <th className="px-4 py-3 font-semibold">Service</th>
              <th className="px-4 py-3 font-semibold">Status</th>
              <th className="px-4 py-3 font-semibold">Notes</th>
              <th className="px-4 py-3 font-semibold">Created</th>
              <th className="px-4 py-3 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {visible.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-10 text-center text-gray-500">
                  No leads yet. New enquiries will appear here after DB sync.
                </td>
              </tr>
            )}
            {visible.map((lead) => {
              const isEditing = editingId === lead.id && draft !== null;
              const invoiceOpen = invoiceOpenId === lead.id;

              return (
                <Fragment key={lead.id}>
                  <tr
                    className={`border-t border-gray-100 ${
                      invoiceOpen ? "bg-brand-gold-muted/20" : ""
                    }`}
                  >
                    <td className="px-4 py-3 align-top">
                      {isEditing && draft ? (
                        <div className="min-w-[180px] space-y-1.5">
                          <input
                            value={draft.name}
                            onChange={(e) =>
                              setDraft({ ...draft, name: e.target.value })
                            }
                            className="w-full rounded-md border border-gray-200 px-2 py-1.5 text-xs"
                            placeholder="Name"
                          />
                          <input
                            value={draft.email}
                            onChange={(e) =>
                              setDraft({ ...draft, email: e.target.value })
                            }
                            className="w-full rounded-md border border-gray-200 px-2 py-1.5 text-xs"
                            placeholder="Email"
                          />
                          <input
                            value={draft.company}
                            onChange={(e) =>
                              setDraft({ ...draft, company: e.target.value })
                            }
                            className="w-full rounded-md border border-gray-200 px-2 py-1.5 text-xs"
                            placeholder="Company"
                          />
                          <input
                            value={draft.phone}
                            onChange={(e) =>
                              setDraft({ ...draft, phone: e.target.value })
                            }
                            className="w-full rounded-md border border-gray-200 px-2 py-1.5 text-xs"
                            placeholder="Phone"
                          />
                        </div>
                      ) : (
                        <div>
                          <p className="font-semibold text-[#102f35]">
                            {lead.name}
                          </p>
                          <p className="text-xs text-gray-500">{lead.email}</p>
                          {lead.company && (
                            <p className="text-xs text-gray-400">
                              {lead.company}
                            </p>
                          )}
                          {lead.phone && (
                            <p className="text-xs text-gray-400">{lead.phone}</p>
                          )}
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-3 align-top text-gray-700">
                      {isEditing && draft ? (
                        <select
                          value={draft.serviceOfInterest}
                          onChange={(e) =>
                            setDraft({
                              ...draft,
                              serviceOfInterest: e.target.value,
                            })
                          }
                          className="min-w-[160px] rounded-md border border-gray-200 px-2 py-1.5 text-xs"
                        >
                          <option value="">Select service</option>
                          {BOOK_SERVICE_OPTIONS.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                          {draft.serviceOfInterest &&
                            !(BOOK_SERVICE_OPTIONS as readonly string[]).includes(
                              draft.serviceOfInterest
                            ) && (
                              <option value={draft.serviceOfInterest}>
                                {draft.serviceOfInterest}
                              </option>
                            )}
                        </select>
                      ) : (
                        lead.serviceOfInterest || "—"
                      )}
                    </td>
                    <td className="px-4 py-3 align-top">
                      <select
                        value={isEditing && draft ? draft.status : lead.status}
                        disabled={pending}
                        onChange={(e) => {
                          if (isEditing && draft) {
                            setDraft({ ...draft, status: e.target.value });
                          } else {
                            onStatusChange(lead.id, e.target.value);
                          }
                        }}
                        className="rounded-md border border-gray-200 px-2 py-1.5 text-xs"
                      >
                        {LEAD_STATUS_VALUES.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="min-w-[180px] px-4 py-3 align-top">
                      {isEditing && draft ? (
                        <input
                          value={draft.customNotes}
                          onChange={(e) =>
                            setDraft({
                              ...draft,
                              customNotes: e.target.value,
                            })
                          }
                          placeholder="Add notes…"
                          className="w-full rounded-md border border-gray-200 px-2 py-1.5 text-xs"
                        />
                      ) : (
                        <input
                          key={`${lead.id}-notes-${lead.updatedAt}`}
                          defaultValue={lead.customNotes || ""}
                          disabled={pending}
                          onBlur={(e) => onNotesBlur(lead.id, e.target.value)}
                          placeholder="Add notes…"
                          className="w-full rounded-md border border-gray-200 px-2 py-1.5 text-xs"
                        />
                      )}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 align-top text-xs text-gray-500">
                      {new Date(lead.createdAt).toLocaleDateString("en-GB")}
                    </td>
                    <td className="px-4 py-3 align-top">
                      <div className="flex flex-wrap gap-2">
                        {isEditing ? (
                          <>
                            <button
                              type="button"
                              disabled={pending}
                              onClick={() => saveEdit(lead.id)}
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
                            onClick={() => startEdit(lead)}
                            className="rounded-full border border-[#102f35] px-3 py-1 text-xs font-semibold text-[#102f35]"
                          >
                            Edit
                          </button>
                        )}
                        <button
                          type="button"
                          onClick={() => toggleInvoice(lead.id)}
                          aria-expanded={invoiceOpen}
                          className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${
                            invoiceOpen ? "bg-[#1a4a54]" : "bg-[#102f35]"
                          }`}
                        >
                          Invoice
                        </button>
                        <button
                          type="button"
                          disabled={pending}
                          onClick={() => onDelete(lead.id)}
                          className="rounded-full bg-[#411b3f] px-3 py-1 text-xs font-semibold text-white"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                  {invoiceOpen ? (
                    <tr className="border-t border-gray-50">
                      <td colSpan={6} className="bg-gray-50/80 px-4 py-4">
                        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
                          <ProFormaInvoicePanel lead={lead} embedded />
                        </div>
                      </td>
                    </tr>
                  ) : null}
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
      {pending && (
        <p className="text-xs text-gray-500">Saving pipeline changes…</p>
      )}
    </div>
  );
}
