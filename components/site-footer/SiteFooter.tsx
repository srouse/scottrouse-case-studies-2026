import { LinkedinLogoIcon } from "@phosphor-icons/react/ssr";

import { LINKEDIN_PROFILE_URL } from "@/components/constants";

import styles from "./site-footer.module.css";

export function SiteFooter(): React.JSX.Element {
  return (
    <footer className={styles.root}>
      <div className={`page-shell ${styles.inner}`}>
        <div>
          <p className={styles.name}>Scott Rouse</p>
          <p className={styles.bio}>
            Connecting content, components, and AI into systems teams actually
            want to use, across{" "}
            <a
              className={styles.inlineLink}
              href="https://www.figma.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Figma
            </a>{" "}
            and{" "}
            <a
              className={styles.inlineLink}
              href="https://www.contentful.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contentful
            </a>
            .
          </p>
        </div>
        <div className={styles.aside}>
          <p className={styles.location}>
            Located in <strong>Madison, Wisconsin</strong>
          </p>
          <ul className={styles.social} aria-label="Social">
            <li>
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
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
