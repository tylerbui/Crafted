const mongoose = require('mongoose');
require('./category');
const productsSchema = require('./productSchema');

module.exports = mongoose.model('Products', productsSchema);