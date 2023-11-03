const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("<h1>This is Home Page</h1>");
  console.log("Inside another middleware");
});

module.exports = router;
