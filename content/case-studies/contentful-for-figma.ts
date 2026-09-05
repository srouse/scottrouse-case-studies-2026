import type { CaseStudy } from "@/lib/case-studies/types";

/** Assets live in public/contentfulforfigma/ - swap files manually as needed. */
export const contentfulForFigma = {
  slug: "contentful-for-figma",
  companyName: "Contentful",
  projectTitle: "Contentful for Figma",
  summary:
    "My initiative and the project I led: designers and content creators capture and preview real Contentful content on the Figma canvas, so production isn’t a surprise and the copy-paste handoff disappears.",
  published: true,
  category: "FIGMA & CONTENT",
  coverTint: "#241F21",
  coverImage: {
    src: "/contentfulforfigma/contentful-for-figma-logo.png",
    alt: "Contentful for Figma"
  },
  order: 1,
  coverFit: "cover",
  ctaHref: "https://www.figma.com/community/widget/1644421339192517412",
  ctaLabel: "View in Figma Community",
  problemStatement: `Getting from Figma to a real webpage cleanly is a top customer complaint. Ideation, content creation, and sign-off already happen on the canvas, but Contentful isn’t there: teams invent or paste content, then recreate it later and watch design and copy drift. When production finally lands, everyone shares the churn of reconciling what was approved against what actually shipped, so the widget lives where that shared expression is carved out and previewed.`,
  createdFeatures: [
    {
      name: "Preview Entries in Figma",
      description: `Take a Contentful entry, inject it into a Figma component, and see something that looks close to production. That instance stays bound to the entry, so the canvas isn’t a one-off paste; it’s a living preview of real content. With real entries on the canvas, teams design and decide faster, and catch layout and copy issues before production becomes a surprise.`,
      media: [
        {
          src: "/contentfulforfigma/contentful-for-figma-case-study-01.png",
          alt: "Contentful for Figma widget injecting a person entry into a card component"
        }
      ]
    },
    {
      name: "Bindings",
      description: `Bindings are the foundation that lets content be predictably injected into a component. Connect a Contentful content type to a Figma component and map fields (text, images, rich text, nested references), plus string templates that combine attributes into a single layer. Once those mappings are set, any matching entry can be searched and injected dynamically without rebuilding the component.`,
      media: [
        {
          src: "/contentfulforfigma/contentful-for-figma-case-study-02.png",
          alt: "Bindings panel mapping Figma layers to Contentful fields"
        }
      ]
    },
    {
      name: "Contentful search",
      description: `Finding the right entry has to feel like Contentful. Built a full search experience with familiar filters, content types, and statuses, so designers and content creators can locate an entry and, through bindings, inject and render it on the component in one flow.`,
      media: [
        {
          src: "/contentfulforfigma/contentful-for-figma-case-study-04.png",
          alt: "Entry browser listing Contentful entries next to a bound Figma card"
        },
      ]
    },
    {
      name: "Collections and nested design",
      description: `Larger layouts need more than a single card. The widget supports collections and nested binding so teams can assemble fuller page designs with real Contentful content today. It’s production-ready for that work, even while page-level orchestration and AI-assisted binding remain the next chapter.`,
      media: [
        {
          src: "/contentfulforfigma/contentful-for-figma-case-study-03.png",
          alt: "Page design alongside collection bindings for blog cards"
        }
      ]
    }
  ],
  results: [
    {
      title: "A product aimed at a known pain",
      description:
        "Just released and public for Contentful customers. We can walk into prospect and customer conversations with a real widget that addresses the Figma-to-production gap they already describe as high priority."
    },
    {
      title: "Meet designers where they are",
      description:
        "Teams can create and preview content inside Figma and store it in Contentful, capturing decisions when the expression is being carved out, instead of reconstructing them after the fact."
    },
    {
      title: "Opens the next chapter",
      description:
        "Shipping the widget unlocked broader conversations about Figma handoff, storing bindings and layout in Contentful, and the path to page-level assembly and AI, without claiming that full workflow as shipped today."
    }
  ]
} satisfies CaseStudy;
