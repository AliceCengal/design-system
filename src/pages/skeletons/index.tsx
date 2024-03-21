import { Skeleton } from "../../components/common/skeleton";
import pageStyle from "../pages.module.css";

export default function SkeletonsPage() {
  return (
    <main className={pageStyle.main_sm}>
      <h1>Skeletons</h1>

      <Skeleton variant="text" fontSize="large" />

      <Skeleton variant="text" fontSize="medium" />

      <Skeleton variant="text" fontSize="small" />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          marginBlock: "4rem",
          gap: "1rem",
          border: "3px solid lightgray",
          padding: "1rem",
        }}
      >
        <Skeleton variant="circular" height="48px" />
        <div>
          <Skeleton variant="text" fontSize="large" />
          <Skeleton variant="text" fontSize="medium" />
          <Skeleton variant="text" fontSize="medium" />
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem",
          border: "3px solid lightgray",
          padding: "1rem",
        }}
      >
        <Skeleton
          variant="text"
          fontSize="large"
          style={{ gridColumn: "1 / -1" }}
        />

        <Skeleton variant="rectangular" height="5rem" />
        <Skeleton variant="rectangular" height="5rem" />
        <Skeleton variant="rectangular" height="5rem" />
        <Skeleton variant="rectangular" height="5rem" />
      </div>
    </main>
  );
}
