<!--
Sync Impact Report
- Version change: (template) → 1.0.0
- Principles: All placeholders replaced with five portfolio-specific principles (initial adoption)
- Added sections: Project Scope & Visual Reference; Development Workflow & Quality Gates
- Removed sections: None (template sections filled)
- Templates: .specify/templates/plan-template.md ✅ | spec-template.md ✅ | tasks-template.md ✅
- Follow-up: None; stack choice (e.g. Vite vs Next) remains for plan/spec per feature
-->

# Portfolio Website Constitution

## Core Principles

### I. Simplicity and mission focus

The site MUST stay minimal: a **brief** introduction to the author and **case studies** as the primary content. Navigation, copy, and features MUST NOT expand into unrelated product areas, heavy marketing, or secondary experiences without a constitution amendment. Rationale: the project exists to present identity and work clearly, not to become a broad web product.

### II. Responsive by default

Layouts MUST be **responsive** across common viewport sizes (mobile through desktop). Typography MUST remain readable; interactive targets MUST be usable on touch devices. Rationale: accessibility and professional presentation on all devices are non-negotiable for a public portfolio.

### III. Lightweight structure (tokens, components, pages)

The codebase MUST be **organized for maintainability** without requiring a **full design system**: a **central store of CSS variables** (tokens) for color, type, and spacing; **reusable components** for repeated UI; and **distinct pages** for major views (e.g. home, work index, case studies, about, contact as applicable). Exhaustive component libraries, token taxonomies, or design-system governance are explicitly **out of scope** unless the constitution is amended. Rationale: consistency with low ceremony.

### IV. Visual inspiration (reference site)

Visual density, typography, navigation, and **work-index** presentation SHOULD align with the primary inspiration: **[Mia Galloro — Work](https://www.miagalloro.com/work)** (retrieved for alignment: clean list of projects with short descriptors and clear paths into case studies). The implementation MUST NOT copy proprietary assets, trademarks, or third-party copy; it SHOULD achieve a similar **calm, scannable, content-first** feel through spacing, hierarchy, and restraint. Rationale: a single agreed reference reduces arbitrary styling and scope creep.

### V. Scope discipline and justified complexity

Any dependency, framework, build tool, or pattern that increases learning surface or bundle size MUST be **justified** in planning documentation (e.g. Complexity Tracking in the implementation plan). Prefer the **simplest** stack that satisfies Principles I–IV. Rationale: protect simplicity when pressure to add features or tooling appears.

## Project Scope & Visual Reference

- **In scope**: Personal introduction (short), case study listing and detail views, essential navigation (e.g. Work, About, Contact), responsive layout, shared tokens and components as in Principle III.
- **Out of scope (unless amended)**: Full design system, CMS, user accounts, analytics beyond optional lightweight hooks, blog engines, or experimental features unrelated to portfolio goals.
- **Primary visual reference**: [https://www.miagalloro.com/work](https://www.miagalloro.com/work) — use for layout and tone; document intentional deviations in the feature spec or plan.

## Development Workflow & Quality Gates

- **Before design approval**: Confirm information architecture matches Principle I (brief bio + case studies) and Principle IV (reference alignment).
- **Before merge / release**: Manually verify **responsive** behavior at least at narrow, medium, and wide widths; confirm no critical content is clipped or unreadable.
- **Code organization**: New UI MUST reuse tokens from the central CSS variable store when styling shared patterns; duplicated magic values SHOULD be refactored into tokens or shared components when they repeat.
- **Reviews**: Reviewers SHOULD check constitution compliance when scope or dependencies change.

## Governance

This constitution supersedes informal preferences when they conflict with written principles. **Amendments** require updating `.specify/memory/constitution.md`, bumping **CONSTITUTION_VERSION** per semantic versioning (MAJOR: incompatible principle changes; MINOR: new principle or section; PATCH: clarifications only), setting **Last Amended** to the amendment date, and refreshing the Sync Impact Report comment at the top of this file. Feature specs and implementation plans MUST remain aligned with the active constitution.

**Version**: 1.0.0 | **Ratified**: 2026-04-14 | **Last Amended**: 2026-04-14
