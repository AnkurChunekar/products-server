const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const { database } = require("../constants/constants");

router.post("/", (req, res) => {
  const { username, password } = req.body;
  const user = database.users.find(
    (item) => item.username === username && item.password === password
  );
  if (user) {
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.json({ message: "Successfully logged in", token });
  } else {
    res.status(401).json({ message: "Incorrect username or password!" });
  }
});

module.exports = router;
