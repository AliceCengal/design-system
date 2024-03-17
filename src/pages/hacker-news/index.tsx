import { button } from "../../components/button";
import { TextField } from "../../components/form-control";
import { generateText } from "../../lib/malay-text-synth";

import style from "./style.module.css";

export default function HackerNewsPage() {
  return (
    <main className={style.page_container}>
      <div className={style.header_a}>
        <div className={style.header_icon}>Y</div>
        <h1 className={style.header_title}>Hacker News</h1>
        <div className={style.header_links}>
          <button className={button({ kind: "text", size: "small" })}>
            new
          </button>
          |
          <button className={button({ kind: "text", size: "small" })}>
            past
          </button>
          |
          <button className={button({ kind: "text", size: "small" })}>
            comments
          </button>
          |
          <button className={button({ kind: "text", size: "small" })}>
            ask
          </button>
          |
          <button className={button({ kind: "text", size: "small" })}>
            show
          </button>
          |
          <button className={button({ kind: "text", size: "small" })}>
            submit
          </button>
        </div>
        <button
          className={button({
            className: style.header_corner,
            kind: "text",
            size: "small",
          })}
        >
          login
        </button>
      </div>
      <div className={style.post_container}>
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
            <>
              <div className={style.post_number}>{ix + 1}</div>
              <div>
                <div>
                  <span className={style.post_title}>{post.title}</span>
                  &ensp; ({post.url})
                </div>
                <div>
                  <span>{post.points} points</span>&ensp;
                  <span>by {post.author}</span>&ensp;
                  <span>{post.comments} comments</span>
                </div>
              </div>
            </>
          ))}
        <div />
        <button className={button({ kind: "text" })}>more</button>
      </div>

      <hr />

      <div className={style.footer_links}>
        <button className={button({ kind: "text", size: "small" })}>
          guidelines
        </button>
        |
        <button className={button({ kind: "text", size: "small" })}>faq</button>
        |
        <button className={button({ kind: "text", size: "small" })}>
          lists
        </button>
        |
        <button className={button({ kind: "text", size: "small" })}>api</button>
        |
        <button className={button({ kind: "text", size: "small" })}>
          security
        </button>
        |
        <button className={button({ kind: "text", size: "small" })}>
          legal
        </button>
        |
        <button className={button({ kind: "text", size: "small" })}>
          apply to yc
        </button>
        |
        <button className={button({ kind: "text", size: "small" })}>
          contact
        </button>
      </div>

      <form className={style.footer_search_container}>
        <TextField label="Search" layout="horizontal" />
      </form>
    </main>
  );
}
