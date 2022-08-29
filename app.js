const express = require("express");
const body = require("body-parser");
const { application } = require("express");
const app = express();
app.set("view engine", "ejs");
const port = 2;
app.get("/", (req, res) => {
  var today = new Date();
  var currentDate = today.getDay();
  var day = "";
  res.render("list", { KindofDay: day });
});
app.listen(port, () => {
  console.log("Server running on port " + port);
});
