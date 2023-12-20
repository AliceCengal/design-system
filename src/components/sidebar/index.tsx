export function Sidebar() {
  return (
    <div
      style={{
        gridArea: "sidebar",
        display: "grid",
        width: "200px",
        backgroundColor: "var(--c-con-1)",
      }}
    >
      <a href="#">main page</a>
    </div>
  );
}
