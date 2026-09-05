"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import {
  IMAGE_QUALITY_SHARP,
  IMG_CACHE_URL,
  SIZES_CASE_STUDY_TILE
} from "@/components/constants";

import styles from "./case-study-blank-tile.module.css";
const OPACITY_REST = 0.2;
const OPACITY_PEAK = 1;
const BREATHE_PERIOD_MS = 1600;
const EXIT_MS = 350;

function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function easeOutCubic(t: number): number {
  return 1 - (1 - t) ** 3;
}

/** Map opacity onto the rising half of the cosine breathe cycle (ms into period). */
function opacityToPhaseMs(opacity: number): number {
  const range = OPACITY_PEAK - OPACITY_REST;
  const wave = Math.min(1, Math.max(0, (opacity - OPACITY_REST) / range));
  const angle = Math.acos(1 - 2 * wave);
  return (angle / (Math.PI * 2)) * BREATHE_PERIOD_MS;
}

/** Empty sixth grid slot — cover mark + light type skeletons, no copy or link. */
export function CaseStudyBlankTile(): React.JSX.Element {
  const imgRef = useRef<HTMLImageElement>(null);
  const opacityRef = useRef(OPACITY_REST);
  const rafRef = useRef<number | null>(null);
  /** performance.now() when the current breathe cycle epoch began */
  const phaseOriginRef = useRef(0);
  const hoveringRef = useRef(false);

  useEffect(() => {
    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  function setOpacity(value: number): void {
    opacityRef.current = value;
    const el = imgRef.current;
    if (el) {
      el.style.opacity = String(value);
    }
  }

  function cancelRaf(): void {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }

  function tickBreathe(now: number): void {
    if (!hoveringRef.current) return;

    const elapsed = now - phaseOriginRef.current;
    const t = (elapsed % BREATHE_PERIOD_MS) / BREATHE_PERIOD_MS;
    // Cosine so cycle starts at rest (same as CSS keyframes 0%/100% = rest)
    const wave = (1 - Math.cos(t * Math.PI * 2)) / 2;
    setOpacity(OPACITY_REST + (OPACITY_PEAK - OPACITY_REST) * wave);

    rafRef.current = requestAnimationFrame(tickBreathe);
  }

  function easeToRest(from: number, startedAt: number, now: number): void {
    if (hoveringRef.current) return;

    const elapsed = now - startedAt;
    const t = Math.min(1, elapsed / EXIT_MS);
    setOpacity(from + (OPACITY_REST - from) * easeOutCubic(t));

    if (t < 1) {
      rafRef.current = requestAnimationFrame((next) =>
        easeToRest(from, startedAt, next)
      );
      return;
    }

    setOpacity(OPACITY_REST);
    rafRef.current = null;
  }

  function handlePointerEnter(): void {
    if (prefersReducedMotion()) return;

    hoveringRef.current = true;
    cancelRaf();
    const now = performance.now();
    phaseOriginRef.current = now - opacityToPhaseMs(opacityRef.current);
    rafRef.current = requestAnimationFrame(tickBreathe);
  }

  function handlePointerLeave(): void {
    if (prefersReducedMotion()) return;

    hoveringRef.current = false;
    cancelRaf();
    const from = opacityRef.current;
    if (Math.abs(from - OPACITY_REST) < 0.001) {
      setOpacity(OPACITY_REST);
      return;
    }

    const startedAt = performance.now();
    rafRef.current = requestAnimationFrame((now) =>
      easeToRest(from, startedAt, now)
    );
  }

  return (
    <div className={styles.root} aria-hidden="true">
      <div
        className={styles.frame}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
      >
        <div className={styles.mark}>
          <Image
            ref={imgRef}
            src={`/blue.png?v=${IMG_CACHE_URL}`}
            alt=""
            fill
            className={styles.markImg}
            sizes={SIZES_CASE_STUDY_TILE}
            quality={IMAGE_QUALITY_SHARP}
          />
        </div>
      </div>
      <div className={styles.skeletonCategory} />
      <div className={styles.skeletonHeadlines}>
        <div className={styles.skeletonCompany} />
        <div className={styles.skeletonProject} />
      </div>
      <div className={styles.skeletonSummary}>
        <div className={styles.skeletonSummaryLine} />
        <div className={styles.skeletonSummaryLine} />
      </div>
    </div>
  );
}
