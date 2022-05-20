import { makeSchema } from "nexus";
import path from "path";
import * as types from "./graphql";

export const schema = makeSchema({
  types,
  outputs: {
    typegen: path.join(__dirname, "../nexus-typegen.ts"),
    schema: path.join(__dirname, "../schema.graphql"),
  },
});
