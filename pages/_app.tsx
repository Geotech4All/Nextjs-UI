import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { client } from "@utils/graphql/config";
import { store } from "@store/config";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <ReduxProvider store={store}>
        <main className="min-w-screen min-h-screen flex items-center justify-center">
          <Component {...pageProps} />
        </main>
      </ReduxProvider>
    </ApolloProvider>
  );
}

export default MyApp;
