import type { SocialType } from "@app/components";
import Link from "next/link";
import React from "react";

const SocialFooter: React.FC<SocialType> = (props) => {
  const { social, icon: Icon, link } = props;
  return (
    <Link className="flex gap-1 transition-all items-center group" href={link}>
      <span className="pr-2 text-lg items-center flex group-active:text-black group-hover:text-black transition-all">
        <Icon />
      </span>
      <p className="text-lg items-center flex">{social}</p>
    </Link>
  );
};

export default SocialFooter;
