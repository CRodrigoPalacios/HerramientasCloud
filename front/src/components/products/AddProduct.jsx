import React, { useState } from 'react';
import '@/styles/dashboard/admin.css';

export default function AddProduct({ onProductAdded }) {
  const [product, setProduct] = useState({
    name: '',
    brand: '',
    price: '',
    description: '',
    type: '',
    material: ''
  });

  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');

  const handleChange = e => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleFileChange = e => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(product).forEach(([key, value]) => formData.append(key, value));
    if (image) formData.append('image', image);

    const response = await fetch('http://localhost:5000/api/products', {
      method: 'POST',
      body: formData
    });

    const data = await response.json();
    if (response.ok) {
      setMessage('Producto agregado con éxito');
      setProduct({ name: '', brand: '', price: '', description: '', type: '', material: '' });
      setImage(null);
      onProductAdded(); // refrescar lista
    } else {
      setMessage(data.message || 'Error al agregar producto');
    }
  };

  return (
    <div className="admin-form">
      <h2>Agregar Producto</h2>
      <form onSubmit={handleSubmit}>
        {['name', 'brand', 'price', 'description', 'type', 'material'].map(field => (
          <input
            key={field}
            type={field === 'price' ? 'number' : 'text'}
            name={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={product[field]}
            onChange={handleChange}
            required
          />
        ))}
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button type="submit">Agregar Producto</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
