import React from "react";
import { useRouter } from "next/router";
import { PageWaterLoader } from "@app/components";

const Admin: React.FC = () => {
  const router = useRouter();
  React.useEffect(() => {
    void router.replace("/admin/dashboard");
  }, []);
  return <PageWaterLoader />;
};

export default Admin;
