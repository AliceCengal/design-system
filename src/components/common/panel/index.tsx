import { cva } from "../../../lib/cva";
import styles from "./panel.module.css";

export const panel = cva(styles.base, {
  variants: {
    kind: {
      white: styles.white,
      back: styles.back,
      conBack: styles.conBack,
      front: "",
      conFront: "",
    },
    maxWidth: {
      auto: "",
      xs: styles.xs,
      sm: styles.sm,
      md: styles.md,
      lg: styles.lg,
    },
    tabPanel: {
      true: styles.tabPanel,
      false: "",
    },
  },
  defaultVariants: {
    kind: "back",
    maxWidth: "auto",
    tabPanel: false,
  },
});
