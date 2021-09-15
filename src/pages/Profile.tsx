import React from "react";
import { RouteComponentProps } from "react-router-dom";

import { Card, Grid } from "semantic-ui-react";

import RecentCard from "../components/profile/RecentCard";
import AboutUserCard from "../components/profile/AboutUserCard";
import { useGetUserQuery } from "../generated/graphql";

interface Props extends RouteComponentProps<{ userId: string }> {}

const Profile: React.FC<Props> = ({ match: { params } }) => {
  const { data, loading } = useGetUserQuery({
    variables: { userId: params.userId },
  });

  if (loading) {
    return <h1>Loading...</h1>;
  }

  const user = data?.getUser;
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
