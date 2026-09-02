import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import {
  ACCESS_CODE_QUERY,
  getSessionCookieOptions,
  safeNextPath,
  verifyPassword
} from "@/lib/auth/session";

/**
 * Query-string unlock endpoint (cookie writes are only allowed in Route Handlers /
 * Server Actions — not in page renders).
 *
 * Share: `/?code=PASSWORD` (home redirects here) or call this URL directly.
 */
export function GET(request: NextRequest): NextResponse {
  const code = request.nextUrl.searchParams.get(ACCESS_CODE_QUERY);
  const next = safeNextPath(request.nextUrl.searchParams.get("next") ?? "/work");

  if (code === null || !verifyPassword(code)) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("error", "1");
    loginUrl.searchParams.set("next", next);
    return NextResponse.redirect(loginUrl);
  }

  const response = NextResponse.redirect(new URL(next, request.url));
  response.cookies.set(getSessionCookieOptions());
  return response;
}
