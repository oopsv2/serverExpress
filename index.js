const express = require("express");
const fs = require("fs");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();

const loc = path.join(__dirname);
app.use(express.static(loc));
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/data", (req, res) => {
  fs.readFile("data.json", "utf-8", (err, data) => {
    res.send(JSON.parse(data));
  });
});

app.get("*", (req, res) => {
  res.send("Error 404");
});

app.listen(PORT, () => {
  console.log("listening at 3000");
});
