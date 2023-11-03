const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded());

app.use("/product-detail", (req, res, next) => {
  console.log("Inside a middleware");
  res.send(
    '<form method="POST" action="/product"><input type="text" name="text"><input type="number" name="quantity"><button type="submit">Submit</button></form>'
  );
});

app.use("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>This is Home Page</h1>");
  console.log("Inside another middleware");
});

app.listen(3000);
