import React, { useState } from 'react';
import '@/styles/auth.css';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    direccion: '',
    telefono: '',
    pais: '',
    ciudad: '',
    email: '',
    password: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, role: 'user' })
    });
    const data = await response.json();
    if (response.ok) {
      alert('Registro exitoso');
      setFormData({});
    } else {
      alert(data.message || 'Error al registrar');
    }
  };

  return (
    <div className="auth-container">
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        {["nombre", "apellido", "direccion", "telefono", "pais", "ciudad", "email", "password"].map(field => (
          <input
            key={field}
            name={field}
            type={field === "password" ? "password" : "text"}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={formData[field] || ''}
            onChange={handleChange}
            required
          />
        ))}
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}
