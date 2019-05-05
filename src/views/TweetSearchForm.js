import React from "react";
import { searchTweets } from "../apis/tweets";
import Tweets from "./Tweets";

const TweetSearchForm = props => {
  const [keyword, setKeyword] = React.useState("");
  const [tweets, setTweets] = React.useState([]);

  const onChange = event => {
    setKeyword(event.target.value);
  };

  const onSubmit = async event => {
    event.preventDefault();
    const response = await searchTweets(keyword);
    setTweets(response.tweets.statuses);
  };

  return (
    <form className="tweet-search-form" onSubmit={onSubmit}>
      <div className="form-element">
        <label htmlFor="keyword">Keyword</label>
        <input
          type="text"
          id="keyword"
          placeholder="Search by keyword"
          onChange={onChange}
          value={keyword}
          required
        />
        <button className="primary-button">Search</button>
      </div>
      {tweets && tweets.length > 0 && <Tweets tweets={tweets} {...props} />}
    </form>
  );
};

export default TweetSearchForm;
