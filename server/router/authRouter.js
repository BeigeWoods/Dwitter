import express from "express";
import { joinValidation, loginValidation } from "../middleware/validator.js";
import { isAuth } from "../middleware/auth.js";
import { postLogin, postJoin, getMe } from "../controller/auth/authCont.js";

const router = express.Router();

router.route("/signup").post(joinValidation, postJoin);

router.route("/login").post(loginValidation, postLogin);

router.route("/me").get(isAuth, getMe);

export default router;
