import express from "express";
import serveIndex from "serve-index";
import cors from "cors";

import { ws } from "./ws";

const app = express();

app.use(cors());

app.use((req, res, next) => {
  console.log("req.url", req.url);
  next();
});

app.use("/ws", ws);

app.use(express.static("../front/build"));
app.use(serveIndex("../front/build"));

app.listen(3500, () => console.log("website started on port 3500"));
