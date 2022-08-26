const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.end("Welcome to the Homepage");
});

app.get("/about", (req, res) => {
  res.end("Welcome to the About page!");
});

app.use("/hello/:who", (req, res) => {
  res.end("Hello, " + req.params.who + ".");
});

app.use((req, res) => {
  res.statusCode = 404;
  res.end("404!");
});

app.listen(3000);
