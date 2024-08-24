import { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";

import styles from "./form-control.module.css";
import { stringToElement } from "./lib";

type FormControlBase<T> = {
  label?: string | ReactNode;
  hint?: string | ReactNode;
  layout?: T;
};
type TextFieldLayout = "vertical" | "horizontal" | "freeform";
type TextFieldProps = InputHTMLAttributes<HTMLInputElement> &
  FormControlBase<TextFieldLayout>;

export function TextField({
  label,
  hint,
  layout = "vertical",
  ...props
}: TextFieldProps) {
  const labelNode = typeof label === "string" ? <span>{label}</span> : label;

  const hintNode =
    typeof hint === "string" ? (
      <span style={{ fontSize: "0.9em", color: "var(--c-con-7)" }}>{hint}</span>
    ) : (
      hint
    );

  return (
    <label className={styles["input-" + layout]}>
      {labelNode}
      {hintNode}
      <input className={styles["input"]} {...props} />
    </label>
  );
}

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
  FormControlBase<TextFieldLayout>;

export function TextArea({
  label,
  hint,
  layout = "vertical",
  ...props
}: TextAreaProps) {
  const labelNode = typeof label === "string" ? <span>{label}</span> : label;

  const hintNode =
    typeof hint === "string" ? (
      <span style={{ fontSize: "0.9em", color: "gray" }}>{hint}</span>
    ) : (
      hint
    );

  return (
    <label className={styles["input-" + layout]}>
      {labelNode}
      {hintNode}
      <textarea className={styles["input"]} {...props} />
    </label>
  );
}

type CheckboxLayout = "label-start" | "label-end";
type CheckboxProps = InputHTMLAttributes<HTMLInputElement> &
  FormControlBase<CheckboxLayout>;
export function Checkbox({
  label,
  hint,
  layout = "label-end",
  ...props
}: CheckboxProps) {
  return (
    <label className={styles["checkbox-" + layout]}>
      {stringToElement(label)}
      <input type="checkbox" {...props} />
    </label>
  );
}

type FormdataOptions = {
  withCheckboxGroups?: string[];
};

export function formdata(target: HTMLFormElement, opts?: FormdataOptions) {
  const data = Object.fromEntries(new FormData(target));

  if (opts?.withCheckboxGroups?.length) {
  }

  return data;
}
