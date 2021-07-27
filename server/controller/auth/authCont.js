import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import "express-async-errors";
import { findByUsername, findById, createUser } from "../../data/auth.js";

const jwtSecretKey = "F2dN7x8HVz%Vw9dmUyYR$BXL*VJhq&N&";
const jwtExpiresInDays = "2d";
const bcryptSaltRounds = 12;

export async function postJoin(req, res) {
  const { username, password, name, email, url } = req.body;
  const found = await findByUsername(username);
  if (found) {
    return res.status(409).json({ message: `${username}은 이미 존재합니다.` });
  }
  const hashed = await bcrypt.hash(password, bcryptSaltRounds);
  const userId = await createUser({
    username,
    password: hashed,
    name,
    email,
    url,
  });
  const token = createJwtToken(userId);
  res.status(201).json({ token, username });
}

export async function postLogin(req, res) {
  const { username, password } = req.body;
  const user = await findByUsername(username);
  if (!user) {
    return res
      .status(401)
      .json({ message: "사용자 또는 비밀번호가 유효하지 않습니다." });
  }
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    return res
      .status(401)
      .json({ message: "사용자 또는 비밀번호가 유효하지 않습니다." });
  }
  const token = createJwtToken(user.id);
  res.status(200).json({ token, username });
}

function createJwtToken(id) {
  return jwt.sign({ id }, jwtSecretKey, { expiresIn: jwtExpiresInDays });
}

export async function getMe(req, res) {
  const user = await findById(req.userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).json({ token: req.token, username: user.username });
}