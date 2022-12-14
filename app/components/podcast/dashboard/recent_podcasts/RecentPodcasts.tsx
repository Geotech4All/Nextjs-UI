import { useAppSelector } from "@utils/store/hooks";
import { selectPodcasts } from "@utils/store/slices/podcastListSlice";
import React from "react";

const RecentPodcasts: React.FC = () => {
  const podcasts = useAppSelector(selectPodcasts);
  return (
    <ul>
      {podcasts.map((podcast) => (
        <h1 key={Math.random()}>{podcast.node?.title}</h1>
      ))}
    </ul>
  );
};

export default RecentPodcasts;
