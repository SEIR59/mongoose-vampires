//importing Dependencies
require("dotenv").config();
const express = require("express");

const VampireRouter = require("./controllers/vampires");
const UserRouter = require("./controllers/users");
const HomeRouter = require("./controllers/home");
const CommentRouter = require("./controllers/comment");
const middleware = require("./utils/middleware");

const app = require("liquid-express-views")(express());

middleware(app);

app.use("/vampires", VampireRouter);
app.use("/comments", CommentRouter);
app.use("/user", UserRouter);
app.use("/", HomeRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`This application is listenening on port: ${PORT}`);
});
