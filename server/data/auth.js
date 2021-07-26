import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export function hashPassword(password) {
  const hashed = bcrypt.hashSync(password, 10);
  return hashed;
}

export function compPassword(password, hashed) {
  const result = bcrypt.compareSync(password, hashed);
  return result;
}

export function token() {
  const secret = "fSTWh2471^%Vw9dmUyYR$BXL*VJhq&N&";
  const token = jwt.sign(
    {
      id: String(Date.now()),
      isAdmin: false,
    },
    secret,
    { expiresIn: 2 }
  );
  return token;
}

export function resData(username) {
  const data = {
    username,
    token: token(),
  };
  return data;
}
