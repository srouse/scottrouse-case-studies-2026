import type { CaseStudy } from "@/lib/case-studies/types";

/** Replace `example.com` hrefs with your live article and demo URLs. */
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
  coverTint: "#1870E6",
  createdFeatures: [
    {
      name: "Design tokens article",
      description:
        "Outlined a practical model for design tokens as a system of record for design decisions, progressing from primitive to semantic layers and showing how they scale across design, code, and content platforms. The article has remained a top-performing piece for over a year and a half, at times ranking #1, and has driven direct engagement from partners and customers.",
      href: "https://www.contentful.com/blog/design-token-system/",
      media: [
        {
          src: "/articles/design-tokens.png",
          alt: "Design tokens article"
        }
      ]
    },
    {
      name: "AI, explained simply",
      description:
        "Breaks down modern AI to its core primitive: a single prompt. Explains how tokens, context, and hidden prompt layers shape every response, and why reliable systems depend on how that context is constructed—not the model itself. Presented through interactive examples to make complex behavior predictable and usable.",
      href: "https://www.contentful.com/blog/understanding-ai-building-blocks-anatomy-prompt/",
      media: [
        {
          src: "/articles/ai.png",
          alt: "AI, explained simply"
        }
      ]
    },
    {
      name: "AI, explained simply app",
      description:
        "An interactive system embedded in the article that lets readers directly manipulate prompts, tokens, and context to see how outputs change in real time, making AI behavior predictable instead of opaque.",
      href: "https://www.contentful.com/blog/understanding-ai-building-blocks-anatomy-prompt/",
      linkLabel: "View Visualization",
      media: [
        {
          src: "/articles/ai-app.png",
          alt: "AI, explained simply"
        }
      ]
    }
  ],
  order: 2
} satisfies CaseStudy;
