import express from "express";
import fs from "fs";

import { Article } from "../front/src/interfaces/Article";

const app = express.Router();

app.use(express.json());

app.use((req, res, next) => {
  setTimeout(next, 0);
});

const filename = "data.db";

if (!fs.existsSync(filename)) {
  fs.writeFileSync(filename, JSON.stringify([], undefined, 2));
}

const str = fs.readFileSync(filename, { encoding: "utf8" });
console.log("str: ", str);
const articles: Article[] = JSON.parse(str);

let lastId = Math.max(0, ...articles.map((a) => +a.id.substring(1)));

app.get("/articles", (req, res) => {
  res.json(articles);
});

app.post("/articles", async (req, res) => {
  const article = req.body;
  console.log("article: ", article);
  lastId++;
  article.id = "a" + lastId;
  articles.push(article);
  await fs.promises.writeFile(
    filename,
    JSON.stringify(articles, undefined, 2)
  );
  res.json(article);
});

app.delete("/bulk/articles", async (req, res) => {
  const ids: string[] = req.body;
  console.log("ids: ", ids);
  ids.forEach((id) => {
    const index = articles.findIndex((a) => a.id === id);
    if (index === -1) {
      return;
    }
    articles.splice(index, 1);
  });

  await fs.promises.writeFile(
    filename,
    JSON.stringify(articles, undefined, 2)
  );
  res.status(204).end();
});

export const ws = app;
