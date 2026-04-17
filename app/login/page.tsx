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
