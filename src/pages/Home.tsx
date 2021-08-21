import { gql, useQuery } from "@apollo/client";
import { Card } from "semantic-ui-react";
import CardTweet from "../components/home/CardTweet";

const ALL_USERS_QUERY = gql`
  query {
    allTweets {
      id
      body
      user {
        displayName
        lastName
      }
      createdAt
    }
  }
`;

function Home() {
  const { data, error, loading } = useQuery(ALL_USERS_QUERY);

  if (loading) {
    return <h1>Loading.....</h1>;
  }

  if (error) {
    console.log(error);
    return <h1>{error}</h1>;
  }
  return (
    <>
      <Card.Group itemsPerRow={3}>
        {data.allTweets.map((tweet: any) => (
          <CardTweet key={`tweet-${tweet.id}`} tweet={tweet} />
        ))}
      </Card.Group>
    </>
  );
}

export default Home;
