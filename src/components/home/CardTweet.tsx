import { Card } from "semantic-ui-react";
import { Link } from "react-router-dom";

interface Props {
  tweet: any;
}

function CardTweet({ tweet }: Props) {
  return (
    <Card color="teal">
      <Card.Content>
        <Card.Header>{tweet.user.displayName}</Card.Header>
        <Card.Meta>{tweet.createdAt}</Card.Meta>

        <Card.Description>
          <Link to={`/tweet/${tweet.id}`}>{tweet.body}</Link>
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

export default CardTweet;
