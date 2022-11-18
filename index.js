const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

// internal
const { database, serverDetails } = require("./constants/constants");

const app = express();
const port = process.env.PORT;

// const myLogger = (req, res, next) => {
//   console.log(bodyParser.json().toString());
//   next();
// }
// app.use(myLogger);

app.set("view engine", "ejs");

app.use("/assets", express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.render("index", {
    name: "Ankur",
    data: serverDetails,
  });
});

app.get("/products", (req, res) => {
  res.json(database.products);
});

app.get("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const result = database.products.find((item) => item.id === productId);
  result
    ? res.json(result)
    : res.status(404).json({ message: "Product not found" });
});

app.listen(port, () => {
  console.log("Server is running");
});
