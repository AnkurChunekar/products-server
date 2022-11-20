const express = require("express");
const router = express.Router();

const { database } = require("../constants/constants");

router
  .route("/")
  .get((req, res) => {
    res.json(database.products);
  })
  .post((req, res) => {
    res.send("You want to add new product han!");
  });

router.route("/:id").get((req, res) => {
  const { id } = req.params;
  res.json(`You want the product with this id ${id}?`);
});

module.exports = router;
