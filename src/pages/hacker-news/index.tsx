import { button } from "../../components/button";
import { generateText } from "../../lib/malay-text-synth";
import pageStyle from "../pages.module.css";

export default function HackerNewsPage() {
  return (
    <main
      className={pageStyle.main_md}
      style={{ border: "1px solid lightgray" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--sp-1)",
          marginBottom: "var(--sp-1)",
        }}
      >
        <div
          style={{
            height: "28px",
            width: "28px",
            border: "4px solid lightgray",
            textAlign: "center",
          }}
        >
          Y
        </div>
        <h1 style={{ fontSize: "1rem", marginBlock: 0 }}>Hacker News</h1>
        <button className={button({ kind: "text", size: "small" })}>new</button>
        |
        <button className={button({ kind: "text", size: "small" })}>
          past
        </button>
        |
        <button className={button({ kind: "text", size: "small" })}>
          comments
        </button>
        |
        <button className={button({ kind: "text", size: "small" })}>ask</button>
        |
        <button className={button({ kind: "text", size: "small" })}>
          show
        </button>
        |
        <button className={button({ kind: "text", size: "small" })}>
          submit
        </button>
        <div style={{ flexGrow: 1 }}>&emsp;</div>
        <button className={button({ kind: "text", size: "small" })}>
          login
        </button>
      </div>

      {Array(10)
        .fill(1)
        .map(() => ({
          title: generateText(7),
          author: generateText(1),
          url: generateText(1) + ".com",
          points: Math.floor(Math.random() * 100),
          comments: Math.floor(Math.random() * 100),
        }))
        .map((post, ix) => (
          <div
            style={{
              display: "flex",
              padding: "var(--sp-1)",
            }}
          >
            <div
              style={{
                alignSelf: "center",
                marginLeft: "var(--sp-1)",
                marginRight: "var(--sp-2)",
              }}
            >
              {ix + 1}
            </div>
            <div>
              <div>
                <span style={{ fontWeight: 500, fontSize: "1.15rem" }}>
                  {post.title}
                </span>
                &ensp; ({post.url})
              </div>
              <div>
                <span>{post.points} points</span>&ensp;
                <span>by {post.author}</span>&ensp;
                <span>{post.comments} comments</span>
              </div>
            </div>
          </div>
        ))}
    </main>
  );
}
