import { gql, useQuery } from "@apollo/react-hooks";
import { Redirect, Route } from "react-router-dom";

const QUERY = gql`
  {
    me {
      id
      username
      createdAt
    }
  }
`;

export const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const { data } = useQuery(QUERY);

  return (
    <Route
      {...rest}
      render={(props) =>
        data.me !== null ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
            }}
          />
        )
      }
    />
  );
};
