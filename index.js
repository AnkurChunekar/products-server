const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

// internal
const { serverDetails } = require("./constants/constants");
const productsV1 = require("./routers/products.router.v1");
const productsV2 = require("./routers/products.router.v2");

const app = express();
const port = process.env.PORT;

// view engine
app.set("view engine", "ejs");

// middlewares
app.use("/assets", express.static(__dirname + "/public"));
app.use(bodyParser.json());

// home route
app.get("/", (req, res) => {
  res.render("index", {
    name: "Ankur",
    data: serverDetails,
  });
});

// other routes
app.use("/v1/products", productsV1);
app.use("/v2/products", productsV2);

app.listen(port, () => {
  console.log("Server is running");
});
