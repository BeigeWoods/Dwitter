let tweets = [
  {
    id: "1",
    text: "우와",
    createdAt: Date.now().toString(),
    name: "Bob",
    username: "bob",
    url: "",
  },
  {
    id: "2",
    text: "wow",
    createdAt: Date.now().toString(),
    name: "PIPI",
    username: "pipi",
    url: "",
  },
];

export async function getAll() {
  return tweets;
}

export async function getAllByUsername(username) {
  return tweets.filter((tweet) => tweet.username === username);
}

export async function getById(id) {
  return tweets.find((tweet) => tweet.id === id);
}

export async function create(text, name, username) {
  const tweet = {
    id: Date.now().toString(),
    text,
    createdAt: new Date(),
    name,
    username,
  };
  tweets = [tweet, ...tweets];
  return tweet;
}

export async function update(tweet, id, text) {
  if (tweet) {
    tweet.text = text;
  }
  return tweet;
}

export async function remove(id) {
  // const index = tweets.findIndex((t) => t.id === id);
  // tweets.splice(index, 1);
  tweets = tweets.filter((tweet) => tweet.id !== id);
}
