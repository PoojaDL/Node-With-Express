const express = require("express");
const bodyParser = require("body-parser");
// const adminRouter = require("./routes/admin");
// const shopRouter = require("./routes/shop");
const loginRouter = require("./routes/login");
const chatRouter = require("./routes/chat");
const app = express();

app.use(bodyParser.urlencoded());

// app.use("/admin", adminRouter);
// app.use("/shop", shopRouter);

app.use(loginRouter);

app.use(chatRouter);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>");
});

app.listen(4000);
