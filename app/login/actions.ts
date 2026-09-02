"use server";

import { redirect } from "next/navigation";

import {
  establishSessionCookie,
  safeNextPath,
  verifyPassword
} from "@/lib/auth/session";

export async function loginAction(formData: FormData): Promise<void> {
  const password = String(formData.get("password") ?? "");
  const nextPath = safeNextPath(String(formData.get("next") ?? "/work"));

  if (!verifyPassword(password)) {
    redirect(`/login?error=1&next=${encodeURIComponent(nextPath)}`);
  }

  await establishSessionCookie();
  redirect(nextPath);
}
