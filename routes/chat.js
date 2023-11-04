const express = require("express");
const fs = require("fs");

const router = express.Router();
const bodyParser = require("body-parser");

const messages = [];

router.get("/chat", (req, res, next) => {
  const messages = fs.readFileSync("messages.txt");
  res.write(`<p>${messages}</p>`);
  res.write(
    '<form method="POST" action="/chat"><input type="text" name="chat"><button type="submit">Send</button></form>'
  );
});

router.post("/chat", (req, res, next) => {
  const username = localStorage.getItem("userName");
  const chat = req.body.chat;
  console.log(username, chat);
  const message = username + ":" + chat;
  messages.push(message);
  fs.writeFileSync("messages.txt", JSON.stringify(messages));
  res.redirect("/chat");
});

module.exports = router;
