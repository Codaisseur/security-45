const { Router } = require("express");
const Dog = require("../models").dog;
const authMiddleware = require("../auth/middleware");

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const dogs = await Dog.findAll();
    res.send(dogs);
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const dog = await Dog.findByPk(id);
    if (!dog) {
      return res.status(404).send(`No dog found with id: ${id}`);
    }
    res.send(dog);
  } catch (e) {
    next(e);
  }
});

router.post("/", authMiddleware, async (req, res, next) => {
  try {
    const { breed, name, imageUrl } = req.body;
    // validate parameters
    if (!breed || !name) {
      return res.status(400).send("Missing parameters");
    }
    // Create dog
    const newDog = await Dog.create({
      breed,
      name,
      userId: req.user.id,
      imageUrl,
    });
    // send new dog back
    res.send(newDog);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
