import { MutationTuple, QueryResult, useMutation, useQuery } from "@apollo/client";
import type {
  PodcastTypeConnection,
  Maybe,
  StaffType,
  PodcastCreateUpdateMutation,
  MutationCreateUpdatePodcastArgs,
  QueryAllPodcastsArgs
} from "@utils/graphql/codegen/graphql";
import { CREATE_UPDATE_PODCAST } from "@utils/graphql/queries/Mutations";
import { ALL_PODCASTS, STAFF_LIST, RECENT_PODCASTS } from "@utils/graphql/queries/Queries";

export const useRecentPodcasts = (): QueryResult<{ allPodcasts: PodcastTypeConnection }> => {
  return useQuery<{ allPodcasts: PodcastTypeConnection }>(RECENT_PODCASTS);
};

export const useAllPodcasts = (
  args?: QueryAllPodcastsArgs
): QueryResult<{ allPodcasts: PodcastTypeConnection }> => {
  return useQuery<{ allPodcasts: PodcastTypeConnection }, QueryAllPodcastsArgs>(ALL_PODCASTS, {
    variables: { ...args }
  });
};

export const useStaffList = (): QueryResult<{ staffList: Maybe<StaffType[]> }> => {
  return useQuery<{ staffList: Maybe<StaffType[]> }>(STAFF_LIST);
};

export const useCreatePodcast = (): MutationTuple<
  { podcast: PodcastCreateUpdateMutation },
  MutationCreateUpdatePodcastArgs
> => {
  return useMutation<{ podcast: PodcastCreateUpdateMutation }, MutationCreateUpdatePodcastArgs>(
    CREATE_UPDATE_PODCAST
  );
};
