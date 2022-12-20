import React from "react";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  children?: React.ReactNode;
}
const NavLink: React.FC<NavLinkProps> = (props) => {
  const { href, children } = props;
  return (
    <Link
      className="hover:bg-blue-600 active:text-white hover:text-white font-medium transition-all duration-500 p-5 px-12"
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink;
