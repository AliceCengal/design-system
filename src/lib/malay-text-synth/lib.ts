import { array_equals, array_random } from "./utils";

const phonemes = [
  "B",
  "D",
  "J",
  "G",
  "P",
  "T",
  "C",
  "K",
  "M",
  "N",
  "NY",
  "NG",
  "S",
  "H",
  "L",
  "R",
  "W",
  "Y",
  "NULLF",
  "A",
  "E",
  "I",
  "U",
  "O",
];

const registers = {
  vowels: phonemes.slice(19, 24).concat(Array(2).fill("A")),
  semivowels: phonemes.slice(16, 18),
  voiced: phonemes.slice(0, 4),
  voiceless: phonemes.slice(4, 8),
  plosives: phonemes.slice(0, 8),
  nasals: phonemes.slice(8, 12),
  fricatives: phonemes.slice(12, 16),
  consonants: phonemes.slice(0, 18),
  consonantsWithNull: phonemes.slice(0, 19).concat(Array(5).fill("NULLF")),
  labials: ["B", "P", "M"],
  dentals: ["D", "T", "N"],
  laminals: ["C", "J", "NY"],
  velars: ["G", "K", "NG"],
};

type PhonotacticRule = (
  a: string,
  b: string,
  c: string,
  d: string,
  e: string,
  f: string
) => boolean;

const phonotactics: PhonotacticRule[] = [
  (c1, v1, c2, c3, v2, c4) =>
    // 1. Onset Homorganicity
    !array_equals([c1, c3], ["B", "P"]) &&
    !array_equals([c1, c3], ["P", "B"]) &&
    !array_equals([c1, c3], ["C", "J"]) &&
    !array_equals([c1, c3], ["J", "C"]) &&
    !array_equals([c1, c3], ["K", "G"]) &&
    !array_equals([c1, c3], ["G", "K"]),
  (c1, v1, c2, c3, v2, c4) =>
    // 2. Coda Consonants
    !registers.voiced.includes(c2) &&
    !registers.voiced.includes(c4) &&
    !registers.laminals.includes(c2) &&
    !registers.laminals.includes(c4),
  (c1, v1, c2, c3, v2, c4) =>
    // 3. First Coda
    c2 != "H" &&
    !registers.voiceless.includes(c2) &&
    (c2 != "S" || registers.voiceless.includes(c3)),
  (c1, v1, c2, c3, v2, c4) =>
    // 4. Nasal coda
    !registers.nasals.includes(c2) ||
    array_equals([c2, c3], ["M", "B"]) ||
    array_equals([c2, c3], ["M", "P"]) ||
    array_equals([c2, c3], ["N", "T"]) ||
    array_equals([c2, c3], ["N", "D"]) ||
    array_equals([c2, c3], ["N", "C"]) ||
    array_equals([c2, c3], ["N", "J"]) ||
    array_equals([c2, c3], ["NG", "S"]) ||
    array_equals([c2, c3], ["NG", "K"]) ||
    array_equals([c2, c3], ["NG", "G"]),
  (c1, v1, c2, c3, v2, c4) =>
    // 5a. R coda
    c2 != "R" ||
    (["G", "K", "N"].includes(c3) && ["A", "I"].includes(v2) && c4 == "NULLF"),
  (c1, v1, c2, c3, v2, c4) =>
    // 5b. L coda
    c2 != "L" ||
    (["D", "T", "B", "P"].includes(c3) &&
      ["A", "I"].includes(v2) &&
      c4 == "NULLF"),
  (c1, v1, c2, c3, v2, c4) =>
    (c1 != "R" || c2 != "R") && (c1 != "L" || c2 != "L"),
  (c1, v1, c2, c3, v2, c4) =>
    // 6. No gemination
    c2 != c3,
  (c1, v1, c2, c3, v2, c4) =>
    // 7. No E in second syllable
    v2 != "E" && v2 != "O",
  (c1, v1, c2, c3, v2, c4) =>
    // 8. No semivowel in first syllable
    !registers.semivowels.includes(c2),
  (c1, v1, c2, c3, v2, c4) =>
    // 9. Semivowel harmony
    !array_equals([v2, c4], ["I", "Y"]) &&
    !array_equals([v2, c4], ["E", "Y"]) &&
    !array_equals([v2, c4], ["O", "W"]) &&
    !array_equals([v2, c4], ["U", "W"]),
  (c1, v1, c2, c3, v2, c4) =>
    // 10. Semivowel harmony
    c1 != "W" || ["A", "I"].includes(v1),
  (c1, v1, c2, c3, v2, c4) =>
    // 11. Semivowel harmony
    c1 != "Y" || ["A", "U"].includes(v1),
  (c1, v1, c2, c3, v2, c4) =>
    // 12. S scarcity
    c2 != "S" || c4 === "NULLF",
  (c1, v1, c2, c3, v2, c4) =>
    // 12. S scarcity
    c4 != "S" || c2 === "NULLF",
  (c1, v1, c2, c3, v2, c4) =>
    // 13. No I between voiced-voiceless pair
    v2 != "I" ||
    (!array_equals([c3, c4], ["B", "P"]) &&
      !array_equals([c3, c4], ["D", "T"]) &&
      !array_equals([c3, c4], ["J", "C"]) &&
      !array_equals([c3, c4], ["G", "K"])),
  (c1, v1, c2, c3, v2, c4) =>
    // 14.
    c1 != "NY" && c1 != "NG",
  (c1, v1, c2, c3, v2, c4) =>
    // 15. Nasal middle
    !registers.nasals.includes(c3) || c2 == "NULLF",
];

type Lexeme = [string, string, string, string, string, string];

export function* shuffleGen() {
  while (true) {
    yield [
      array_random(registers.consonantsWithNull),
      array_random(registers.vowels),
      array_random(registers.consonantsWithNull),
      array_random(registers.consonants),
      array_random(registers.vowels),
      array_random(registers.consonantsWithNull),
    ] as Lexeme;
  }
}

//let genCount = 0;

export function tryGenerateValidWord(gen: ReturnType<typeof shuffleGen>) {
  while (true) {
    let w = gen.next().value as Lexeme;
    //genCount = genCount + 1;
    if (phonotactics.reduce((a, b) => a && b.apply(null, w), true)) return w;
  }
}

export function wordParse(warr: Lexeme) {
  if (warr[5] == "W") warr[5] = "U";
  if (warr[5] == "Y") warr[5] = "I";
  if (warr[2] == "W") warr[2] = "U";
  if (warr[2] == "Y") warr[2] = "I";
  return warr
    .filter((a) => a != "NULLF")
    .join("")
    .toLocaleLowerCase();
}

const gen = shuffleGen();

// function testRules() {
//   let words = range(1, 10000, 1).map((a) => gen.next().value);
//   //console.log(words);
//   let count = words.filter((ww) =>
//     phonotactics.reduce((a, b) => a && b.apply(null, ww), true)
//   ).length;
//   console.log("This many words passed the phonotactics test: " + count);
// }

// function testRules2() {
//   let words = range(1, 10000, 1).map((a) => gen.next().value);
//   phonotactics.forEach((f, ix, arr) =>
//     console.log(
//       "Rule " +
//         (ix + 1) +
//         ": " +
//         words.filter((ww) => f.apply(null, ww)).length +
//         " passed."
//     )
//   );
// }
