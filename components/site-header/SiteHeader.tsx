import Link from "next/link";
import { LinkedinLogoIcon } from "@phosphor-icons/react/ssr";

import { LINKEDIN_PROFILE_URL } from "@/components/constants";

import styles from "./site-header.module.css";

export function SiteHeader(): React.JSX.Element {
  return (
    <header className={styles.root}>
      <div className={`page-shell ${styles.inner}`}>
        <Link href="/" className={styles.brand}>
          Scott Rouse
        </Link>
        <a
          className={styles.socialLink}
          href={LINKEDIN_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Scott Rouse on LinkedIn"
        >
          <LinkedinLogoIcon
            className={styles.socialIcon}
            size={28}
            weight="regular"
            aria-hidden
          />
        </a>
      </div>
    </header>
  );
}
