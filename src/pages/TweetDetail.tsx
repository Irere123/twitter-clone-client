import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { GET_TWEET_QUERY } from "../graphql/tweets/query/tweets";
import TweetCard from "../components/tweet-detail/TweetCard";

interface Props extends RouteComponentProps<{ tweetId: string }> {}

const TweetDetail: React.FC<Props> = ({ match: { params } }) => {
  const { data, loading } = useQuery(GET_TWEET_QUERY, {
    variables: { tweetId: params.tweetId },
  });

  if (loading) {
    return <h1>Loading....</h1>;
  }

  const tweet = data.getTweet;
  console.log(data);

  return <TweetCard tweet={tweet} />;
};

export default TweetDetail;
