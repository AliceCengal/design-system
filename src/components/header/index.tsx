import { button } from "../button";
import { OutboundIcon } from "../icons";

import styles from "./header.module.css";

export function Header() {
  return (
    <div className={styles.header}>
      <img src="/public/favicon.ico" height="36" width="36" />
      <span
        style={{ fontSize: "24pt", letterSpacing: "1pt", fontWeight: "500" }}
      >
        Kelasi
      </span>
      <div style={{ flexGrow: 1 }} />
      <a
        href="https://github.com"
        target="_blank"
        referrerpolicy="no-referrer"
        className={button({ kind: "text" })}
      >
        Github
        <OutboundIcon />
      </a>
    </div>
  );
}
