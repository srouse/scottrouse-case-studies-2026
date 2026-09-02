import { cookies } from "next/headers";

const DEFAULT_COOKIE_NAME = "portfolio_session";
export const SESSION_TTL_SECONDS = 60 * 60 * 8;
const SESSION_SENTINEL = "authenticated";

/** Query param for shareable unlock links, e.g. `/?code=PASSWORD`. */
export const ACCESS_CODE_QUERY = "code";

function getCookieName(): string {
  return process.env.SESSION_COOKIE_NAME || DEFAULT_COOKIE_NAME;
}

export function getSessionCookieName(): string {
  return getCookieName();
}

export function createSessionToken(): string {
  return SESSION_SENTINEL;
}

export function verifySessionToken(token: string | undefined): boolean {
  return token === SESSION_SENTINEL;
}

export function verifyPassword(candidate: string): boolean {
  const expected = process.env.PORTFOLIO_PASSWORD || "change-me";
  return candidate === expected;
}

export type SessionCookieInit = {
  name: string;
  value: string;
  path: string;
  httpOnly: boolean;
  secure: boolean;
  sameSite: "lax";
  maxAge: number;
};

/** Cookie options shared by login form, query unlock, and proxy. */
export function getSessionCookieOptions(): SessionCookieInit {
  return {
    name: getSessionCookieName(),
    value: createSessionToken(),
    path: "/",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: SESSION_TTL_SECONDS
  };
}

/** Set the portfolio session cookie (Server Components / Server Actions). */
export async function establishSessionCookie(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(getSessionCookieOptions());
}

/** Only allow same-origin relative paths as post-login destinations. */
export function safeNextPath(candidate: string | undefined, fallback = "/work"): string {
  if (!candidate || !candidate.startsWith("/") || candidate.startsWith("//")) {
    return fallback;
  }
  return candidate;
}
