import express from "express";
import fs from "fs";

import { Article } from "../front/src/interfaces/Article";

const app = express.Router();

app.use(express.json());

app.use((req, res, next) => {
  setTimeout(next, 0);
});

const str = fs.readFileSync("data.db", { encoding: "utf8" });
console.log("str: ", str);
const articles: Article[] = JSON.parse(str);

let lastId = Math.max(0, ...articles.map(a => +a.id.substring(1)));

app.get("/articles", (req, res) => {
  res.json(articles);
});

app.post("/articles", async (req, res) => {
  const article = req.body;
  console.log("article: ", article);
  lastId++;
  article.id = "a" + lastId;
  articles.push(article);
  await fs.promises.writeFile("data.db", JSON.stringify(articles, undefined, 2));
  res.json(article);
});

export const ws = app;
