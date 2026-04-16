const DEFAULT_COOKIE_NAME = "portfolio_session";
export const SESSION_TTL_SECONDS = 60 * 60 * 8;
const SESSION_SENTINEL = "authenticated";

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
