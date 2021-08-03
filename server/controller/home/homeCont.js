import * as tweetData from "../../data/tweets.js";
import { getSocketIO } from "../../connection/socket.js";

export async function home(req, res) {
  const username = req.query.username;
  const data = await (username
    ? tweetData.getAllByUsername(username)
    : tweetData.getAll());
  res.status(200).json(data);
}

export async function postTweet(req, res) {
  const { text } = req.body;
  const tweet = await tweetData.create(text, req.userId);
  res.status(201).json(tweet);
  getSocketIO().emit("tweets", tweet);
}
