import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  rating: Number,
  reviews: Number,
  material: String,
  type: String,
  image: String
});

export default mongoose.model('Product', productSchema);