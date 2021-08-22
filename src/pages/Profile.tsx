import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { Button, Card, Grid, Header, Segment } from "semantic-ui-react";

import { GET_USER_QUERY } from "../graphql/user/query/user";
import src from "../images/matthew.png";
import RecentCard from "../components/profile/RecentCard";
import AboutUserCard from "../components/profile/AboutUserCard";

interface Props extends RouteComponentProps {}

const Profile: React.FC<Props> = ({ match: { params } }: any) => {
  const { data, loading } = useQuery(GET_USER_QUERY, {
    variables: { userId: params.userId },
  });

  if (loading) {
    return <h1>Loading...</h1>;
  }

  const user = data.getUser;
  return (
    <Grid>
      <Grid.Column width={4}>
        <Card>
          <RecentCard user={user} />
        </Card>
      </Grid.Column>
      <Grid.Column width={10}>
        <AboutUserCard user={user} />
      </Grid.Column>
    </Grid>
  );
};

export default Profile;