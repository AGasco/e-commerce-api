const mongoose = require('mongoose');

const PriceSchema = mongoose.Schema({
  currency: { type: String, required: true },
  price: { type: Number, required: true }
});

const ProductSchema = mongoose.Schema({
  id: mongoose.ObjectId,
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  prices: { type: [PriceSchema], required: true },
  pictures: { type: [String], required: true }
});

const CategorySchema = mongoose.Schema({
  id: mongoose.ObjectId,
  name: { type: String, required: true },
  products: { type: [ProductSchema], required: true }
});

const price = mongoose.model('prices', PriceSchema);
const product = mongoose.model('products', ProductSchema);
const category = mongoose.model('categories', CategorySchema);

module.exports = {
  price,
  product,
  category
};
