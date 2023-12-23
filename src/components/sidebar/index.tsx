import { useToggle } from "../../utils/use-toggle";
import { button } from "../button";
import { ButtonIcon, CollapseIcon, ExpandIcon, HomeIcon } from "../icons";

export function Sidebar() {
  const [collapse, toggleCollapse] = useToggle();
  return (
    <div
      style={{
        gridArea: "sidebar",
        display: "flex",
        flexDirection: "column",
        width: collapse ? "56px" : "200px",
        backgroundColor: "var(--c-con-1)",
        paddingBlock: "16px",
        gap: "1px",
        transition: "width 0.25s",
        overflowX: "hidden",
      }}
    >
      <a href="#" className={button({ kind: "soft", justifyContent: "start" })}>
        <HomeIcon />
        {!collapse && "home"}
      </a>
      <a
        href="#buttons"
        className={button({ kind: "soft", justifyContent: "start" })}
      >
        <ButtonIcon />
        {!collapse && "buttons"}
      </a>
      <div style={{ flexGrow: 1 }} />
      <button
        className={button({ kind: "text", justifyContent: "start" })}
        onClick={toggleCollapse}
      >
        {collapse ? <ExpandIcon /> : <CollapseIcon />}
        {!collapse && "collapse"}
      </button>
    </div>
  );
}
