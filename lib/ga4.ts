/**
 * Google Analytics Data API (GA4) — server-side fetch module
 *
 * SETUP:
 * 1. Create a Google Cloud service account with access to your GA4 property.
 * 2. Drop the corporate JSON key fields into env vars below (or load from a
 *    secured secret manager — never commit the JSON file to git).
 * 3. Set GA4_PROPERTY_ID to your numeric property id (e.g. "123456789").
 *
 * Env vars:
 * - GA4_PROPERTY_ID
 * - GOOGLE_SERVICE_ACCOUNT_EMAIL
 * - GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY  (PEM; use \n for newlines in .env)
 */

import { BetaAnalyticsDataClient } from "@google-analytics/data";

export type GaTrafficSourceRow = {
  source: string;
  medium: string;
  sessions: number;
};

export type GaPageViewRow = {
  pagePath: string;
  pageTitle: string;
  views: number;
};

export type GaDashboardMetrics = {
  configured: boolean;
  message?: string;
  pageViews: GaPageViewRow[];
  trafficSources: GaTrafficSourceRow[];
  /** Form submission / generate_lead style conversions when available */
  formConversions: number;
  totalPageViews: number;
};

function buildAnalyticsClient(): BetaAnalyticsDataClient | null {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  // Paste the full private_key value from your corporate service-account JSON here via env:
  // GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
  const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(
    /\\n/g,
    "\n"
  );

  if (!email || !privateKey) {
    return null;
  }

  return new BetaAnalyticsDataClient({
    credentials: {
      client_email: email,
      private_key: privateKey,
    },
  });
}

export async function fetchGa4DashboardMetrics(): Promise<GaDashboardMetrics> {
  // Drop your GA4 property id into GA4_PROPERTY_ID (Vercel / .env.local)
  const propertyId = process.env.GA4_PROPERTY_ID;

  if (!propertyId) {
    return {
      configured: false,
      message:
        "GA4 not configured. Set GA4_PROPERTY_ID and service-account credentials in .env.local.",
      pageViews: [],
      trafficSources: [],
      formConversions: 0,
      totalPageViews: 0,
    };
  }

  const client = buildAnalyticsClient();
  if (!client) {
    return {
      configured: false,
      message:
        "Missing GOOGLE_SERVICE_ACCOUNT_EMAIL / GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY.",
      pageViews: [],
      trafficSources: [],
      formConversions: 0,
      totalPageViews: 0,
    };
  }

  const property = `properties/${propertyId}`;

  try {
    const [pageReport, sourceReport, conversionReport] = await Promise.all([
      client.runReport({
        property,
        dateRanges: [{ startDate: "28daysAgo", endDate: "today" }],
        dimensions: [{ name: "pagePath" }, { name: "pageTitle" }],
        metrics: [{ name: "screenPageViews" }],
        orderBys: [
          { metric: { metricName: "screenPageViews" }, desc: true },
        ],
        limit: 10,
      }),
      client.runReport({
        property,
        dateRanges: [{ startDate: "28daysAgo", endDate: "today" }],
        dimensions: [{ name: "sessionSource" }, { name: "sessionMedium" }],
        metrics: [{ name: "sessions" }],
        orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
        limit: 10,
      }),
      // Form submission conversions — maps to GA4 key events / conversions
      // named generate_lead or form_submit when configured in GA4 Admin.
      client.runReport({
        property,
        dateRanges: [{ startDate: "28daysAgo", endDate: "today" }],
        metrics: [{ name: "conversions" }, { name: "eventCount" }],
        dimensionFilter: {
          filter: {
            fieldName: "eventName",
            inListFilter: {
              values: ["generate_lead", "form_submit", "contact_form_submit"],
            },
          },
        },
      }),
    ]);

    const pageViews: GaPageViewRow[] =
      pageReport[0].rows?.map((row) => ({
        pagePath: row.dimensionValues?.[0]?.value || "/",
        pageTitle: row.dimensionValues?.[1]?.value || "(untitled)",
        views: Number(row.metricValues?.[0]?.value || 0),
      })) || [];

    const trafficSources: GaTrafficSourceRow[] =
      sourceReport[0].rows?.map((row) => ({
        source: row.dimensionValues?.[0]?.value || "(direct)",
        medium: row.dimensionValues?.[1]?.value || "(none)",
        sessions: Number(row.metricValues?.[0]?.value || 0),
      })) || [];

    const formConversions =
      conversionReport[0].rows?.reduce((sum, row) => {
        const conversions = Number(row.metricValues?.[0]?.value || 0);
        const events = Number(row.metricValues?.[1]?.value || 0);
        return sum + Math.max(conversions, events);
      }, 0) || 0;

    const totalPageViews = pageViews.reduce((sum, row) => sum + row.views, 0);

    return {
      configured: true,
      pageViews,
      trafficSources,
      formConversions,
      totalPageViews,
    };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "GA4 request failed";
    return {
      configured: false,
      message,
      pageViews: [],
      trafficSources: [],
      formConversions: 0,
      totalPageViews: 0,
    };
  }
}
