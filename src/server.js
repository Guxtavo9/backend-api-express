// const express = require('express')
import express from "express";
import cors from "cors";
import { PORT, HOST } from "./config.js";
import userRouter from "./routers/userRouter.js";
import productRouter from "./routers/productRouter.js";
import logger from "./middlewares/logger.js";

const app = express();

app.use(express.json());
app.use(cors({
  "origin": ["http://localhost:3000", 'http://localhost:8081/'],
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
}));
app.use(logger);

app.use("/user", userRouter);
app.use("/product", productRouter);

app.post("/post", (req, res) => {
  res.json({
    message: "Hello World post!",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on ${HOST}:${PORT}`);
});
