import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import TweetDetail from "./pages/TweetDetail";

function App() {
  return (
    <Router>
      <Switch>
        <Container>
          <Navbar />
          <Route exact component={Home} path="/" />
          <Route exact component={TweetDetail} path="/tweet/:tweetId" />
          <Route exact component={Profile} path="/user/:userId" />
          <Route exact component={Login} path="/login" />
          <Route exact component={Register} path="/register" />
        </Container>
      </Switch>
    </Router>
  );
}

export default App;
