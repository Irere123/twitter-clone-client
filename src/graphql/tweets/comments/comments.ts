import gql from "graphql-tag";

export const ALL_COMMENTS_QUERY = gql`
  query ($tweetId: ID!) {
    allComments(tweetId: $tweetId) {
      id
      body
      user {
        id
        username
        displayName
      }
      createdAt
    }
  }
`;
