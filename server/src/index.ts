import { createServer } from "@graphql-yoga/node";
import { schema } from "./schema";
import { createPubSub } from "@graphql-yoga/node";

export const pubSub = createPubSub();

export async function main() {
  const server = createServer({
    schema,
  });
  await server.start();
}

main();
