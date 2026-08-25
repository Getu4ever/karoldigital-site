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
  /** When true, panel is rendered inside a lead-row accordion. */
  embedded?: boolean;
};

type MilestoneRow = {
  stage: string;
  description: string;
  amount: number;
};

type UkClientAddress = {
  addressLine1: string;
  addressLine2: string;
  townCity: string;
  county: string;
  postcode: string;
  country: string;
};

const EMPTY_UK_ADDRESS: UkClientAddress = {
  addressLine1: "",
  addressLine2: "",
  townCity: "",
  county: "",
  postcode: "",
  country: "United Kingdom",
};

const BRAND_TEAL = "#102f35";
const BRAND_GOLD = "#c9a84b";

const styles = StyleSheet.create({
  page: {
    paddingTop: 0,
    paddingBottom: 52,
    paddingHorizontal: 0,
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#111111",
    lineHeight: 1.45,
  },
  brandBar: {
    backgroundColor: BRAND_TEAL,
    paddingVertical: 18,
    paddingHorizontal: 36,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 22,
  },
  logo: {
    width: 92,
    height: 52,
    marginRight: 14,
  },
  brandTextCol: {
    flexDirection: "column",
    justifyContent: "center",
  },
  brandWordmarkRow: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  brandKarol: {
    fontSize: 18,
    fontFamily: "Helvetica-Bold",
    color: "#ffffff",
  },
  brandDigital: {
    fontSize: 18,
    fontFamily: "Helvetica-Bold",
    color: BRAND_GOLD,
    marginLeft: 5,
  },
  body: {
    paddingHorizontal: 44,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 18,
    paddingBottom: 14,
    borderBottomWidth: 1.5,
    borderBottomColor: BRAND_TEAL,
  },
  titleBlock: {
    flexGrow: 1,
    paddingRight: 16,
  },
  subtitle: {
    fontSize: 26,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 3.5,
    color: BRAND_TEAL,
    lineHeight: 1.15,
  },
  titleAccent: {
    marginTop: 6,
    width: 36,
    height: 3,
    backgroundColor: BRAND_GOLD,
  },
  agencyMeta: {
    fontSize: 9,
    color: "#4b5563",
    lineHeight: 1.55,
    textAlign: "right",
  },
  metaBlock: {
    marginBottom: 18,
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
  totalsBlock: {
    marginTop: 4,
  },
  totalLine: {
    fontSize: 10,
    color: "#111111",
    marginBottom: 3,
  },
  totalStrong: {
    fontSize: 12,
    fontFamily: "Helvetica-Bold",
    color: BRAND_TEAL,
    marginTop: 4,
  },
  table: {
    marginTop: 4,
    marginBottom: 18,
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
  th: { fontFamily: "Helvetica-Bold", fontSize: 9 },
  bold: { fontFamily: "Helvetica-Bold" },
  bankBlock: {
    marginTop: 6,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#d1d5db",
  },
  bankTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 0.6,
    marginBottom: 8,
  },
  bankHelp: { fontSize: 9, color: "#374151", marginBottom: 8, lineHeight: 1.5 },
  bankRow: { fontSize: 9.5, color: "#111111", marginBottom: 3 },
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

function ProfessionalInvoicePdf({
  invoiceRef,
  issueDate,
  leadSubmitted,
  clientName,
  companyName,
  addressLine1,
  addressLine2,
  townCity,
  county,
  postcode,
  country,
  email,
  phone,
  packageTitle,
  systemConfiguration,
  agreedTotal,
  loyaltyDiscount,
  paidDeposit,
  showLoyaltyDiscount,
  showPaidDeposit,
  milestones,
  bankAccountName,
  bankSortCode,
  bankAccountNumber,
  logoSrc,
}: {
  invoiceRef: string;
  issueDate: string;
  leadSubmitted: string;
  clientName: string;
  companyName: string;
  addressLine1: string;
  addressLine2: string;
  townCity: string;
  county: string;
  postcode: string;
  country: string;
  email: string;
  phone: string;
  packageTitle: string;
  systemConfiguration: string;
  agreedTotal: number;
  loyaltyDiscount: number;
  paidDeposit: number;
  showLoyaltyDiscount: boolean;
  showPaidDeposit: boolean;
  milestones: MilestoneRow[];
  bankAccountName: string;
  bankSortCode: string;
  bankAccountNumber: string;
  logoSrc: string;
}) {
  const tableTotal = milestones.reduce((sum, row) => sum + row.amount, 0);
  const appliedLoyalty = showLoyaltyDiscount ? loyaltyDiscount : 0;
  const appliedDeposit = showPaidDeposit ? paidDeposit : 0;
  const balanceDue = Math.max(0, agreedTotal - appliedLoyalty - appliedDeposit);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Brand header matching site screenshot */}
        <View style={styles.brandBar}>
          {logoSrc ? <Image src={logoSrc} style={styles.logo} /> : null}
          <View style={styles.brandTextCol}>
            <View style={styles.brandWordmarkRow}>
              <Text style={styles.brandKarol}>Karol</Text>
              <Text style={styles.brandDigital}>Digital</Text>
            </View>
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.titleRow}>
            <View style={styles.titleBlock}>
              <Text style={styles.subtitle}>INVOICE</Text>
              <View style={styles.titleAccent} />
            </View>
            <Text style={styles.agencyMeta}>
              info@karoldigital.co.uk{"\n"}
              https://karoldigital.co.uk
            </Text>
          </View>

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
                <Text style={styles.stackLabel}>Address Line 1: </Text>
                {addressLine1 || "—"}
              </Text>
              {addressLine2 ? (
                <Text style={styles.stackLine}>
                  <Text style={styles.stackLabel}>Address Line 2: </Text>
                  {addressLine2}
                </Text>
              ) : null}
              <Text style={styles.stackLine}>
                <Text style={styles.stackLabel}>Town / City: </Text>
                {townCity || "—"}
              </Text>
              {county ? (
                <Text style={styles.stackLine}>
                  <Text style={styles.stackLabel}>County: </Text>
                  {county}
                </Text>
              ) : null}
              <Text style={styles.stackLine}>
                <Text style={styles.stackLabel}>Postcode: </Text>
                {postcode || "—"}
              </Text>
              <Text style={styles.stackLine}>
                <Text style={styles.stackLabel}>Country: </Text>
                {country || "United Kingdom"}
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
              <View style={styles.totalsBlock}>
                <Text style={styles.totalLine}>
                  Project Total: {formatMoney(agreedTotal)}
                </Text>
                {showLoyaltyDiscount ? (
                  <Text style={styles.totalLine}>
                    Loyalty &amp; Friendship Discount:{" "}
                    {formatMoney(loyaltyDiscount)}
                  </Text>
                ) : null}
                {showPaidDeposit ? (
                  <Text style={styles.totalLine}>
                    Paid Deposit: {formatMoney(paidDeposit)}
                  </Text>
                ) : null}
                <Text style={styles.totalStrong}>
                  Balance Due: {formatMoney(balanceDue)}
                </Text>
              </View>
            </View>
          </View>

          <Text style={styles.sectionTitle}>SERVICES</Text>
          <View style={styles.table}>
            <View style={styles.tableHeader}>
              <Text style={[styles.colStage, styles.th]}>#</Text>
              <Text style={[styles.colDesc, styles.th]}>Service</Text>
              <Text style={[styles.colAmount, styles.th]}>Amount</Text>
            </View>
            {milestones.map((row) => (
              <View
                key={`${row.stage}-${row.description}`}
                style={styles.tableRow}
              >
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

          <View style={styles.bankBlock}>
            <Text style={styles.bankTitle}>BANK TRANSFER TERMS</Text>
            <Text style={styles.bankHelp}>
              Please pay the balance due by BACS using the details below. Quote
              reference {invoiceRef || "—"} on your payment.
            </Text>
            <Text style={styles.bankRow}>
              Account Name: {bankAccountName || "Karol Digital Ltd"} | Sort
              Code: {bankSortCode || "00-00-00"} | Account Number:{" "}
              {bankAccountNumber || "00000000"}
            </Text>
          </View>
        </View>

        <Text style={styles.footer} fixed>
          This is a commercial invoice issued by Karol Digital Ltd for services
          rendered or to be rendered under the agreed project scope. Payment of
          the balance due is requested according to the bank transfer terms
          above. VAT treatment will be stated separately where applicable. For
          queries contact info@karoldigital.co.uk. Karol Digital — Custom Web
          &amp; App Development UK.
        </Text>
      </Page>
    </Document>
  );
}

export default function ProFormaInvoicePanel({
  lead,
  embedded = false,
}: Props) {
  const [invoiceRef, setInvoiceRef] = useState("KD-INV-001");
  const [issueDate, setIssueDate] = useState("");
  const [clientAddress, setClientAddress] =
    useState<UkClientAddress>(EMPTY_UK_ADDRESS);
  const [bankAccountName, setBankAccountName] = useState("Karol Digital Ltd");
  const [bankSortCode, setBankSortCode] = useState("00-00-00");
  const [bankAccountNumber, setBankAccountNumber] = useState("00000000");
  const [selected, setSelected] = useState<string[]>([
    PRO_FORMA_LINE_ITEMS[0],
  ]);
  const [prices, setPrices] = useState<Record<string, number>>({
    [PRO_FORMA_LINE_ITEMS[0]]: 2500,
    [PRO_FORMA_LINE_ITEMS[1]]: 3500,
    [PRO_FORMA_LINE_ITEMS[2]]: 4500,
    [PRO_FORMA_LINE_ITEMS[3]]: 450,
    [PRO_FORMA_LINE_ITEMS[4]]: 1200,
    [PRO_FORMA_LINE_ITEMS[5]]: 950,
  });
  const [domainFee, setDomainFee] = useState(25);
  const [hostingFee, setHostingFee] = useState(180);
  const [infraFee, setInfraFee] = useState(350);
  const [paidDeposit, setPaidDeposit] = useState(0);
  const [loyaltyDiscount, setLoyaltyDiscount] = useState(0);
  const [includeDomain, setIncludeDomain] = useState(false);
  const [includeHosting, setIncludeHosting] = useState(false);
  const [includeInfra, setIncludeInfra] = useState(false);
  const [includeLoyalty, setIncludeLoyalty] = useState(false);
  const [includeDeposit, setIncludeDeposit] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!lead) return;
    const today = new Date();
    setIssueDate(today.toISOString().slice(0, 10));
    setInvoiceRef(`KD-INV-${lead.id.slice(-6).toUpperCase()}`);
    setClientAddress(EMPTY_UK_ADDRESS);
  }, [lead]);

  const packageTotal = useMemo(
    () =>
      selected.reduce((sum, description) => sum + (prices[description] ?? 0), 0),
    [selected, prices]
  );

  const appliedDomain = includeDomain ? domainFee : 0;
  const appliedHosting = includeHosting ? hostingFee : 0;
  const appliedInfra = includeInfra ? infraFee : 0;
  const appliedLoyalty = includeLoyalty ? loyaltyDiscount : 0;
  const appliedDeposit = includeDeposit ? paidDeposit : 0;

  const totalInfrastructureCost =
    appliedDomain + appliedHosting + appliedInfra;
  const agreedTotal =
    packageTotal + totalInfrastructureCost;
  const balanceDue = Math.max(0, agreedTotal - appliedLoyalty - appliedDeposit);

  const estimatedGrossMarginPct: number =
    agreedTotal > 0
      ? ((agreedTotal - totalInfrastructureCost) / agreedTotal) * 100
      : 0;

  const missingTickedValues =
    (includeDomain && domainFee <= 0) ||
    (includeHosting && hostingFee <= 0) ||
    (includeInfra && infraFee <= 0) ||
    (includeLoyalty && loyaltyDiscount <= 0) ||
    (includeDeposit && paidDeposit <= 0);

  const milestones: MilestoneRow[] = useMemo(() => {
    const rows: MilestoneRow[] = [];
    let index = 1;

    for (const description of selected) {
      rows.push({
        stage: String(index).padStart(2, "0"),
        description,
        amount: prices[description] ?? 0,
      });
      index += 1;
    }

    if (includeDomain) {
      rows.push({
        stage: String(index).padStart(2, "0"),
        description: "Domain Registration Fee",
        amount: domainFee,
      });
      index += 1;
    }
    if (includeHosting) {
      rows.push({
        stage: String(index).padStart(2, "0"),
        description: "Hosting & Cloud Server Infrastructure Fee",
        amount: hostingFee,
      });
      index += 1;
    }
    if (includeInfra) {
      rows.push({
        stage: String(index).padStart(2, "0"),
        description: "Additional Web/App Development Infrastructure Fees",
        amount: infraFee,
      });
    }

    return rows;
  }, [
    includeDomain,
    includeHosting,
    includeInfra,
    domainFee,
    hostingFee,
    infraFee,
    prices,
    selected,
  ]);

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
        <ProfessionalInvoicePdf
          invoiceRef={invoiceRef}
          issueDate={issueDate}
          leadSubmitted={formatLeadSubmitted(lead.createdAt)}
          clientName={lead.name}
          companyName={lead.company || ""}
          addressLine1={clientAddress.addressLine1}
          addressLine2={clientAddress.addressLine2}
          townCity={clientAddress.townCity}
          county={clientAddress.county}
          postcode={clientAddress.postcode}
          country={clientAddress.country}
          email={lead.email}
          phone={lead.phone || ""}
          packageTitle={
            lead.serviceOfInterest ||
            selected[0] ||
            "Custom Development Engagement"
          }
          systemConfiguration={systemConfiguration}
          agreedTotal={agreedTotal}
          loyaltyDiscount={loyaltyDiscount}
          paidDeposit={paidDeposit}
          showLoyaltyDiscount={includeLoyalty}
          showPaidDeposit={includeDeposit}
          milestones={milestones}
          bankAccountName={bankAccountName}
          bankSortCode={bankSortCode}
          bankAccountNumber={bankAccountNumber}
          logoSrc={logoSrc}
        />
      ).toBlob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${invoiceRef || "invoice"}.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    } finally {
      setBusy(false);
    }
  }

  if (!lead) {
    if (embedded) return null;
    return (
      <section className="rounded-2xl border border-dashed border-gray-200 bg-white p-6 text-sm text-gray-500">
        Select a lead from the pipeline to generate a professional invoice.
      </section>
    );
  }

  return (
    <section
      className={
        embedded
          ? "p-5"
          : "rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
      }
    >
      <p className="text-xs font-bold uppercase tracking-widest text-[#411b3f]">
        Billing
      </p>
      <h2 className="mb-4 text-xl font-bold text-[#102f35]">
        Invoice generator
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
        <label className="text-sm md:col-span-2">
          <span className="mb-1 block font-semibold text-[#102f35]">
            Address line 1
          </span>
          <input
            value={clientAddress.addressLine1}
            onChange={(e) =>
              setClientAddress((prev) => ({
                ...prev,
                addressLine1: e.target.value,
              }))
            }
            placeholder="House number and street name"
            className="w-full rounded-lg border border-gray-200 px-3 py-2"
          />
        </label>
        <label className="text-sm md:col-span-2">
          <span className="mb-1 block font-semibold text-[#102f35]">
            Address line 2{" "}
            <span className="font-normal text-gray-500">(optional)</span>
          </span>
          <input
            value={clientAddress.addressLine2}
            onChange={(e) =>
              setClientAddress((prev) => ({
                ...prev,
                addressLine2: e.target.value,
              }))
            }
            placeholder="Flat, building, or locality"
            className="w-full rounded-lg border border-gray-200 px-3 py-2"
          />
        </label>
        <label className="text-sm">
          <span className="mb-1 block font-semibold text-[#102f35]">
            Town / City
          </span>
          <input
            value={clientAddress.townCity}
            onChange={(e) =>
              setClientAddress((prev) => ({
                ...prev,
                townCity: e.target.value,
              }))
            }
            placeholder="e.g. London"
            className="w-full rounded-lg border border-gray-200 px-3 py-2"
          />
        </label>
        <label className="text-sm">
          <span className="mb-1 block font-semibold text-[#102f35]">
            County{" "}
            <span className="font-normal text-gray-500">(optional)</span>
          </span>
          <input
            value={clientAddress.county}
            onChange={(e) =>
              setClientAddress((prev) => ({
                ...prev,
                county: e.target.value,
              }))
            }
            placeholder="e.g. Greater London"
            className="w-full rounded-lg border border-gray-200 px-3 py-2"
          />
        </label>
        <label className="text-sm">
          <span className="mb-1 block font-semibold text-[#102f35]">
            Postcode
          </span>
          <input
            value={clientAddress.postcode}
            onChange={(e) =>
              setClientAddress((prev) => ({
                ...prev,
                postcode: e.target.value.toUpperCase(),
              }))
            }
            placeholder="e.g. SW1A 1AA"
            className="w-full rounded-lg border border-gray-200 px-3 py-2 uppercase"
          />
        </label>
        <label className="text-sm">
          <span className="mb-1 block font-semibold text-[#102f35]">
            Country
          </span>
          <input
            value={clientAddress.country}
            onChange={(e) =>
              setClientAddress((prev) => ({
                ...prev,
                country: e.target.value,
              }))
            }
            placeholder="United Kingdom"
            className="w-full rounded-lg border border-gray-200 px-3 py-2"
          />
        </label>
        <label className="text-sm md:col-span-2">
          <span className="mb-1 block font-semibold text-[#102f35]">
            Name on account
          </span>
          <input
            value={bankAccountName}
            onChange={(e) => setBankAccountName(e.target.value)}
            placeholder="Karol Digital Ltd"
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

      <div className="mt-6">
        <p className="mb-3 text-sm font-semibold text-[#102f35]">
          Optional fees &amp; adjustments
        </p>
        <p className="mb-3 text-xs text-gray-500">
          Tick a field to include it on the invoice and in the live total.
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {(
            [
              {
                id: "domain",
                label: "Domain registration fee (£)",
                checked: includeDomain,
                onCheck: setIncludeDomain,
                value: domainFee,
                onValue: setDomainFee,
                step: 1,
              },
              {
                id: "hosting",
                label: "Hosting & cloud fee (£)",
                checked: includeHosting,
                onCheck: setIncludeHosting,
                value: hostingFee,
                onValue: setHostingFee,
                step: 10,
              },
              {
                id: "infra",
                label: "Additional infrastructure (£)",
                checked: includeInfra,
                onCheck: setIncludeInfra,
                value: infraFee,
                onValue: setInfraFee,
                step: 10,
              },
              {
                id: "loyalty",
                label: "Loyalty & Friendship Discount (£)",
                checked: includeLoyalty,
                onCheck: setIncludeLoyalty,
                value: loyaltyDiscount,
                onValue: setLoyaltyDiscount,
                step: 50,
              },
              {
                id: "deposit",
                label: "Paid deposit (£)",
                checked: includeDeposit,
                onCheck: setIncludeDeposit,
                value: paidDeposit,
                onValue: setPaidDeposit,
                step: 50,
              },
            ] as const
          ).map((field) => (
            <div
              key={field.id}
              className={`rounded-xl border p-3 ${
                field.checked
                  ? "border-[#102f35]/30 bg-white"
                  : "border-gray-100 bg-gray-50/70"
              }`}
            >
              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#102f35]">
                <input
                  type="checkbox"
                  checked={field.checked}
                  onChange={(e) => field.onCheck(e.target.checked)}
                  className="h-4 w-4 accent-[#102f35]"
                />
                <span>{field.label}</span>
              </label>
              <input
                type="number"
                min={0}
                step={field.step}
                value={field.value}
                disabled={!field.checked}
                required={field.checked}
                onChange={(e) =>
                  field.onValue(Number(e.target.value || 0))
                }
                className={`w-full rounded-lg border px-3 py-2 text-sm disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400 ${
                  field.checked && field.value <= 0
                    ? "border-red-400 bg-red-50"
                    : "border-gray-200"
                }`}
              />
              {field.checked && field.value <= 0 ? (
                <p className="mt-1 text-xs text-red-600">
                  Enter an amount greater than 0.
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <p className="mb-3 text-sm font-semibold text-[#102f35]">
          Services
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
        <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-1 text-sm text-[#102f35]">
            <p>
              Project total:{" "}
              <span className="font-semibold">{formatMoney(agreedTotal)}</span>
            </p>
            {includeLoyalty ? (
              <p>
                Loyalty &amp; Friendship Discount:{" "}
                <span className="font-semibold">
                  {formatMoney(loyaltyDiscount)}
                </span>
              </p>
            ) : null}
            {includeDeposit ? (
              <p>
                Paid deposit:{" "}
                <span className="font-semibold">{formatMoney(paidDeposit)}</span>
              </p>
            ) : null}
            <p className="font-bold">
              Balance due: {formatMoney(balanceDue)}
            </p>
          </div>

          <aside
            className="w-full max-w-sm rounded-xl border border-dashed border-[#411b3f]/25 bg-[#411b3f]/5 p-4 text-sm text-[#102f35]"
            aria-label="Agency financial breakdown (admin only)"
          >
            <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-[#411b3f]">
              Agency Financial Breakdown
            </p>
            <p className="text-xs text-gray-500 mb-3">
              Private admin view — not shown on the client PDF.
            </p>
            <div className="space-y-2">
              <div className="flex items-baseline justify-between gap-3">
                <span className="text-xs font-medium text-gray-600">
                  Total Infrastructure Cost
                </span>
                <span className="font-semibold tabular-nums">
                  {formatMoney(totalInfrastructureCost)}
                </span>
              </div>
              <div className="flex items-baseline justify-between gap-3 border-t border-[#411b3f]/10 pt-2">
                <span className="text-xs font-medium text-gray-600">
                  Estimated Gross Profit Margin %
                </span>
                <span className="font-bold tabular-nums text-[#102f35]">
                  {agreedTotal > 0
                    ? `${estimatedGrossMarginPct.toFixed(1)}%`
                    : "—"}
                </span>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {missingTickedValues ? (
        <p className="mt-4 text-sm text-red-600">
          Every ticked fee must have a value greater than 0 before you can
          download.
        </p>
      ) : null}

      <button
        type="button"
        disabled={
          busy ||
          missingTickedValues ||
          (selected.length === 0 &&
            !includeDomain &&
            !includeHosting &&
            !includeInfra)
        }
        onClick={downloadPdf}
        className="mt-6 rounded-full bg-brand-gold px-6 py-3 text-sm font-bold text-[#102f35] transition hover:bg-brand-gold-deep disabled:opacity-60"
      >
        {busy ? "Generating PDF…" : "Download Invoice PDF"}
      </button>
    </section>
  );
}
