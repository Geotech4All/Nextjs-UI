import { getNavLayout } from "@app/layouts/hooks";
import { NextPageWithLayout } from "pages/_app";
import React from "react";

const Blog: NextPageWithLayout = () => {
  return (
    <div>
      <h1>You have reached the blog page</h1>
      <p>Comming Soon</p>
    </div>
  );
};

Blog.getLayout = getNavLayout;

export default Blog;
