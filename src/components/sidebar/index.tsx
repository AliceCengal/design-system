import useHash from "../../utils/use-hash";
import { useToggle } from "../../utils/use-toggle";
import { button } from "../button";
import {
  ButtonIcon,
  CollapseIcon,
  ColorIcon,
  ExpandIcon,
  HomeIcon,
} from "../icons";

const NAVS = [
  {
    label: "home",
    href: "",
    Icon: HomeIcon,
  },
  {
    label: "colors",
    href: "#colors",
    Icon: ColorIcon,
  },
  {
    label: "buttons",
    href: "#buttons",
    Icon: ButtonIcon,
  },
  {
    label: "modal dialog",
    href: "",
    Icon: HomeIcon,
  },
  {
    label: "form controls",
    href: "",
    Icon: HomeIcon,
  },
  {
    label: "menu",
    href: "",
    Icon: HomeIcon,
  },
];

export function Sidebar() {
  const [collapse, toggleCollapse] = useToggle();
  const [hash] = useHash();

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
      {NAVS.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href || "#"}
          className={button({
            kind: "soft",
            justifyContent: "start",
            active: href === hash,
          })}
        >
          <Icon />
          {!collapse && label}
        </a>
      ))}

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
