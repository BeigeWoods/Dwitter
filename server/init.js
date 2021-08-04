import express from "express";
import homeRouter from "./router/homeRouter.js";
import authRouter from "./router/authRouter.js";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import "express-async-errors";
import { config } from "./config.js";
import { initSocket } from "./connection/socket.js";
import { connectDB } from "./db/database.js";

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan("tiny"));

app.use("/", homeRouter);
app.use("/auth", authRouter);

//로그인하지 않은 이용자
app.use((req, res, next) => {
  res.sendStatus(404);
});
//에러처리
app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

connectDB()
  .then(() => {
    const server = app.listen(config.host.port);
    initSocket(server);
  })
  .catch(console.error);
