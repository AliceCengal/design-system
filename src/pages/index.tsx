import { generateText } from "../libs/malay-text-synth";
import pageStyle from "./pages.module.css";

export default function FrontPage() {
  return (
    <main className={pageStyle.main_sm}>
      <h1>{generateText(10)}</h1>
      <p>{generateText(100)}</p>

      <h2>{generateText(13)}</h2>
      <p>{generateText(100)}</p>
      <p>{generateText(100)}</p>
      <p>{generateText(100)}</p>
      <p>{generateText(100)}</p>
      <p>{generateText(100)}</p>

      <p>{generateText(100)}</p>
      <p>{generateText(100)}</p>
      <p>{generateText(100)}</p>
    </main>
  );
}
