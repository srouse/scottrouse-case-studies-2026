import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function ProtectedLayout({
  children
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <>
      <SiteHeader />
      <main className="page-shell" style={{ padding: "var(--space-12) var(--page-padding-inline) var(--space-16) var(--page-padding-inline)" }}>
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
