import React from "react";
import { AuthLayout, NavLayout } from "@app/layouts";
import { SideBar } from "@app/components";

// returns a page with admin privilages and a sidebar
export const getAdminLayout = (page: React.ReactElement): React.ReactNode => {
  return (
    <AuthLayout>
      <SideBar />
      {page}
    </AuthLayout>
  );
};

export const getNavLayout = (page: React.ReactElement): React.ReactNode => {
  return <NavLayout>{page}</NavLayout>;
};
