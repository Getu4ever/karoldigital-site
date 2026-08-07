"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  pdf,
} from "@react-pdf/renderer";
import type { LeadDTO } from "@/app/admin/actions/leads";
import { PRO_FORMA_LINE_ITEMS } from "@/lib/leads";

type LineItem = {
  description: string;
  qty: number;
  unitPrice: number;
};

type Props = {
  lead: LeadDTO | null;
};

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#102f35",
  },
  header: { marginBottom: 20 },
  brand: { fontSize: 18, fontFamily: "Helvetica-Bold", color: "#102f35" },
  muted: { color: "#555555", marginTop: 4 },
  title: {
    fontSize: 16,
    fontFamily: "Helvetica-Bold",
    marginBottom: 12,
    color: "#411b3f",
  },
  row: { flexDirection: "row", justifyContent: "space-between", gap: 16 },
  box: { width: "48%", marginBottom: 14 },
  label: { fontFamily: "Helvetica-Bold", marginBottom: 4 },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#102f35",
    color: "#ffffff",
    padding: 8,
    marginTop: 12,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
    padding: 8,
  },
  colDesc: { width: "50%" },
  colQty: { width: "15%", textAlign: "right" },
  colPrice: { width: "17%", textAlign: "right" },
  colTotal: { width: "18%", textAlign: "right" },
  totals: { marginTop: 12, alignItems: "flex-end" },
  footer: {
    marginTop: 28,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#d1d5db",
    fontSize: 8,
    color: "#6b7280",
    lineHeight: 1.4,
  },
});

function ProFormaPdfDocument({
  invoiceRef,
  issueDate,
  dueDate,
  billTo,
  bankSortCode,
  bankAccountNumber,
  items,
}: {
  invoiceRef: string;
  issueDate: string;
  dueDate: string;
  billTo: string;
  bankSortCode: string;
  bankAccountNumber: string;
  items: LineItem[];
}) {
  const subtotal = items.reduce((sum, i) => sum + i.qty * i.unitPrice, 0);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.brand}>Karol Digital</Text>
          <Text style={styles.muted}>High-Performance Web & App Engineering</Text>
          <Text style={styles.muted}>www.karoldigital.co.uk</Text>
        </View>

        <Text style={styles.title}>PRO FORMA INVOICE</Text>

        <View style={styles.row}>
          <View style={styles.box}>
            <Text style={styles.label}>Invoice reference</Text>
            <Text>{invoiceRef}</Text>
            <Text style={{ marginTop: 8 }}>
              Issue date: {issueDate || "—"}
            </Text>
            <Text>Due date: {dueDate || "—"}</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.label}>Bill to</Text>
            <Text>{billTo || "—"}</Text>
          </View>
        </View>

        <View style={styles.tableHeader}>
          <Text style={styles.colDesc}>Description</Text>
          <Text style={styles.colQty}>Qty</Text>
          <Text style={styles.colPrice}>Unit (£)</Text>
          <Text style={styles.colTotal}>Total (£)</Text>
        </View>
        {items.map((item, idx) => (
          <View key={`${item.description}-${idx}`} style={styles.tableRow}>
            <Text style={styles.colDesc}>{item.description}</Text>
            <Text style={styles.colQty}>{item.qty}</Text>
            <Text style={styles.colPrice}>{item.unitPrice.toFixed(2)}</Text>
            <Text style={styles.colTotal}>
              {(item.qty * item.unitPrice).toFixed(2)}
            </Text>
          </View>
        ))}

        <View style={styles.totals}>
          <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 12 }}>
            Subtotal: £{subtotal.toFixed(2)}
          </Text>
          <Text style={{ marginTop: 4 }}>
            VAT / tax treatment to be confirmed on final invoice.
          </Text>
        </View>

        <View style={{ marginTop: 18 }}>
          <Text style={styles.label}>Bank wire details</Text>
          <Text>Account name: Karol Digital</Text>
          <Text>Sort code: {bankSortCode || "—"}</Text>
          <Text>Account number: {bankAccountNumber || "—"}</Text>
        </View>

        <Text style={styles.footer}>
          LEGAL DISCLAIMER: This document is a Pro Forma invoice issued for
          scoping, quotation, and planning purposes only. It is not a VAT
          invoice, tax invoice, or demand for immediate payment unless expressly
          agreed in a signed statement of work. Final fees, deliverables, and
          payment terms are confirmed in a separate commercial agreement.
          Karol Digital — Custom Web & App Development UK.
        </Text>
      </Page>
    </Document>
  );
}

