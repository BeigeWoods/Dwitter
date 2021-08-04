import * as tweetData from "../../data/tweets.js";

export async function readUserTweet(req, res) {
  const { id } = req.params;
  const data = await tweetData.getById(id);
  if (!data) {
    res.status(404).json({ message: `Tweet id ${id} not found` });
  }
  res.status(200).json(data);
}

export async function updateTweet(req, res) {
  const { id } = req.params;
  const { text } = req.body;
  const data = await tweetData.getById(id);
  if (!data) {
    res.status(404).json({ message: `Tweet id ${id} not found` });
  }
  if (req.userId !== data.userId) {
    res.sendStatus(403);
  }
  const tweet = await tweetData.update(id, text);
  res.status(200).json(tweet);
}

export async function deleteTweet(req, res) {
  const { id } = req.params;
  const data = await tweetData.getById(id);
  if (!data) {
    res.status(404).json({ message: `Tweet id ${id} not found` });
  }
  if (req.userId !== data.userId) {
    res.sendStatus(403);
  }
  await tweetData.remove(id);
  res.sendStatus(204);
}
