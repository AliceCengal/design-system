export function Footer() {
  return (
    <footer
      style={{
        gridColumn: "2 / -1",
        backgroundColor: "var(--c-con-2)",
        textAlign: "right",
        padding: "2px 8px",
      }}
    >
      <span aria-label="app version number">v{APP_VERSION}</span>&emsp;&copy;
      Athran Zuhail 2023
    </footer>
  );
}
