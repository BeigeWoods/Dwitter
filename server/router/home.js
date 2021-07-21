import express from "express";

const router = express.Router();

let tweets = [
  {
    id: "1",
    text: "우와",
    createdAt: Date.now().toString(),
    name: "Bob",
    username: "bob",
    url: "http://localhost:8080/tweets?username=bobbb",
  },
  {
    id: "2",
    text: "wow",
    createdAt: Date.now().toString(),
    name: "PIPI",
    username: "pipi",
    url: "http://localhost:8014/tweets?username=bobbb",
  },
];

router.get("/", (req, res) => {
  const { username } = req.query;
  const data = username
    ? tweets.filter((t) => t.username === username)
    : tweets;
  res.status(200).json(data);
});

router.post("/", (req, res) => {
  const { text, name, username } = req.body;
  const tweet = {
    id: tweets.length + 1,
    text,
    createdAt: Date.now().toString(),
    name,
    username,
  };
  tweets = [tweet, ...tweets];
  res.status(201).json(tweets);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const data = tweets.find((t) => t.id === id);
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).json({ message: `Tweet id ${id} not found` });
  }
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const data = tweets.find((t) => t.id === id);
  if (data) {
    const { text } = req.body;
    text ? (data.text = text) : data;
    res.status(200).json(data);
  } else {
    res.status(404).json({ message: `Tweet id ${id} not found` });
  }
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  //선생님은 filter를 사용하셨다.
  // tweets = tweets.filter((t) => t.id !== id);
  // res.sendStatus(204);
  const data = tweets.find((t) => t.id === id);
  if (data) {
    const index = tweets.findIndex((t) => t.id === id);
    tweets.splice(index, 1);
    console.log(tweets);
    res.status(204).json(tweets);
  } else {
    res.status(404).json({ message: `Tweet id ${id} not found` });
  }
});

export default router;
