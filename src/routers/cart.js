const express = require("express");
const Cart = require("../models/cart");
const products = require("../models/item");
const router = express.Router();

// create cart Data
router.post("/cart", async (req, res) => {
  try {
    const Data = await products.findOne({ code: req.body.code }).lean().exec();
    console.log(Data);
    if (!Data) {
      return res.status(400).send({ message: "Data Not found" });
    }
    const mainPrice = Data.unitPrice;

    const qty = req.body.qty;
    const totalAmount = mainPrice * qty;

    const allData = {
      orderId: req.body.orderId,
      code: req.body.code,
      unitPrice: mainPrice,
      qty: qty,
      totalAmount: totalAmount,
    };

    const cartData = await Cart.create(allData);
    return res.status(201).send(cartData);
  } catch (err) {
    return res.status(501).send({ Message: err.message });
  }
});

// get cart Data
router.get("/cart", async (req, res) => {
  try {
    const productCart = await Cart.find().exec();

    return res.status(201).send(productCart);
  } catch (err) {
    return res.status(501).send({ Message: err.message });
  }
});

// Get the individual product Data
router.get("/cart/:id", async (req, res) => {
  try {
    const CartData = await Cart.findById(req.params.id);

    if (!CartData) {
      return res.status(404).send("No Product Data Found");
    }
    res.send(CartData);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
