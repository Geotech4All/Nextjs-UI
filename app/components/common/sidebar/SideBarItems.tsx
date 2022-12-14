import { navRotues, SideBarItem } from "@app/components";
import React from "react";

const SideBarItems: React.FC = () => {
  return (
    <ul className="flex flex-col gap-3">
      {navRotues.map((route) => {
        return <SideBarItem route={route} key={route.id} />;
      })}
    </ul>
  );
};

export default SideBarItems;
