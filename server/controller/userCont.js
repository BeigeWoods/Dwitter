import * as tweetData from "../data/tweets.js";

export async function readUserTweet(req, res) {
  const { id } = req.params;
  const data = await tweetData.getById(id);
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).json({ message: `Tweet id ${id} not found` });
  }
}

export async function updateTweet(req, res) {
  const { id } = req.params;
  const { text } = req.body;
  const data = await tweetData.getById(id);
  if (data) {
    const tweet = await tweetData.update(data, id, text);
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet id ${id} not found` });
  }
}

export async function deleteTweet(req, res) {
  const id = req.params.id;
  const data = await tweetData.getById(id);
  if (data) {
    await tweetData.remove(id);
    res.sendStatus(204);
  } else {
    res.status(404).json({ message: `Tweet id ${id} not found` });
  }
}
