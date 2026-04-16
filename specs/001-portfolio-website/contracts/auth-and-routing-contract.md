# Contract: Auth and Routing (Private Portfolio)

## Purpose

Define expected route behavior and content contract for a password-protected portfolio where `/work` is the first authenticated destination.

## Route Access Contract

| Route | Auth Required | Behavior |
|-------|---------------|----------|
| `/login` | No | Shows password form; successful submit creates session and redirects to `/work`. |
| `/work` | Yes | Shows case-study index list for all published case studies. |
| `/work/[slug]` | Yes | Shows one case study detail page using required section template. |
| unknown protected route | Yes | Returns not-found page with route back to `/work`. |

## Session Contract

- Password validation occurs server-side.
- On success, system sets secure session cookie:
  - `HttpOnly = true`
  - `SameSite = Lax` (or stricter)
  - `Secure = true` in production
- Expired/invalid sessions are redirected to `/login`.

## Case Study Render Contract

**Content source:** Each case study is a **`CaseStudy` TypeScript object** (see `lib/case-studies/types.ts` and `content/case-studies/`) so section fields are compile-time checked.

Each published case study detail page must render these sections in order:

1. **Problem & company**
2. **Goals**
3. **What was created** (contains one or more feature blocks)
4. **Results**

If required sections are missing for a published entry, the page should fail validation during build/load and not render partial broken content in production.

## Non-goals (v1)

- Multi-user accounts
- Password reset flows
- Role-based permissions
- Public read-only access
