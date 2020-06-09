import React from "react";
import { Article } from "../interfaces/Article";

class ArticleFactory {
  articles: Article[] = this.getArticles();
  getArticles() {
    const str = localStorage.getItem("articles");
    if (!str) {
      return [
        { id: "a1", name: "Tournevis", price: 0, qty: 1 },
        { id: "a2", name: "Pince", price: 12.33, qty: 10 },
      ];
    }
    return JSON.parse(str);
  }
  add(article: Article) {
    if (article.id === undefined) {
      article.id = "a" + Math.round(Math.random() * 1e9);
    }
    this.articles.push(article);
    this.save();
  }
  save() {
    localStorage.setItem("articles", JSON.stringify(this.articles));
  }
}

const ArticleContext = React.createContext(new ArticleFactory());

export default ArticleContext;
