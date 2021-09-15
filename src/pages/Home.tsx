import React from "react";
import { Grid, Segment, Header } from "semantic-ui-react";

import CardTweet from "../components/home/CardTweet";
import UserCard from "../components/home/UserCard";
import { useAllTweetsQuery } from "../generated/graphql";

const Home: React.FC = () => {
  const { data, error, loading } = useAllTweetsQuery();

  if (loading) {
    return <h1>Loading.....</h1>;
  }

  if (error) {
    console.log(error);
    return <h1>{error}</h1>;
  }
  return (
    <>
      <Header as="h2" color="teal">
        News Feed
      </Header>

      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <UserCard />
          </Grid.Column>
          <Grid.Column width={10}>
            {data?.allTweets.map((tweet: any) => (
              <Segment>
                <CardTweet tweet={tweet} />
              </Segment>
            ))}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default Home;
