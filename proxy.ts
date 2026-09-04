import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import {
  ACCESS_CODE_QUERY,
  getSessionCookieName,
  getSessionCookieOptions,
  verifyPassword,
  verifySessionToken
} from "@/lib/auth/session";

const PROTECTED_PREFIX = "/work";

export function proxy(request: NextRequest): NextResponse {
  const { pathname } = request.nextUrl;
  if (!pathname.startsWith(PROTECTED_PREFIX)) {
    return NextResponse.next();
  }

  const cookieValue = request.cookies.get(getSessionCookieName())?.value;
  if (verifySessionToken(cookieValue)) {
    return NextResponse.next();
  }

  const code = request.nextUrl.searchParams.get(ACCESS_CODE_QUERY);
  if (code !== null) {
    if (verifyPassword(code)) {
      const cleanUrl = request.nextUrl.clone();
      cleanUrl.searchParams.delete(ACCESS_CODE_QUERY);
      const response = NextResponse.redirect(cleanUrl);
      const cookie = getSessionCookieOptions();
      response.cookies.set(cookie);
      return response;
    }

    const homeUrl = new URL("/", request.url);
    homeUrl.searchParams.set("error", "1");
    homeUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(homeUrl);
  }

  const homeUrl = new URL("/", request.url);
  homeUrl.searchParams.set("next", pathname);
  return NextResponse.redirect(homeUrl);
}

export const config = {
  matcher: ["/work/:path*"]
};
