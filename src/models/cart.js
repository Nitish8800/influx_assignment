const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  code: {
    type: Number,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  unitPrice: {
    type: Number,
    required: true,
  },

  totalAmount: {
    type: Number,
  },

  orderId: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Carts = new mongoose.model("cart", cartSchema);

module.exports = Carts;
