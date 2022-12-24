import { NavBar, Footer } from "@app/components";
import React from "react";

interface NavLayoutProps {
  children?: React.ReactNode;
}
const NavLayout: React.FC<NavLayoutProps> = (props) => {
  const { children } = props;
  return (
    <div className="min-h-screen justify-between flex flex-col mt-20">
      <NavBar fixed />
      {children}
      <Footer />
    </div>
  );
};

export default NavLayout;
