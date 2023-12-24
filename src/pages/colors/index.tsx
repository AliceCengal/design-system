import { CSSProperties } from "preact/compat";
import { generateText } from "../../lib/malay-text-synth";
import { button } from "../../components/button";
import { panel } from "../../components/panel";

const CELL_STYLE: CSSProperties = {
  textAlign: "center",
  lineHeight: 2,
};

export default function ColorsPage() {
  return (
    <main
      style={{ width: "min(calc(100% - 16px), 600px)", marginInline: "auto" }}
    >
      <h1>Colors</h1>

      <form
        className={panel()}
        onSubmit={(e) => e.preventDefault()}
        onInput={(e) => {
          console.log("form input");
        }}
      >
        <h2>Pick a theme color set</h2>
        <label>
          Back color
          <select>
            <option value="aliceblue">aliceblue</option>
          </select>
        </label>
        <label>
          Front color
          <select>
            <option value="royalblue">royalblue</option>
          </select>
        </label>
        <fieldset>
          <legend>axis</legend>
          <label>
            <input name="axis" type="radio" value="ld" />
            light-dark
          </label>
          <label>
            <input name="axis" type="radio" value="dl" />
            dark-light
          </label>
        </fieldset>
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
