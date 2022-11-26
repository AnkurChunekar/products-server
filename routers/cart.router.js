const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  res.json({ cart: [{ id: 1, name: "japani joota", price: 10000 }] });
});

module.exports = router;
