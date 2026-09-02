import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import {
  ACCESS_CODE_QUERY,
  getSessionCookieName,
  verifySessionToken
} from "@/lib/auth/session";

type HomePageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function HomePage({
  searchParams
}: HomePageProps): Promise<never> {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get(getSessionCookieName())?.value;
  if (verifySessionToken(sessionToken)) {
    redirect("/work");
  }

  const params = (await searchParams) ?? {};
  const code = typeof params[ACCESS_CODE_QUERY] === "string" ? params[ACCESS_CODE_QUERY] : undefined;

  if (code !== undefined) {
    // Cookie writes must happen in a Route Handler — hand off to /auth/unlock.
    redirect(
      `/auth/unlock?${ACCESS_CODE_QUERY}=${encodeURIComponent(code)}&next=${encodeURIComponent("/work")}`
    );
  }

  redirect("/login");
}
