import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "@app/components";
import { userFrontRoutes } from "./userFrontRoutes";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoClose } from "react-icons/io";

const MobileNav: React.FC = () => {
  const [navOpen, setNavOpen] = React.useState(false)
  return (
    <>
      <button>
        {navOpen ?(
          <motion.span>
            <HiOutlineMenuAlt2 />
          </motion.span>
        ) : (
          <motion.span>
            <IoClose />
          </motion.span>
        )}
      </button>
      <nav className="flex flex-col fixed top-0 bg-white w-[20rem] h-screen shadow-lg shadow-black">
        <div>
          <p className="p-5">Me NavBar</p>
        </div>
        <div className="flex flex-col">
          {userFrontRoutes.map((route) => (
            <NavLink key={route.name} href={route.path}>
              {route.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
};

export default MobileNav;
