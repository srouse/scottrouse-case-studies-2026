/** Public profile URL — update to your LinkedIn profile. */
const LINKEDIN_HREF = "https://www.linkedin.com/in/scottfrouse/";

function LinkedInIcon(): React.JSX.Element {
  return (
    <svg
      className="site-footer__social-icon"
      viewBox="0 0 24 24"
      width={18}
      height={18}
      aria-hidden
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  );
}

export function SiteFooter(): React.JSX.Element {
  return (
    <footer className="site-footer">
      <div className="page-shell site-footer__inner">
        <div className="site-footer__intro">
          <p className="site-footer__name">Scott Rouse</p>
          <p className="site-footer__bio">
            A developer and innovator dedicated to build and educate on all things design system,{" "}
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
                href={LINKEDIN_HREF}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Scott Rouse on LinkedIn"
              >
                <LinkedInIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
