import { redirect } from "next/navigation";

import { ACCESS_CODE_QUERY, safeNextPath } from "@/lib/auth/session";

type LoginPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

/** Legacy /login bookmarks and gate redirects land on the public home landing. */
export default async function LoginPage({
  searchParams
}: LoginPageProps): Promise<never> {
  const params = (await searchParams) ?? {};
  const next = safeNextPath(typeof params.next === "string" ? params.next : "/work");
  const qs = new URLSearchParams();

  if (next !== "/work") {
    qs.set("next", next);
  }
  if (params.error === "1") {
    qs.set("error", "1");
  }
  if (typeof params[ACCESS_CODE_QUERY] === "string") {
    qs.set(ACCESS_CODE_QUERY, params[ACCESS_CODE_QUERY]);
  }

  const query = qs.toString();
  redirect(query ? `/?${query}` : "/");
}
