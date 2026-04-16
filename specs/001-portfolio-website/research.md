# Research Notes: 001 Portfolio Website Plan

## Decision 1: Authentication pattern for a private portfolio

- **Decision**: Use a simple password gate with server-side verification and a signed/HTTP-only session cookie for access to protected routes.
- **Rationale**: Meets the explicit requirement for simple non-public access while avoiding user account management and external identity providers.
- **Alternatives considered**:
  - Vercel deployment protection only: too coarse and environment-dependent for predictable app behavior.
  - Full auth provider (NextAuth/Auth0): overkill for a single shared-password use case.
  - Query-string/token gate: weak security and poor user experience.

## Decision 2: First page after login

- **Decision**: Redirect authenticated users to `/work` as the default destination.
- **Rationale**: Matches stakeholder intent that the case-study list is the first thing viewers see after login.
- **Alternatives considered**:
  - Public landing/home page before work list: conflicts with “not public” and “no landing flow” direction.
  - Direct-to-last-viewed case study: unnecessary complexity for initial release.

## Decision 3: Content source for case studies

- **Decision**: Use **explicitly typed TypeScript objects** (`CaseStudy` / `CaseStudyFeature` interfaces), one module per slug (or equivalent), aggregated in `content/case-studies/index.ts`. No Markdown/JSON/CMS—content is data validated at compile time via `satisfies` and `tsc`.
- **Rationale**: Strongest structure guarantee for the four-part template; trivial imports; no content parsers.
- **Alternatives considered**:
  - Headless CMS: adds infra and editorial complexity not needed for v1.
  - Markdown/JSON files: weaker compile-time guarantees without extra schema tooling.
  - Unstructured JSX per page: harder to keep section order and fields consistent.

## Decision 4: Case study template enforcement

- **Decision**: Enforce four required blocks in render contract and content validation:
  1) Problem & company
  2) Goals
  3) What was created (features)
  4) Results
- **Rationale**: Ensures uniform storytelling quality across detail pages.
- **Alternatives considered**:
  - Optional section ordering: weakens comparability and review quality.
  - Freeform content-only pages: higher risk of inconsistent narratives.

## Decision 5: Testing strategy for initial section

- **Decision**: Add a minimal automated suite:
  - E2E smoke tests for login, `/work` access, and case-study detail route.
  - Unit tests for core content mapping/components.
- **Rationale**: Protected-route regressions are high-impact and easy to miss manually.
- **Alternatives considered**:
  - Manual-only validation: too brittle for gated flows.
  - Full exhaustive test matrix: too heavy for initial section.
