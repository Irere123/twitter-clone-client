import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import dayjs from "dayjs";
import RelativeTime from "dayjs/plugin/relativeTime";

import App from "./App";
import "semantic-ui-css/semantic.min.css";

dayjs.extend(RelativeTime);

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
