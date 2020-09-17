const express = require("express");
const app = express();
const PORT = 4000;
const userRouter = require("./routers/user");
const dogRouter = require("./routers/dog");
const authRouter = require("./routers/auth");

// Middlewares
app.use(express.json()); // body-parser

// Routers
app.use("/users", userRouter);
app.use("/dogs", dogRouter);
app.use("/auth", authRouter);

// start server
app.listen(PORT, () => console.log("listening and running!"));
