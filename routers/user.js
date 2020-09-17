const { Router } = require("express");
const User = require("../models").user;
const authMiddleware = require("../auth/middleware");

const router = new Router();

router.get("/", authMiddleware, async (req, res, next) => {
  try {
    //const users = await User.findAll();
    res.send(`you reached the protected endpoint! Mr ${req.user.name}`);
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { email, password, name } = req.body;
    if (!email || !password || !name) {
      return res.status(400).send("Missing parameters to create a new user");
    }
    const newUser = await User.create({ email, password, name });
    res.send(newUser);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
