import express from "express";
import { home, postTweet } from "../controller/homeCont.js";
import {
  readUserTweet,
  updateTweet,
  deleteTweet,
} from "../controller/userCont.js";

const router = express.Router();

router.route("/").get(home).post(postTweet);

router.route("/:id").get(readUserTweet).put(updateTweet).delete(deleteTweet);

export default router;
