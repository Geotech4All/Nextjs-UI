interface UserRoute {
  path: string;
  name: string;
}

export const userFrontRoutes: UserRoute[] = [
  {
    path: "/",
    name: "Home"
  },
  {
    path: "/podcast",
    name: "Podcast"
  },
  {
    path: "/blog",
    name: "Blog"
  },
  {
    path: "#",
    name: "Services"
  },
  {
    path: "#",
    name: "Gallery"
  },
  {
    path: "#",
    name: "Community"
  }
];
