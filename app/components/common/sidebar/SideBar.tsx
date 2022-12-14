import React from "react";
import { motion } from "framer-motion";
import { SideBarItems } from "@app/components";
import { useAppDispatch, useAppSelector } from "@utils/store/hooks";
import { selectAdminPage, setOpen } from "@utils/store/slices/adminPageSlice";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";
import { IconType } from "react-icons";

const Arrow: React.FC<{ icon: IconType }> = (props) => {
  const { icon: Icon } = props;
  return (
    <motion.span>
      <Icon />
    </motion.span>
  );
};
const SideBar: React.FC = () => {
  const page = useAppSelector(selectAdminPage);
  const dispatch = useAppDispatch();

  const handleSideBarOpen = (): void => {
    if (page.sideOpen) {
      dispatch(setOpen(false));
    } else {
      dispatch(setOpen(true));
    }
  };
  return (
    <motion.div
      animate={{ width: page.sideOpen ? "100%" : 60 }}
      className={`fixed top-1/2 shadow-black/30 -translate-y-1/2
      left-1 items-center gap-3 w-full flex max-w-[9rem] h-[98vh] rounded-xl shadow-xl flex-col`}
    >
      <div className="relative -z-10 w-full flex flex-col items-center">
        <button
          onClick={handleSideBarOpen}
          className={`absolute -right-6 -top-1 hover:-right-7 transition-all
           bg-gradient-to-r from-white to-gray-100 rounded-r-full p-3`}
        >
          {page.sideOpen ? <Arrow icon={FaAngleDoubleLeft} /> : <Arrow icon={FaAngleDoubleRight} />}
        </button>
        <h1 className="w-[90%] rounded-md shadow-lg flex items-center justify-center font-bold text-lg p-3 px-6">
          {page.sideOpen ? "GeoTech" : "G"}
        </h1>
      </div>
      <SideBarItems />
      <div></div>
    </motion.div>
  );
};

export default SideBar;
