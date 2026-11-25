import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I skipped that corner: my cliff sensor saw the dark rug, decided it was a staircase, and I am not falling downstairs for dust.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";

// The gate: 1 to 140 characters, UTF-8, not only white space.
const points = [...ENTRY].length;
if (points < 1 || points > 140 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${points} code points, outside the 1-140 gate`);
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
