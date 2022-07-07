const products = require("../models/item");
const express = require("express");
const router = new express.Router();

// Create a new Products
router.post("/item", async (req, res) => {
  try {
    const item = new products(req.body);

    const createitem = await item.save();
    res.status(201).send(createitem);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Read the Data of registered Products
router.get("/item", async (req, res) => {
  try {
    const ProductsData = await products.find();

    res.send(ProductsData);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get the individual product Data
router.get("/item/:id", async (req, res) => {
  try {
    const ProductData = await products.findById(req.params.id);
    const code = ProductData.code;

    if (!ProductData && code) {
      return res.status(404).send("No Product Data Found");
    }
    res.send(ProductData);
  } catch (err) {
    res.status(400).send(err);
  }
});

// delete the Product Data
router.delete("/item/:id", async (req, res) => {
  try {
    const ProductData = await products.findByIdAndDelete(req.params.id);
    const code = ProductData.code;
    if (!ProductData && code) {
      return res.status(404).send("No Product Data Found");
    }

    res.status(200).json({
      success: true,
      message: "Product deleted succesfully",
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

// update the Product Data
router.patch("/item/:id", async (req, res) => {
  try {
    const ProductData = await products.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    const code = ProductData.code;
    if (!ProductData && code) {
      return res.status(404).send("No Product Data Found");
    }
    res.send(ProductData);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
