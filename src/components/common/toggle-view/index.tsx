import { MutableRefObject, useRef } from "react";

import { useToggle } from "../../../utils/use-toggle";
import { useUpdate } from "../../../utils/use-update";

type ToggleViewProps = {
  children: (open: boolean, toggleOpen: (a?: any) => void) => JSX.Element;
};

export function ToggleView({ children }: ToggleViewProps) {
  const [open, toggleOpen] = useToggle();

  return children(open, toggleOpen);
}

type ToggleViewWithRefProps = {
  children: (
    open: boolean,
    toggleOpen: (a: any) => void,
    ref: MutableRefObject<any>
  ) => JSX.Element;
};

export function ToggleViewWithRef({ children }: ToggleViewWithRefProps) {
  const [open, toggleOpen] = useToggle();
  const ref = useRef(null);

  return children(open, toggleOpen, ref);
}

type UpdateViewProps = {
  children: (
    isLoading: boolean,
    update: (fn: () => Promise<any>) => void
  ) => JSX.Element;
};

export function UpdateView({ children }: UpdateViewProps) {
  const [isLoading, update] = useUpdate();
  return children(isLoading, update);
}
