import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';

const router = express.Router();

router.post('/register', async (req, res) => {
  const {
    nombre, apellido, direccion, telefono, pais,
    ciudad, email, password, role
  } = req.body;

  try {
    const exist = await User.findOne({ email });
    if (exist) return res.status(400).json({ message: 'El correo ya está registrado' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      nombre,
      apellido,
      direccion,
      telefono,
      pais,
      ciudad,
      email,
      password: hashedPassword,
      role: role || 'user'
    });

    await newUser.save();
    res.status(201).json({ message: 'Usuario registrado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar usuario' });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return res.status(400).json({ message: 'Contraseña incorrecta' });

    const { password: _, ...userData } = user.toObject();
    res.json(userData);
  } catch (error) {
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
});

export default router;