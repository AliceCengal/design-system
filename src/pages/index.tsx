import { generateText } from "../lib/malay-text-synth";

export default function FrontPage() {
  return (
    <main
      style={{ width: "min(calc(100% - 16px), 600px)", marginInline: "auto" }}
    >
      <h1>{generateText(10)}</h1>
      <p>{generateText(100)}</p>
    </main>
  );
}
