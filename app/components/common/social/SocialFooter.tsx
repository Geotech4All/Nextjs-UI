import type { SocialType } from "@app/components";
import Link from "next/link";
import React from "react";

const SocialFooter: React.FC<SocialType> = (props) => {
  const { social, icon: Icon, link, name } = props;
  return (
    <Link className="flex gap-1 transition-all items-center group" href={link}>
      <span className="pr-2 group-hover:text-black transition-all">
        <Icon />
      </span>
      <p>{social}</p>
      {name !== undefined && <p> - {name}</p>}
    </Link>
  );
};

export default SocialFooter;
