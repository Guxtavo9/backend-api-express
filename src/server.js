// const express = require('express')
import express from "express";
import { PORT, HOST } from "./config.js";
import userRouter from "./routers/userRouter.js";
import productRouter from "./routers/productRouter.js";
import logger from "./middlewares/logger.js";

const app = express();

app.use(express.json()) 
app.use(logger)

app.use('/user', userRouter);
app.use('/product', productRouter);

app.post("/post", (req, res) => {
  res.json({
    "message" : "Hello World post!",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on ${HOST}:${PORT}`);
});
