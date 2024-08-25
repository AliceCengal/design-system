import { CSSProperties } from "react";
import { generateText } from "../../lib/malay-text-synth";
import { button } from "../../components/common/button";
import { panel } from "../../components/common/panel";
import pageStyle from "../pages.module.css";
import CSS_COLORS_MAP from "../../utils/css-color-names.json";
import {
  RadioGroup,
  RadioItem,
} from "../../components/common/form-control/radio-group";
import {
  Select,
  SelectItem,
} from "../../components/common/form-control/select";
import useForm from "../../utils/use-form";
import { useLocalStorage } from "../../utils/use-local-storage";

const CELL_STYLE: CSSProperties = {
  textAlign: "center",
  lineHeight: 2,
};

const CSS_COLORS = Object.keys(CSS_COLORS_MAP);
const LS_KEY = "design-system-colors-form";
const SAMPLE_THEMES = [
  { backColor: "aliceblue", frontColor: "royalblue", axis: "ld" },
  { backColor: "darkslategray", frontColor: "snow", axis: "dl" },
];

function parseOrDefault(
  formStore?: string | null
): (typeof SAMPLE_THEMES)[number] {
  return formStore ? JSON.parse(formStore) : SAMPLE_THEMES[0];
}

export default function ColorsPage() {
  const [formStore, setFormStore] = useLocalStorage(LS_KEY);

  const { registerValue, updateForm, clearForm } = useForm(
    parseOrDefault(formStore),
    {
      onChange(formValue) {
        setFormStore(JSON.stringify(formValue));
        console.log("ColorsPage", { formValue });
        setTheme(formValue);
      },
    }
  );

  function handleSetTheme(_: any, ix: number) {
    updateForm(SAMPLE_THEMES[ix]);
  }

  function setTheme(t: (typeof SAMPLE_THEMES)[number]) {
    const { axis, backColor, frontColor } = t;
    const root = document.querySelector(":root") as HTMLElement;
    if (!root) return;
    root.style.setProperty("--c-back", backColor);
    root.style.setProperty("--c-front", frontColor);

    const shades = Array(9)
      .fill(1)
      .map((_, ix) => ix + 1);
    const con = axis === "ld" ? "0, 0, 0" : "255, 255, 255";
    const conf = axis === "dl" ? "0, 0, 0" : "255, 255, 255";

    for (const shade of shades) {
      root.style.setProperty(
        `--c-con-${shade}`,
        `rgba(${con}, ${shade * 10}%)`
      );
      root.style.setProperty(
        `--c-conf-${shade}`,
        `rgba(${conf}, ${shade * 10}%)`
      );
    }
  }

  return (
    <main className={pageStyle.main_sm}>
      <h1>Colors</h1>

      <form
        className={panel()}
        onSubmit={(e) => e.preventDefault()}
        onReset={clearForm}
        style={{
          display: "grid",
          padding: "var(--sp-3)",
          gap: "var(--sp-4)",
          marginBottom: "var(--sp-2)",
        }}
      >
        <h2>Pick a theme color set</h2>
        <Select
          layout="horizontal"
          label="Back color"
          {...registerValue("backColor")}
        >
          {CSS_COLORS.map((c) => (
            <SelectItem key={c} value={c}>
              {c}
            </SelectItem>
          ))}
        </Select>

        <Select
          layout="horizontal"
          label="Front color"
          {...registerValue("frontColor")}
        >
          {CSS_COLORS.map((c) => (
            <SelectItem key={c} value={c}>
              {c}
            </SelectItem>
          ))}
        </Select>

        <RadioGroup layout="horizontal" label="Axis" {...registerValue("axis")}>
          <RadioItem value="ld">light-dark</RadioItem>
          <RadioItem value="dl">dark-light</RadioItem>
        </RadioGroup>

        <div>
          <span>Example Themes: </span>
          <button
            type="button"
            className={button({ size: "small" })}
            onClick={(e) => handleSetTheme(e, 0)}
          >
            <span>&nbsp;A&nbsp;</span>
          </button>
          &emsp;
          <button
            type="button"
            className={button({ size: "small" })}
            onClick={(e) => handleSetTheme(e, 1)}
          >
            <span>&nbsp;B&nbsp;</span>
          </button>
        </div>

        <button type="reset" className={button()}>
          reset
        </button>
      </form>

      <p>{generateText(20)}</p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          backgroundColor: "white",
          padding: "8px",
          gap: "8px",
        }}
      >
        <div
          style={{
            ...CELL_STYLE,
            backgroundColor: "var(--c-back)",
            color: "var(--c-con-9)",
          }}
        >
          BACK
        </div>
        <div
          style={{
            ...CELL_STYLE,
            backgroundColor: "var(--c-front)",
            color: "var(--c-conf-9)",
          }}
        >
          FRONT
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "var(--c-back)",
          }}
        >
          {Array(9)
            .fill(1)
            .map((_, ix) => (
              <div
                key={ix}
                style={{
                  ...CELL_STYLE,
                  backgroundColor: `var(--c-con-${ix + 1})`,
                  color: ix > 4 ? "var(--c-conf-9)" : "var(--c-con-9)",
                }}
              >
                BACK
              </div>
            ))}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "var(--c-front)",
          }}
        >
          {Array(9)
            .fill(1)
            .map((_, ix) => (
              <div
                key={ix}
                style={{
                  ...CELL_STYLE,
                  backgroundColor: `var(--c-conf-${ix + 1})`,
                  color: ix > 4 ? "var(--c-con-9)" : "var(--c-conf-9)",
                }}
              >
                FRONT
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}
