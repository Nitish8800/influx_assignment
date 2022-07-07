const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  code: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  unitPrice: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const products = new mongoose.model("item", itemSchema);

module.exports = products;
