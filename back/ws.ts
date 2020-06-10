import express from "express";

const app = express.Router();

app.get("/articles", (req, res) => {
  res.json([
    { id: "a1", name: "Tournevis xxx", price: 0, qty: 1 },
    { id: "a2", name: "Pince", price: 12.33, qty: 10 },
  ]);
});

export const ws = app;
