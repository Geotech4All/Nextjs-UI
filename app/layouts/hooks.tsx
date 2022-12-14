import React from "react";
import { AuthLayout } from "@app/layouts";

export const getAdminLayout = (page: React.ReactElement): React.ReactNode => {
  return <AuthLayout>{page}</AuthLayout>;
};
