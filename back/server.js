const express = require("express");
const serveIndex = require("serve-index");

const app = express();

app.use((req, res, next) => {
  console.log("req.url", req.url);
  next();
});

app.use(express.static("./www"));
app.use(serveIndex("./www"));

app.listen(3000, () => console.log("website started on port 3000"));
