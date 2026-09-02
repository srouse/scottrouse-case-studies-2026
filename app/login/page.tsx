import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import {
  ACCESS_CODE_QUERY,
  getSessionCookieName,
  safeNextPath,
  verifySessionToken
} from "@/lib/auth/session";

import { loginAction } from "./actions";

type LoginPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function LoginPage({
  searchParams
}: LoginPageProps): Promise<React.JSX.Element> {
  const params = (await searchParams) ?? {};
  const next = safeNextPath(typeof params.next === "string" ? params.next : "/work");
  const code = typeof params[ACCESS_CODE_QUERY] === "string" ? params[ACCESS_CODE_QUERY] : undefined;

  const cookieStore = await cookies();
  const sessionToken = cookieStore.get(getSessionCookieName())?.value;
  if (verifySessionToken(sessionToken)) {
    redirect(next);
  }

  if (code !== undefined) {
    redirect(
      `/auth/unlock?${ACCESS_CODE_QUERY}=${encodeURIComponent(code)}&next=${encodeURIComponent(next)}`
    );
  }

  const hasError = params.error === "1";

  return (
    <main className="login-page">
      <div className="login-page__panel">
        <h1 className="login-page__title">Portfolio access</h1>
        {hasError ? (
          <p role="alert" className="alert-error">
            That password wasn&apos;t correct. Please try again.
          </p>
        ) : null}
        <form action={loginAction} className="login-page__form">
          <input type="hidden" name="next" value={next} />
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="input-field"
            placeholder="password"
          />
          <button type="submit" className="btn-primary">
            Continue
          </button>
        </form>
      </div>
    </main>
  );
}
