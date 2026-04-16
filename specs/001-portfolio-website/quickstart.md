# Quickstart: 001 Portfolio Website (Plan Validation)

## Prerequisites

- Node.js 20+
- npm (or pnpm/yarn equivalent)
- Environment variable for password secret (example: `PORTFOLIO_PASSWORD`)

## 1) Bootstrap application

1. Initialize Next.js app with TypeScript and App Router.
2. Create baseline directories from `plan.md`:
   - `app/`, `components/`, `content/`, `lib/`, `tests/`
3. Add global CSS file with central CSS variables.

## 2) Implement auth gate skeleton

1. Add `/login` route with password form.
2. Add session creation endpoint/action and cookie write.
3. Add middleware to protect `/work` and `/work/[slug]`.
4. Verify unauthenticated access redirects to `/login`.

## 3) Implement core pages

1. Build `/work` as first post-login route showing case-study list.
2. Build `/work/[slug]` detail route using the four-section template:
   - Problem & company
   - Goals
   - What was created (features)
   - Results
3. Add shared header and footer components across protected pages.

## 4) Add sample content (typed TypeScript)

1. Define `CaseStudy` and `CaseStudyFeature` in `lib/case-studies/types.ts`.
2. Add at least two `content/case-studies/<slug>.ts` files exporting `satisfies CaseStudy`, and register them in `content/case-studies/index.ts`.
3. Confirm index list includes both published entries.
4. Confirm each detail page renders all required sections from typed fields (no unstructured blobs).

## 5) Validate quality gates

1. Run type-check and lint.
2. Run unit tests for content mapping and section rendering.
3. Run E2E smoke tests:
   - login success -> `/work`
   - protected route redirect when unauthenticated
   - detail route loads and shows all four sections
4. Verify responsive behavior at narrow, medium, and wide viewport widths.
