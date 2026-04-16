import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { getSessionCookieName, verifySessionToken } from "@/lib/auth/session";

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

  const loginUrl = new URL("/login", request.url);
  loginUrl.searchParams.set("next", pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/work/:path*"]
};
