import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { client } from "@utils/graphql/config";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <main className="min-w-screen min-h-screen flex items-center justify-center">
        <Component {...pageProps} />
      </main>
    </ApolloProvider>
  );
}

export default MyApp;
