import { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";

type FormControlBase<T> = {
  label?: string | ReactNode;
  hint?: string | ReactNode;
  layout?: T;
};
type TextFieldLayout = "vertical" | "horizontal" | "freeform";
type TextFieldProps = InputHTMLAttributes<HTMLInputElement> &
  FormControlBase<TextFieldLayout>;

export function TextField({ label, hint, layout, ...props }: TextFieldProps) {
  const labelNode = typeof label === "string" ? <span>{label}</span> : label;

  const hintNode =
    typeof hint === "string" ? (
      <span style={{ fontSize: "0.9em", color: "var(--c-con-7)" }}>{hint}</span>
    ) : (
      hint
    );

  return (
    <label
      style={
        layout == "freeform"
          ? { display: "contents" }
          : layout == "horizontal"
          ? {
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              columnGap: "var(--sp-1)",
              alignItems:
                props.type == "color" || props.type == "range"
                  ? "center"
                  : "baseline",
            }
          : { display: "grid" }
      }
    >
      {labelNode}
      {hintNode}
      <input {...props} />
    </label>
  );
}

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
  FormControlBase<TextFieldLayout>;

export function TextArea({ label, hint, layout, ...props }: TextAreaProps) {
  const labelNode = typeof label === "string" ? <span>{label}</span> : label;

  const hintNode =
    typeof hint === "string" ? (
      <span style={{ fontSize: "0.9em", color: "gray" }}>{hint}</span>
    ) : (
      hint
    );

  return (
    <label style={{ display: "grid" }}>
      {labelNode}
      {hintNode}
      <textarea {...props} />
    </label>
  );
}

type CheckboxLayout = "label-start" | "label-end";
type CheckboxProps = InputHTMLAttributes<HTMLInputElement> &
  FormControlBase<CheckboxLayout>;
export function Checkbox({ label, hint, layout, ...props }: CheckboxProps) {
  const labelNode = typeof label === "string" ? <span>{label}</span> : label;

  return (
    <label
      style={{
        display: "flex",
        flexDirection: layout == "label-start" ? "row" : "row-reverse",
        justifyContent: "space-between",
        gap: "var(--sp-1)",
      }}
    >
      {labelNode}
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
