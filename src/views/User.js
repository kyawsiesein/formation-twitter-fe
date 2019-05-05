import React from "react";
import { fetchUserTweets } from "../apis/tweets";
import Tweet from "./Tweet";

const User = props => {
  const [tweets, setTweets] = React.useState([]);

  const setup = async () => {
    const response = await fetchUserTweets();
    setTweets(response.tweets);
  };

  const updateBasedTweets = () => {
    setup();
  };

  React.useEffect(() => {
    setup();
  }, []);

  return tweets.map(tweet => {
    return (
      <Tweet
        key={tweet.id}
        tweet={tweet}
        updateTweets={updateBasedTweets}
        {...props}
      />
    );
  });
};

export default User;
