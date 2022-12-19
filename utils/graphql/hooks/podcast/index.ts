import { MutationTuple, QueryResult, useMutation, useQuery } from "@apollo/client";
import type {
  PodcastTypeConnection,
  Maybe,
  StaffType,
  PodcastCreateUpdateMutation,
  MutationCreateUpdatePodcastArgs
} from "@utils/graphql/codegen/graphql";
import { CREATE_UPDATE_PODCAST } from "@utils/graphql/queries/Mutations";
import { ALL_PODCASTS, STAFF_LIST } from "@utils/graphql/queries/Queries";

export const useAllPodcasts = (): QueryResult<{ allPodcasts: PodcastTypeConnection }> => {
  return useQuery<{ allPodcasts: PodcastTypeConnection }>(ALL_PODCASTS);
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
