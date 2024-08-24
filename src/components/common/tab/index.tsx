import { ComponentType, createElement as h, ReactNode } from "react";

import { panel } from "../panel";
import { Box } from "../box";

type TabPanelProps<T> = {
  value: T;
  index: T;
  component?: ComponentType;
  render?: () => ReactNode;
  keepMounted?: boolean;
};

export function TabPanel<T>({
  value,
  index,
  component: Comp,
  render,
  keepMounted,
}: TabPanelProps<T>) {
  const isShow = value === index;

  return (
    <Box
      className={panel({ kind: "conBack", tabPanel: true })}
      display={isShow ? "block" : "none"}
      padding="var(--sp-3)"
    >
      {!isShow && !keepMounted
        ? null
        : typeof Comp !== "undefined"
        ? h(Comp, null)
        : typeof render !== "undefined"
        ? render()
        : null}
    </Box>
  );
}
