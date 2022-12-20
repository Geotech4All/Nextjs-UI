import type { FeatureProps } from "@app/components";
import { IconType } from "react-icons";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { TbBrandMeta } from "react-icons/tb";

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
}

export const socials: SocialType[] = [
  {
    link: "https://www.linkedin.com/company/geotech4all/",
    social: "LinkedIn",
    icon: BsLinkedin
  },
  {
    link: "https://www.facebook.com/Geotech4all/",
    social: "Meta",
    icon: TbBrandMeta
  },
  {
    link: "https://lnkd.in/d82ZNsDr",
    social: "Twitter",
    icon: BsTwitter
  }
];
