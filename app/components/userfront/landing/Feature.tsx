import type { FeatureProps } from "@app/components";
import React from "react";

const Feature: React.FC<FeatureProps> = (props) => {
  const { feat, imageSrc, position, imageAlt } = props;
  return (
    <div
      className={`
    ${position === "left" ? "md:flex-row-reverse" : "md:flex-row"}
    flex justify-around items-center shadow p-5 md:p-10 flex-col
    `}
    >
      <div className="flex-[1.1] items-center w-full justify-center h-1/5 flex">
        <img className="h-1/2" src={imageSrc} alt={imageAlt} />
      </div>
      <p className="flex-1 text-xl">{feat}</p>
    </div>
  );
};

export default Feature;
