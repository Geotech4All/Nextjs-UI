import { gql } from "@apollo/client";

export const ALL_PODCASTS = gql`
  query AllPodcasts {
    allPodcasts(first: 5) {
      edges {
        node {
          title
          dateAdded
          podcastId
          host {
            id
            fullName
            email
          }
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`;
