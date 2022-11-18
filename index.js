const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// const myLogger = (req, res, next) => {
//   console.log(bodyParser.json().toString());
//   next();
// }
app.set("view engine", "ejs");

const data = [
  "This is rendered using ejs.",
  "lightening fast",
  "lightweight",
  "can handle json data",
  "styled using static css file",
];

const database = {
  products: [
    {
      id: 1,
      name: "Kaala Chasma",
      price: 100,
    },
    {
      id: 2,
      name: "Laal Chaddi",
      price: 55,
    },
    {
      id: 3,
      name: "Peeli pant",
      price: 101,
    },
  ],
};

// app.use(myLogger);

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.render("index", {
    name: "Ankur",
    data,
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
  console.log("SERVER IS RUNNING");
});
