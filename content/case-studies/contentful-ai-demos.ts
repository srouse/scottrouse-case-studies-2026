import type { CaseStudy } from "@/lib/case-studies/types";

export const contentfulAiDemos = {
  slug: "contentful-ai-demos",
  companyName: "Contentful",
  projectTitle: "AI demo platform",
  summary:
    "A platform that generates demos with AI—pairing structured content with generative workflows so teams can show product stories faster.",
  published: true,
  category: "PRODUCT & AI",
  coverTint: "#1e3a5f",
  coverImage: {
    src: "/contentful/contentful-logo.png",
    alt: ""
  },
  problemStatement:
    "Sales and solutions teams needed compelling demos without rebuilding decks and prototypes from scratch for every conversation. Static collateral could not keep up with how fast the product evolved. The solution was a platform that uses AI to assemble demos from real content and narrative building blocks, reducing time-to-story while staying on-brand.",
  createdFeatures: [
    {
      name: "Demo generation pipeline",
      description:
        "Combined content models with AI-assisted assembly so users could produce scenario-specific demos without manual copy-paste marathons.",
    },
    {
      name: "Content + AI guardrails",
      description:
        "Balanced flexibility with constraints—approved messaging, components, and data so generated demos stayed accurate and safe to show.",
    },
  ],
  results: [
    {
      title: "Faster demo creation",
      description:
        "Teams could spin up credible demos in less time without rebuilding decks or prototypes from scratch."
    },
    {
      title: "Unified content + AI pipeline",
      description:
        "Content models and AI generation worked as one workflow instead of competing systems."
    }
  ],
  order: 4,
} satisfies CaseStudy;
