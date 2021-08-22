import gql from "graphql-tag";

export const GET_USER_QUERY = gql`
  query ($userId: ID!) {
    getUser(userId: $userId) {
      id
      firstName
      lastName
      displayName
      createdAt
    }
  }
`;
