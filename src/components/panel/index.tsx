import { cva } from "../../lib/cva";
import styles from "./panel.module.css";

export const panel = cva(styles.base, {
  variants: {
    kind: {
      white: "",
      back: "",
      conBack: "",
      front: "",
      conFront: "",
    },
  },
  defaultVariants: {
    kind: "conBack",
  },
});
