---

description: "Task list for 001 portfolio website implementation"
---

# Tasks: Portfolio Website (Private Case Study Experience)

**Input**: Design documents from `/specs/001-portfolio-website/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/, quickstart.md

**Tests**: Include focused automated tests because the plan explicitly requires E2E smoke coverage for auth and routing plus unit checks for content mapping.

**Organization**: Tasks are grouped by user story to enable independent implementation and validation.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Initialize the Next.js project and baseline tooling.

- [ ] T001 Initialize Next.js App Router project with TypeScript in `package.json` and `tsconfig.json`
- [ ] T002 Configure lint/typecheck/test scripts in `package.json` (`lint`, `typecheck`, `test`, `test:e2e`)
- [ ] T003 [P] Create baseline directories and placeholder files for `app/`, `components/`, `content/case-studies/`, `lib/`, and `tests/`
- [ ] T004 [P] Configure Playwright and Vitest scaffolding in `playwright.config.ts`, `vitest.config.ts`, and `tests/`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before user stories.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete.

- [ ] T005 Create central CSS variables and base global styles in `app/globals.css`
- [ ] T006 [P] Implement shared root layout shell in `app/layout.tsx`
- [ ] T007 [P] Define `CaseStudy` and `CaseStudyFeature` types in `lib/case-studies/types.ts`
- [ ] T008 Implement case-study registry and loader helpers in `content/case-studies/index.ts` and `lib/case-studies/index.ts`
- [ ] T009 [P] Add authentication utility for password verification/session handling in `lib/auth/session.ts`
- [ ] T010 Implement route protection in `proxy.ts` for `/work` and `/work/[slug]`
- [ ] T011 [P] Define environment variable contract and sample env docs in `.env.example`

**Checkpoint**: Foundation ready - user story implementation can now begin.

---

## Phase 3: User Story 1 - Browse the case study index (Priority: P1) 🎯 MVP

**Goal**: Authenticated viewers reach `/work` and can browse all published case studies.

**Independent Test**: With two published case studies, log in, open `/work`, and navigate into any case-study detail page.

### Tests for User Story 1

- [ ] T012 [P] [US1] Add unit tests for case-study listing/filtering in `tests/unit/case-studies-list.test.ts`
- [ ] T013 [P] [US1] Add E2E smoke test for login -> `/work` redirect in `tests/e2e/auth-to-work.spec.ts`
- [ ] T014 [P] [US1] Add E2E test for unauthenticated redirect to `/login` in `tests/e2e/protected-redirect.spec.ts`

### Implementation for User Story 1

- [ ] T015 [P] [US1] Build login page and password form in `app/login/page.tsx`
- [ ] T016 [US1] Implement login submit action and session cookie set in `app/login/actions.ts`
- [ ] T017 [P] [US1] Add sample typed case studies (`satisfies CaseStudy`) in `content/case-studies/`
- [ ] T018 [US1] Implement case-study index route in `app/(protected)/work/page.tsx`
- [ ] T019 [US1] Build reusable case-study card component in `components/case-study-card.tsx`
- [ ] T020 [US1] Wire index navigation links to detail routes in `app/(protected)/work/page.tsx` and `components/case-study-card.tsx`

**Checkpoint**: User Story 1 works independently and is MVP-ready.

---

## Phase 4: User Story 2 - Read a templated case study (Priority: P2)

**Goal**: Each case-study detail page renders the required four-section structure in fixed order.

**Independent Test**: Open two case studies and verify order and presence of Problem & company, Goals, What was created (features), and Results.

### Tests for User Story 2

- [ ] T021 [P] [US2] Add unit tests for template section mapping/order in `tests/unit/case-study-template.test.ts`
- [ ] T022 [P] [US2] Add E2E test for detail page section rendering in `tests/e2e/case-study-detail.spec.ts`
- [ ] T023 [P] [US2] Add E2E test for unknown slug not-found behavior in `tests/e2e/case-study-not-found.spec.ts`

### Implementation for User Story 2

- [ ] T024 [P] [US2] Implement detail page route loader and slug lookup in `app/(protected)/work/[slug]/page.tsx`
- [ ] T025 [P] [US2] Create template section components in `components/case-study-sections/`
- [ ] T026 [US2] Compose fixed-order section renderer in `app/(protected)/work/[slug]/page.tsx`
- [ ] T027 [US2] Add strict validation for published case studies (all four sections + at least one feature) in `lib/case-studies/validate.ts`

**Checkpoint**: User Story 2 works independently and passes structural template checks.

---

## Phase 5: User Story 3 - Shared header and footer (Priority: P3)

**Goal**: All primary protected pages share consistent header/footer and accessible navigation labels.

**Independent Test**: Navigate login -> work -> detail and confirm shared chrome and consistent labels/focus behavior.

### Tests for User Story 3

- [ ] T028 [P] [US3] Add unit tests for header/footer nav rendering and labels in `tests/unit/site-chrome.test.tsx`
- [ ] T029 [P] [US3] Add E2E test for shared chrome across protected routes in `tests/e2e/site-chrome.spec.ts`

### Implementation for User Story 3

- [ ] T030 [P] [US3] Implement shared header component in `components/site-header.tsx`
- [ ] T031 [P] [US3] Implement shared footer component in `components/site-footer.tsx`
- [ ] T032 [US3] Apply shared chrome to protected layout in `app/(protected)/layout.tsx`
- [ ] T033 [US3] Ensure keyboard/focus order and nav-label consistency in `components/site-header.tsx` and `app/(protected)/layout.tsx`

**Checkpoint**: All user stories are independently functional.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final quality pass, documentation, and release readiness.

- [ ] T034 [P] Run full validation suite and fix failures (`lint`, `typecheck`, `test`, `test:e2e`) via `package.json` scripts
- [ ] T035 [P] Perform responsive QA at narrow/medium/wide breakpoints and record outcomes in `specs/001-portfolio-website/quickstart.md`
- [ ] T036 Harden auth/session defaults (`Secure`, `HttpOnly`, `SameSite`, expiry) in `lib/auth/session.ts` and `proxy.ts`
- [ ] T037 [P] Update implementation notes and runbook in `README.md` (or `docs/`) with setup and private-access flow

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - start immediately.
- **Foundational (Phase 2)**: Depends on Setup completion - blocks all user stories.
- **User Stories (Phase 3+)**: Depend on Foundational completion.
  - Preferred sequence: US1 -> US2 -> US3.
  - US2 and US3 can overlap after US1 establishes core routes/components.
- **Polish (Phase 6)**: Depends on completion of desired user stories.

### User Story Dependencies

- **US1 (P1)**: Starts after Phase 2; no dependency on other user stories.
- **US2 (P2)**: Starts after Phase 2; practically benefits from US1 route/content scaffolding.
- **US3 (P3)**: Starts after Phase 2; can proceed once protected layout exists.

### Within Each User Story

- Tests first (where present) and expected to fail before implementation.
- Data/types before route rendering logic.
- Route/component implementation before integration polish.
- Complete and validate one story before declaring it done.

### Parallel Opportunities

- Setup tasks marked [P] can run concurrently.
- Foundational tasks T006, T007, T009, T011 can run in parallel.
- In US1, tests T012-T014 and content task T017 can run in parallel.
- In US2, tests T021-T023 and section component creation T025 can run in parallel.
- In US3, tests T028-T029 and component tasks T030-T031 can run in parallel.

---

## Parallel Example: User Story 2

```bash
# Parallel tests
Task: "T021 [US2] template section mapping/order unit tests"
Task: "T022 [US2] detail page section rendering E2E"
Task: "T023 [US2] unknown slug not-found E2E"

# Parallel implementation
Task: "T024 [US2] detail route loader"
Task: "T025 [US2] section components"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1 and Phase 2.
2. Complete Phase 3 (US1).
3. Validate login + `/work` + navigation to detail.
4. Demo private MVP.

### Incremental Delivery

1. Deliver US1 (private access + index).
2. Deliver US2 (templated detail rigor).
3. Deliver US3 (shared chrome + accessibility polish).
4. Finalize with Phase 6 cross-cutting checks.

### Parallel Team Strategy

1. Team completes Setup + Foundational together.
2. Then split:
   - Dev A: US1 auth/index flow
   - Dev B: US2 template/detail rendering
   - Dev C: US3 shared chrome/accessibility
3. Rejoin for Phase 6 validation hardening.

---

## Notes

- Every task follows required checklist format: checkbox + ID + optional [P] + optional [USx] + file path.
- Story phases are independently testable per spec.
- Keep scope aligned with constitution: simple, responsive, case-study-first private experience.
