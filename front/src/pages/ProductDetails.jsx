// ✅ ProductDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import '@/styles/products/ProductDetails.css';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { dispatch } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        ...product,
        quantity: 1
      }
    });
    navigate('/cart');
  };

  if (!product) return <p className="loading-text">Cargando...</p>;

  return (
    <div className="product-details-container">
      <div className="product-image-section">
        <img
          src={`http://localhost:5000/uploads/${product.image}`}
          alt={product.name}
          className="product-image"
        />
      </div>
      <div className="product-info-section">
        <div>
          <h2 className="product-title">{product.name}</h2>
          <p><strong>Marca:</strong> {product.brand}</p>
          <p className="product-price">${product.price.toFixed(2)}</p>
          <p><strong>Material:</strong> {product.material}</p>
          <p><strong>Tipo:</strong> {product.type}</p>
          <p><strong>Rating:</strong> ⭐ {product.rating}</p>
          <p><strong>Reseñas:</strong> {product.reviews}</p>
        </div>
        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
          <button className="buy-button" onClick={handleAddToCart}>🛒 Comprar</button>
          <Link to="/catalog">
            <button className="back-button">← Volver al Catálogo</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
