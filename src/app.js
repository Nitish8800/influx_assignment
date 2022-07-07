const express = require("express");
const app = express();
const connectDB = require("./db/conn");

const items = require("./routers/item");
const carts = require("./routers/cart");

connectDB();

app.use(express.json());
app.use("/", items);
app.use("/product", carts);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
