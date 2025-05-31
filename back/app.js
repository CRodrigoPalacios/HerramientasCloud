import express from 'express';
import cors from 'cors';
import connectDB from './db.js';
import path from 'path';


import productRoutes from './routes/productRoutes.js';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/userRoutes.js';


const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(path.resolve(), 'uploads'))); // servir imágenes estáticas


app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api', authRoutes);

await connectDB();

app.listen(5000, () => {
  console.log('🚀 Servidor corriendo en http://localhost:5000');
});