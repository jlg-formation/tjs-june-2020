import React from "react";
import { Article } from "../interfaces/Article";

const articles: Article[] = [
  { id: 'a1', name: "Tournevis", price: 0, qty: 1 },
  { id: 'a2', name: "Pince", price: 12.33, qty: 10 },
];

const ArticleContext = React.createContext(articles);

export default ArticleContext;
