import { cva } from "../../lib/cva";

import styles from "./button.module.css";

export const button = cva(styles.base, {
  variants: {
    kind: {
      bold: styles.bold,
      soft: styles.soft,
      line: styles.line,
      text: styles.text,
    },
    size: {
      small: styles.small,
      regular: styles.regular,
      large: styles.large,
    },
    justifyContent: {
      center: styles.center,
      start: styles.start,
      end: styles.end,
    },
  },
  defaultVariants: {
    kind: "soft",
    size: "regular",
    justifyContent: "center",
  },
});
