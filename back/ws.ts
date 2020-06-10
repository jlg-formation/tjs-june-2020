import express from "express";

import { Article } from "../front/src/interfaces/Article";

const app = express.Router();

app.use(express.json());

app.use((req, res, next) => {
  setTimeout(next, 0);
});

const articles: Article[] = [
  { id: "a1", name: "Tournevis xxx", price: 0, qty: 1 },
  { id: "a2", name: "Pince", price: 12.33, qty: 10 },
];

let lastId = 2;

app.get("/articles", (req, res) => {
  res.json(articles);
});

app.post("/articles", (req, res) => {
  const article = req.body;
  console.log("article: ", article);
  lastId++;
  article.id = "a" + lastId;
  articles.push(article);
  res.json(article);
});

export const ws = app;
