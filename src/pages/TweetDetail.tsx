import React from "react";
import { RouteComponentProps } from "react-router-dom";
import TweetCard from "../components/tweet-detail/TweetCard";
import { useGetTweetQuery } from "../generated/graphql";

interface Props extends RouteComponentProps<{ tweetId: string }> {}

const TweetDetail: React.FC<Props> = ({ match: { params } }) => {
  const { data, loading } = useGetTweetQuery({
    variables: { tweetId: params.tweetId },
  });

  if (loading) {
    return <h1>Loading....</h1>;
  }

  const tweet = data?.getTweet!;

  return <TweetCard tweet={tweet} />;
};

export default TweetDetail;
