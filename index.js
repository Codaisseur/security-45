const express = require("express");
const app = express();
const PORT = 4000;
const userRouter = require("./routers/user");
const dogRouter = require("./routers/dog");

app.use("/users", userRouter);
app.use("/dogs", dogRouter);

app.listen(PORT, () => console.log("listening and running!"));
