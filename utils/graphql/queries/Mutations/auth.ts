import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    tokenAuth(email: $email, password: $password) {
      token
      refreshToken
      success
      errors
      unarchiving
      user {
        id
        firstName
        lastName
        email
        username
        isStaff
        isActive
        category
        lastLogin
        dateJoined
        pk
        archived
        verified
        secondaryEmail
      }
    }
  }
`;

export const REFRESH_TOKEN = gql`
  mutation RefreshToken($refreshToken: String!) {
    refreshToken(refreshToken: $refreshToken) {
      token
      payload
      success
      errors
      refreshToken
    }
  }
`;
