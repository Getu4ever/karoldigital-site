import { randomBytes, scryptSync, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";
import { prisma } from "@/lib/db";
import {
  ADMIN_COOKIE_NAME,
  ADMIN_SESSION_MAX_AGE,
  createSessionToken,
  verifySessionToken,
} from "@/lib/admin-session";

export { ADMIN_COOKIE_NAME, ADMIN_SESSION_MAX_AGE };
export const ADMIN_ACCOUNT_ID = "default";
const MIN_PASSWORD_LENGTH = 8;

/**
 * Admin auth:
 * - Login with ADMIN_PASSWORD (normal password), then stored hash in AdminAccount
 * - Session cookie is a signed token (not the password)
 * - ADMIN_DASHBOARD_TOKEN (or ADMIN_SESSION_SECRET) signs the session — never typed at login
 */

export function getSessionSecret(): string {
  const secret =
    process.env.ADMIN_SESSION_SECRET || process.env.ADMIN_DASHBOARD_TOKEN;
  if (!secret) {
    throw new Error(
      "Missing ADMIN_SESSION_SECRET (or ADMIN_DASHBOARD_TOKEN). Add it to .env.local."
    );
  }
  return secret;
}

/** Bootstrap password used until an AdminAccount row exists. */
export function getBootstrapPassword(): string | null {
  return process.env.ADMIN_PASSWORD?.trim() || null;
}

export function hashPassword(password: string): string {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

export function verifyPassword(password: string, stored: string): boolean {
  const [salt, hash] = stored.split(":");
  if (!salt || !hash) return false;
  try {
    const hashBuf = Buffer.from(hash, "hex");
    const test = scryptSync(password, salt, 64);
    if (hashBuf.length !== test.length) return false;
    return timingSafeEqual(hashBuf, test);
  } catch {
    return false;
  }
}

function timingSafeEqualString(a: string, b: string): boolean {
  const aBuf = Buffer.from(a);
  const bBuf = Buffer.from(b);
  if (aBuf.length !== bBuf.length) return false;
  return timingSafeEqual(aBuf, bBuf);
}

export async function verifyAdminPassword(password: string): Promise<boolean> {
  if (!password) return false;

  try {
    const account = await prisma.adminAccount.findUnique({
      where: { id: ADMIN_ACCOUNT_ID },
    });

    if (account) {
      return verifyPassword(password, account.passwordHash);
    }
  } catch (error) {
    console.error("[adminAuth] Database lookup failed; trying bootstrap password:", error);
  }

  const bootstrap = getBootstrapPassword();
  if (!bootstrap) return false;
  return timingSafeEqualString(password, bootstrap);
}

/** Persist password hash after first successful bootstrap login (or change). */
export async function upsertAdminPassword(password: string): Promise<void> {
  const passwordHash = hashPassword(password);
  await prisma.adminAccount.upsert({
    where: { id: ADMIN_ACCOUNT_ID },
    create: { id: ADMIN_ACCOUNT_ID, passwordHash },
    update: { passwordHash },
  });
}

export function validateNewPassword(password: string): string | null {
  if (password.length < MIN_PASSWORD_LENGTH) {
    return `Password must be at least ${MIN_PASSWORD_LENGTH} characters.`;
  }
  return null;
}

export async function setAdminSessionCookie(): Promise<void> {
  const jar = await cookies();
  const token = await createSessionToken(getSessionSecret());
  jar.set(ADMIN_COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: ADMIN_SESSION_MAX_AGE,
  });
}

export async function clearAdminSessionCookie(): Promise<void> {
  const jar = await cookies();
  jar.set(ADMIN_COOKIE_NAME, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });
}

export async function isAdminAuthenticated(): Promise<boolean> {
  try {
    const jar = await cookies();
    const session = jar.get(ADMIN_COOKIE_NAME)?.value;
    if (!session) return false;
    return verifySessionToken(session, getSessionSecret());
  } catch {
    return false;
  }
}

export async function requireAdmin(): Promise<void> {
  const ok = await isAdminAuthenticated();
  if (!ok) {
    throw new Error("Unauthorized");
  }
}
