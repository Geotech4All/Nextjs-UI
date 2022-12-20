import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "@app/components";
import { userFrontRoutes } from "./userFrontRoutes";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

interface NavButtonProps {
  children?: React.ReactNode;
}
const NavButton: React.FC<NavButtonProps> = (props) => {
  const { children } = props;
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      {children}
    </motion.span>
  );
};

const MobileNav: React.FC = () => {
  const [navOpen, setNavOpen] = React.useState(false);

  const handleNavOpen: React.MouseEventHandler = () => {
    if (navOpen) {
      setNavOpen(false);
    } else {
      setNavOpen(true);
    }
  };
  return (
    <>
      <button
        onClick={handleNavOpen}
        className="fixed text-2xl bg-white p-1 rounded shadow shadow-black/50 top-5 left-5 z-50"
      >
        {navOpen ? (
          <NavButton>
            <IoClose />
          </NavButton>
        ) : (
          <NavButton>
            <HiOutlineMenuAlt2 />
          </NavButton>
        )}
      </button>
      <AnimatePresence>
        {navOpen && (
          <motion.nav
            initial={{ translateX: "-100%" }}
            animate={{ translateX: 0 }}
            exit={{ translateX: "-100%" }}
            key={Math.random()}
            className="flex flex-col text-lg md:text-base fixed top-0 bg-white w-[20rem] h-screen shadow-lg shadow-black"
          >
            <div className="px-7">
              <p className="p-5">Me NavBar</p>
            </div>
            <div className="flex flex-col">
              {userFrontRoutes.map((route) => (
                <NavLink key={route.name} href={route.path}>
                  {route.name}
                </NavLink>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;
