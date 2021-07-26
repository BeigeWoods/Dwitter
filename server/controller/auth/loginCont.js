import { compPassword, hashPassword, token, resData } from "../../data/auth.js";

let hashed;
let data;

export async function postJoin(req, res) {
  const { username, password, name, email, url } = req.body;
  hashed = hashPassword(password);
  res.status(201).json(resData(username));
}

export async function postLogin(req, res) {
  const { username, password } = req.body;
  if (!compPassword(password, hashed)) {
    res.status(400).json({ message: "아이디 또는 비밀번호가 맞지 않습니다." });
  }
  data = resData(username);
  res.status(201).json(resData(username));
}

export function getMe(req, res) {
  res.status(200).json(data);
}
