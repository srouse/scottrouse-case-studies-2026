# Research Constitution

This document defines methodology and quality standards for research in this project—including portfolio strategy, hiring-signal analysis, and healthcare AI product design topics.

**Last updated:** 2026-04-14  
**Version:** 2.0

---

## Domain context (this project)

Research here often supports **career and presentation decisions** (e.g., portfolio structure for a **lead designer, AI products** role at a **healthcare / oncology** organization). For that domain:

- Treat **job descriptions, product pages, and regulatory-adjacent UX expectations** as first-class evidence alongside design-craft articles.
- Distinguish **role signals** (what employers say they want) from **portfolio patterns** (what successful candidates actually show); both matter, and they may not match perfectly.
- Prefer guidance that accounts for **high-stakes domains**: patient safety, privacy, clinician workflow, explainability of AI-assisted decisions, and collaboration with science/clinical stakeholders.

---

## Core principles

1. **Evidence over vibe** — Recommendations and claims should trace to sources or to explicit, labeled professional judgment when sources are thin.
2. **Proportionate confidence** — Strong claims need stronger evidence; “best practice” in portfolios is often contextual—state audience (recruiter vs. design director) and tradeoffs.
3. **Reproducible notes** — Enough detail in `sources.md` / findings that you (or another reader) could re-find the same material later.
4. **Transparency** — Flag when evidence is anecdotal (e.g., a single portfolio teardown vs. peer-reviewed study).

---

## Citation standards

### When citations are required

- **Factual claims** (statistics, dates, regulatory references, “Company X requires Y”).
- **Quotes or close paraphrases** from articles, talks, or job postings.
- **Ideas or frameworks** attributed to a named author or organization.
- **Portfolio or product examples** used as evidence (link + what you observed).

### Format (project default)

Use **APA-style** for formal sources where author/year are clear:

- In-text: (Author, Year) or (Author, Year, p. X) when page matters.
- Reference list entries: Author, A. A. (Year). *Title*. Publisher or site name. URL

For **web-only** sources (most portfolio and hiring research), include at minimum:

- Title or description of the page
- Site / organization
- **Retrieval date** (YYYY-MM-DD)
- Stable URL

**Job postings**: Cite company name, role title, and access date; save a PDF or capture key quoted requirements if allowed.

### Source types — handling

| Type | Citation note |
|------|----------------|
| Official docs (WCAG, FDA human factors, etc.) | Version/section when possible |
| Company career pages / JDs | Date accessed; quote sparingly |
| Blogs, Medium, conference talks | Author + date; treat as expert opinion unless backed by data |
| Social / forums | “Anecdotal—verify”; link; do not treat as consensus |

Maintain a running bibliography in `sources.md` (or equivalent) for each research thread.

---

## Source quality standards

### Rating scale (use in notes)

| Tier | Label | Typical use |
|------|--------|-------------|
| ★★★★★ | Authoritative primary | Standards bodies, peer-reviewed HCI/CHI, official vendor/regulatory guidance |
| ★★★★ | Credible secondary | Established research firms, major design org research (e.g., NN/g), respected design leadership with track record |
| ★★★ | Informed practice | Senior practitioners, portfolio reviews, conference case studies—good for patterns, verify bold claims |
| ★★ | General press / SEO | Orientation only; cross-check |
| ★ | Unattributed social | Leads and hypotheses only |

### Preferred sources for portfolio / hiring research

- **Role signal**: Official job descriptions, employer product/design blogs, talks by people in similar roles.
- **Craft and structure**: Reputable UX/design publications, books, syllabi from known programs (for structure ideas).
- **Healthcare and AI responsibility**: Clinical UX literature, human factors for medical devices (where relevant), AI UX / explainability resources from recognized authors or institutions.

### Red flags

- Anonymous advice with no examples or credentials.
- “Best portfolio ever” listicles with no criteria or dated screenshots only.
- **Purely decorative** “AI aesthetics” with no tie to product decisions you’re defending in an interview.
- Claims that contradict **multiple** independent high-quality sources without acknowledgment.

---

## Research process structure

### Phase 1 — Planning

Deliverable: `plan.md` (or embedded section in a research note).

Include:

- **Research question** (e.g., “What portfolio format best signals lead-level AI product design for a healthcare oncology employer?”).
- **Audience** for the answer (you, interview panel, external mentor).
- **In scope / out of scope** (e.g., resume vs. portfolio only).
- **Search strategy**: keywords, where you’ll look (JD corpus, design blogs, example portfolios), stopping rule (“stop when themes repeat across 3+ independent sources”).
- **Success criteria**: e.g., “Actionable outline for site IA + 3 case study outlines.”

### Phase 2 — Execution

Deliverable: `findings.md` + `sources.md`.

- Log sources as you go (don’t defer bibliography to the end).
- Tag findings by theme: e.g., *case study depth*, *visual evidence*, *AI-specific narrative*, *healthcare trust/safety*.
- Note **conflicts** immediately (e.g., “minimal portfolio” vs. “show everything”).

### Phase 3 — Synthesis

Deliverable: `synthesis.md`.

- Direct answer to the research question.
- **Recommendations** with “when this applies / when it doesn’t.”
- **Limitations** (sample bias: only public portfolios you could find, etc.).
- Optional: **decision checklist** for your own portfolio build.

---

## Verification requirements

| Claim type | Standard |
|------------|----------|
| Critical (e.g., regulatory requirement stated as fact) | Prefer primary doc; otherwise 2+ authoritative sources |
| Employer expectations (skills, deliverables) | 2+ independent JDs or 1 JD + employer’s own design/AI content |
| Design / portfolio conventions | 2+ independent sources or 1 authoritative + multiple exemplars called out as *examples not proof* |
| Single anecdote (“this one designer got hired with X”) | Clearly labeled; not generalized without more data |

### Conflicting information

1. Note the disagreement in the synthesis.
2. Prefer **recency** for tools and platform norms; prefer **timeless** criteria for story structure (problem → process → outcome).
3. If unresolved, recommend **safe defaults** for a healthcare AI lead role: clarity, accountability for AI behavior in the UI, measurable outcomes, respect for privacy.

### Fact-checking

- Trace stats to the original study or report.
- Re-open URLs before citing; note if a link died.

---

## Ethical and privacy notes (portfolio research)

- When analyzing **public** portfolios, describe patterns without trashing individuals.
- If your own work is under NDA, plan how you’ll show **process and outcomes** without leaking confidential data—note that constraint in research conclusions.

---

## Quality checklist

Before treating a research thread as “done”:

- [ ] Research question is answered explicitly.
- [ ] Claims are cited or marked as professional judgment.
- [ ] Source quality is considered; weak sources are down-weighted.
- [ ] Conflicts between sources are acknowledged.
- [ ] Recommendations are actionable for **this** domain (healthcare + AI product leadership).
- [ ] Limitations are stated.
- [ ] `sources.md` is complete enough to revisit.

---

## Continuous improvement

Update this constitution when you change tools, domains, or evidence standards. All research in this project should align with it unless a single project documents a deliberate exception.

---

*This constitution guides all research activities in this project.*
