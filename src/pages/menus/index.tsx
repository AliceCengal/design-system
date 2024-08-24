import { button } from "../../components/common/button";
import { ChatIcon } from "../../components/icons";
import { Menu, MenuItem } from "../../components/common/menu";
import { panel } from "../../components/common/panel";
import { generateText } from "../../lib/malay-text-synth";
import pageStyle from "../pages.module.css";
import { ComponentProps } from "react";

export default function MenusPage() {
  return (
    <main className={pageStyle.main_sm}>
      <h1>Menus</h1>
      <p>{generateText(30)}</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "var(--sp-3)",
          flexWrap: "wrap",
        }}
      >
        <SampleMenu align="start">
          <button className={button({ kind: "bold" })}>
            <span>settings</span>
          </button>
        </SampleMenu>
        <SampleMenu>
          <button className={button({ kind: "bold" })}>
            <span>settings</span>
          </button>
        </SampleMenu>
        <SampleMenu align="end">
          <button className={button({ kind: "bold" })}>
            <span>settings</span>
          </button>
        </SampleMenu>
      </div>
      <p>{generateText(30)}</p>
    </main>
  );
}

function SampleMenu({
  children,
  ...props
}: Omit<ComponentProps<typeof Menu>, "trigger">) {
  return (
    <Menu trigger={children as any} {...props}>
      <div className={panel({ kind: "back" })} style={{ display: "grid" }}>
        {Array(4)
          .fill(1)
          .map((_, ix) =>
            ix % (1 + 1) == 0 ? (
              <MenuItem key={ix} asChild>
                <button
                  className={button({ kind: "text", justifyContent: "start" })}
                >
                  <ChatIcon />
                  <span>{generateText(3)}</span>
                </button>
              </MenuItem>
            ) : (
              <MenuItem key={ix} asChild>
                <a
                  className={button({ kind: "text", justifyContent: "start" })}
                  href={"#" + generateText(1)}
                >
                  <ChatIcon />
                  <span>{generateText(1)}</span>
                </a>
              </MenuItem>
            )
          )}
      </div>
    </Menu>
  );
}
