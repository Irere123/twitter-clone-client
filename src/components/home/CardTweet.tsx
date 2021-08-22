import { Feed, Icon, Popup } from "semantic-ui-react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

interface Props {
  tweet: any;
}

function CardTweet({ tweet }: Props) {
  return (
    <Feed>
      <Feed.Event>
        <Feed.Label image="https://react.semantic-ui.com//images/avatar/small/joe.jpg" />
        <Feed.Content>
          <Feed.Summary>
            {tweet.user.displayName} posted on his page
            <Feed.Date>{dayjs(tweet.createdAt).fromNow()}</Feed.Date>
          </Feed.Summary>
          <Feed.Extra text>
            <Link to={`/tweet/${tweet.id}`}>{tweet.body}</Link>
          </Feed.Extra>
          <Feed.Meta>
            <Feed.Like>
              <Icon name="like" />5 Likes
            </Feed.Like>
          </Feed.Meta>
        </Feed.Content>
      </Feed.Event>
    </Feed>
  );
}

export default CardTweet;