export default function ProFormaInvoicePanel({ lead }: Props) {
  const [invoiceRef, setInvoiceRef] = useState("KD-PF-001");
  const [issueDate, setIssueDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [billTo, setBillTo] = useState("");
  const [bankSortCode, setBankSortCode] = useState("");
  const [bankAccountNumber, setBankAccountNumber] = useState("");
  const [selected, setSelected] = useState<string[]>([
    PRO_FORMA_LINE_ITEMS[0],
    PRO_FORMA_LINE_ITEMS[1],
  ]);
  const [prices, setPrices] = useState<Record<string, number>>({
    [PRO_FORMA_LINE_ITEMS[0]]: 950,
    [PRO_FORMA_LINE_ITEMS[1]]: 3500,
    [PRO_FORMA_LINE_ITEMS[2]]: 1200,
    [PRO_FORMA_LINE_ITEMS[3]]: 850,
    [PRO_FORMA_LINE_ITEMS[4]]: 2200,
  });
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!lead) return;
    const today = new Date();
    const due = new Date(today);
    due.setDate(due.getDate() + 14);
    setIssueDate(today.toISOString().slice(0, 10));
    setDueDate(due.toISOString().slice(0, 10));
    setInvoiceRef(`KD-PF-${lead.id.slice(-6).toUpperCase()}`);
    setBillTo(
      [lead.name, lead.company, lead.email, lead.phone]
        .filter(Boolean)
        .join("\n")
    );
  }, [lead]);

  const items: LineItem[] = useMemo(
    () =>
      selected.map((description) => ({
        description,
        qty: 1,
        unitPrice: prices[description] ?? 0,
      })),
    [selected, prices]
  );

  function toggleItem(description: string) {
    setSelected((prev) =>
      prev.includes(description)
        ? prev.filter((d) => d !== description)
        : [...prev, description]
    );
  }

  async function downloadPdf() {
    setBusy(true);
    try {
      const blob = await pdf(
        <ProFormaPdfDocument
          invoiceRef={invoiceRef}
          issueDate={issueDate}
          dueDate={dueDate}
          billTo={billTo}
          bankSortCode={bankSortCode}
          bankAccountNumber={bankAccountNumber}
          items={items}
        />
      ).toBlob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${invoiceRef || "pro-forma"}.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    } finally {
      setBusy(false);
    }
  }

  if (!lead) {
    return (
      <section className="rounded-2xl border border-dashed border-gray-200 bg-white p-6 text-sm text-gray-500">
        Select a lead from the pipeline to generate a Pro Forma invoice.
      </section>
    );
  }

  return (
    <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      <p className="text-xs font-bold uppercase tracking-widest text-[#411b3f]">
        Billing
      </p>
      <h2 className="mb-4 text-xl font-bold text-[#102f35]">
        Pro Forma invoice generator
      </h2>
      <p className="mb-6 text-sm text-gray-600">
        Mapped from <strong>{lead.name}</strong> — edit fields before download.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm">
          <span className="mb-1 block font-semibold text-[#102f35]">
            Invoice ref number
          </span>
          <input
            value={invoiceRef}
            onChange={(e) => setInvoiceRef(e.target.value)}
            className="w-full rounded-lg border border-gray-200 px-3 py-2"
          />
        </label>
        <label className="text-sm">
          <span className="mb-1 block font-semibold text-[#102f35]">
            Company / client billing data
          </span>
          <textarea
            value={billTo}
            onChange={(e) => setBillTo(e.target.value)}
            rows={3}
            className="w-full rounded-lg border border-gray-200 px-3 py-2"
          />
        </label>
        <label className="text-sm">
          <span className="mb-1 block font-semibold text-[#102f35]">
            Issue date
          </span>
          <input
            type="date"
            value={issueDate}
            onChange={(e) => setIssueDate(e.target.value)}
            className="w-full rounded-lg border border-gray-200 px-3 py-2"
          />
        </label>
        <label className="text-sm">
          <span className="mb-1 block font-semibold text-[#102f35]">
            Due date
          </span>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full rounded-lg border border-gray-200 px-3 py-2"
          />
        </label>
        <label className="text-sm">
          <span className="mb-1 block font-semibold text-[#102f35]">
            Bank sort code
          </span>
          <input
            value={bankSortCode}
            onChange={(e) => setBankSortCode(e.target.value)}
            placeholder="00-00-00"
            className="w-full rounded-lg border border-gray-200 px-3 py-2"
          />
        </label>
        <label className="text-sm">
          <span className="mb-1 block font-semibold text-[#102f35]">
            Bank account number
          </span>
          <input
            value={bankAccountNumber}
            onChange={(e) => setBankAccountNumber(e.target.value)}
            placeholder="12345678"
            className="w-full rounded-lg border border-gray-200 px-3 py-2"
          />
        </label>
      </div>

      <div className="mt-6">
        <p className="mb-3 text-sm font-semibold text-[#102f35]">
          Service line items
        </p>
        <div className="space-y-2">
          {PRO_FORMA_LINE_ITEMS.map((item) => (
            <div
              key={item}
              className="flex flex-col gap-2 rounded-xl border border-gray-100 p-3 sm:flex-row sm:items-center sm:justify-between"
            >
              <label className="flex items-start gap-2 text-sm text-[#102f35]">
                <input
                  type="checkbox"
                  checked={selected.includes(item)}
                  onChange={() => toggleItem(item)}
                  className="mt-1"
                />
                <span>{item}</span>
              </label>
              <input
                type="number"
                min={0}
                step={50}
                value={prices[item] ?? 0}
                onChange={(e) =>
                  setPrices((prev) => ({
                    ...prev,
                    [item]: Number(e.target.value || 0),
                  }))
                }
                className="w-full rounded-lg border border-gray-200 px-3 py-1.5 text-sm sm:w-32"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        disabled={busy || selected.length === 0}
        onClick={downloadPdf}
        className="mt-6 rounded-full bg-brand-gold px-6 py-3 text-sm font-bold text-[#102f35] transition hover:bg-brand-gold-deep disabled:opacity-60"
      >
        {busy ? "Generating PDF…" : "Download Pro Forma PDF"}
      </button>
    </section>
  );
}
