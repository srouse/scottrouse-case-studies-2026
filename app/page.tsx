import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { PortfolioAccessForm } from "@/components/portfolio-access-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WorkHomeHero } from "@/components/work-home-hero";
import {
  ACCESS_CODE_QUERY,
  getSessionCookieName,
  safeNextPath,
  verifySessionToken
} from "@/lib/auth/session";

type HomePageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function HomePage({
  searchParams
}: HomePageProps): Promise<React.JSX.Element> {
  const params = (await searchParams) ?? {};
  const next = safeNextPath(typeof params.next === "string" ? params.next : "/work");
  const code = typeof params[ACCESS_CODE_QUERY] === "string" ? params[ACCESS_CODE_QUERY] : undefined;

  const cookieStore = await cookies();
  const sessionToken = cookieStore.get(getSessionCookieName())?.value;
  if (verifySessionToken(sessionToken)) {
    redirect(next);
  }

  if (code !== undefined) {
    // Cookie writes must happen in a Route Handler — hand off to /auth/unlock.
    redirect(
      `/auth/unlock?${ACCESS_CODE_QUERY}=${encodeURIComponent(code)}&next=${encodeURIComponent(next)}`
    );
  }

  const hasError = params.error === "1";

  return (
    <>
      <SiteHeader />
      <main className="protected-main">
        <div className="page-shell page-shell--protected-main">
          <WorkHomeHero />
          <PortfolioAccessForm nextPath={next} hasError={hasError} />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
