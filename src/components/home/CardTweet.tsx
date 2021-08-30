import dayjs from "dayjs";
import React from "react";
import { Feed } from "semantic-ui-react";
import { Link } from "react-router-dom";

import Image from "../../images/christian.jpg";

interface Props {
  tweet: any;
}

const CardTweet: React.FC<Props> = ({ tweet }) => {
  return (
    <Feed>
      <Feed.Event>
        <Feed.Label image={Image} />
        <Feed.Content>
          <Feed.Summary>
            <Link to={`/user/${tweet.user.id}`}>{tweet.user.username}</Link>{" "}
            posted on his page
            <Feed.Date>{dayjs(tweet.createdAt).fromNow()}</Feed.Date>
          </Feed.Summary>
          <Feed.Extra text>
            <a href={`/twt/${tweet.id}`}>{tweet.body}</a>
          </Feed.Extra>
          <Feed.Meta></Feed.Meta>
        </Feed.Content>
      </Feed.Event>
    </Feed>
  );
};

export default CardTweet;
