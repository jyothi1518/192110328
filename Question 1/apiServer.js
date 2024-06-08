// src/services/apiService.js
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');

const API_BASE_URL = process.env.API_BASE_URL;

const registerApis = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, {
      // Registration payload if required
    });
    return response.data;
  } catch (error) {
    console.error("Error registering with e-commerce APIs", error);
  }
};

const fetchProducts = async (category) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`, {
      params: { category }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching products", error);
    return [];
  }
};

const aggregateProducts = async (category) => {
  const products = await fetchProducts(category);
  return products.map(product => ({
    ...product,
    id: uuidv4()  // Generate a unique identifier for each product
  }));
};

module.exports = {
  registerApis,
  aggregateProducts
};
