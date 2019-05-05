import React from "react";
import Tweet from "./Tweet";

const Tweets = props => {
  return props.tweets.map(tweet => {
    return (
      <Tweet key={tweet.id} tweet={tweet} updateTweets={() => {}} {...props} />
    );
  });
};

export default Tweets;
