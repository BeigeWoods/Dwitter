import express from "express";
import { home, postTweet } from "../controller/home/homeCont.js";
import {
  readUserTweet,
  updateTweet,
  deleteTweet,
} from "../controller/home/userCont.js";
import { isAuth } from "../middleware/auth.js";
import { textValidation } from "../middleware/validator.js";

const router = express.Router();

router.route("/").get(isAuth, home).post(isAuth, textValidation, postTweet);

router
  .route("/:id")
  .get(isAuth, readUserTweet)
  .put(isAuth, textValidation, updateTweet)
  .delete(isAuth, deleteTweet);

export default router;
