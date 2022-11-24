const express = require("express");
const router = express.Router();

const { database } = require("../constants/constants");

router.post("/", (req, res) => {
  const { username, password } = req.body;
  const user = database.users.find(
    (item) => item.username === username && item.password === password
  );
  if (user) {
    res.json({ message: "Successfully logged in", token: "abcdefghi" });
  } else {
    res.status(401).json({ message: "Incorrect username or password!" });
  }
});

module.exports = router;
