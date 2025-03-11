import * as SelectPrimitive from "@radix-ui/react-select";
import { ComponentProps, ReactNode, RefObject } from "react";
import { ExpandedIcon } from "../../icons";
import styles from "./form-control.module.css";
import { stringToElement } from "./lib";

type SelectProps = ComponentProps<typeof SelectPrimitive.Root> & {
  layout?: "horizontal" | "vertical" | "freeform";
  label?: ReactNode;
  hint?: ReactNode;
  containerRef?: RefObject<HTMLElement | null>;
};

export function Select({
  layout = "vertical",
  label,
  hint,
  containerRef,
  children,
  ...props
}: SelectProps) {
  return (
    <label className={styles["input-" + layout]}>
      {stringToElement(label)}
      <SelectPrimitive.Root {...props}>
        <SelectPrimitive.Trigger className={styles["select-trigger"]}>
          <SelectPrimitive.Value />
          <SelectPrimitive.Icon>
            <ExpandedIcon />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>
        <SelectPrimitive.Portal container={containerRef?.current}>
          <SelectPrimitive.Content className={styles["select-options"]}>
            <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    </label>
  );
}

type SelectItemProps = ComponentProps<typeof SelectPrimitive.Item>;

export function SelectItem({ children, ...props }: SelectItemProps) {
  return (
    <SelectPrimitive.Item className={styles["select-option"]} {...props}>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator className={styles["select-indicator"]} />
    </SelectPrimitive.Item>
  );
}
