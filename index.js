const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// const myLogger = (req, res, next) => {
//   console.log(bodyParser.json().toString());
//   next();
// }

const database = {
  products: [
    {
      id: 1,
      name: "Kaala Chasma",
      price: 100
    },
    {
      id: 2,
      name: "Laal Chaddi",
      price: 55
    },
    {
      id: 3,
      name: "Peeli pant",
      price: 101
    },
  ]
}

// app.use(myLogger);

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});


app.get("/products", (req, res) => {
  res.json(database.products);
})

app.get("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const result = database.products.find(item => item.id === productId);
  result ?
    res.json(result) : res.status(404).json({ message: "Product not found" });
})

app.post("/products", (req, res) => {
  console.log(req.body);
  res.status(201).json({ echo: req.body.product });
})

app.listen(port, () => {
  console.log("SERVER IS RUNNING");
});
