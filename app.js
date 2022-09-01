const express = require("express");
const body = require("body-parser");
const calender = require(__dirname + "/calender.js");
const app = express();
app.use(body.urlencoded({ extended: true }));
var items = ["Check emails"];
var workItems = [];
app.set("view engine", "ejs");
app.use(express.static("public"));

const port = 2;
app.get("/", (req, res) => {
  var day = calender.Date();
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
