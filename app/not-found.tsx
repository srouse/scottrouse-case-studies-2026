import Link from "next/link";

export default function NotFoundPage(): React.JSX.Element {
  return (
    <main className="page-shell" style={{ padding: "3rem 0" }}>
      <section className="card stack">
        <h1 style={{ margin: 0 }}>Page not found</h1>
        <p className="muted" style={{ margin: 0 }}>
          The requested page could not be located.
        </p>
        <Link href="/work">Back to case studies</Link>
      </section>
    </main>
  );
}
