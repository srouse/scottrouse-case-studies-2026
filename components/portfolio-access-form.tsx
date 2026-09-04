"use client";

import { useEffect, useId, useRef, useState } from "react";

import { loginAction } from "@/app/login/actions";

type PortfolioAccessFormProps = {
  nextPath?: string;
  hasError?: boolean;
};

export function PortfolioAccessForm({
  nextPath = "/work",
  hasError = false
}: PortfolioAccessFormProps): React.JSX.Element {
  const [open, setOpen] = useState(hasError);
  const passwordRef = useRef<HTMLInputElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (open) {
      passwordRef.current?.focus();
    }
  }, [open]);

  return (
    <section className="portfolio-access" aria-label="Portfolio access">
      {!open ? (
        <button
          type="button"
          className="portfolio-access__toggle"
          aria-expanded={false}
          aria-controls={panelId}
          onClick={() => setOpen(true)}
        >
          Portfolio access
        </button>
      ) : (
        <div id={panelId} className="portfolio-access__panel">
          <h2 className="portfolio-access__title">Portfolio access</h2>
          {hasError ? (
            <p role="alert" className="alert-error">
              That password wasn&apos;t correct. Please try again.
            </p>
          ) : null}
          <form action={loginAction} className="portfolio-access__form">
            <input type="hidden" name="next" value={nextPath} />
            <input
              ref={passwordRef}
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="input-field"
              placeholder="password"
            />
            <button type="submit" className="btn-primary">
              Continue
            </button>
          </form>
        </div>
      )}
    </section>
  );
}
