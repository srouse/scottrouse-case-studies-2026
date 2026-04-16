import { loginAction } from "./actions";

type LoginPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function LoginPage({
  searchParams
}: LoginPageProps): Promise<React.JSX.Element> {
  const params = (await searchParams) ?? {};
  const next = typeof params.next === "string" ? params.next : "/work";
  const hasError = params.error === "1";

  return (
    <main className="page-shell" style={{ padding: "4rem 0" }}>
      <section className="card stack" style={{ maxWidth: "28rem", margin: "0 auto" }}>
        <h1 style={{ margin: 0 }}>Private portfolio access</h1>
        <p className="muted" style={{ margin: 0 }}>
          Enter the shared password to view case studies.
        </p>
        {hasError ? (
          <p role="alert" className="alert-error">
            Password was incorrect. Please try again.
          </p>
        ) : null}
        <form action={loginAction} className="stack">
          <input type="hidden" name="next" value={next} />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="input-field"
          />
          <button type="submit" className="btn-primary">
            Continue
          </button>
        </form>
      </section>
    </main>
  );
}
