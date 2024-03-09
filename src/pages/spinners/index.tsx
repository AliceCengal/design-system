import { button } from "../../components/button";
import { SearchIcon } from "../../components/icons";
import { spinner } from "../../components/spinner";
import { ToggleView } from "../../components/toggle-view";
import { generateText } from "../../lib/malay-text-synth";
import pageStyle from "../pages.module.css";

export default function MenusPage() {
  const lbl1 = generateText(1);
  const lbl2 = generateText(1);
  const lbl3 = generateText(1);

  return (
    <main className={pageStyle.main_sm}>
      <h1>Spinners</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "var(--sp-2)",
        }}
      >
        <div className={spinner({ size: "small", kind: "back" })} />
        <button className={button({ size: "small" })}>
          <div className={spinner({ size: "small", kind: "con" })} />
          {generateText(1)}
        </button>
        <ToggleView>
          {(open, toggleOpen) => (
            <button
              className={button({ size: "small", kind: "bold" })}
              onClick={() => {
                toggleOpen();
                setTimeout(toggleOpen, 5000);
              }}
            >
              {lbl1}
              {open ? (
                <div className={spinner({ size: "small", kind: "front" })} />
              ) : (
                <SearchIcon />
              )}
            </button>
          )}
        </ToggleView>

        <div className={spinner({ size: "regular", kind: "back" })} />
        <button className={button({ size: "regular" })}>
          <div className={spinner({ size: "small", kind: "con" })} />
          {generateText(1)}
        </button>
        <ToggleView>
          {(open, toggleOpen) => (
            <button
              className={button({ size: "regular", kind: "bold" })}
              onClick={() => {
                toggleOpen();
                setTimeout(toggleOpen, 5000);
              }}
            >
              {open ? (
                <div className={spinner({ size: "small", kind: "front" })} />
              ) : (
                <SearchIcon />
              )}
              {lbl2}
            </button>
          )}
        </ToggleView>

        <div className={spinner({ size: "large", kind: "back" })} />
        <button className={button({ size: "large" })}>
          <div className={spinner({ size: "small", kind: "con" })} />
          {generateText(1)}
        </button>
        <ToggleView>
          {(open, toggleOpen) => (
            <button
              className={button({ size: "large", kind: "bold" })}
              onClick={() => {
                toggleOpen();
                setTimeout(toggleOpen, 5000);
              }}
            >
              {open ? (
                <div className={spinner({ size: "small", kind: "front" })} />
              ) : (
                <SearchIcon />
              )}
              {lbl3}
            </button>
          )}
        </ToggleView>
      </div>
      <div className={spinner({ size: "xlarge", kind: "back" })} />
    </main>
  );
}
