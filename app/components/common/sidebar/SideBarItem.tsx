import React from "react";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@utils/store/hooks";
import Link from "next/link";
import { NavRouteType } from "./navRoutes";
import { selectAdminPage, setCurrRoute } from "@utils/store/slices/adminPageSlice";

interface SideBarItemProps {
  route: NavRouteType;
}
const SideBarItem: React.FC<SideBarItemProps> = (props) => {
  const { route } = props;
  const { icon: Icon } = route;
  const dispatch = useAppDispatch();
  const currPage = useAppSelector(selectAdminPage);
  const active = currPage.currentRoute === route.id;
  const handleClick = (): void => {
    dispatch(setCurrRoute(route.id));
  };

  return (
    <Link
      onClick={handleClick}
      className={`w-full rounded-full  flex items-center justify-center`}
      href={route.path}
    >
      <div
        title={route.name}
        className={`${active ? "bg-ui-pink-30 shadow" : ""} ${
          !currPage.sideOpen ? "aspect-square" : ""
        }
        flex gap-2 text-md items-center p-3 hover:scale-105 transition-all rounded-full text-gray-900/90`}
      >
        <span className={`${currPage.sideOpen ? "text-xl" : "text-3xl"}`}>
          <Icon />
        </span>
        {currPage.sideOpen && <motion.span className="font-semibold">{route.name}</motion.span>}
      </div>
    </Link>
  );
};

export default SideBarItem;
