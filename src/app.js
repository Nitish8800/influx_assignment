const express = require("express");
const app = express();
const connectDB = require("./db/conn");

const router = require("./routers/item");

connectDB();

app.use(express.json());
app.use(router);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
