const { Router } = require("express");
const Dog = require("../models").dog;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const dogs = await Dog.findAll();
    res.send(dogs);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
