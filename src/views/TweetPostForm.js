import React from "react";
import { postTweet } from "../apis/tweets";

const TweetSearchForm = props => {
  const [status, setStatus] = React.useState("");

  const onChange = event => {
    setStatus(event.target.value);
  };

  const onSubmit = async event => {
    event.preventDefault();
    const response = await postTweet(status);
    if (!!response) {
      props.history.push("/");
    }
  };

  return (
    <form className="tweet-search-form" onSubmit={onSubmit}>
      <div className="form-element">
        <label htmlFor="status">Status</label>
        <input
          type="text"
          id="status"
          placeholder="Type your status"
          onChange={onChange}
          value={status}
          required
        />
        <button className="primary-button">Tweet</button>
      </div>
    </form>
  );
};

export default TweetSearchForm;
