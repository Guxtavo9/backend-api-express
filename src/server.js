// const express = require('express')
import express from "express";
import { PORT, HOST } from "./config.js";
const app = express();

app.get("/", (req, res) => {
  res.json({
    "message" : "Hello World!",
  });
});

app.post("/post", (req, res) => {
  res.json({
    "message" : "Hello World post!",
  });
});

app.

app.listen(PORT, () => {
  console.log(`Server running on ${HOST}:${PORT}`);
});
