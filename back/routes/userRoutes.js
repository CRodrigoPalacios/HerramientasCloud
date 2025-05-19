import express from 'express';
import User from '../models/User.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
});

router.put('/:id/role', async (req, res) => {
  const { id } = req.params;
  const { role } = req.body;

  if (!['admin', 'user'].includes(role)) {
    return res.status(400).json({ error: 'Rol inválido' });
  }

  try {
    const user = await User.findByIdAndUpdate(id, { role }, { new: true });

    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });

    res.json({ message: 'Rol actualizado', user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al actualizar el rol' });
  }
});

export default router;