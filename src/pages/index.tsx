import { generateText } from "../lib/malay-text-synth";

export default function FrontPage() {
  return (
    <main style={{ gridArea: "main", maxWidth: "50ch", marginInline: "auto" }}>
      <h1>{generateText(10)}</h1>
      <p>{generateText(100)}</p>
    </main>
  );
}
