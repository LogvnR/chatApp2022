import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import type { AppProps } from "next/app";
import "../styles/globals.css";

const wsLink =
  process.browser &&
  new GraphQLWsLink(
    createClient({
      url: "ws://localhost:4000/graphql",
    })
  );

console.log(wsLink);

const client = new ApolloClient({
  link: wsLink as any,
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />{" "}
    </ApolloProvider>
  );
}

export default MyApp;
