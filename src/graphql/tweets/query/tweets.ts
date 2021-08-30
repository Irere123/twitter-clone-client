import gql from "graphql-tag";

export const ALL_TWEETS_QUERY = gql`
  query {
    allTweets {
      id
      body
      user {
        id
        displayName
        username
      }
      createdAt
    }
  }
`;

export const GET_TWEET_QUERY = gql`
  query ($tweetId: ID!) {
    getTweet(tweetId: $tweetId) {
      id
      body
      user {
        username
        displayName
      }
      createdAt
    }
  }
`;

export const GET_USER_LASTEST = gql`
  query ($userId: ID!) {
    lastestTweets(userId: $userId) {
      id
      body
      createdAt
    }
  }
`;
