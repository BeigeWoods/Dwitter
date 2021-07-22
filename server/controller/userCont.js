import { tweets } from "../data/tweets.js";

export function readUserTweet(req, res) {
  const { id } = req.params;
  const data = tweets.find((t) => t.id === id);
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).json({ message: `Tweet id ${id} not found` });
  }
}

export function updateTweet(req, res) {
  const { id } = req.params;
  const data = tweets.find((t) => t.id === id);
  if (data) {
    const { text } = req.body;
    text ? (data.text = text) : data;
    res.status(200).json(data);
  } else {
    res.status(404).json({ message: `Tweet id ${id} not found` });
  }
}

export function deleteTweet(req, res) {
  const id = req.params.id;
  //선생님은 filter를 사용하셨다.
  // tweets = tweets.filter((t) => t.id !== id);
  // res.sendStatus(204);
  const data = tweets.find((t) => t.id === id);
  if (data) {
    const index = tweets.findIndex((t) => t.id === id);
    tweets.splice(index, 1);
    res.status(204).json(tweets);
  } else {
    res.status(404).json({ message: `Tweet id ${id} not found` });
  }
}
