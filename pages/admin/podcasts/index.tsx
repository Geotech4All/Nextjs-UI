import { getAdminLayout } from "@app/layouts/hooks";
import { NextPageWithLayout } from "pages/_app";
import React from "react";

const PodcastPage: NextPageWithLayout = () => {
  return <h1>You have reached the podcast page. Coming Soon!!!</h1>;
};

PodcastPage.getLayout = getAdminLayout;

export default PodcastPage;
