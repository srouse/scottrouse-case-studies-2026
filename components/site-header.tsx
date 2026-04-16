import Link from "next/link";

const contactMailto =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL != null && process.env.NEXT_PUBLIC_CONTACT_EMAIL !== ""
    ? `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`
    : "mailto:hello@example.com";

export function SiteHeader(): React.JSX.Element {
  return (
    <header className="site-header">
      <div className="page-shell site-header__inner">
        <Link href="/work" className="site-header__brand">
          Scott Rouse
        </Link>
        <nav aria-label="Primary">
          <ul className="site-header__nav">
            <li>
              <Link href="/work" className="site-header__link">
                work
              </Link>
            </li>
            <li>
              <a
                href={contactMailto}
                className="site-header__link"
                suppressHydrationWarning
              >
                contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
