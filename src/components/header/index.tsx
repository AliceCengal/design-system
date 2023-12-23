import { button } from "../button";

export function Header() {
  return (
    <div
      style={{
        gridArea: "header",
        padding: "0px 16px",
        height: "56px",
        backgroundColor: "var(--c-con-2)",
        color: "var(--c-con-9)",
        display: "flex",
        alignItems: "center",
        gap: "16px",
      }}
    >
      <img src="/public/favicon.ico" height="36" width="36" />
      <span
        style={{ fontSize: "24pt", letterSpacing: "1pt", fontWeight: "500" }}
      >
        Kelasi
      </span>
      <div style={{ flexGrow: 1 }} />
      <a href="https://github.com" className={button({ kind: "text" })}>
        Github
      </a>
    </div>
  );
}
