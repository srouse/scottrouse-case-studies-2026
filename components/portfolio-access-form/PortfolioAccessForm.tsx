"use client";

import { useEffect, useId, useRef, useState } from "react";

import { loginAction } from "@/app/login/actions";

import styles from "./portfolio-access-form.module.css";

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
    <section className={styles.root} aria-label="Portfolio access">
      {!open ? (
        <div className={styles.closed}>
          <p className={styles.hint}>
            I’ve built design systems and Figma widgets for Fortune 50s,
            Contentful, State Farm, and other financial and insurance companies.
          </p>
          <button
            type="button"
            className={styles.toggle}
            aria-expanded={false}
            aria-controls={panelId}
            onClick={() => setOpen(true)}
          >
            Portfolio access
          </button>
        </div>
      ) : (
        <div id={panelId} className={styles.panel}>
          <h2 className={styles.title}>Portfolio access</h2>
          {hasError ? (
            <p role="alert" className={styles.error}>
              That password wasn&apos;t correct. Please try again.
            </p>
          ) : null}
          <form action={loginAction} className={styles.form}>
            <input type="hidden" name="next" value={nextPath} />
            <input
              ref={passwordRef}
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className={styles.input}
              placeholder="password"
            />
            <button type="submit" className={styles.submit}>
              Continue
            </button>
          </form>
        </div>
      )}
    </section>
  );
}
