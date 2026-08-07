"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  pdf,
} from "@react-pdf/renderer";
import type { LeadDTO } from "@/app/admin/actions/leads";
import { PRO_FORMA_LINE_ITEMS } from "@/lib/leads";

type Props = {
  lead: LeadDTO | null;
};

type MilestoneRow = {
  stage: string;
  description: string;
  amount: number;
};

const styles = StyleSheet.create({
  page: {
    paddingTop: 40,
    paddingBottom: 48,
    paddingHorizontal: 44,
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#111111",
    lineHeight: 1.45,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  brand: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    color: "#111111",
    letterSpacing: 0.3,
  },
  logo: {
    width: 64,
    height: 38,
  },
  subtitle: {
    marginTop: 2,
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 1.2,
    color: "#111111",
  },
  agencyMeta: {
    marginTop: 8,
    fontSize: 9,
    color: "#4b5563",
    lineHeight: 1.55,
  },
  metaBlock: {
    marginTop: 16,
    marginBottom: 18,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#d1d5db",
  },
  metaLine: {
    fontSize: 9.5,
    color: "#111111",
    marginBottom: 3,
  },
  metaLabel: {
    fontFamily: "Helvetica-Bold",
  },
  twoCol: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 24,
    marginBottom: 18,
  },
  col: {
    width: "48%",
  },
  sectionTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 0.8,
    color: "#111111",
    marginBottom: 8,
  },
  stackLine: {
    fontSize: 9.5,
    color: "#1f2937",
    marginBottom: 3,
  },
  stackLabel: {
    fontFamily: "Helvetica-Bold",
    color: "#111111",
  },
  packageLine: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: "#111111",
    marginBottom: 6,
  },
  configLine: {
    fontSize: 9,
    color: "#4b5563",
    marginBottom: 10,
    lineHeight: 1.5,
  },
  agreedTotal: {
    fontSize: 12,
    fontFamily: "Helvetica-Bold",
    color: "#111111",
    marginTop: 4,
  },
  table: {
    marginTop: 6,
    marginBottom: 20,
    borderTopWidth: 1,
    borderTopColor: "#111111",
  },
  tableHeader: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#111111",
    paddingVertical: 7,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#d1d5db",
    paddingVertical: 8,
  },
  tableTotalRow: {
    flexDirection: "row",
    borderBottomWidth: 1.5,
    borderBottomColor: "#111111",
    paddingVertical: 9,
  },
  colStage: { width: "22%", fontSize: 9 },
  colDesc: { width: "56%", fontSize: 9, paddingRight: 8 },
  colAmount: { width: "22%", fontSize: 9, textAlign: "right" },
  th: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9,
    color: "#111111",
  },
  bold: { fontFamily: "Helvetica-Bold" },
  bankBlock: {
    marginTop: 8,
    paddingTop: 14,
    borderTopWidth: 1,
    borderTopColor: "#d1d5db",
  },
  bankTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 0.6,
    marginBottom: 8,
    color: "#111111",
  },
  bankHelp: {
    fontSize: 9,
    color: "#374151",
    marginBottom: 8,
    lineHeight: 1.5,
  },
  bankRow: {
    fontSize: 9.5,
    color: "#111111",
    marginBottom: 3,
  },
  footer: {
    position: "absolute",
    left: 44,
    right: 44,
    bottom: 28,
    fontSize: 7.5,
    color: "#6b7280",
    lineHeight: 1.45,
    borderTopWidth: 1,
    borderTopColor: "#e5e7eb",
    paddingTop: 8,
  },
});

