import { MusicPlayer, PodcastCard } from "@app/components";
import { useAppSelector } from "@utils/store/hooks";
import { selectPodcasts } from "@utils/store/slices/podcastListSlice";
import React from "react";

const PodcastList: React.FC = () => {
  const podcasts = useAppSelector(selectPodcasts);

  return (
    <>
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 p-4 gap-2 justify-items-center">
        {podcasts.map((podcast) => (
          <PodcastCard key={Math.random()} podcast={podcast} />
        ))}
      </ul>
      <MusicPlayer />
    </>
  );
};

export default PodcastList;
