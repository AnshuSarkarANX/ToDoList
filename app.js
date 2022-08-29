const express = require("express");
const body = require("body-parser");
const { application } = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
const port = 2;
app.get("/", (req, res) => {
  var today = new Date();
  const options = { weekday: "long" };
  var day = today.toLocaleDateString(undefined, options);
  res.render("list", { KindofDay: day });
});
app.post("/", (req, res) => {
  var work = req.body.work;
  res.write("<h1>" + work + "</h1>");
  console.log(work);
});
app.listen(port, () => {
  console.log("Server running on port " + port);
});
