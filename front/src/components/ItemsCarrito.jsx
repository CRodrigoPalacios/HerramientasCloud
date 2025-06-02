// components/ItemsCarrito.jsx

import React, { useState } from 'react';
import { Button } from './ui/button';
import '../styles/components/ItemsCarrito.css';

export function ItemsCarrito({ items: initialItems }) {
  const [items, setItems] = useState(initialItems);

  const handleQuantityChange = (id, newQuantity) => {
    const updatedItems = items.map(item =>
      item.id === id
        ? { ...item, quantity: newQuantity >= 1 ? newQuantity : 1 }
        : item
    );
    setItems(updatedItems);
  };

  const handleRemoveItem = (id) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
  };

  return (
    <div className="products-grid">

      {items.map(item => (
        <div key={item.id} className="product-card">
          <img
            src={`http://localhost:5000/uploads/${item.image}`}
            alt={item.name}
            className="product-image"
          />
          <div className="product-info">
            <div className="product-model">{item.name}</div>
            <div className="product-price">${item.price}</div>

            <div className="flex items-center gap-2 mt-4">
              <input
                type="number"
                value={item.quantity}
                onChange={(e) =>
                  handleQuantityChange(item.id, parseInt(e.target.value, 10))
                }
                className="w-16 px-2 py-1 border rounded"
              />
              <Button
                variant="destructive"
                onClick={() => handleRemoveItem(item.id)}
              >
                Eliminar
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

