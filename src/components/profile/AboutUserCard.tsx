import React from "react";
import { Button, Card, Grid, Header, Segment } from "semantic-ui-react";
import image from "../../images/matthew.png";

interface Props {
  user: any;
}

const AboutUserCard: React.FC<Props> = ({ user }) => {
  return (
    <Segment>
      <Grid>
        <Grid.Column width={5}>
          <Card fluid image={image} />
        </Grid.Column>
        <Grid.Column width="11">
          <Grid.Row>
            <Header as="h1" color="teal">
              {user.firstName}
            </Header>
            <Header as="h4" color="teal">
              @{user.displayName}
            </Header>
          </Grid.Row>
          <Grid.Row>
            <Header as="h5">
              Ours is a life of constant reruns. We're always circling back to
              where we'd we started, then starting all over again. Even if we
              don't run extra laps that day, we surely will come back for more
              of the same another day soon.
            </Header>
          </Grid.Row>
          <Grid.Row>
            <Button color="blue">Followers 129K</Button>
            <Button>Following 100K</Button>
            <Button color="pink">Follow</Button>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default AboutUserCard;
