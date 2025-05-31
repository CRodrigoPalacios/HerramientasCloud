import React, { useEffect, useState } from 'react';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [editing, setEditing] = useState(null);
  const [editValues, setEditValues] = useState({});

  const fetchProducts = async () => {
    const res = await fetch('http://localhost:5000/api/products');
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:5000/api/products/${id}`, { method: 'DELETE' });
    if (res.ok) {
      setProducts(products.filter(p => p._id !== id));
    }
  };

  const handleEditClick = (product) => {
    setEditing(product._id);
    setEditValues({
      name: product.name,
      brand: product.brand,
      price: product.price,
      description: product.description,
      type: product.type,
      material: product.material
    });
  };

  const handleEditChange = e => {
    setEditValues({ ...editValues, [e.target.name]: e.target.value });
  };

  const handleEditSave = async (id) => {
    const res = await fetch(`http://localhost:5000/api/products/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editValues)
    });
    if (res.ok) {
      setEditing(null);
      fetchProducts();
    }
  };

  return (
    <div className="product-list">
      <h2>Lista de Productos</h2>
      {products.map(product => (
        <div key={product._id} className="product-card">
          <img src={`http://localhost:5000/uploads/${product.image}`} alt={product.name} width="100" />
          {editing === product._id ? (
            <div>
              {['name', 'brand', 'price', 'description', 'type', 'material'].map(field => (
                <input
                  key={field}
                  name={field}
                  value={editValues[field]}
                  onChange={handleEditChange}
                />
              ))}
              <button onClick={() => handleEditSave(product._id)}>Guardar</button>
              <button onClick={() => setEditing(null)}>Cancelar</button>
            </div>
          ) : (
            <div>
              <p><strong>{product.name}</strong></p>
              <p>Marca: {product.brand}</p>
              <p>Precio: ${product.price}</p>
              <p>{product.description}</p>
              <button onClick={() => handleEditClick(product)}>Editar</button>
              <button onClick={() => handleDelete(product._id)}>Eliminar</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
