import mongoose from 'mongoose';
import connectDB from './db.js';
import Product from './models/Product.js';

const sampleProducts = [
  {
    name: 'Rolex Submariner',
    brand: 'Rolex',
    price: 12500,
    rating: 4.9,
    reviews: 420,
    material: 'Oro Blanco',
    type: 'Lujo',
    image: 'https://example.com/rolex.jpg'
  },
  {
    name: 'Omega Speedmaster',
    brand: 'Omega',
    price: 6000,
    rating: 4.7,
    reviews: 310,
    material: 'Acero Inoxidable',
    type: 'Deportivo',
    image: 'https://example.com/omega.jpg'
  },
  {
    name: 'Casio F91W',
    brand: 'Casio',
    price: 20,
    rating: 4.2,
    reviews: 1000,
    material: 'Plástico',
    type: 'Casual',
    image: 'https://example.com/casio.jpg'
  }
];

const seedDB = async () => {
  await connectDB();
  await Product.deleteMany({});
  await Product.insertMany(sampleProducts);
  console.log('✅ Base de datos precargada');
  mongoose.disconnect();
};

seedDB();