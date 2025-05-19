import express from 'express';
import Purchase from '../models/Purchase.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { usuarioId, productos, total } = req.body;
    const nuevaCompra = new Purchase({ usuarioId, productos, total });
    await nuevaCompra.save();
    res.status(201).json({ mensaje: 'Compra registrada correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al registrar la compra' });
  }
});

router.get('/:usuarioId', async (req, res) => {
  try {
    const compras = await Purchase.find({ usuarioId: req.params.usuarioId });
    res.json(compras);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener compras' });
  }
});

export default router;