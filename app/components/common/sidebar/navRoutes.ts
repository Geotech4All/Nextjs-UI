import { IconType } from "react-icons";
import { MdSpaceDashboard } from "react-icons/md";
import { FaPodcast } from "react-icons/fa";

export interface NavRouteType {
  name: string;
  path: string;
  icon: IconType;
  id: number;
}

const navRoutes: NavRouteType[] = [
  {
    id: 1,
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: MdSpaceDashboard
  },
  {
    id: 2,
    name: "Podcasts",
    path: "/admin/podcasts",
    icon: FaPodcast
  }
];

export default navRoutes;
