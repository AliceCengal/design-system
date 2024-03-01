import {
  HTMLAttributes,
  ReactNode,
  createContext,
  useContext,
} from "preact/compat";

type FormControlBase<T> = {
  label?: string | ReactNode;
  hint?: string | ReactNode;
  layout?: T;
};
type TextFieldLayout = "vertical" | "horizontal" | "freeform";
type TextFieldProps = HTMLAttributes<HTMLInputElement> &
  FormControlBase<TextFieldLayout>;

export function TextField({ label, hint, layout, ...props }: TextFieldProps) {
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
      <input {...props} />
    </label>
  );
}

type TextAreaProps = HTMLAttributes<HTMLTextAreaElement> &
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

type CheckboxLayout = "horizontal" | "horizontal-reverse";
type CheckboxProps = HTMLAttributes<HTMLInputElement> &
  FormControlBase<CheckboxLayout>;
export function Checkbox({ label, hint, layout, ...props }: CheckboxProps) {
  return (
    <label
      style={{
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gap: "var(--sp-1)",
      }}
    >
      <input type="checkbox" {...props} />
      <span>{label}</span>
    </label>
  );
}

type RadioGroupProps = {
  name: string;
  label: ReactNode;
  children: ReactNode;
};

export function RadioGroup({ name, label, children }: RadioGroupProps) {
  return (
    <fieldset
      style={{
        display: "grid",
        gap: "var(--sp-1)",
      }}
    >
      <RadioCtx.Provider value={{ name }}>
        <div>{label}</div>
        {children}
      </RadioCtx.Provider>
    </fieldset>
  );
}

type RadioProps = {
  value: any;
  label: ReactNode;
};

export function Radio({ value, label }: RadioProps) {
  const ctx = useContext(RadioCtx);
  if (!ctx) {
    throw new Error("Radio must be used inside a RadioGroup");
  }
  const name = ctx.name;
  return (
    <label
      style={{
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gap: "var(--sp-1)",
      }}
    >
      <input type="radio" name={name} value={value} />
      <span>{label}</span>
    </label>
  );
}

const RadioCtx = createContext<{ name: string } | null>(null);

type SelectProps = HTMLAttributes<HTMLSelectElement> & { label: string };

export function Select({ label, children, ...props }: SelectProps) {
  return (
    <label
      style={{
        display: "grid",
      }}
    >
      <span>{label}</span>
      <select {...props}>{children}</select>
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
