// src/server.js
const express = require('express');
const dotenv = require('dotenv');
const { registerApis, aggregateProducts } = require('./services/apiService');
const { getFromCache, setInCache } = require('./services/cacheService');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Register with e-commerce APIs on startup
registerApis();

app.get('/categories/:category/products', async (req, res) => {
  const { category } = req.params;
  const { n = 10, page = 1, sort, order } = req.query;

  const cacheKey = `${category}-${n}-${page}-${sort}-${order}`;
  let products = getFromCache(cacheKey);

  if (!products) {
    products = await aggregateProducts(category);
    // Apply sorting and filtering here
    setInCache(cacheKey, products);
  }

  const startIndex = (page - 1) * n;
  const endIndex = startIndex + n;
  res.json(products.slice(startIndex, endIndex));
});

app.get('/categories/:category/products/:productId', async (req, res) => {
  const { category, productId } = req.params;
  const cacheKey = `${category}-${productId}`;
  let product = getFromCache(cacheKey);

  if (!product) {
    const products = await aggregateProducts(category);
    product = products.find(p => p.id === productId);
    setInCache(cacheKey, product);
  }

  res.json(product);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
