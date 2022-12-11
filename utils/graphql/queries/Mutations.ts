import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    tokenAuth(email: $email, password: $password) {
      token
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
