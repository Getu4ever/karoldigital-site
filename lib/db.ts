import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
import { normalizePostgresConnectionString } from "@/lib/postgres-url";

/**
 * Global Prisma client singleton (Prisma 7 + pg driver adapter).
 * Prevents exhausting Postgres connections during Next.js hot reload in development.
 *
 * Connection string precedence (set in `.env.local` / Vercel):
 * POSTGRES_PRISMA_URL → POSTGRES_URL → PRISMA_DATABASE_URL → DATABASE_URL
 * Prefer POSTGRES_URL_NON_POOLING for migrations (see prisma.config.ts).
 */

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function createPrismaClient() {
  const rawConnectionString =
    process.env.POSTGRES_PRISMA_URL ||
    process.env.POSTGRES_URL ||
    process.env.PRISMA_DATABASE_URL ||
    process.env.DATABASE_URL;

  if (!rawConnectionString) {
    throw new Error(
      "Missing database URL. Set POSTGRES_PRISMA_URL (or DATABASE_URL) in .env.local."
    );
  }

  const connectionString =
    normalizePostgresConnectionString(rawConnectionString);

  const adapter = new PrismaPg({ connectionString });
  return new PrismaClient({
    adapter,
    log:
      process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;
