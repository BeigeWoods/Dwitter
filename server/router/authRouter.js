import express from "express";
import { joinValidation, loginValidation } from "../middleware/validator.js";
import { isAuth } from "../middleware/auth.js";
import { login, join, getMe, logout, csrfToken } from "../controller/auth/authCont.js";

const router = express.Router();

router.route("/signup").post(joinValidation, join);

router.route("/login").post(loginValidation, login);

router.route("/logout").post(logout);

router.route("/me").get(isAuth, getMe);

router.get('/csrf-token', csrfToken);

export default router;
