// Authentication
import AuthForm from "@components/auth/form/AuthForm";
import SignInForm from "@components/auth/signin/SignInForm";
import Input, { Password } from "@components/auth/input/Input";

// Common
import Error from "@components/common/errors/Error";
import TopWave from "@components/common/waves/TopWave";
import NavLink from "@app/components/common/links/NavLink";
import ErrorList from "@components/common/errors/ErrorList";
import SideBar from "@app/components/common/sidebar/SideBar";
import BgImage from "@app/components/common/background/BgImage";
import navRotues from "@app/components/common/sidebar/navRoutes";
import SubmitButton from "@components/common/buttons/SubmitButton";
import MusicPlayer from "@app/components/common/media/MusicPlayer";
import SideBarItem from "@app/components/common/sidebar/SideBarItem";
import PodcastCard from "@app/components/common/podcast/PodcastCard";
import DragDropFile from "@app/components/common/input/DragDropInput";
import SocialFooter from "@app/components/common/social/SocialFooter";
import SideBarItems from "@app/components/common/sidebar/SideBarItems";
import PageWaterLoader from "@app/components/common/loading/PageWaterLoader";
import FormInput, { TextArea } from "@app/components/common/input/FormInput";
import PodcastFormButton from "@app/components/common/buttons/PodcastButton";
import AudioThumbnail from "@app/components/common/thumbnails/AudioThumbnail";
import type { BgCollor } from "@components/common/podcast/podcastUtils";
import type { NavRouteType } from "@app/components/common/sidebar/navRoutes";
import type { ErrorListType, NonFieldErrors } from "@components/common/errors/ErrorList";

// Admin
import PodcastForm from "@app/components/auth/podcast/PodcastForm";
import StaffDropDownList from "@app/components/admin/podcast/form/StaffDropDownList";
import StaffDropDownItem from "@app/components/admin/podcast/form/StaffDropDownItem";
import RecentPodcasts from "@app/components/admin/dashboard/recent_podcasts/RecentPodcasts";
import type { StaffDropDownContextType } from "@app/components/admin/podcast/form/StaffDropDownList";

// UserFacing
import Hero from "@app/components/userfront/landing/Hero";
import Header from "@app/components/userfront/landing/Header";
import Footer from "@app/components/userfront/landing/Fotter";
import Feature from "@app/components/userfront/landing/Feature";
import NavBar from "@app/components/userfront/navigation/NavBar";
import Features from "@app/components/userfront/landing/Features";
import MobileNav from "@app/components/userfront/navigation/MobileNav";
import PodcastList from "@app/components/userfront/podcast/PodcastList";
import { features, socials } from "@app/components/userfront/landing/info";
import type { SocialType } from "@app/components/userfront/landing/info";
import type { FeatureProps } from "@app/components/userfront/landing/Features";

export {
  // Authentication
  Input,
  Password,
  AuthForm,
  SignInForm,

  // Common
  Error,
  SideBar,
  BgImage,
  TopWave,
  NavLink,
  TextArea,
  FormInput,
  ErrorList,
  navRotues,
  PodcastCard,
  MusicPlayer,
  SideBarItem,
  SideBarItems,
  SocialFooter,
  SubmitButton,
  DragDropFile,
  AudioThumbnail,
  PageWaterLoader,
  PodcastFormButton,

  // Admin
  PodcastForm,
  RecentPodcasts,
  StaffDropDownList,
  StaffDropDownItem,

  // UserFacing
  Hero,
  NavBar,
  Footer,
  Header,
  socials,
  Feature,
  features,
  Features,
  MobileNav,
  PodcastList
};
export type {
  // Common
  BgCollor,
  NavRouteType,
  ErrorListType,
  NonFieldErrors,

  // Admin
  StaffDropDownContextType,

  // UserFacing
  SocialType,
  FeatureProps
};
