export default class TweetService {
  constructor(http) {
    this.http = http;
  }

  async getTweets(username) {
    let query = username ? `?username=${username}` : "";
    return this.http.fetch(`/${query}`, {
      method: "GET",
    });
  }

  async postTweet(text) {
    return this.http.fetch(`/`, {
      method: "POST",
      body: JSON.stringify({
        text,
        username: "ellie",
        name: "Ellie",
      }),
    });
  }

  async deleteTweet(tweetId) {
    return this.http.fetch(`/${tweetId}`, {
      method: "DELETE",
    });
  }

  async updateTweet(tweetId, text) {
    return this.http.fetch(`/${tweetId}`, {
      method: "PUT",
      body: JSON.stringify({ text }),
    });
  }
}
