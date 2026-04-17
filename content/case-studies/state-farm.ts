import type { CaseStudy } from "@/lib/case-studies/types";

export const stateFarm = {
  slug: "state-farm",
  companyName: "State Farm",
  projectTitle: "Rebuilding a Design System for Scale",
  summary:
    "Transformed a fragmented, unused design system into a scalable foundation using tokens, web components, and cross-team workflows that enabled adoption across a highly diverse engineering organization.",
  published: true,
  category: "INSURANCE",
  coverTint: "#95160F",
  coverImage: {
    src: "/statefarm/state-farm-logo.png",
    alt: ""
  },
  problemStatement: `
  State Farm’s digital experience was deeply fragmented. Teams across the organization used different frameworks, making a single implementation approach impractical, while the existing design system relied on copy-paste HTML templates and brittle CSS that were difficult to update and rarely adopted.
  
  Simple changes took months, most teams ignored the system entirely, and user journeys regularly crossed multiple teams with inconsistent UI patterns. This created redundant work, slowed development, and eroded user trust as experiences felt unstable and disconnected.
  
  Organizationally, design and development operated in silos with no clear ownership, forcing designers to rely on developers for even minor changes and preventing the system from evolving effectively.
  `,
  createdFeatures: [
    {
      name: "Executive Alignment Through Narrative",
      description: `
Built momentum for modernization by reframing design tokens and system thinking in terms executives could understand. A series of presentations connected fragmented user experiences directly to the lack of shared design primitives.

A single visual demonstrating how vastly different outputs could be produced without tokens became the inflection point, unlocking executive support and organizational alignment.
`,
      media: [
        {
          src: "/statefarm/sf-case-study-5.png",
          alt: "State Farm design system"
        }
      ]
    },
    {
      name: "Token-Based System with Web Components",
      description: `
Established a cross-framework design system using tokens and web components, enabling consistent implementation regardless of underlying technology.

This removed duplication across teams, made components portable, and created a shared foundation that developers could adopt quickly while supporting long-term scalability.
`,
      media: [
        {
          src: "/statefarm/sf-case-study-4.png",
          alt: "State Farm design system"
        }
      ]
    },
    {
      name: "Figma Token Plugin",
      description: `
Developed a Figma plugin that allowed designers to modify tokens directly within design tools, preview changes visually, and commit updates to the codebase.

This removed dependency on developers for routine updates, reduced friction, and gave designers controlled ownership over system-level decisions.
`,
      media: [
        {
          src: "/statefarm/sf-case-study-3.png",
          alt: "State Farm design system"
        }
      ]
    },
    {
      name: "Cross-Team Operating Model",
      description: `
Acted as a bridge between design and engineering, establishing shared understanding and workflows across previously siloed teams.

Enabled developers to adopt flexible component patterns while helping designers understand implementation constraints, resulting in a more collaborative and sustainable system.
`,
      media: [
        {
          src: "/statefarm/sf-case-study-2.png",
          alt: "State Farm design system"
        }
      ]
    }
  ],

  results: [
    {
      title: "Adoption Across Teams",
      description:
        "Shifted from minimal usage to active adoption, with teams building and contributing components instead of bypassing the system."
    },
    {
      title: "Reduced Redundancy",
      description:
        "Eliminated repeated implementation of core UI patterns, significantly reducing duplicated effort across the organization.",
    },
    {
      title: "Faster System Evolution",
      description:
        "Enabled rapid updates to tokens and components that previously took months, improving responsiveness to design changes.",
    },
  ],
  order: 1,
} satisfies CaseStudy;
