"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { VNode } from "preact";
import { PropsWithChildren } from "preact/compat";

type MenuProps = PropsWithChildren & {
  trigger: VNode;
  align?: "start" | "center" | "end";
};

export function Menu({ trigger, align, children }: MenuProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>{trigger}</DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content align={align ?? "center"}>
          {children}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export const MenuItem = DropdownMenu.Item;
