const express = require("express");

const router = express.Router();

router.get("/product-detail", (req, res, next) => {
  console.log("Inside a middleware");
  res.send(
    '<form method="POST" action="/admin/product-detail"><input type="text" name="text"><input type="number" name="quantity"><button type="submit">Submit</button></form>'
  );
});

router.post("/product-detail", (req, res, next) => {
  console.log(req.body);
  res.redirect("/shop/");
});

module.exports = router;
