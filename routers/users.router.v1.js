const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  res.json({ name: "ankur", pincode: 400001, age: 20 });
});

module.exports = router;
