# Data Model: 001 Portfolio Website

## Entity: ViewerSession

- **Purpose**: Represents temporary authenticated access after password verification.
- **Fields**:
  - `sessionId` (string, unique)
  - `authenticated` (boolean)
  - `createdAt` (datetime)
  - `expiresAt` (datetime)
- **Validation rules**:
  - Session is valid only if current time `< expiresAt`.
  - Session cookie must be signed and HTTP-only.
- **State transitions**:
  - `Unauthenticated` -> `Authenticated` (valid password submit)
  - `Authenticated` -> `Expired` (timeout or logout)

## Entity: CaseStudy

- **Implementation note:** Persisted as a **TypeScript object** conforming to the `CaseStudy` interface in code (see plan: **Case study content (TypeScript)**), not as external JSON/Markdown files.

- **Purpose**: Canonical content unit for each portfolio project.
- **Fields**:
  - `slug` (string, unique route identifier)
  - `title` (string, required)
  - `summary` (string, required for index)
  - `published` (boolean)
  - `problemCompany` (rich text, required for published)
  - `goals` (rich text/list, required for published)
  - `createdFeatures` (array of `CaseStudyFeature`, min length 1 for published)
  - `results` (rich text/list, required for published)
  - `order` (number, optional sort key)
- **Validation rules**:
  - Published case studies must include all four template sections.
  - `slug` must be URL-safe and unique.
  - `createdFeatures.length >= 1` when `published = true`.
- **Relationships**:
  - One `CaseStudy` has many `CaseStudyFeature`.

## Entity: CaseStudyFeature

- **Purpose**: A concrete feature/deliverable block under “What was created”.
- **Fields**:
  - `name` (string, required)
  - `description` (rich text, required)
  - `media` (optional list of image/video references)
- **Validation rules**:
  - `name` and `description` required for each entry.
  - Media refs must resolve to local assets or approved URLs.

## Entity: SiteChrome

- **Purpose**: Shared header/footer metadata and links.
- **Fields**:
  - `brandName` (string)
  - `primaryNav` (array of label + href)
  - `footerLinks` (array of label + href)
- **Validation rules**:
  - Navigation link labels must be unique.
  - Links must point to valid in-app routes or approved external targets.
