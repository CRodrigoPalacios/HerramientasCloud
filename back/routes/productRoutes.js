import express from 'express';
import Product from '../models/Product.js';
import multer from 'multer';
import path from 'path';

const router = express.Router();

// Configuración de multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // carpeta donde se guardan las imágenes
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, uniqueSuffix + ext);
  }
});
const upload = multer({ storage });

// GET todos los productos
router.get('/', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error('Error al obtener productos:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
});

// GET producto por ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Producto no encontrado' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el producto' });
  }
});

// POST agregar producto
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { name, brand, price, description, type, material } = req.body;
    const image = req.file ? req.file.filename : '';

    const newProduct = new Product({
      name,
      brand,
      price,
      description,
      type,
      material,
      image
    });

    await newProduct.save();
    res.status(201).json({ message: 'Producto agregado con éxito', product: newProduct });
  } catch (error) {
    console.error('Error al agregar producto:', error);
    res.status(500).json({ message: 'Error al agregar producto' });
  }
});

// PUT editar producto
router.put('/:id', async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Producto no encontrado' });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: 'Error al editar producto' });
  }
});

// DELETE eliminar producto
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Producto no encontrado' });
    res.json({ message: 'Producto eliminado' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar producto' });
  }
});


export default router;
