import { PodcastList } from "@app/components";
import { getNavLayout } from "@app/layouts/hooks";
import { PodcastTypeConnection } from "@utils/graphql/codegen/graphql";
import { useAppDispatch } from "@utils/store/hooks";
import { setPocastList } from "@utils/store/slices/podcastListSlice";
import { getLatestPodcasts } from "pages/api/podcast";
import { NextPageWithLayout } from "pages/_app";
import React from "react";

const maxLoad = 10;
export async function getServerSideProps(): Promise<{ props: ServerSideProps }> {
  const podcasts = await getLatestPodcasts({ first: maxLoad });
  return {
    props: {
      allPodcasts: podcasts.allPodcasts
    }
  };
}

const Podcast: NextPageWithLayout<ServerSideProps> = (props) => {
  // eslint-disable-next-line react/prop-types
  const { allPodcasts } = props;
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (allPodcasts !== null && allPodcasts !== undefined) {
      dispatch(setPocastList(allPodcasts));
    }
  }, []);

  return (
    <div>
      <div className="flex flex-col w-full">
        <h1 className="self-center text-xl">Latest Podcasts</h1>
        <PodcastList />
      </div>
    </div>
  );
};

Podcast.getLayout = getNavLayout;

export default Podcast;

interface ServerSideProps {
  allPodcasts: PodcastTypeConnection;
}
