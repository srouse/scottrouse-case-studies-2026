import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import layoutStyles from "@/styles/layout.module.css";

export default function ProtectedLayout({
  children
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <>
      <SiteHeader />
      <main className={layoutStyles.protectedMain}>{children}</main>
      <SiteFooter />
    </>
  );
}
