import { useReducer } from "preact/hooks";

export function useToggle(init: boolean = false) {
  return useReducer(f, init);
}

function f(a: boolean): boolean {
  return !a;
}
