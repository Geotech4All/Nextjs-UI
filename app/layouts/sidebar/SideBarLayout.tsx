import { SideBar } from "@app/components";
import React from "react";

interface SideBarLayoutProps {
  children?: React.ReactNode | React.ReactElement;
}
const SideBarLayout: React.FC<SideBarLayoutProps> = (props) => {
  const { children } = props;
  return (
    <>
      <SideBar />
      <main>{children}</main>
    </>
  );
};

export default SideBarLayout;
