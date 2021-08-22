import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_TWEET_QUERY } from "../graphql/tweets/query/tweets";

interface Props extends RouteComponentProps {}

const TweetDetail: React.FC<Props> = ({ match: { params } }: any) => {
  const { data, loading } = useQuery(GET_TWEET_QUERY, {
    variables: { tweetId: params.tweetId },
  });

  if (loading) {
    return <h1>Loading....</h1>;
  }

  const tweet = data.getTweet;

  return (
    <div>
      <h1>{tweet.body}</h1>
    </div>
  );
};

export default TweetDetail;
