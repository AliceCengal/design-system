import { CSSProperties } from "react";
import { generateText } from "../../lib/malay-text-synth";
import { button } from "../../components/common/button";
import { panel } from "../../components/common/panel";
import pageStyle from "../pages.module.css";
import {
  Radio,
  RadioGroup,
  Select,
  formdata,
} from "../../components/common/form-control";
import CSS_COLORS_MAP from "../../utils/css-color-names.json";

const CELL_STYLE: CSSProperties = {
  textAlign: "center",
  lineHeight: 2,
};

const CSS_COLORS = Object.keys(CSS_COLORS_MAP);

const SAMPLE_THEMES = [
  { backColor: "aliceblue", frontColor: "royalblue", axis: "ld" },
  { backColor: "darkslategray", frontColor: "snow", axis: "dl" },
];

const LS_KEY = "design-system-colors-form";

export default function ColorsPage() {
  function handleInput(e: any) {
    const data = formdata(e.currentTarget);
    // console.log("form input", { data });
    sessionStorage.setItem(LS_KEY, JSON.stringify(data));

    setTheme({
      axis: data.axis.toString(),
      backColor: data.backColor.toString(),
      frontColor: data.frontColor.toString(),
    });
  }

  function handleSetTheme(e: any, ix: number) {
    const f = e.target.form as HTMLFormElement;
    const t = SAMPLE_THEMES[ix];
    sessionStorage.setItem(LS_KEY, JSON.stringify(t));
    f["axis"].value = t.axis;
    f["backColor"].value = t.backColor;
    f["frontColor"].value = t.frontColor;
    setTheme(t);
  }

  function setTheme(t: (typeof SAMPLE_THEMES)[number]) {
    const { axis, backColor, frontColor } = t;
    const root = document.querySelector(":root") as HTMLElement;
    if (!root) return;
    root.style.setProperty("--c-back", backColor.toString());
    root.style.setProperty("--c-front", frontColor.toString());

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

  const data =
    typeof sessionStorage !== "undefined"
      ? JSON.parse(sessionStorage.getItem(LS_KEY) ?? "{}")
      : {};

  return (
    <main className={pageStyle.main_sm}>
      <h1>Colors</h1>

      <form
        ref={(ref) => {
          if (ref) {
            handleInput({ currentTarget: ref });
          }
        }}
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
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </Select>

        <Select
          name="frontColor"
          label="Front color"
          defaultValue={data["frontColor"] ?? "royalblue"}
        >
          {CSS_COLORS.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
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
