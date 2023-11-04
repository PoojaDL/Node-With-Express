const express = require("express");
const bodyParser = require("body-parser");
const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");
const contactRouter = require("./routes/contactUs");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded());

app.use("/admin", adminRouter);
app.use("/", contactRouter);
app.use("/", shopRouter);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(4000);
