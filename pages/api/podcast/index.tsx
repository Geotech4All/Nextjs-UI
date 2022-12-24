import { QueryAllPodcastsArgs, PodcastTypeConnection } from "@utils/graphql/codegen/graphql";
import { client } from "@utils/graphql/config";
import { ALL_PODCASTS } from "@utils/graphql/queries/Queries";

export async function getLatestPodcasts(
  variables?: QueryAllPodcastsArgs
): Promise<{ allPodcasts: PodcastTypeConnection }> {
  const data = await client.query<{ allPodcasts: PodcastTypeConnection }, QueryAllPodcastsArgs>({
    query: ALL_PODCASTS,
    variables
  });
  return data.data;
}
