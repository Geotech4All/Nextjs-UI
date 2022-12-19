import { PodcastForm } from "@app/components";
import { getAdminLayout } from "@app/layouts/hooks";
import { NextPageWithLayout } from "pages/_app";
import React from "react";

const PodcastPage: NextPageWithLayout = () => {
  return <PodcastForm />;
};

PodcastPage.getLayout = getAdminLayout;

export default PodcastPage;
