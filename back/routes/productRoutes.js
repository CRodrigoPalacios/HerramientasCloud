import express from 'express';
import Product from '../models/Product.js';
import multer from 'multer';
import path from 'path';

const router = express.Router();

// Configuración de multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
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

// GET todos los productos con filtros mejorados
router.get('/', async (req, res) => {
  try {
    const { brand, minPrice, maxPrice, type, material } = req.query;
    
    // Log para debugging
    console.log('Parámetros de consulta recibidos:', req.query);

    const filtros = {};

    // Filtros de categorías (brand, type, material)
    if (brand && brand.trim() !== '') {
      const brands = brand.split(',').map(b => b.trim()).filter(b => b !== '');
      if (brands.length > 0) {
        filtros.brand = { $in: brands };
      }
    }

    if (type && type.trim() !== '') {
      const types = type.split(',').map(t => t.trim()).filter(t => t !== '');
      if (types.length > 0) {
        filtros.type = { $in: types };
      }
    }

    if (material && material.trim() !== '') {
      const materials = material.split(',').map(m => m.trim()).filter(m => m !== '');
      if (materials.length > 0) {
        filtros.material = { $in: materials };
      }
    }

    // Filtros de precio
    if (minPrice || maxPrice) {
      filtros.price = {};
      if (minPrice && minPrice.trim() !== '' && !isNaN(minPrice)) {
        filtros.price.$gte = Number(minPrice);
      }
      if (maxPrice && maxPrice.trim() !== '' && !isNaN(maxPrice)) {
        filtros.price.$lte = Number(maxPrice);
      }
    }

    console.log('Filtros aplicados:', JSON.stringify(filtros, null, 2));

    const productos = await Product.find(filtros);
    
    console.log(`Productos encontrados: ${productos.length}`);
    
    res.json(productos);
  } catch (error) {
    console.error('Error al obtener productos:', error);
    res.status(500).json({ 
      message: 'Error al obtener productos',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

router.get('/:id', async (req, res) => {
  const id = req.params.id.trim();  // quita espacios y saltos de línea
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(400).json({ message: 'ID inválido' });
  }
  try {
    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ message: 'Producto no encontrado' });
    res.json(product);
  } catch (error) {
    console.error('Error al obtener el producto:', error);
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
      price: Number(price), // Asegurar que el precio sea numérico
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
    // Si se actualiza el precio, asegurar que sea numérico
    if (req.body.price) {
      req.body.price = Number(req.body.price);
    }
    
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Producto no encontrado' });
    res.json(updated);
  } catch (error) {
    console.error('Error al editar producto:', error);
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
    console.error('Error al eliminar producto:', error);
    res.status(500).json({ message: 'Error al eliminar producto' });
  }
});

export default router;
