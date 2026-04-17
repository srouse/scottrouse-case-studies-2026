import type { CaseStudy } from "@/lib/case-studies/types";

export const contentfulAiDemos = {
  slug: "ctf-ai-demos",
  companyName: "Contentful",
  projectTitle: "AI-Driven Technical Demo Generation",
  summary:
    "Built an AI-native system that generates realistic, prospect-specific technical demos, reducing manual setup time while improving quality and sales effectiveness.",
  published: true,
  category: "PRODUCT & AI",
  coverTint: "#1e3a5f",
  coverImage: {
    src: "/contentful/contentful-logo.png",
    alt: ""
  },
  problemStatement: `Contentful’s sales engineers depended on technical demos to close deals, but creating them was slow, manual, and inconsistent. High-impact demos took hours or days to approximate a prospect’s environment and still fell short of accurately reflecting real systems. This limited the ability to tell compelling, credible stories at critical sales moments. The cost was immediate: time spent building demos reduced customer engagement, while competitors moved toward AI-assisted approaches. Without change, Contentful risked falling behind in a core driver of revenue.`,
  createdFeatures: [
    {
      name: "DemAI: AI-Native Demo Platform",
      description: `Developed a dedicated Contentful app that acts as the control plane for AI-driven demo generation. Each space becomes a self-contained environment where content models, entries, assets, and AI workflows operate together. This replaced fragmented tooling with a unified system, allowing sales engineers to move from zero to a structured demo environment quickly and consistently.`,
      media: [
        {
          src: "/contentful/ctf-case-study-12.png",
          alt: "Contentful AI demos"
        }
      ]
    },
    {
      name: "Content Modeling Agents",
      description: `Built specialized agents to generate full content models from a prospect’s website, including structured relationships across content types. This eliminated the need for manual modeling while embedding best practices into the process, enabling less experienced users to produce high-quality, production-ready schemas.`,
      media: [
        {
          src: "/contentful/ctf-case-study-4.png",
          alt: "Contentful AI demos"
        }
      ]
    },
    {
      name: "AI UX Workbench",
      description: `Designed a purpose-built interface for orchestrating AI workflows. Instead of generic chat, the system surfaces context-aware agents tied to specific entities like content types, entries, and assets. This provided a structured, guided experience for executing complex multi-step AI processes while maintaining visibility into the broader system state.`,
      media: [
        {
          src: "/contentful/ctf-case-study-3.png",
          alt: "Contentful AI demos"
        }
      ]
    },
    {
      name: "Website Crawling and Component Extraction",
      description: `Integrated crawling capabilities to ingest real prospect websites and extract structural and visual patterns. Components were converted into reusable web components and paired with generated content. This enabled demos to closely mirror real-world implementations, significantly improving the credibility and impact of technical presentations.`,
      media: [
        {
          src: "/contentful/ctf-case-study-13.png",
          alt: "Contentful AI demos"
        }
      ]
    },
    {
      name: "Design System Agent Kit",
      description: `Developed an opinionated agent framework for generating coherent design systems aligned with Figma and implementation code. This extended the system beyond demos, enabling rapid creation of structured, scalable UI foundations that could evolve into production-ready systems.`,
      media: [
        {
          src: "/contentful/ctf-case-study-2.png",
          alt: "Contentful AI demos"
        }
      ]
    },
  ],

  results: [
    {
      title: "Higher-Impact Demos, 68% Faster",
      description:
        "Reduced demo creation time by 68% while enabling more realistic, prospect-specific demos that improved sales effectiveness.",
    },
    {
      title: "Higher Fidelity Demonstrations",
      description:
        "Delivered demos that closely reflect real prospect environments, strengthening storytelling and alignment in critical sales conversations.",
    },
    {
      title: "AI Adoption Across Teams",
      description:
        "Accelerated internal AI adoption, driving broader experimentation and influencing company-wide direction.",
    },
  ],
  order: 4,
} satisfies CaseStudy;
