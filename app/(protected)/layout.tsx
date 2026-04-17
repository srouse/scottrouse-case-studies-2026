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
      <main className="page-shell page-shell--protected-main">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
