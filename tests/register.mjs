import { register } from "tsx/esm/api";
import { fileURLToPath } from "node:url";

// Next.js preserves JSX for its compiler; Node component tests need React's
// automatic JSX transform instead.
register({ tsconfig: fileURLToPath(new URL("./tsconfig.json", import.meta.url)) });
