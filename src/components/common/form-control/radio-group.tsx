import * as RadioPrimitive from "@radix-ui/react-radio-group";

import styles from "./form-control.module.css";
import { ComponentProps, ReactNode } from "react";
import { stringToElement } from "./lib";
import { RadioOffIcon, RadioOnIcon } from "../../icons";

type RadioGroupProps = ComponentProps<typeof RadioPrimitive.Root> & {
  layout?: "horizontal" | "vertical" | "vertical-horizontal" | "freeform";
  label?: ReactNode;
  hint?: ReactNode;
};

export function RadioGroup({
  layout = "vertical",
  label,
  hint,
  orientation = "vertical",
  children,
  ...props
}: RadioGroupProps) {
  const layoutClass =
    styles[`input-${layout == "vertical-horizontal" ? "vertical" : layout}`];
  return (
    <fieldset className={layoutClass}>
      {stringToElement(label)}
      <RadioPrimitive.Root
        className={styles["radio-root"]}
        orientation={
          layout == "vertical-horizontal" ? "horizontal" : orientation
        }
        {...props}
      >
        {children}
      </RadioPrimitive.Root>
    </fieldset>
  );
}

type RadioItemProps = ComponentProps<typeof RadioPrimitive.Item>;

export function RadioItem({ children, ...props }: RadioItemProps) {
  return (
    <label className={styles["radio-item"]}>
      <RadioPrimitive.Item className={styles["radio-knob"]} {...props}>
        <RadioPrimitive.Indicator asChild>
          <RadioOnIcon />
        </RadioPrimitive.Indicator>
        <RadioOffIcon />
      </RadioPrimitive.Item>
      {stringToElement(children)}
    </label>
  );
}
