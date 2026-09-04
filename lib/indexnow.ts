import { INDEXNOW_KEY, SITE_ORIGIN } from "@/lib/geo";

const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";
const BATCH_SIZE = 100;

export type IndexNowResult = {
  submitted: number;
  batches: number;
  statuses: number[];
};

export async function submitIndexNow(
  urls: string[]
): Promise<IndexNowResult> {
  const unique = [...new Set(urls)].filter((url) =>
    url.startsWith(SITE_ORIGIN)
  );

  if (unique.length === 0) {
    return { submitted: 0, batches: 0, statuses: [] };
  }

  const keyLocation = `${SITE_ORIGIN}/${INDEXNOW_KEY}.txt`;
  const host = new URL(SITE_ORIGIN).host;
  const statuses: number[] = [];

  for (let i = 0; i < unique.length; i += BATCH_SIZE) {
    const urlList = unique.slice(i, i + BATCH_SIZE);
    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host,
        key: INDEXNOW_KEY,
        keyLocation,
        urlList,
      }),
    });
    statuses.push(response.status);
    if (!response.ok && response.status !== 202) {
      const detail = await response.text().catch(() => "");
      throw new Error(
        `IndexNow failed (${response.status}): ${detail.slice(0, 200)}`
      );
    }
  }

  return {
    submitted: unique.length,
    batches: statuses.length,
    statuses,
  };
}
