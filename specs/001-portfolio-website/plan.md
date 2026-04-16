# Implementation Plan: Portfolio Website (Private Case Study Experience)

**Branch**: `001-portfolio-website` | **Date**: 2026-04-15 | **Spec**: `/specs/001-portfolio-website/spec.md`
**Input**: Feature specification from `/specs/001-portfolio-website/spec.md`

**Note**: Planning directive extends current spec behavior: this portfolio is private and should show the case-study list as the first page after login (no public marketing landing flow).

## Summary

Create a clean Next.js portfolio experience with:
- simple password protection for invited viewers,
- case-study index as the first authenticated destination,
- templated case-study detail pages with fixed section order,
- shared header/footer and responsive layout.

Phase-1 plan focus: scaffold app, wire auth gate, implement list/detail shell, and verify with smoke tests.

## Case study content (TypeScript)

**Decision:** All case study data lives in **TypeScript modules** as **`CaseStudy`-shaped objects**—not Markdown, JSON files, or a CMS. This maximizes compile-time enforcement and keeps the four-part template impossible to “drift” accidentally.

**Requirements:**

1. **Single source of truth types** — Define exported interfaces (or types) in one module, e.g. `lib/case-studies/types.ts`:
   - `CaseStudyFeature`: `name`, `description`, optional structured `media` (e.g. `{ src, alt }[]`).
   - `CaseStudy`: `slug`, `title`, `summary`, `published`, `problemCompany`, `goals`, `createdFeatures` (non-empty when `published`), `results`, optional `order`.
2. **No loose bags** — Do not use `Record<string, unknown>` or optional catch-all fields for section bodies; each template section maps to a **named, typed field**.
3. **Registration** — Each story is either:
   - one file per slug under `content/case-studies/` exporting a const **satisfying** `CaseStudy`, **or**
   - a barrel `content/case-studies/index.ts` that imports all entries and exports `caseStudies: CaseStudy[]` (or `ReadonlyArray<CaseStudy>`).
4. **Validation at build time** — Use `satisfies CaseStudy` (or a small runtime `assertCaseStudy()` in dev) so missing fields fail TypeScript check or CI.
5. **Long prose** — Store narrative copy as **string** fields (template literals allowed); if rich formatting is needed later, narrow to a small union (e.g. `string` only in v1) rather than unstructured markdown blobs.

**Rationale:** Aligns with “really explicitly structured” content, keeps the loader trivial (`import { caseStudies } from '@/content/case-studies'`), and avoids pulling parsers or CMS dependencies.

## Technical Context

**Language/Version**: TypeScript 5.x on Node.js 20 LTS  
**Primary Dependencies**: Next.js (App Router), React, minimal styling via global CSS and CSS variables  
**Storage**: **Case studies as explicitly typed TypeScript objects** (see **Case study content (TypeScript)** below); environment variable secret for password only  
**Testing**: Playwright for end-to-end smoke paths, Vitest + Testing Library for units, ESLint + `tsc --noEmit` checks  
**Target Platform**: Modern web browsers, deployed on Vercel  
**Project Type**: Web application  
**Performance Goals**: Primary pages feel immediate for a small invited audience; no obvious delay during auth and route transitions  
**Constraints**: Single shared password gate, no public mode, no CMS in v1, no full design system, case-study-first IA  
**Scale/Scope**: One private portfolio site, small number of invited reviewers, initial section includes base app + protected index/detail routes

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

Per `.specify/memory/constitution.md` (Portfolio Website):

- **Simplicity**: PASS — scope remains brief identity + case studies.
- **Responsive**: PASS — responsive requirements are included in architecture and testing.
- **Lightweight structure**: PASS — central CSS tokens + reusable components + route pages, no full design system.
- **Visual reference**: PASS — case-study listing hierarchy stays aligned with the documented inspiration (without asset copying).
- **Scope discipline**: PASS — dependency set is intentionally small and each dependency has a clear role.

## Project Structure

### Documentation (this feature)

```text
specs/001-portfolio-website/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── auth-and-routing-contract.md
└── tasks.md
```

### Source Code (repository root)

```text
app/
├── login/page.tsx
├── (protected)/
│   ├── work/page.tsx
│   ├── work/[slug]/page.tsx
│   └── layout.tsx
├── layout.tsx
└── globals.css

components/
├── site-header.tsx
├── site-footer.tsx
├── case-study-card.tsx
└── case-study-sections/

content/
└── case-studies/
    ├── index.ts              # aggregates all CaseStudy exports
    └── <slug>.ts             # one file per case study: export const study satisfies CaseStudy

lib/
├── auth/
├── case-studies/
│   └── types.ts              # CaseStudy + CaseStudyFeature interfaces
└── tokens/

tests/
├── e2e/
└── unit/

proxy.ts
```

**Structure Decision**: Single Next.js app-router project with route grouping for protected pages and **typed TypeScript case-study modules** (aggregated list for index + lookup by slug for detail). This provides low complexity while supporting private access and strict template enforcement.

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| Proxy/session gate for protected routes | Required by private-site constraint | Public routes would violate stakeholder requirement |
| E2E smoke tests for auth + routing | Prevent regressions in protected navigation | Manual QA alone is too fragile for gated flows |

## Post-Design Constitution Re-check

- **Simplicity**: PASS — design artifacts focus on login, work index, and case-study detail only.
- **Responsive**: PASS — quickstart includes required viewport validation.
- **Lightweight structure**: PASS — tokens + reusable UI + route pages are explicitly modeled; no design-system expansion.
- **Visual reference**: PASS — IA remains case-study-first and visually restrained.
- **Scope discipline**: PASS — auth approach remains intentionally minimal (single shared password, no account system).
