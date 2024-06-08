// src/services/cacheService.js
const NodeCache = require("node-cache");
const cache = new NodeCache({ stdTTL: 600, checkperiod: 120 });

const getFromCache = (key) => cache.get(key);

const setInCache = (key, value) => cache.set(key, value);

module.exports = {
  getFromCache,
  setInCache
};
