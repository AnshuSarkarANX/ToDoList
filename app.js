const express = require("express");
const body = require("body-parser");
const { application } = require("express");
const app = express();
const port = 2;
app.get("/", (req, res) => {
  var today = new Date();
  var currentDate = today.getDay();
  if (currentDate === 6 || currentDate === 0) {
    res.write("<h1>It's weekend lets   party!</h1>");
  } else {
    res.write("<h1>Oh,Work Work Work!!</h1>");
  }
});
app.listen(port, () => {
  console.log("Server running on port " + port);
});
