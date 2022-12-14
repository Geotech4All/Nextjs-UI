import React from "react";
import { useRouter } from "next/router";

const Admin: React.FC = () => {
  const router = useRouter();
  void router.replace("/admin/dashboard");
  return <div>Admin</div>;
};

export default Admin;
