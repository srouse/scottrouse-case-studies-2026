# Feature Specification: Portfolio website (case studies)

**Feature Branch**: `001-portfolio-website`  
**Created**: 2026-04-14  
**Status**: Draft  
**Input**: User description: "Single specification 001 for the website itself; case study list and templated detail pages; shared header and footer; Next.js for easy deployment to Vercel."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Browse the case study index (Priority: P1)

A visitor lands on the site and finds a **list of case studies** with enough information per item (title and short description or role tags) to choose what to read next. From the list they can navigate to a specific case study.

**Why this priority**: Without a discoverable index, case studies cannot be found; this is the minimum viable portfolio experience.

**Independent Test**: Publish at least two sample case studies and verify a new user can identify both from the index and open each detail view without using direct URLs only.

**Acceptance Scenarios**:

1. **Given** the site has one or more published case studies, **When** the visitor opens the work or case-study index page, **Then** they see every published case study listed with title and supporting summary or metadata consistent with content.
2. **Given** the visitor is on the index, **When** they activate a case study entry, **Then** they arrive at that case study’s detail view.

---

### User Story 2 - Read a templated case study (Priority: P2)

A visitor opens a case study detail page where content follows the **same four-part outline** on every story (see **Case study detail template** below). The page is readable on phone and desktop.

**Why this priority**: Templated depth is what differentiates portfolio case studies from image galleries and supports hiring-panel review.

**Independent Test**: Compare two case study detail pages side by side and confirm all four template sections appear in the same order; fill one with minimal content and one with rich content (including multiple features under “What was created”) without breaking layout.

**Acceptance Scenarios**:

1. **Given** a case study exists, **When** the visitor opens its detail page, **Then** they see, in order: **Problem & company**, **Goals**, **What was created** (with one or more features), and **Results**, each with that case study’s content.
2. **Given** a case study has long text or many images, **When** viewed on a narrow viewport, **Then** content remains readable without horizontal scrolling for standard content.

---

### User Story 3 - Shared header and footer (Priority: P3)

Every primary page (at minimum: home or landing, case study index, each case study detail, and contact or about if present) shows the same **site header** and **site footer** with consistent navigation and identity.

**Why this priority**: Shared chrome reinforces credibility and wayfinding; it is separable after index + detail work but should ship before launch.

**Independent Test**: Navigate across all primary routes and confirm header and footer appear and behave consistently; verify key navigation links work from each page type.

**Acceptance Scenarios**:

1. **Given** the visitor navigates between home, index, and a case study detail page, **When** each page loads, **Then** the same header and footer components are present with working primary navigation.
2. **Given** the visitor uses a keyboard or screen reader, **When** they move through the header navigation, **Then** focus order and link labels are sensible (no duplicate or misleading labels for the same destination).

---

### Edge Cases

- **No case studies yet**: Index page still loads and communicates that work is coming or is empty—no broken layout.
- **Unknown or removed case study**: Requesting a case study that does not exist shows a clear “not found” state with path back to the index.
- **Very long titles or one-line summaries**: Index cards do not break layout or truncate in a confusing way without indication (e.g. ellipsis with full title available to assistive tech).
- **Few or many “features” under What was created**: Layout supports a single feature block or a short list without collapsing hierarchy; empty feature list is avoided for published case studies (content governance, not a technical error state).

## Case study detail template

Every case study detail page MUST use the **same section order** and **distinct section boundaries** below. Display labels may be shortened in the UI (e.g. hero titles) but the **semantic content** must map to these four blocks.

| Order | Section | Purpose |
|-------|---------|--------|
| 1 | **Problem & company** | Describe the **problem** being solved and the **company or context** the project was for (client, product area, or setting—respecting any confidentiality conventions used elsewhere on the site). |
| 2 | **Goals** | State the **goals of the project**: what success looked like from a product or design perspective. |
| 3 | **What was created** | Explain **what was shipped or produced**, walking through a **handful of features** (or major deliverables) so reviewers see scope and craft—not only a single paragraph. |
| 4 | **Results** | A **separate** section from goals: **outcomes, impact, or learnings** (qualitative or quantitative as appropriate). This MUST NOT be merged into “What was created” in the default template. |

**Content rules**: Sections 1–4 are all **required** for a complete published case study. Within **What was created**, at least **one** feature or deliverable subsection SHOULD be present when the case study is marked published (stakeholder content duty).

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The site MUST present a **case study index** listing all published case studies with at least title and a short description or summary per item.
- **FR-002**: The site MUST provide a **case study detail** view for each published case study reachable from the index.
- **FR-003**: Each case study detail MUST implement the **Case study detail template** (Problem & company → Goals → What was created → Results) in that fixed order on every story.
- **FR-004**: The site MUST include a **shared header** and **shared footer** on all primary pages defined in scope.
- **FR-005**: The site MUST be **responsive**: primary layouts and typography remain usable from small phone widths through desktop widths.
- **FR-006**: The site MUST include a **brief personal introduction** on the landing or about surface aligned with `.specify/memory/constitution.md` (short bio; case studies remain primary).
- **FR-007**: Navigation MUST make the case study index reachable from the landing experience in **no more than one** primary navigation action where possible.
- **FR-008**: Missing case study routes MUST return a user-visible **not found** state with a path back to the index.

### Key Entities

- **Case study**: Represents one portfolio project; has stable identifier/slug, display title, summary for index, and structured content for **Problem & company**, **Goals**, **What was created** (including one or more named features or deliverables), and **Results**.
- **Case study template**: The four-section outline in **Case study detail template**; every detail page MUST bind content to these sections in order.
- **Feature (within a case study)**: A unit of description inside **What was created** (e.g. a shipped capability or major UI surface)—multiple allowed; not separate routes.
- **Site chrome**: Header and footer content blocks (identity, primary links, optional contact link) reused across pages.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: **100%** of case studies marked published appear on the index page in a manual content audit before launch.
- **SC-002**: A first-time visitor can open **any** listed case study from the index in **at most two** interactions (e.g. index → detail) on a standard phone width.
- **SC-003**: **100%** of published case study detail pages pass a structural checklist: **Problem & company**, **Goals**, **What was created** (with at least one feature or deliverable called out), and **Results** are all present in that order (body copy may be short but not blank for published stories).
- **SC-004**: On a representative phone and desktop viewport, **no critical content** (title, navigation, primary case study body) is clipped or unreadable in smoke testing.
- **SC-005**: Stakeholder review: header and footer are **visually and structurally consistent** across sampled pages (home, index, two case studies) with **zero** conflicting navigation labels for the same destination.

## Assumptions

- **Content source**: Case studies are authored as structured content in the repository (e.g. files or a single content module) rather than a separate headless CMS for the first release—reduces scope; can migrate later.
- **Deployment**: The implementation will target **managed static or hybrid hosting** with a straightforward Git-based deploy; the stakeholder preference is **Next.js on Vercel** for deployment simplicity—captured here for planning, not as an end-user requirement.
- **Audience**: Public, unauthenticated visitors only; no private or role-based case studies in v1.
- **Language**: Single primary language for all copy.
- **Constitution**: Visual tone and simplicity constraints in `.specify/memory/constitution.md` apply, including the Mia Galloro work index as the primary visual reference for density and hierarchy.
