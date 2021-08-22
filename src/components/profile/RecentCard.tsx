import React from "react";
import { Card, Feed } from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import dayjs from "dayjs";

import image from "../../images/matthew.png";
import { GET_USER_LASTEST } from "../../graphql/tweets/query/tweets";
import { Link } from "react-router-dom";

interface Props {
  user: any;
}

const RecentCard: React.FC<Props> = ({ user }) => {
  const { data, loading } = useQuery(GET_USER_LASTEST, {
    variables: { userId: user.id },
  });

  if (loading) {
    return null;
  }

  const tweets = data.lastestTweets;

  return (
    <>
      <Card.Content>
        <Card.Header>Recent Tweets</Card.Header>
      </Card.Content>
      <Card.Content>
        {tweets.map((tweet: any) => (
          <Feed key={tweet.id}>
            <Feed.Event>
              <Feed.Label image={image} />
              <Feed.Content>
                <Feed.Date content={dayjs(tweet.createdAt).fromNow()} />
                <Feed.Summary>
                  <Link to={`/twt/${tweet.id}`}>
                    {tweet.body.slice(0, 100)}
                  </Link>
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>
          </Feed>
        ))}
      </Card.Content>
    </>
  );
};

export default RecentCard;
