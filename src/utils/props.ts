import { ReactElement } from "react";

export type PropsWithChildElem<T = object> = T & {
  children: ReactElement;
};
