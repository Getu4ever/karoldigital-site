"use client";

import { useMemo, useState, useTransition } from "react";
import type { LeadDTO } from "@/app/admin/actions/leads";
import {
  deleteLeadAction,
  updateLeadNotesAction,
  updateLeadStatusAction,
} from "@/app/admin/actions/leads";
import { LEAD_STATUS_VALUES } from "@/lib/leads";

type Props = {
  initialLeads: LeadDTO[];
  onSelectLead: (lead: LeadDTO) => void;
  selectedLeadId?: string | null;
};

export default function LeadsTable({
  initialLeads,
  onSelectLead,
  selectedLeadId,
}: Props) {
  const [leads, setLeads] = useState(initialLeads);
  const [pending, startTransition] = useTransition();
  const [filter, setFilter] = useState<string>("All");

  const visible = useMemo(() => {
    if (filter === "All") return leads;
    return leads.filter((l) => l.status === filter);
  }, [leads, filter]);

  function onStatusChange(id: string, status: string) {
    startTransition(async () => {
      const updated = await updateLeadStatusAction(id, status);
      setLeads((prev) => prev.map((l) => (l.id === id ? updated : l)));
    });
  }

  function onNotesBlur(id: string, customNotes: string) {
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
    });
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
            {visible.map((lead) => (
              <tr
                key={lead.id}
                className={`border-t border-gray-100 ${
                  selectedLeadId === lead.id ? "bg-brand-gold-muted/30" : ""
                }`}
              >
                <td className="px-4 py-3">
                  <button
                    type="button"
                    onClick={() => onSelectLead(lead)}
                    className="text-left"
                  >
                    <p className="font-semibold text-[#102f35]">{lead.name}</p>
                    <p className="text-xs text-gray-500">{lead.email}</p>
                    {lead.company && (
                      <p className="text-xs text-gray-400">{lead.company}</p>
                    )}
                  </button>
                </td>
                <td className="px-4 py-3 text-gray-700">
                  {lead.serviceOfInterest || "—"}
                </td>
                <td className="px-4 py-3">
                  <select
                    value={lead.status}
                    disabled={pending}
                    onChange={(e) => onStatusChange(lead.id, e.target.value)}
                    className="rounded-md border border-gray-200 px-2 py-1.5 text-xs"
                  >
                    {LEAD_STATUS_VALUES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="px-4 py-3 min-w-[180px]">
                  <input
                    defaultValue={lead.customNotes || ""}
                    disabled={pending}
                    onBlur={(e) => onNotesBlur(lead.id, e.target.value)}
                    placeholder="Add notes…"
                    className="w-full rounded-md border border-gray-200 px-2 py-1.5 text-xs"
                  />
                </td>
                <td className="px-4 py-3 text-xs text-gray-500 whitespace-nowrap">
                  {new Date(lead.createdAt).toLocaleDateString("en-GB")}
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => onSelectLead(lead)}
                      className="rounded-full bg-[#102f35] px-3 py-1 text-xs font-semibold text-white"
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
            ))}
          </tbody>
        </table>
      </div>
      {pending && (
        <p className="text-xs text-gray-500">Saving pipeline changes…</p>
      )}
    </div>
  );
}
