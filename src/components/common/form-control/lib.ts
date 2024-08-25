import { createElement as h, ReactNode } from "react";

export function stringToElement(node: ReactNode) {
  if (typeof node == "string" || typeof node == "number") {
    return h("span", {}, node);
  } else {
    return node;
  }
}
