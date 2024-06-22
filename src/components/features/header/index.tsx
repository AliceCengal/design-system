import { button } from "../../common/button";
import { OutboundIcon } from "../../icons";

import styles from "./header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img
        src={import.meta.env.BASE_URL + "favicon.ico"}
        height="36"
        width="36"
      />
      <span
        style={{ fontSize: "24pt", letterSpacing: "1pt", fontWeight: "500" }}
      >
        Kelasi
      </span>
      <div style={{ flexGrow: 1 }} />
      <a
        href="https://github.com/AliceCengal/design-system"
        target="_blank"
        referrerpolicy="no-referrer"
        className={button({ kind: "text" })}
      >
        <span>Github</span>
        <OutboundIcon />
      </a>
    </header>
  );
}
