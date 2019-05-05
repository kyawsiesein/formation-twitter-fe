import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Tweets from "./views/Tweets";
import User from "./views/User";
import TweetSearchForm from "./views/TweetSearchForm";
import TweetPostForm from "./views/TweetPostForm";
import Header from "./components/Header";
import "./styles/app.scss";

const App = props => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/" component={User} exact {...props} />
          <Route
            exact
            path="/tweets/post"
            component={TweetPostForm}
            {...props}
          />
          <Route
            exact
            path="/tweets/search"
            component={TweetSearchForm}
            {...props}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
