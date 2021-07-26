import express from "express";
import { joinValidation, loginValidation } from "../middleware/validator.js";
import { postLogin, postJoin, getMe } from "../controller/auth/loginCont.js";

const router = express.Router();

router.route("/signup").post(joinValidation, postJoin);

router.route("/login").post(loginValidation, postLogin);

router.route("/me").get(getMe);

export default router;
