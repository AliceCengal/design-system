import { button } from "../../components/common/button";
import { SearchIcon } from "../../components/icons";
import { generateText } from "../../lib/malay-text-synth";
import pageStyle from "../pages.module.css";

export default function ButtonsPage() {
  return (
    <main className={pageStyle.main_sm}>
      <h1>Buttons</h1>
      <p>{generateText(20)}</p>
      <div
        style={{
          display: "grid",
          gap: "8px",
          gridTemplateColumns: "1fr 1fr",
          marginBottom: "16px",
        }}
      >
        <button className={button({ kind: "bold" })}>
          <span>submit</span>
        </button>
        <a href="#" className={button({ kind: "bold" })}>
          <span>link</span>
        </a>
        <button className={button({ kind: "bold" })}>
          <SearchIcon />
          <span>submit</span>
        </button>
        <a href="#" className={button({ kind: "bold" })}>
          <SearchIcon />
          <span>link</span>
        </a>
        <button className={button({ kind: "bold", active: true })}>
          <span>submit</span>
          <SearchIcon />
        </button>
        <a href="#" className={button({ kind: "bold", active: true })}>
          <span>link</span>
          <SearchIcon />
        </a>
        <button className={button({ kind: "bold", size: "small" })}>
          <span>submit</span>
        </button>
        <a href="#" className={button({ kind: "bold", size: "small" })}>
          <span>link</span>
        </a>
        <button className={button({ kind: "bold", size: "large" })}>
          <span>submit</span>
        </button>
        <a href="#" className={button({ kind: "bold", size: "large" })}>
          <span>link</span>
        </a>
        <button className={button({ kind: "bold", justifyContent: "start" })}>
          <SearchIcon />
          <span>submit</span>
        </button>
        <a
          href="#"
          className={button({ kind: "bold", justifyContent: "start" })}
        >
          <SearchIcon />
          <span>link</span>
        </a>
        <button className={button({ kind: "bold", justifyContent: "end" })}>
          <span>submit</span>
          <SearchIcon />
        </button>
        <a href="#" className={button({ kind: "bold", justifyContent: "end" })}>
          <span>link</span>
          <SearchIcon />
        </a>
      </div>

      <p>{generateText(20)}</p>
      <div
        style={{
          display: "grid",
          gap: "8px",
          gridTemplateColumns: "1fr 1fr",
          marginBottom: "16px",
          justifyItems: "start",
        }}
      >
        <button className={button({ kind: "bold" })}>
          <span>submit</span>
        </button>
        <a href="#" className={button({ kind: "bold" })}>
          <span>link</span>
        </a>
        <button className={button({ kind: "bold" })}>
          <SearchIcon />
          <span>submit</span>
        </button>
        <a href="#" className={button({ kind: "bold" })}>
          <SearchIcon />
          <span>link</span>
        </a>
        <button className={button({ kind: "bold" })}>
          <span>submit</span>
          <SearchIcon />
        </button>
        <a href="#" className={button({ kind: "bold" })}>
          <span>link</span>
          <SearchIcon />
        </a>
        <button className={button({ kind: "bold", size: "small" })}>
          <span>submit</span>
        </button>
        <a href="#" className={button({ kind: "bold", size: "small" })}>
          <span>link</span>
        </a>
        <button className={button({ kind: "bold", size: "large" })}>
          <span>submit</span>
        </button>
        <a href="#" className={button({ kind: "bold", size: "large" })}>
          <span>link</span>
        </a>
        <button className={button({ kind: "bold", size: "small" })}>
          <span>submit</span>
          <SearchIcon />
        </button>
        <a href="#" className={button({ kind: "bold", size: "small" })}>
          <span>link</span>
          <SearchIcon />
        </a>
        <button className={button({ kind: "bold", size: "large" })}>
          <span>submit</span>
          <SearchIcon />
        </button>
        <a href="#" className={button({ kind: "bold", size: "large" })}>
          <span>link</span>
          <SearchIcon />
        </a>
      </div>

      <p>{generateText(20)}</p>
      <div
        style={{
          display: "grid",
          gap: "8px",
          gridTemplateColumns: "1fr 1fr",
          marginBottom: "16px",
        }}
      >
        <button className={button({ kind: "soft" })}>
          <span>submit</span>
        </button>
        <a href="#" className={button({ kind: "soft" })}>
          <span>link</span>
        </a>
        <button className={button({ kind: "soft", active: true })}>
          <SearchIcon />
          <span>submit</span>
        </button>
        <a href="#" className={button({ kind: "soft" })}>
          <SearchIcon />
          <span>link</span>
        </a>
        <button className={button({ kind: "soft" })}>
          <span>submit</span>
          <SearchIcon />
        </button>
        <a href="#" className={button({ kind: "soft", active: true })}>
          <span>link</span>
          <SearchIcon />
        </a>
      </div>

      <p>{generateText(20)}</p>
      <div
        style={{
          display: "grid",
          gap: "8px",
          gridTemplateColumns: "1fr 1fr",
          marginBottom: "16px",
        }}
      >
        <button className={button({ kind: "line" })}>
          <span>submit</span>
        </button>
        <a href="#" className={button({ kind: "line" })}>
          <span>link</span>
        </a>
        <button className={button({ kind: "line" })}>
          <SearchIcon />
          <span>submit</span>
        </button>
        <a href="#" className={button({ kind: "line", active: true })}>
          <SearchIcon />
          <span>link</span>
        </a>
        <button className={button({ kind: "line", active: true })}>
          <span>submit</span>
          <SearchIcon />
        </button>
        <a href="#" className={button({ kind: "line" })}>
          <span>link</span>
          <SearchIcon />
        </a>
      </div>

      <p>{generateText(20)}</p>
      <div
        style={{
          display: "grid",
          gap: "8px",
          gridTemplateColumns: "1fr 1fr",
          marginBottom: "16px",
        }}
      >
        <button className={button({ kind: "text" })}>
          <span>submit</span>
        </button>
        <a href="#" className={button({ kind: "text" })}>
          <span>link</span>
        </a>
        <button className={button({ kind: "text", active: true })}>
          <SearchIcon />
          <span>submit</span>
        </button>
        <a href="#" className={button({ kind: "text" })}>
          <SearchIcon />
          <span>link</span>
        </a>
        <button className={button({ kind: "text" })}>
          <span>submit</span>
          <SearchIcon />
        </button>
        <a href="#" className={button({ kind: "text", active: true })}>
          <span>link</span>
          <SearchIcon />
        </a>
      </div>

      <p>{generateText(20)}</p>
      <div
        style={{
          display: "grid",
          gap: "8px",
          gridTemplateColumns: "1fr 1fr",
          marginBottom: "16px",
          justifyItems: "start",
        }}
      >
        <div>
          <button className={button({ kind: "bold", active: true })}>
            <SearchIcon />
          </button>
          <a href="#" className={button({ kind: "line" })}>
            <SearchIcon />
          </a>
          <button className={button({ kind: "soft" })}>
            <SearchIcon />
          </button>
          <a href="#" className={button({ kind: "text", active: true })}>
            <SearchIcon />
          </a>
        </div>

        <div>
          <button
            className={button({ size: "small", kind: "bold", active: true })}
          >
            <SearchIcon />
          </button>
          <a href="#" className={button({ size: "small", kind: "line" })}>
            <SearchIcon />
          </a>
          <button className={button({ size: "small", kind: "soft" })}>
            <SearchIcon />
          </button>
          <a
            href="#"
            className={button({ size: "small", kind: "text", active: true })}
          >
            <SearchIcon />
          </a>
        </div>

        <div>
          <button
            className={button({ size: "large", kind: "bold", active: true })}
          >
            <SearchIcon />
          </button>
          <a href="#" className={button({ size: "large", kind: "line" })}>
            <SearchIcon />
          </a>
          <button className={button({ size: "large", kind: "soft" })}>
            <SearchIcon />
          </button>
          <a
            href="#"
            className={button({ size: "large", kind: "text", active: true })}
          >
            <SearchIcon />
          </a>
        </div>
      </div>
    </main>
  );
}
