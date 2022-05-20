import { createPubSub, createServer } from "@graphql-yoga/node";
import { WebSocketServer } from "ws";
import { useServer } from "graphql-ws/lib/use/ws";
import { schema } from "./schema";

export const pubsub = createPubSub();

async function main() {
  /* 
  Create GraphQL Server
  Server will be based on apollo-server + graphql yoga
  */

  const server = createServer({
    schema,
    graphiql: {
      subscriptionsProtocol: "WS",
    },
    hostname: "localhost",
  });

  /* 
  Create HTTP Server and implement websockets
  */

  const httpServer = await server.start();

  const wsServer = new WebSocketServer({
    server: httpServer,
    path: server.getAddressInfo().endpoint,
  });

  useServer(
    {
      execute: (args: any) => args.rootValue.execute(args),
      subscribe: (args: any) => args.rootValue.subscribe(args),
      onSubscribe: async (ctx, msg) => {
        const { schema, execute, subscribe, contextFactory, parse, validate } =
          server.getEnveloped(ctx);

        const args = {
          schema,
          operationName: msg.payload.operationName,
          document: parse(msg.payload.query),
          variableValues: msg.payload.variables,
          contextValue: await contextFactory(),
          rootValue: {
            execute,
            subscribe,
          },
        };

        const errors = validate(args.schema, args.document);
        if (errors.length) return errors;
        return args;
      },
    },
    wsServer
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
