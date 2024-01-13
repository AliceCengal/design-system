import { button } from "../../components/button";
import { spinner } from "../../components/spinner";
import { generateText } from "../../lib/malay-text-synth";

export default function MenusPage() {
  return (
    <main
      style={{ width: "min(calc(100% - 16px), 600px)", marginInline: "auto" }}
    >
      <h1>Spinners</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          gap: "var(--sp-2)",
        }}
      >
        <div className={spinner({ size: "small", kind: "back" })} />
        <button className={button({ size: "small" })}>
          <div className={spinner({ size: "small", kind: "con" })} />
          {generateText(1)}
        </button>
        <button className={button({ size: "small", kind: "bold" })}>
          {generateText(1)}
          <div className={spinner({ size: "small", kind: "front" })} />
        </button>

        <div className={spinner({ size: "regular", kind: "back" })} />
        <button className={button({ size: "regular" })}>
          <div className={spinner({ size: "regular", kind: "con" })} />
          {generateText(1)}
        </button>
        <button className={button({ size: "regular", kind: "bold" })}>
          <div className={spinner({ size: "regular", kind: "front" })} />
          {generateText(1)}
        </button>

        <div className={spinner({ size: "large", kind: "back" })} />
        <button className={button({ size: "large" })}>
          <div className={spinner({ size: "large", kind: "con" })} />
          {generateText(1)}
        </button>
        <button className={button({ size: "large", kind: "bold" })}>
          <div className={spinner({ size: "large", kind: "front" })} />
          {generateText(1)}
        </button>

        <div className={spinner({ size: "xlarge", kind: "back" })} />
        <div>&emsp;</div>
        <div>&emsp;</div>
      </div>
    </main>
  );
}
