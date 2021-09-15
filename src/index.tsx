import ReactDOM from "react-dom";
import dayjs from "dayjs";
import RelativeTime from "dayjs/plugin/relativeTime";
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

import "semantic-ui-css/semantic.min.css";
import App from "./App";

const httpLink = new HttpLink({
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
