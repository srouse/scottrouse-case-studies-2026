import { describe, expect, it } from "vitest";

import { parseInlineEmphasis } from "@/lib/text/parse-inline-emphasis";

describe("parseInlineEmphasis", () => {
  it("returns a single text segment when there is no markup", () => {
    expect(parseInlineEmphasis("plain summary")).toEqual([
      { kind: "text", value: "plain summary" }
    ]);
  });

  it("wraps **bold** markers as strong segments", () => {
    expect(
      parseInlineEmphasis("stayed among Contentful’s **top ten for years**, plus")
    ).toEqual([
      { kind: "text", value: "stayed among Contentful’s " },
      { kind: "strong", value: "top ten for years" },
      { kind: "text", value: ", plus" }
    ]);
  });
});
