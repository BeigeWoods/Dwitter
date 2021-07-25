import express from "express";
import { home, postTweet } from "../controller/homeCont.js";
import {
  readUserTweet,
  updateTweet,
  deleteTweet,
} from "../controller/userCont.js";
import { textValidation } from "../middleware/validator.js";

const router = express.Router();

router.route("/").get(home).post(textValidation, postTweet);

router
  .route("/:id")
  .get(readUserTweet)
  .put(textValidation, updateTweet)
  .delete(deleteTweet);

export default router;
