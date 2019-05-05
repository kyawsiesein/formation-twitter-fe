import axiosInstance from "./instance.js";

const fetchUserTweets = async () => {
  try {
    const response = await axiosInstance.get("/tweets/all");
    return response.data;
  } catch (error) {
    console.error("Something went wrong in searchUsers", error);
  }
};

const searchTweets = async keyword => {
  try {
    const url = `/tweets/search?keyword=${keyword}`;
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    console.error("Something went wrong in searchUsers", error);
  }
};

const retweet = async tweetId => {
  try {
    const url = `/tweets/retweet`;
    const response = await axiosInstance.post(url, { tweetId });
    return response.data;
  } catch (error) {
    console.error("Something went wrong in searchUsers", error);
  }
};

const unretweet = async tweetId => {
  try {
    const url = `/tweets/unretweet`;
    const response = await axiosInstance.post(url, { tweetId });
    return response.data;
  } catch (error) {
    console.error("Something went wrong in searchUsers", error);
  }
};

const likeTweet = async tweetId => {
  try {
    const url = `/tweets/like`;
    const response = await axiosInstance.post(url, { tweetId });
    return response.data;
  } catch (error) {
    console.error("Something went wrong in searchUsers", error);
  }
};

const dislikeTweet = async tweetId => {
  try {
    const url = `/tweets/dislike`;
    const response = await axiosInstance.post(url, { tweetId });
    return response.data;
  } catch (error) {
    console.error("Something went wrong in searchUsers", error);
  }
};

const postTweet = async status => {
  try {
    const url = `/tweets/post`;
    const response = await axiosInstance.post(url, { status });
    return response.data;
  } catch (error) {
    console.error("Something went wrong in searchUsers", error);
  }
};

export {
  fetchUserTweets,
  searchTweets,
  retweet,
  unretweet,
  likeTweet,
  dislikeTweet,
  postTweet
};
