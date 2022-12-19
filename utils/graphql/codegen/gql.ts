/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  mutation Login($email: String!, $password: String!) {\n    tokenAuth(email: $email, password: $password) {\n      token\n      refreshToken\n      success\n      errors\n      unarchiving\n      user {\n        id\n        firstName\n        lastName\n        email\n        username\n        isStaff\n        isActive\n        category\n        lastLogin\n        dateJoined\n        pk\n        archived\n        verified\n        secondaryEmail\n      }\n    }\n  }\n": types.LoginDocument,
    "\n  mutation RefreshToken($refreshToken: String!) {\n    refreshToken(refreshToken: $refreshToken) {\n      token\n      payload\n      success\n      errors\n      refreshToken\n    }\n  }\n": types.RefreshTokenDocument,
    "\n  query AllPodcasts {\n    allPodcasts(first: 5) {\n      edges {\n        node {\n          title\n          dateAdded\n          podcastId\n          description\n          host {\n            id\n            fullName\n            email\n          }\n        }\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n": types.AllPodcastsDocument,
    "\n  query GetStaffList {\n    staffList {\n      id\n      staffId\n      user {\n        id\n        email\n      }\n      canCreatePost\n    }\n  }\n": types.GetStaffListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Login($email: String!, $password: String!) {\n    tokenAuth(email: $email, password: $password) {\n      token\n      refreshToken\n      success\n      errors\n      unarchiving\n      user {\n        id\n        firstName\n        lastName\n        email\n        username\n        isStaff\n        isActive\n        category\n        lastLogin\n        dateJoined\n        pk\n        archived\n        verified\n        secondaryEmail\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation Login($email: String!, $password: String!) {\n    tokenAuth(email: $email, password: $password) {\n      token\n      refreshToken\n      success\n      errors\n      unarchiving\n      user {\n        id\n        firstName\n        lastName\n        email\n        username\n        isStaff\n        isActive\n        category\n        lastLogin\n        dateJoined\n        pk\n        archived\n        verified\n        secondaryEmail\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation RefreshToken($refreshToken: String!) {\n    refreshToken(refreshToken: $refreshToken) {\n      token\n      payload\n      success\n      errors\n      refreshToken\n    }\n  }\n"): (typeof documents)["\n  mutation RefreshToken($refreshToken: String!) {\n    refreshToken(refreshToken: $refreshToken) {\n      token\n      payload\n      success\n      errors\n      refreshToken\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AllPodcasts {\n    allPodcasts(first: 5) {\n      edges {\n        node {\n          title\n          dateAdded\n          podcastId\n          description\n          host {\n            id\n            fullName\n            email\n          }\n        }\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"): (typeof documents)["\n  query AllPodcasts {\n    allPodcasts(first: 5) {\n      edges {\n        node {\n          title\n          dateAdded\n          podcastId\n          description\n          host {\n            id\n            fullName\n            email\n          }\n        }\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetStaffList {\n    staffList {\n      id\n      staffId\n      user {\n        id\n        email\n      }\n      canCreatePost\n    }\n  }\n"): (typeof documents)["\n  query GetStaffList {\n    staffList {\n      id\n      staffId\n      user {\n        id\n        email\n      }\n      canCreatePost\n    }\n  }\n"];

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
**/
export function graphql(source: string): unknown;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;