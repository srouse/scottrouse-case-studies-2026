import { Fragment } from "react";

import { parseInlineEmphasis } from "@/lib/text/parse-inline-emphasis";

type InlineEmphasisProps = {
  text: string;
};

export function InlineEmphasis({ text }: InlineEmphasisProps): React.JSX.Element {
  return (
    <>
      {parseInlineEmphasis(text).map((segment, index) =>
        segment.kind === "strong" ? (
          <strong key={index}>{segment.value}</strong>
        ) : (
          <Fragment key={index}>{segment.value}</Fragment>
        )
      )}
    </>
  );
}
