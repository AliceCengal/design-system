import { button } from "../../components/button";
import { SearchIcon } from "../../components/icons";
import { generateText } from "../../lib/malay-text-synth";

export default function ButtonsPage() {
  return (
    <main
      style={{ width: "min(calc(100% - 16px), 600px)", marginInline: "auto" }}
    >
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
        <button className={button({ kind: "bold" })}>submit</button>
        <a href="#" className={button({ kind: "bold" })}>
          link
        </a>
        <button className={button({ kind: "bold" })}>
          <SearchIcon />
          submit
        </button>
        <a href="#" className={button({ kind: "bold" })}>
          <SearchIcon />
          link
        </a>
        <button className={button({ kind: "bold" })}>
          submit
          <SearchIcon />
        </button>
        <a href="#" className={button({ kind: "bold" })}>
          link
          <SearchIcon />
        </a>
        <button className={button({ kind: "bold", size: "small" })}>
          submit
        </button>
        <a href="#" className={button({ kind: "bold", size: "small" })}>
          link
        </a>
        <button className={button({ kind: "bold", size: "large" })}>
          submit
        </button>
        <a href="#" className={button({ kind: "bold", size: "large" })}>
          link
        </a>
        <button className={button({ kind: "bold", justifyContent: "start" })}>
          <SearchIcon />
          submit
        </button>
        <a
          href="#"
          className={button({ kind: "bold", justifyContent: "start" })}
        >
          <SearchIcon />
          link
        </a>
        <button className={button({ kind: "bold", justifyContent: "end" })}>
          submit
          <SearchIcon />
        </button>
        <a href="#" className={button({ kind: "bold", justifyContent: "end" })}>
          link
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
        <button className={button({ kind: "bold" })}>submit</button>
        <a href="#" className={button({ kind: "bold" })}>
          link
        </a>
        <button className={button({ kind: "bold" })}>
          <SearchIcon />
          <span>submit</span>
        </button>
        <a href="#" className={button({ kind: "bold" })}>
          <SearchIcon />
          link
        </a>
        <button className={button({ kind: "bold" })}>
          submit
          <SearchIcon />
        </button>
        <a href="#" className={button({ kind: "bold" })}>
          link
          <SearchIcon />
        </a>
        <button className={button({ kind: "bold", size: "small" })}>
          submit
        </button>
        <a href="#" className={button({ kind: "bold", size: "small" })}>
          link
        </a>
        <button className={button({ kind: "bold", size: "large" })}>
          submit
        </button>
        <a href="#" className={button({ kind: "bold", size: "large" })}>
          link
        </a>
        <button className={button({ kind: "bold", size: "small" })}>
          submit
          <SearchIcon />
        </button>
        <a href="#" className={button({ kind: "bold", size: "small" })}>
          link
          <SearchIcon />
        </a>
        <button className={button({ kind: "bold", size: "large" })}>
          submit
          <SearchIcon />
        </button>
        <a href="#" className={button({ kind: "bold", size: "large" })}>
          link
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
        <button className={button({ kind: "soft" })}>submit</button>
        <a href="#" className={button({ kind: "soft" })}>
          link
        </a>
        <button className={button({ kind: "soft" })}>
          <SearchIcon />
          submit
        </button>
        <a href="#" className={button({ kind: "soft" })}>
          <SearchIcon />
          link
        </a>
        <button className={button({ kind: "soft" })}>
          submit
          <SearchIcon />
        </button>
        <a href="#" className={button({ kind: "soft" })}>
          link
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
        <button className={button({ kind: "line" })}>submit</button>
        <a href="#" className={button({ kind: "line" })}>
          link
        </a>
        <button className={button({ kind: "line" })}>
          <SearchIcon />
          submit
        </button>
        <a href="#" className={button({ kind: "line" })}>
          <SearchIcon />
          link
        </a>
        <button className={button({ kind: "line" })}>
          submit
          <SearchIcon />
        </button>
        <a href="#" className={button({ kind: "line" })}>
          link
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
        <button className={button({ kind: "text" })}>submit</button>
        <a href="#" className={button({ kind: "text" })}>
          link
        </a>
        <button className={button({ kind: "text" })}>
          <SearchIcon />
          submit
        </button>
        <a href="#" className={button({ kind: "text" })}>
          <SearchIcon />
          link
        </a>
        <button className={button({ kind: "text" })}>
          submit
          <SearchIcon />
        </button>
        <a href="#" className={button({ kind: "text" })}>
          link
          <SearchIcon />
        </a>
      </div>
    </main>
  );
}
