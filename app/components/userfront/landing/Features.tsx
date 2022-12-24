import React from "react";
import { Feature, features } from "app/components";

export interface FeatureProps {
  feat: string;
  position: "right" | "left";
  imageSrc: string;
  imageAlt: string;
  cta?: string;
  ctaPath?: string;
}
const Features: React.FC = () => {
  return (
    <ul className="lg:p-12 gap-5 flex flex-col p-4 lg:px-52 mt-8">
      {features.map((feature) => (
        <Feature {...feature} key={feature.feat} />
      ))}
    </ul>
  );
};

export default Features;
