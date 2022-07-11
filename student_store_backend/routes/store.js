const Store = require('../models/store');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const products = await Store.listProducts();
  res.json({ products });
});

module.exports = router;
