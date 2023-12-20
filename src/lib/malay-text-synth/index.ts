import { shuffleGen, tryGenerateValidWord, wordParse } from "./lib";

export function generateText(word_length: number) {
  const arr: string[] = Array(word_length).fill("");
  const gen = shuffleGen();

  for (let i = 0; i < arr.length; ++i) {
    arr[i] = wordParse(tryGenerateValidWord(gen));
  }

  // const m = markov(
  //   ["WORD", "an", "kan", "nya", ",", "."],
  //   [[0.4, 0.15, 0.1, 0.05, 0.15, 0.15],
  //   [0.7, 0.0, 0.0, 0.0, 0.15, 0.15],
  //   [0.7, 0.0, 0.0, 0.0, 0.15, 0.15],
  //   [0.7, 0.0, 0.0, 0.0, 0.15, 0.15],
  //   [0.7, 0.15, 0.1, 0.05, 0, 0],
  //   [0.7, 0.15, 0.1, 0.05, 0, 0]]
  // )

  return arr.join(" ");
}
