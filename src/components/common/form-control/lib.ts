import { createElement as h, ReactNode } from "react";

export function stringToElement(node: ReactNode) {
  if (typeof node == "string" || typeof node == "number") {
    return h("span", {}, node);
  } else {
    return node;
  }
}

type FormdataOptions = {
  withCheckboxGroups?: string[];
};

export function formdata(target: HTMLFormElement, _?: FormdataOptions) {
  const data = Object.fromEntries(new FormData(target));

  // if (opts?.withCheckboxGroups?.length) {
  // }

  return data;
}
