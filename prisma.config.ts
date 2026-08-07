// Prisma CLI config — connection URL for migrate/generate
import "dotenv/config";
import { config as loadEnv } from "dotenv";
import { defineConfig } from "prisma/config";
import { normalizePostgresConnectionString } from "./lib/postgres-url";

// Prefer Next.js local env over the stub .env created by `prisma init`
loadEnv({ path: ".env.local", override: true });

/**
 * Prefer Vercel pooled Prisma URL for runtime-style tooling,
 * and non-pooling URL for migrations when available.
 *
 * Set these in `.env.local` / Vercel project settings:
 * - POSTGRES_PRISMA_URL
 * - POSTGRES_URL_NON_POOLING
 */
const rawDatasourceUrl =
  process.env.POSTGRES_URL_NON_POOLING ||
  process.env.POSTGRES_PRISMA_URL ||
  process.env.PRISMA_DATABASE_URL ||
  process.env.DATABASE_URL ||
  process.env.POSTGRES_URL;

const datasourceUrl = rawDatasourceUrl
  ? normalizePostgresConnectionString(rawDatasourceUrl)
  : rawDatasourceUrl;

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: datasourceUrl,
  },
});
