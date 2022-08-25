const express = require("express");
const body = require("body-parser");
const { application } = require("express");
const app = express();
const port = 2;
app.get("/", (req, res) => {
  res.write("<h1>Whassupp!</h1>");
  res.send();
});
app.listen(port, () => {
  console.log("Server running on port " + port);
});
