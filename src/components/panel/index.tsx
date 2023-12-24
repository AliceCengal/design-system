import { cva } from "../../lib/cva";
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
      xs: "",
      sm: "",
      md: "",
      lg: "",
    },
    padding: {
      0: "pad-0",
      1: "pad-1",
      2: "pad-2",
      3: "pad-3",
      4: "pad-4",
      5: "pad-5",
    },
  },
  defaultVariants: {
    kind: "conBack",
    maxWidth: "auto",
    padding: 2,
  },
});
