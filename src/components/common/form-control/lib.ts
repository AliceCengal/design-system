import { createElement as h, ReactNode } from "react";

export function stringToElement(node: ReactNode) {
  if (typeof node == "string") {
    return h("span", {}, node);
  } else {
    return node;
  }
}
