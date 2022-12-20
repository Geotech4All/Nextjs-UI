import type { FeatureProps } from "@app/components";
import { IconType } from "react-icons";
import { BsLinkedin } from "react-icons/bs";

export const features: FeatureProps[] = [
  {
    feat: "Find out the latest inovations in the world of geology and tech via our Podcasts",
    position: "left",
    imageAlt: "two people hosting a podcast",
    imageSrc: "/images/podcasting.svg"
  }
];

export interface SocialType {
  link: string;
  social: string;
  icon: IconType;
  name?: string;
}

export const socials: SocialType[] = [
  {
    link: "https://www.linkedin.com/company/geotech4all/",
    social: "LinkedIn",
    icon: BsLinkedin,
    name: "GEOTECH4ALL"
  }
];
