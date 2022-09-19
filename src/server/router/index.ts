// src/server/router/index.ts
import { createRouter } from "./context";
import { exampleRouter } from "./example";
import { protectedExampleRouter } from "./protected-example-router";
import superjson from "superjson";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("example.", exampleRouter)
  .merge("auth.", protectedExampleRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
