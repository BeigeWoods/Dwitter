import express from "express";
import homeRouter from "./router/router.js";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import "express-async-errors";

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan("tiny"));

app.use("/", homeRouter);
//로그인하지 않은 이용자
app.use((req, res, next) => {
  res.sendStatus(404);
});
//에러처리
app.use((req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

app.listen(8080);
