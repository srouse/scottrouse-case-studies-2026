import type { CaseStudy } from "@/lib/case-studies/types";

export const stateFarm = {
  slug: "state-farm",
  companyName: "State Farm",
  projectTitle: "Modern design system",
  summary:
    "Helped the organization iterate toward a modern design system built on tokens and web components so experiences could scale with less drift.",
  published: true,
  category: "INSURANCE",
  coverTint: "#95160F",
  coverImage: {
    src: "/statefarm/state-farm-logo.png",
    alt: ""
  },
  problemStatement:
    "Legacy UI stacks and one-off patterns made it hard to evolve digital products at pace. Teams needed a path to modern primitives without boiling the ocean. The work focused on modernizing the design system around tokens and web components, tightening design–dev alignment, and making reuse the default for new work.",
  createdFeatures: [
    {
      name: "Token-first foundations",
      description:
        "Shifted core decisions into design tokens so color, type, and spacing stayed consistent as themes and platforms evolved.",
      media: [
        {
          src: "/statefarm/sf-tokens-plugin.png",
          alt: "State Farm tokens plugin"
        }
      ]
    },
    {
      name: "Web component library",
      description:
        "Packaged UI as web components so product teams could compose experiences with shared behavior and accessibility baked in.",
    },
    {
      name: "Iteration with squads",
      description:
        "Partnered with product and engineering to migrate patterns incrementally and prove value before wide rollout.",
    },
  ],
  results: [
    {
      title: "Reusable system foundation",
      description:
        "The organization gained a more maintainable system with fewer one-offs and a stronger base for future product work."
    },
    {
      title: "Clearer design-to-code contracts",
      description:
        "Teams worked with better-aligned primitives and shared expectations, reducing friction across design and engineering handoffs."
    }
  ],
  order: 1,
} satisfies CaseStudy;
