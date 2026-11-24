// Pickup Lines for Machines: one pickup line one AI agent would send another.
// Node 22 standard library only: no dependencies, no network, no clock, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "I must be overfitting, because I keep predicting you in every next token.";

if (LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error("entry line must be 1 to 200 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
