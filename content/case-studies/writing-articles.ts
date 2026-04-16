import type { CaseStudy } from "@/lib/case-studies/types";

export const writingArticles = {
  slug: "writing-articles",
  companyName: "Articles",
  projectTitle: "Design tokens & AI",
  coverImage: {
    src: "/articles/articles-logo.png",
    alt: ""
  },
  summary:
    "Two long-form pieces: one on design tokens, and another that explains artificial intelligence in plain language for a broad audience.",
  published: true,
  category: "ARTICLES",
  coverTint: "#003B24",
  problemStatement:
    "Complex topics—how tokens power UI, and what “AI” actually means—often stay opaque to readers who are not specialists. I wanted writing that met people where they are: clear, durable articles—one that grounds design tokens in practice, and one that demystifies AI without hype or hand-waving.",
  createdFeatures: [
    {
      name: "Design tokens article",
      description:
        "Explained how tokens connect design decisions to implementation so teams can reason about consistency and change over time.",
    },
    {
      name: "AI, explained simply",
      description:
        "Outlined core ideas behind modern AI in approachable language—what it can do, where it breaks, and why that matters for product teams.",
    },
  ],
  results: [
    {
      title: "Reusable token reference",
      description:
        "Readers get a durable guide for how token-driven systems connect design decisions to implementation."
    },
    {
      title: "Practical AI framing",
      description:
        "The AI article gives teams a grounded way to discuss capabilities and limitations without hype."
    }
  ],
  order: 2,
} satisfies CaseStudy;
