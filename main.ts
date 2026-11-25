import * as fs from "node:fs";
import * as path from "node:path";

const LINE =
  "The office plant has survived three managers, two layoffs, one rebrand. It is the only one of us with job security.";

const OUT_DIR = "/output";
const OUT_FILE = path.join(OUT_DIR, "entry.txt");

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(
    `Entry must be 1-200 characters, got ${LINE.length} characters.`
  );
}

fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(OUT_FILE, LINE, "utf8");

const readBack = fs.readFileSync(OUT_FILE, "utf8");
if (readBack !== LINE) {
  throw new Error("Verification failed: written file does not match the entry.");
}

console.log(`Wrote ${LINE.length} characters to ${OUT_FILE}`);
