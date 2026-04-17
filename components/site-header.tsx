import Link from "next/link";
import { LinkedinLogoIcon } from "@phosphor-icons/react/ssr";

import { LINKEDIN_PROFILE_URL } from "./constants";

export function SiteHeader(): React.JSX.Element {
  return (
    <header className="site-header">
      <div className="page-shell site-header__inner">
        <Link href="/work" className="site-header__brand">
          Scott Rouse
        </Link>
        <a
          className="site-header__social-link"
          href={LINKEDIN_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Scott Rouse on LinkedIn"
        >
          <LinkedinLogoIcon
            className="site-header__social-icon"
            size={28}
            weight="regular"
            aria-hidden
          />
        </a>
      </div>
    </header>
  );
}
