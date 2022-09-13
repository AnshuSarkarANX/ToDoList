//node modules
const express = require("express");
const body = require("body-parser");
// local modules
const calender = require(__dirname + "/Local/calender.js");
const app = express();
app.use(body.urlencoded({ extended: true }));
// arrays
const items = ["Check emails"];
var workItems = [];
// for ejs folder
app.set("view engine", "ejs");
// for public folder to access css files
app.use(express.static("public"));
// server port
const port = 2;
// home page
app.get("/", (req, res) => {
  var day = calender.Date();
  res.render("list", { listTitle: day, listItems: items });
});
// for /work page
app.get("/work", (req, res) => {
  res.render("list", { listTitle: "Work", listItems: workItems });
});
app.post("/", (req, res) => {
  // logic for getting work items
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
