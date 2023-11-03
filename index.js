const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("Inside a middleware");
  res.send("<h1>Hello World</h1>");
  next();
});

app.use((req, res, next) => {
  console.log("Inside another middleware");
});

app.listen(3000);
