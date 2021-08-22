import ReactDOM from "react-dom";
import dayjs from "dayjs";
import RelativeTime from "dayjs/plugin/relativeTime";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";

import "semantic-ui-css/semantic.min.css";
import App from "./App";

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
});

const client: any = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

dayjs.extend(RelativeTime);

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
