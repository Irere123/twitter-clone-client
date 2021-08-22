import { gql } from "@apollo/client";

export const ALL_TWEETS_QUERY = gql`
  query {
    allTweets {
      id
      body
      user {
        displayName
        lastName
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
        displayName
        lastName
      }
      createdAt
    }
  }
`;
