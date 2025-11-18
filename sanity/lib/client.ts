import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "pols4r9z",        // your project ID
  dataset: "production",        // your dataset
  apiVersion: "2023-10-01",     // any date ≤ today
  useCdn: true,
});
