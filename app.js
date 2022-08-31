const express = require("express");
const body = require("body-parser");
const { application } = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
var items = ["Check emails"];
var workItems = [];
app.set("view engine", "ejs");
app.use(express.static("public"));

const port = 2;
app.get("/", (req, res) => {
  var today = new Date();
  const options = { weekday: "long", day: "numeric", month: "long" };
  var day = today.toLocaleDateString(undefined, options);
  res.render("list", { listTitle: day, listItems: items });
});
app.get("/work", (req, res) => {
  res.render("list", { listTitle: "Work", listItems: workItems });
});
app.post("/", (req, res) => {
  if (req.body.list === "Work") {
    var workItem = req.body.work;
    workItems.push(workItem);
    res.redirect("/work");
  } else {
    var work = req.body.work;
    items.push(work);
    res.redirect("/");
  }
});
app.listen(port, () => {
  console.log("Server running on port " + port);
});
