const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// "/products" -> get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.product.find();
    res.json(products);
  } catch (err) {
    res.json({
      message: err
    });
  }
});

// "/products/gaming" -> get products from specific category
router.get('/:categoryName', async (req, res) => {
  try {
    const products = await Product.category.find({
      name: req.params.categoryName
    });
    res.json(products);
  } catch (err) {
    res.json({
      message: err
    });
  }
});

// "/products/gaming/qjklhbxmndm" -> get specific product
router.get('/:categoryName/:productId', async (req, res) => {
  try {
    const product = await Product.product.findById(req.params.productId);
    res.json(product);
  } catch (err) {
    res.json({
      message: err
    });
  }
});

// post a new product
router.post('/', async (req, res) => {
  const { name, category, description, prices, pictures } = req.body;

  const product = new Product.product({
    name,
    description,
    category,
    prices,
    pictures
  });

  try {
    const savedProduct = await product.save();
    res.json(savedProduct);
  } catch (err) {
    res.json({ message: err });
  }
});

// post a new category
router.post('/categories', async (req, res) => {
  const { name } = req.body;

  // fetching all products of that category
  const products = await Product.product.find({ category: name });

  const category = new Product.category({
    name,
    products
  });

  try {
    const savedCategory = await category.save();
    res.json(savedCategory);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
