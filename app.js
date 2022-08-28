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
  switch (currentDate) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      console.log("Error current day is" + currentDate);
  }
  res.render("list", { KindofDay: day });
});
app.listen(port, () => {
  console.log("Server running on port " + port);
});
