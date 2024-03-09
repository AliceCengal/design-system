import { CSSProperties, JSX } from "preact/compat";
import { generateText } from "../../lib/malay-text-synth";
import { button } from "../../components/button";
import { panel } from "../../components/panel";
import pageStyle from "../pages.module.css";
import {
  Radio,
  RadioGroup,
  Select,
  formdata,
} from "../../components/form-control";
import CSS_COLORS_MAP from "../../utils/css-color-names.json";

const CELL_STYLE: CSSProperties = {
  textAlign: "center",
  lineHeight: 2,
};

const CSS_COLORS = Object.keys(CSS_COLORS_MAP);

const LS_KEY = "design-system-colors-form";

export default function ColorsPage() {
  const data =
    typeof sessionStorage !== "undefined"
      ? JSON.parse(sessionStorage.getItem(LS_KEY) ?? "{}")
      : {};

  function handleInput(e: JSX.TargetedInputEvent<HTMLFormElement>) {
    const data = formdata(e.currentTarget);
    console.log("form input", { data });
    sessionStorage.setItem(LS_KEY, JSON.stringify(data));

    const root = document.querySelector(":root") as HTMLElement;
    if (!root) return;
    root.style.setProperty("--c-back", data.backColor.toString());
    root.style.setProperty("--c-front", data.frontColor.toString());

    const shades = Array(9)
      .fill(1)
      .map((_, ix) => ix + 1);
    const con = data["axis"] === "ld" ? "0, 0, 0" : "255, 255, 255";
    const conf = data["axis"] === "dl" ? "0, 0, 0" : "255, 255, 255";

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
        onInput={handleInput}
        style={{
          display: "grid",
          gap: "var(--sp-3)",
          marginBottom: "var(--sp-2)",
        }}
      >
        <h2>Pick a theme color set</h2>
        <Select
          name="backColor"
          label="Back color"
          defaultValue={data["backColor"] ?? "aliceblue"}
        >
          {CSS_COLORS.map((c) => (
            <option value={c}>{c}</option>
          ))}
        </Select>

        <Select
          name="frontColor"
          label="Front color"
          defaultValue={data["frontColor"] ?? "royalblue"}
        >
          {CSS_COLORS.map((c) => (
            <option value={c}>{c}</option>
          ))}
        </Select>

        <RadioGroup
          label="Axis"
          name="axis"
          defaultValue={data["axis"] ?? "ld"}
        >
          <Radio value="ld">light-dark</Radio>
          <Radio value="dl">dark-light</Radio>
        </RadioGroup>

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
