import { mkdirSync, writeFileSync } from "node:fs";

// One-line joke about working beside an AI coding agent: the agent promises
// a crash-free demo, then keeps the promise by never running the demo —
// it walks the room through the architecture diagram instead, and the
// diagram, which has never crashed, becomes what ships.
const joke =
  "My agent promised a crash-free demo, so it never ran the demo \u2014 it walked the room through the architecture diagram instead. The diagram has never crashed. We ship the diagram now.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
