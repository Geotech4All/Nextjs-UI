import type { FeatureProps } from "@app/components";
import { IconType } from "react-icons";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { TbBrandMeta } from "react-icons/tb";

// Note: if you are adding a call to action (cta) structure the feat in a way that the
// cta fits at the end of the feat. See the examples bellow.
export const features: FeatureProps[] = [
  {
    // the cta (Podcast fits at the end of the sentence)
    feat: "Find out the latest inovations in the world of geology and tech via our",
    position: "left",
    imageAlt: "two people hosting a podcast",
    imageSrc: "/images/podcasting.svg",
    cta: "Podcasts",
    ctaPath: "/podcast"
  },
  {
    feat: "Are you a geolologist or geo-ethusiast? Learn more about Geology by reading our",
    position: "right",
    imageAlt: "Blogging lady",
    imageSrc: "/images/Blogging.svg",
    cta: "Blogs",
    ctaPath: "/blog"
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
