import * as tweetData from "../data/tweets.js";

export async function home(req, res) {
  const username = req.query.username;
  const data = await (username
    ? tweetData.getAllByUsername(username)
    : tweetData.getAll());
  res.status(200).json(data);
}

export async function postTweet(req, res) {
  const { text, name, username } = req.body;
  const tweet = await tweetData.create(text, name, username);
  res.status(201).json(tweet);
}
