import type { GaDashboardMetrics } from "@/lib/ga4";

export default function AnalyticsPanel({ metrics }: { metrics: GaDashboardMetrics }) {
  return (
    <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-[#411b3f]">
            Traffic metrics
          </p>
          <h2 className="text-xl font-bold text-[#102f35]">
            Google Analytics (last 28 days)
          </h2>
        </div>
        {metrics.configured ? (
          <div className="flex gap-4 text-center">
            <div className="rounded-xl bg-[#102f35] px-4 py-3 text-white">
              <p className="text-2xl font-bold">{metrics.totalPageViews}</p>
              <p className="text-xs text-gray-300">Page views (top pages sum)</p>
            </div>
            <div className="rounded-xl bg-[#411b3f] px-4 py-3 text-white">
              <p className="text-2xl font-bold">{metrics.formConversions}</p>
              <p className="text-xs text-gray-300">Form conversions</p>
            </div>
          </div>
        ) : null}
      </div>

      {!metrics.configured && (
        <div className="rounded-xl border border-dashed border-brand-gold/50 bg-brand-gold-muted/20 p-4 text-sm text-[#102f35]">
          <p className="font-semibold">GA4 credentials not connected yet</p>
          <p className="mt-1 text-gray-600">
            {metrics.message ||
              "Add GA4_PROPERTY_ID, GOOGLE_SERVICE_ACCOUNT_EMAIL, and GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY to .env.local."}
          </p>
        </div>
      )}

      {metrics.configured && (
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <h3 className="mb-3 font-semibold text-[#102f35]">Page views</h3>
            <div className="overflow-hidden rounded-xl border border-gray-100">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50 text-gray-600">
                  <tr>
                    <th className="px-3 py-2 text-left">Page</th>
                    <th className="px-3 py-2 text-right">Views</th>
                  </tr>
                </thead>
                <tbody>
                  {metrics.pageViews.map((row, index) => (
                    <tr
                      key={`${row.pagePath}::${row.pageTitle}::${index}`}
                      className="border-t border-gray-100"
                    >
                      <td className="px-3 py-2">
                        <p className="font-medium text-[#102f35] line-clamp-1">
                          {row.pageTitle}
                        </p>
                        <p className="text-xs text-gray-500">{row.pagePath}</p>
                      </td>
                      <td className="px-3 py-2 text-right font-semibold">
                        {row.views}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="mb-3 font-semibold text-[#102f35]">Traffic sources</h3>
            <div className="overflow-hidden rounded-xl border border-gray-100">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50 text-gray-600">
                  <tr>
                    <th className="px-3 py-2 text-left">Source / medium</th>
                    <th className="px-3 py-2 text-right">Sessions</th>
                  </tr>
                </thead>
                <tbody>
                  {metrics.trafficSources.map((row, index) => (
                    <tr
                      key={`${row.source}::${row.medium}::${index}`}
                      className="border-t border-gray-100"
                    >
                      <td className="px-3 py-2 text-[#102f35]">
                        {row.source} / {row.medium}
                      </td>
                      <td className="px-3 py-2 text-right font-semibold">
                        {row.sessions}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
