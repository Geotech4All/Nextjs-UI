import { gql } from "@apollo/client";

export const RECENT_PODCASTS = gql`
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

export const ALL_PODCASTS = gql`
  query AllPodcasts($first: Int, $offset: Int) {
    allPodcasts(first: $first, offset: $offset) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        node {
          title
          description
          host {
            id
            fullName
            email
          }
          guest {
            id
            name
            description
            organization {
              id
              name
              description
              logo
              email
              phone
            }
          }
          audio
          dateAdded
          podcastId
        }
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
