import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  direccion: { type: String, required: true },
  telefono: { type: String, required: true },
  pais: { type: String, required: true },
  ciudad: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'user' }
});

export default mongoose.model('User', UserSchema);