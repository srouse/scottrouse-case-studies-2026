import { LinkedinLogoIcon } from "@phosphor-icons/react/ssr";

import { LINKEDIN_PROFILE_URL } from "./constants";

export function SiteFooter(): React.JSX.Element {
  return (
    <footer className="site-footer">
      <div className="page-shell site-footer__inner">
        <div className="site-footer__intro">
          <p className="site-footer__name">Scott Rouse</p>
          <p className="site-footer__bio">
            A designer and developer dedicated to building and educating on all things design system,{" "}
            <a
              className="site-footer__inline-link"
              href="https://www.figma.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Figma
            </a>
            , and{" "}
            <a
              className="site-footer__inline-link"
              href="https://www.contentful.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contentful
            </a>
            .
          </p>
        </div>
        <div className="site-footer__aside">
          <p className="site-footer__location">
            Located in <strong>Madison, Wisconsin</strong>
          </p>
          <ul className="site-footer__social" aria-label="Social">
            <li>
              <a
                className="site-footer__social-link"
                href={LINKEDIN_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Scott Rouse on LinkedIn"
              >
                <LinkedinLogoIcon
                  className="site-footer__social-icon"
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