function formatMoney(value: number): string {
  return `£${value.toLocaleString("en-GB", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

function formatLeadSubmitted(iso: string): string {
  try {
    return new Date(iso).toLocaleString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return iso || "—";
  }
}

function ProFormaPdfDocument({
  invoiceRef,
  issueDate,
  leadSubmitted,
  clientName,
  companyName,
  email,
  phone,
  packageTitle,
  systemConfiguration,
  agreedTotal,
  milestones,
  bankSortCode,
  bankAccountNumber,
  logoSrc,
}: {
  invoiceRef: string;
  issueDate: string;
  leadSubmitted: string;
  clientName: string;
  companyName: string;
  email: string;
  phone: string;
  packageTitle: string;
  systemConfiguration: string;
  agreedTotal: number;
  milestones: MilestoneRow[];
  bankSortCode: string;
  bankAccountNumber: string;
  logoSrc: string;
}) {
  const tableTotal = milestones.reduce((sum, row) => sum + row.amount, 0);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.headerRow}>
          <Text style={styles.brand}>Karol Digital</Text>
          {logoSrc ? <Image src={logoSrc} style={styles.logo} /> : null}
        </View>
        <Text style={styles.subtitle}>PRO-FORMA INVOICE</Text>
        <Text style={styles.agencyMeta}>
          616A Kingston Rd, London SW20 8DN{"\n"}
          info@karoldigital.co.uk{"\n"}
          https://karoldigital.co.uk
        </Text>

        <View style={styles.metaBlock}>
          <Text style={styles.metaLine}>
            <Text style={styles.metaLabel}>Reference: </Text>
            {invoiceRef || "—"}
          </Text>
          <Text style={styles.metaLine}>
            <Text style={styles.metaLabel}>Date: </Text>
            {issueDate || "—"}
          </Text>
          <Text style={styles.metaLine}>
            <Text style={styles.metaLabel}>Lead Submitted: </Text>
            {leadSubmitted || "—"}
          </Text>
        </View>

        {/* Bill to + Project summary */}
        <View style={styles.twoCol}>
          <View style={styles.col}>
            <Text style={styles.sectionTitle}>BILL TO</Text>
            <Text style={styles.stackLine}>
              <Text style={styles.stackLabel}>Client Name: </Text>
              {clientName || "—"}
            </Text>
            <Text style={styles.stackLine}>
              <Text style={styles.stackLabel}>Company Name: </Text>
              {companyName || "—"}
            </Text>
            <Text style={styles.stackLine}>
              <Text style={styles.stackLabel}>Email Address: </Text>
              {email || "—"}
            </Text>
            <Text style={styles.stackLine}>
              <Text style={styles.stackLabel}>Phone Number: </Text>
              {phone || "—"}
            </Text>
          </View>

          <View style={styles.col}>
            <Text style={styles.sectionTitle}>PROJECT SUMMARY</Text>
            <Text style={styles.packageLine}>
              Package: {packageTitle || "Custom Development"}
            </Text>
            <Text style={styles.stackLabel}>System Configuration</Text>
            <Text style={styles.configLine}>
              {systemConfiguration ||
                "Scoped technical architecture, engineering deliverables, and launch infrastructure as agreed."}
            </Text>
            <Text style={styles.agreedTotal}>
              Agreed Project Total: {formatMoney(agreedTotal)}
            </Text>
          </View>
        </View>

        {/* Milestone / infrastructure table */}
        <Text style={styles.sectionTitle}>MILESTONES &amp; INFRASTRUCTURE</Text>
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={[styles.colStage, styles.th]}>Stage</Text>
            <Text style={[styles.colDesc, styles.th]}>Description</Text>
            <Text style={[styles.colAmount, styles.th]}>Amount</Text>
          </View>
          {milestones.map((row) => (
            <View key={`${row.stage}-${row.description}`} style={styles.tableRow}>
              <Text style={styles.colStage}>{row.stage}</Text>
              <Text style={styles.colDesc}>{row.description}</Text>
              <Text style={styles.colAmount}>{formatMoney(row.amount)}</Text>
            </View>
          ))}
          <View style={styles.tableTotalRow}>
            <Text style={[styles.colStage, styles.bold]}>Total</Text>
            <Text style={styles.colDesc} />
            <Text style={[styles.colAmount, styles.bold]}>
              {formatMoney(tableTotal)}
            </Text>
          </View>
        </View>

        {/* Bank details */}
        <View style={styles.bankBlock}>
          <Text style={styles.bankTitle}>BANK TRANSFER TERMS</Text>
          <Text style={styles.bankHelp}>
            Please pay by BACS using the milestone amounts above. Quote
            reference {invoiceRef || "—"} on your payment.
          </Text>
          <Text style={styles.bankRow}>
            Account Name: Karol Digital Ltd | Sort Code:{" "}
            {bankSortCode || "00-00-00"} | Account Number:{" "}
            {bankAccountNumber || "00000000"}
          </Text>
        </View>

        <Text style={styles.footer} fixed>
          LEGAL DISCLAIMER: This document is a Pro Forma invoice issued for
          scoping, quotation, and planning purposes only. It is not a VAT
          invoice, tax invoice, or demand for immediate payment unless expressly
          agreed in a signed statement of work. Final fees, deliverables, and
          payment terms are confirmed in a separate commercial agreement. Karol
          Digital — Custom Web &amp; App Development UK.
        </Text>
      </Page>
    </Document>
  );
}

export default function ProFormaInvoicePanel({ lead }: Props) {
  const [invoiceRef, setInvoiceRef] = useState("KD-PF-001");
  const [issueDate, setIssueDate] = useState("");
  const [bankSortCode, setBankSortCode] = useState("00-00-00");
  const [bankAccountNumber, setBankAccountNumber] = useState("00000000");
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
  const [domainFee, setDomainFee] = useState(25);
  const [hostingFee, setHostingFee] = useState(180);
  const [infraFee, setInfraFee] = useState(350);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!lead) return;
    const today = new Date();
    setIssueDate(today.toISOString().slice(0, 10));
    setInvoiceRef(`KD-PF-${lead.id.slice(-6).toUpperCase()}`);
  }, [lead]);

  const packageTotal = useMemo(
    () =>
      selected.reduce((sum, description) => sum + (prices[description] ?? 0), 0),
    [selected, prices]
  );

  const agreedTotal = packageTotal + domainFee + hostingFee + infraFee;

  const milestones: MilestoneRow[] = useMemo(
    () => [
      {
        stage: "Infra 01",
        description: "Domain Registration Fee",
        amount: domainFee,
      },
      {
        stage: "Infra 02",
        description: "Hosting & Cloud Server Infrastructure Fee",
        amount: hostingFee,
      },
      {
        stage: "Infra 03",
        description: "Additional Web/App Development Infrastructure Fees",
        amount: infraFee,
      },
      {
        stage: "Build",
        description:
          selected.length > 0
            ? `Custom engineering package (${selected.length} scoped deliverable${
                selected.length === 1 ? "" : "s"
              })`
            : "Custom engineering package",
        amount: packageTotal,
      },
    ],
    [domainFee, hostingFee, infraFee, packageTotal, selected]
  );

  const systemConfiguration = useMemo(() => {
    if (selected.length === 0) {
      return "Technical scope to be confirmed against discovery notes.";
    }
    return `Includes: ${selected.join("; ")}.`;
  }, [selected]);

  function toggleItem(description: string) {
    setSelected((prev) =>
      prev.includes(description)
        ? prev.filter((d) => d !== description)
        : [...prev, description]
    );
  }

  async function downloadPdf() {
    if (!lead) return;
    setBusy(true);
    try {
      const logoSrc = `${window.location.origin}/logo-pdf.png`;
      const blob = await pdf(
        <ProFormaPdfDocument
          invoiceRef={invoiceRef}
          issueDate={issueDate}
          leadSubmitted={formatLeadSubmitted(lead.createdAt)}
          clientName={lead.name}
          companyName={lead.company || ""}
          email={lead.email}
          phone={lead.phone || ""}
          packageTitle={
            lead.serviceOfInterest ||
            selected[0] ||
            "Custom Development Engagement"
          }
          systemConfiguration={systemConfiguration}
          agreedTotal={agreedTotal}
          milestones={milestones}
          bankSortCode={bankSortCode}
          bankAccountNumber={bankAccountNumber}
          logoSrc={logoSrc}
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
        Mapped from <strong>{lead.name}</strong>
        {lead.company ? ` · ${lead.company}` : ""} — edit fields before download.
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
            placeholder="00000000"
            className="w-full rounded-lg border border-gray-200 px-3 py-2"
          />
        </label>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <label className="text-sm">
          <span className="mb-1 block font-semibold text-[#102f35]">
            Domain registration fee (£)
          </span>
          <input
            type="number"
            min={0}
            step={1}
            value={domainFee}
            onChange={(e) => setDomainFee(Number(e.target.value || 0))}
            className="w-full rounded-lg border border-gray-200 px-3 py-2"
          />
        </label>
        <label className="text-sm">
          <span className="mb-1 block font-semibold text-[#102f35]">
            Hosting &amp; cloud fee (£)
          </span>
          <input
            type="number"
            min={0}
            step={10}
            value={hostingFee}
            onChange={(e) => setHostingFee(Number(e.target.value || 0))}
            className="w-full rounded-lg border border-gray-200 px-3 py-2"
          />
        </label>
        <label className="text-sm">
          <span className="mb-1 block font-semibold text-[#102f35]">
            Additional infrastructure (£)
          </span>
          <input
            type="number"
            min={0}
            step={10}
            value={infraFee}
            onChange={(e) => setInfraFee(Number(e.target.value || 0))}
            className="w-full rounded-lg border border-gray-200 px-3 py-2"
          />
        </label>
      </div>

      <div className="mt-6">
        <p className="mb-3 text-sm font-semibold text-[#102f35]">
          Service line items (system configuration)
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
        <p className="mt-3 text-sm font-semibold text-[#102f35]">
          Agreed project total: {formatMoney(agreedTotal)}
        </p>
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
