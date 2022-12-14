import { useAppSelector } from "@utils/store/hooks";
import { selectPodcasts } from "@utils/store/slices/podcastListSlice";
import React from "react";
import { PodcastCard } from "@app/components";

const RecentPodcasts: React.FC = () => {
  const podcasts = useAppSelector(selectPodcasts);
  return (
    <ul className="flex flex-col md:flex-row gap-5 flex-nowrap max-w-full overflow-x-auto">
      {podcasts.map((podcast) => (
        <PodcastCard key={Math.random()} podcast={podcast} />
      ))}
    </ul>
  );
};

export default RecentPodcasts;
