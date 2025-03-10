import React from "react";

import { type VariantProps, cva } from "class-variance-authority";

const variants = cva("", {
  variants: {
    v: {
      keyword: "text-hl-keyword",
      punc: "text-hl-punctuation",
      var: "text-hl-variable",
    },
  },
});

export interface HighlightProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof variants> {}

export const Highlight = React.forwardRef<HTMLSpanElement, HighlightProps>(
  ({ v, className, ...props }, ref) => (
    <span ref={ref} className={variants({ v, className })} {...props} />
  )
);
Highlight.displayName = "Highlight";
