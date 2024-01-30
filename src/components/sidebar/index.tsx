import { JSX, createContext } from "preact";
import useHash from "../../utils/use-hash";
import { useToggle } from "../../utils/use-toggle";
import { button } from "../button";
import { CollapseIcon, ExpandIcon } from "../icons";
import { PropsWithChildren, useContext } from "preact/compat";

type SidebarLinkProps = {
  label: string;
  href: string;
  Icon: () => JSX.Element;
};

export function SidebarLink({ label, href, Icon }: SidebarLinkProps) {
  const [hash] = useHash();
  const [collapse] = useContext(COLLAPSE_CTX);
  return (
    <a
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
  );
}

export function Sidebar({ children }: PropsWithChildren) {
  const toggleState = useToggle();
  const [collapse, toggleCollapse] = toggleState;

  return (
    <COLLAPSE_CTX.Provider value={toggleState}>
      <div
        style={{
          position: "sticky",
          alignSelf: "start",
          height: "calc(100dvh - var(--header-height))",
          top: "var(--header-height)",
          display: "flex",
          flexDirection: "column",
          width: collapse
            ? "var(--sidebar-width-collapse)"
            : "var(--sidebar-width)",
          backgroundColor: "var(--c-con-1)",
          paddingInline: "1px",
          gap: "1px",
          transition: "width 0.25s",
          overflowX: "hidden",
          gridRow: "2 / 4",
        }}
      >
        <div style={{ height: "16px" }} />
        {children}
        <div style={{ flexGrow: 1 }} />
        <button
          className={button({ kind: "text", justifyContent: "start" })}
          onClick={toggleCollapse}
        >
          {collapse ? <ExpandIcon /> : <CollapseIcon />}
          {!collapse && "collapse"}
        </button>
      </div>
    </COLLAPSE_CTX.Provider>
  );
}

const COLLAPSE_CTX = createContext<[boolean, (a: any) => void]>([
  false,
  () => {},
]);
