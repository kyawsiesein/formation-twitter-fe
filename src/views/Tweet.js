import React from "react";
import { retweet, unretweet, likeTweet, dislikeTweet } from "../apis/tweets";
import { FaHeart, FaRetweet } from "react-icons/fa";

const Tweet = props => {
  const { tweet } = props;
  const retweetHandler = async id => {
    const response = await retweet(id);
    if (!!response) {
      props.updateTweets();
      props.history.push("/");
    }
  };

  const unRetweetHandler = async id => {
    const response = await unretweet(id);
    if (!!response) {
      props.updateTweets();
      props.history.push("/");
    }
  };

  const likeHandler = async id => {
    const response = await likeTweet(id);
    if (!!response) {
      props.updateTweets();
      props.history.push("/");
    }
  };

  const dislikeHandler = async id => {
    const response = await dislikeTweet(id);
    if (!!response) {
      props.updateTweets();
      props.history.push("/");
    }
  };

  return (
    <div className="card tweet">
      <p className="status">{tweet.text}</p>
      <div>
        {tweet.favorited ? (
          <button
            className="dislike"
            onClick={() => {
              dislikeHandler(tweet.id_str);
            }}
          >
            <FaHeart />
          </button>
        ) : (
          <button
            className="like"
            onClick={() => {
              likeHandler(tweet.id_str);
            }}
          >
            <FaHeart />
          </button>
        )}

        {tweet.retweeted ? (
          <button
            className="unretweet"
            onClick={() => {
              unRetweetHandler(tweet.id_str);
            }}
          >
            <FaRetweet />
          </button>
        ) : (
          <button
            className="retweet"
            onClick={() => {
              retweetHandler(tweet.id_str);
            }}
          >
            <FaRetweet />
          </button>
        )}
      </div>
      <div className="info">
        <p>Posted date - {tweet.created_at}</p>
        <p>Posted by - {tweet.user.screen_name}</p>
      </div>
    </div>
  );
};

export default Tweet;
