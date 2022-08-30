const express = require("express");
const body = require("body-parser");
const { application } = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
var items = [];
app.set("view engine", "ejs");
app.use(express.static("public"));

const port = 2;
app.get("/", (req, res) => {
  var today = new Date();
  const options = { weekday: "long" };
  var day = today.toLocaleDateString(undefined, options);
  res.render("list", { KindofDay: day, listItems: items });
});
app.post("/", (req, res) => {
  var work = req.body.work;
  items.push(work);
  res.redirect("/");
});
app.listen(port, () => {
  console.log("Server running on port " + port);
});
