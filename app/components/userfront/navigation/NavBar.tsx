import { MobileNav, NavLink } from "@app/components";
import { useMediaQuery } from "react-responsive";
import { isInViewPort } from "@utils/ui/helpers";
import React from "react";
import { userFrontRoutes } from "./userFrontRoutes";

const NavBar: React.FC = () => {
  const [isFixed, setIsFixed] = React.useState(false);

  const isLargeScreen = useMediaQuery({
    query: "(min-width: 950px)"
  });

  const handleFixing = (): void => {
    const heroExists = isInViewPort("hero-section");
    if (heroExists) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("scroll", handleFixing);
    return () => {
      document.removeEventListener("scroll", handleFixing);
    };
  }, []);

  if (!isLargeScreen) {
    return <MobileNav />;
  }
  return (
    <nav
      className={`${isFixed ? "fixed top-0" : "relative"} bg-white
      w-screen shadow-lg flex justify-between shadow-black/30`}
    >
      <div>
        <p className="p-5">Me NavBar</p>
      </div>
      <div className="flex px-5">
        {userFrontRoutes.map((route) => (
          <NavLink key={route.name} href={route.path}>
            {route.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
