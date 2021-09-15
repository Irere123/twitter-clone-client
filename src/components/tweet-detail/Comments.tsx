import React from "react";
import { Feed, Header, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import { useAllCommentsQuery } from "../../generated/graphql";

interface Props {
  tweet: any;
  image: any;
}

const Comments: React.FC<Props> = ({ tweet, image }) => {
  const { data, loading } = useAllCommentsQuery({
    variables: { tweetId: tweet.id },
  });
  if (loading) {
    return null;
  }

  const comments = data?.allComments!;

  return (
    <>
      {comments.length ? (
        <Segment>
          <Header as="h3">Comments</Header>
          <Feed>
            {comments.map((comment: any) => (
              <Feed.Event>
                <Feed.Label image={image} />
                <Feed.Content>
                  <Feed.Summary>
                    <Link to={`/user/${comment.user.id}`}>
                      {comment.user.displayName}
                    </Link>{" "}
                    commented
                    <Feed.Date>{dayjs(comment.createdAt).fromNow()}</Feed.Date>
                  </Feed.Summary>
                  <Feed.Extra text>{comment.body}</Feed.Extra>
                </Feed.Content>
              </Feed.Event>
            ))}
          </Feed>
        </Segment>
      ) : null}
    </>
  );
};

export default Comments;
