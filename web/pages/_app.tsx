import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import type { AppProps } from "next/app";
import React from "react";
import "../styles/globals.css";

/**
 * This is how you implement graphql subscriptions in a nextjs app.
 */

interface StylesProps {
  children?: React.ReactNode;
}

export const StylesProvider = ({ children }: StylesProps) => {
  return <>{children}</>;
};

export const wsLink =
  process.browser &&
  new GraphQLWsLink(
    createClient({
      url: "ws://localhost:4000/graphql",
    })
  );

export const client = new ApolloClient({
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
