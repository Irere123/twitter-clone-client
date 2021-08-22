import React from "react";
import { Grid, Card, Segment, Header, Feed } from "semantic-ui-react";
import dayjs from "dayjs";

import Image from "../../images/matthew.png";
import InputComment from "./InputComment";
import Comments from "./Comments";

interface Props {
  tweet: any;
}

const TweetCard: React.FC<Props> = ({ tweet }) => {
  return (
    <Grid>
      <Grid.Column width="4">
        <Header as="h3">Posted by</Header>
        <Card
          image={Image}
          header={tweet.user.firstName}
          meta={`@${tweet.user.displayName}`}
        />
      </Grid.Column>
      <Grid.Column width="10">
        <Segment>
          <Feed>
            <Feed.Event>
              <Feed.Content>
                <Feed.Summary>
                  posted this
                  <Feed.Date>{dayjs(tweet.createdAt).fromNow()}</Feed.Date>
                </Feed.Summary>
                <Feed.Extra text>{tweet.body}</Feed.Extra>
                <Feed.Meta></Feed.Meta>
              </Feed.Content>
            </Feed.Event>
          </Feed>
        </Segment>
        <InputComment />
        <Comments tweet={tweet} image={Image} />
      </Grid.Column>
    </Grid>
  );
};

export default TweetCard;
