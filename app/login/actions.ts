"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import {
  createSessionToken,
  getSessionCookieName,
  verifyPassword
} from "@/lib/auth/session";

export async function loginAction(formData: FormData): Promise<void> {
  const password = String(formData.get("password") ?? "");
  const nextPath = String(formData.get("next") ?? "/work");

  if (!verifyPassword(password)) {
    redirect(`/login?error=1&next=${encodeURIComponent(nextPath)}`);
  }

  const cookieStore = await cookies();
  cookieStore.set({
    name: getSessionCookieName(),
    value: createSessionToken(),
    path: "/",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 8
  });

  redirect(nextPath.startsWith("/") ? nextPath : "/work");
}
