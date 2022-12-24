import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Features, Footer, Header, NavBar } from "@app/components";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>GeoTech4All</title>
        <meta name="description" content="Geology meets Tech" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main aria-label="Geology meets technology">
        <Header />
        <NavBar />
        <Features />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
