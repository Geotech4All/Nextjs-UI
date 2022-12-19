import { QueryResult, useQuery } from "@apollo/client";
import type { PodcastTypeConnection, Maybe, StaffType } from "@utils/graphql/codegen/graphql";
import { ALL_PODCASTS } from "@utils/graphql/queries/Queries";
import { STAFF_LIST } from "@utils/graphql/queries/Queries/podcast";

export const useAllPodcasts = (): QueryResult<{ allPodcasts: PodcastTypeConnection }> => {
  return useQuery<{ allPodcasts: PodcastTypeConnection }>(ALL_PODCASTS);
};

export const useStaffList = (): QueryResult<{ staffList: Maybe<StaffType[]> }> => {
  return useQuery<{ staffList: Maybe<StaffType[]> }>(STAFF_LIST);
};
