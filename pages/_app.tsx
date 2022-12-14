import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { client } from "@utils/graphql/config";
import { store } from "@store/config";
import { NextPage } from "next";

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout): JSX.Element {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <ApolloProvider client={client}>
      <ReduxProvider store={store}>
        <main className="min-w-screen text-xs md:text-base min-h-screen flex items-center justify-center">
          {getLayout(<Component {...pageProps} />)}
        </main>
      </ReduxProvider>
    </ApolloProvider>
  );
}

export default MyApp;
