const express = require("express");

const { Product } = require("../models/product.model");
const router = express.Router();

router
  .route("/")
  .get(async (req, res) => {
    try {
      const products = await Product.find({});
      res.json(products);
    } catch (error) {
      res.status(400).json(error);
    }
  })
  .post(async (req, res) => {
    const { name, price } = req.body.product;
    const Watch = new Product({ name, price });

    try {
      if (name === undefined || price === undefined) {
        throw { message: "Name or price is missing!" };
      }
      const product = await Watch.save();
      res.json(product);
    } catch (error) {
      res.status(400).json(error);
    }
  });

router.route("/:id").get((req, res) => {
  const { id } = req.params;
  res.json(`You want the product with this id ${id}?`);
});

module.exports = router;
