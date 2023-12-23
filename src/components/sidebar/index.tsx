import { button } from "../button";

export function Sidebar() {
  return (
    <div
      style={{
        gridArea: "sidebar",
        display: "grid",
        width: "200px",
        backgroundColor: "var(--c-con-1)",
        alignContent: "start",
        paddingBlock: "16px",
      }}
    >
      <a href="#" className={button({ kind: "soft" })}>
        home
      </a>
      <a href="#buttons" className={button({ kind: "soft" })}>
        buttons
      </a>
    </div>
  );
}
