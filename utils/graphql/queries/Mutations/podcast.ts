import { gql } from "@apollo/client";

export const CREATE_UPDATE_PODCAST = gql`
  mutation CreateUpdatePodcast(
    $audio: Upload
    $description: String!
    $guestId: ID
    $hostId: ID!
    $podcastId: ID
    $title: String!
  ) {
    podcast: createUpdatePodcast(
      audio: $audio
      description: $description
      guestId: $guestId
      hostId: $hostId
      podcastId: $podcastId
      title: $title
    ) {
      success
      errors {
        field
        messages
      }
      podcast {
        id
        title
        description
        host {
          id
          email
        }
        guest {
          id
          name
        }
        audio
        dateAdded
      }
    }
  }
`;
