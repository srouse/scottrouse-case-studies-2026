import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { getSessionCookieName, verifySessionToken } from "@/lib/auth/session";

export default async function HomePage(): Promise<never> {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get(getSessionCookieName())?.value;
  if (verifySessionToken(sessionToken)) {
    redirect("/work");
  }

  redirect("/login");
}
