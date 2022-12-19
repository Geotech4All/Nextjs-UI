import { gql } from "@apollo/client";

export const ALL_PODCASTS = gql`
  query AllPodcasts {
    allPodcasts(first: 5) {
      edges {
        node {
          title
          dateAdded
          podcastId
          description
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

export const STAFF_LIST = gql`
  query GetStaffList {
    staffList {
      id
      staffId
      user {
        id
        email
      }
      canCreatePost
    }
  }
`;
