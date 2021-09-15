import React from "react";
import { Card, Feed } from "semantic-ui-react";
import dayjs from "dayjs";

import image from "../../images/matthew.png";
import { Link } from "react-router-dom";
import { useLatestTweetsQuery, User } from "../../generated/graphql";

interface Props {
  user: User;
}

const RecentCard: React.FC<Props> = ({ user }) => {
  const { data, loading } = useLatestTweetsQuery({
    variables: { userId: user.id },
  });

  if (loading) {
    return null;
  }

  const tweets = data?.lastestTweets!;

  return (
    <>
      <Card.Content>
        <Card.Header>Recent Tweets</Card.Header>
      </Card.Content>
      {tweets.length ? (
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
      ) : (
        <Card.Content>
          <Card.Description>
            {user.displayName} has no latest posts yet
          </Card.Description>
        </Card.Content>
      )}
    </>
  );
};

export default RecentCard;
