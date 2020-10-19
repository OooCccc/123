const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.end("1");
});
app.listen(10086, () => {
  console.log("10086 prots is running!");
});
