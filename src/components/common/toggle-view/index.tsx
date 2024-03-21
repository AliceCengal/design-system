import { JSX } from "preact/compat";
import { useToggle } from "../../../utils/use-toggle";
import { MutableRef, useRef } from "preact/hooks";

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
    ref: MutableRef<any>
  ) => JSX.Element;
};

export function ToggleViewWithRef({ children }: ToggleViewWithRefProps) {
  const [open, toggleOpen] = useToggle();
  const ref = useRef(null);

  return children(open, toggleOpen, ref);
}
