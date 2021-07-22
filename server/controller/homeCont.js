import { tweets } from "../data/tweets.js";

export function home(req, res) {
  const { username } = req.query;
  const data = username
    ? tweets.filter((t) => t.username === username)
    : tweets;
  res.status(200).json(data);
}

export function postTweet(req, res) {
  const { text, name, username } = req.body;
  const tweet = {
    id: String(Date.now()),
    text,
    createdAt: Date.now().toString(),
    name,
    username,
  };
  tweets.unshift(tweet);
  res.status(201).json(tweets);
}
