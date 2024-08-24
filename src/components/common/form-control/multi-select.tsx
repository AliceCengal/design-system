import {
  Field,
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { ComponentProps, ReactNode } from "react";

import { ExpandedIcon } from "../../icons";
import { cx } from "../../../lib/cva";

import styles from "./form-control.module.css";

type MultiSelectLayout = "vertical" | "horizontal" | "freeform";
type MultiSelectProps = Omit<
  ComponentProps<typeof Listbox>,
  "children" | "multiple"
> & {
  layout?: MultiSelectLayout;
  label?: ReactNode;
  hint?: ReactNode;
  renderValue?: (vs: string) => string;
  children: ReactNode;
};

export function MultiSelect({
  layout = "vertical",
  label,
  hint,
  renderValue,
  children,
  ...props
}: MultiSelectProps) {
  function handleRenderValue(vs: string | string[]): string {
    if (Array.isArray(vs)) {
      if (typeof renderValue !== "undefined") {
        return vs.map(renderValue).join(", ");
      } else {
        return vs.join(", ");
      }
    } else {
      if (typeof renderValue !== "undefined") {
        return renderValue(vs);
      } else {
        return vs;
      }
    }
  }

  return (
    <Field className={styles["input-" + layout]}>
      <Label>{label}</Label>
      <Listbox multiple {...props}>
        <ListboxButton className={styles["multiselect-trigger"]}>
          {({ value }) => (
            <>
              <span className={styles["multiselect-text"]}>
                {handleRenderValue(value)}
              </span>
              <ExpandedIcon />
            </>
          )}
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          className={styles["multiselect-options"]}
        >
          {children}
        </ListboxOptions>
      </Listbox>
    </Field>
  );
}

type MultiItemProps = Omit<ComponentProps<typeof ListboxOption>, "children"> & {
  children: NonNullable<ReactNode>;
};

export function MultiItem({ className, children, ...props }: MultiItemProps) {
  return (
    <ListboxOption
      className={cx(className, styles["multiselect-option"])}
      {...props}
    >
      {children}
    </ListboxOption>
  );
}
