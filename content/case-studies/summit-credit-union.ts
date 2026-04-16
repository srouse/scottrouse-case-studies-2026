import type { CaseStudy } from "@/lib/case-studies/types";

export const summitCreditUnion = {
  slug: "summit-credit-union",
  companyName: "Summit Credit Union",
  projectTitle: "Design System & Content Platform Transformation",
  summary:
    "Led the creation of a web component–driven design system and content platform that unified fragmented systems, reduced reliance on client-side complexity, and enabled Summit to regain control over their member experience while avoiding a costly full rebuild.",
  published: true,
  category: "FINANCIAL SERVICES",
  coverTint: "#3E3E3E",
  coverImage: {
    src: "/summit/summit-logo.png",
    alt: "Summit central"
  },

  problemStatement:
    "Summit Credit Union’s digital experience was fragmented across third-party systems, leaving them with little control over how users interacted with products. Even small improvements were difficult to implement. Developers spent most of their time wrestling with UI complexity rather than delivering value, compounded by limited client-side expertise. At the same time, Drupal 7 was reaching end-of-life, forcing a major rebuild. Without intervention, Summit risked falling further behind competitors and continuing a cycle of costly, fragmented reinvention.",

  createdFeatures: [
    {
      name: "Strategy Leadership",
      description:
          "Drove the strategy to break Summit out of a third-party–locked ecosystem by introducing a design system and content platform as a bridge. Enabled teams to ship real products immediately while APIs matured, lead a full Drupal rebuild, and aligned engineering, design, and marketing around a single, scalable path forward.",
      media: [
        {
          src: "/summit/scu-case-study-8.png",
          alt: "Summit central"
        }
      ]
    },
    {
      name: "Web Component Design System",
      description:
        "Built a reusable design system using web components to decouple UI from framework constraints. This allowed teams to work across different technologies while maintaining consistency, significantly reducing the complexity of UI implementation and enabling developers to focus on business logic rather than low-level interface concerns.",
        media: [
          {
            src: "/summit/scu-case-study-2.png",
            alt: "Summit central"
          }
        ]
    },
    {
      name: "Design Token System",
      description:
        "Introduced a token-based architecture that gave designers direct control over visual and behavioral decisions such as spacing, color, and layout. This shifted ownership of the user experience toward design, resulting in more cohesive outcomes and reducing reliance on developers for routine visual changes.",
      media: [
        {
          src: "/summit/scu-case-study-11.png",
          alt: "Summit central"
        }
      ]
    },
    {
      name: "Application Layer & Prototyping",
      description:
        "Enabled rapid development of multiple applications and prototypes using the design system. This gave teams their first practical ability to experiment with and shape member experiences, accelerating understanding of what it means to control digital products rather than configure third-party tools. Pictured is my prototype of a member loan visualizer.",
      media: [
        {
          src: "/summit/scu-case-study-10.png",
          alt: "Summit central"
        }
      ]
    },
    {
      name: "Drupal to Contentful Migration",
      description:
        "Led the transition from Drupal 7 to a content-driven architecture using Contentful. Replaced a brittle, copy-paste page creation model with structured content and reusable components, dramatically improving consistency, maintainability, and performance across the website. Pictured is Rates Central, a Contentful Application I built to centralize and manage financial rates as structured content",
      media: [
        {
          src: "/summit/scu-case-study-7.png",
          alt: "Summit central"
        }
      ]
    },
  ],

  results: [
      {
        title: "Regained Control of the Experience",
        description:
          "Summit moved from being constrained by third-party systems to actively shaping the member experience. The design system and content-driven architecture made it easier to respond to user needs and launch new ideas with confidence."
      },
      {
        title: "Changed How Teams Built Products",
        description:
          "Development shifted away from wrestling with UI toward delivering business value. The system reduced the need for deep client-side specialization, gave designers more influence through tokens, and created stronger alignment across teams."
      },
      {
        title: "Improved Performance and Reduced Rebuild Risk",
        description:
          "The new architecture improved performance, reduced technical and design debt, and enabled Summit to move off Drupal 7 to a modern CMS stack. Reusable components and structured content created a more scalable foundation for future growth."
      }
  ],

  order: 3
} satisfies CaseStudy;
