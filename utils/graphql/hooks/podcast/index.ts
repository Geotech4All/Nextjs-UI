import { QueryResult, useQuery } from "@apollo/client";
import type { PodcastTypeConnection } from "@utils/graphql/codegen/graphql";
import { ALL_PODCASTS } from "@utils/graphql/queries/Queries";

export const useAllPodcasts = (): QueryResult<{ allPodcasts: PodcastTypeConnection }> => {
  return useQuery<{ allPodcasts: PodcastTypeConnection }>(ALL_PODCASTS);
};
