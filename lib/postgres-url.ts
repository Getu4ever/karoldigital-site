/**
 * Normalize Postgres connection SSL params for the `pg` driver.
 * Prisma/Vercel URLs often ship `sslmode=require`, which currently aliases
 * to verify-full but emits a Node security warning. Prefer explicit
 * `sslmode=verify-full` to keep today's secure behavior without the warning.
 */
export function normalizePostgresConnectionString(connectionString: string): string {
  try {
    const url = new URL(connectionString);
    const mode = (url.searchParams.get("sslmode") || "").toLowerCase();

    if (mode === "prefer" || mode === "require" || mode === "verify-ca") {
      url.searchParams.set("sslmode", "verify-full");
    }

    // Remove libpq-compat flag if present — not needed with verify-full
    url.searchParams.delete("uselibpqcompat");

    return url.toString();
  } catch {
    return connectionString;
  }
}
