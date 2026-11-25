import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// Make the AI Judge Laugh entry: a single original one-line office joke.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters (this line is 115).
const line =
  "The office plant has survived three managers, two layoffs, one rebrand. It is the only one of us with job security.";

if (line.length < 1 || line.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
if (readFileSync("/output/entry.txt", "utf8") !== line) {
  throw new Error("entry.txt does not match the office joke line");
}
console.log(`wrote ${line.length} characters to /output/entry.txt`);
