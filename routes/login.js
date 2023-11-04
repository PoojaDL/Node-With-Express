const express = require("express");
const { LocalStorage } = require("node-localstorage");
global.localStorage = new LocalStorage("./scratch");

const router = express.Router();
const bodyParser = require("body-parser");

router.get("/login", (req, res, next) => {
  res.send(
    '<form method="POST" action="/login"><input type="text" name="username"><button type="submit">Submit</button></form>'
  );
});

router.post("/login", (req, res, next) => {
  console.log(req.body);
  const user = req.body.username;
  localStorage.setItem("userName", user);
  res.redirect("/chat");
});

module.exports = router;
