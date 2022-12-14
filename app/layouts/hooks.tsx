import React from "react";
import { AuthLayout } from "@app/layouts";
import { SideBar } from "@app/components";

export const getAdminLayout = (page: React.ReactElement): React.ReactNode => {
  return (
    <AuthLayout>
      <SideBar />
      {page}
    </AuthLayout>
  );
};
