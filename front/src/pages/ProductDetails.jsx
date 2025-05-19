import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '@/styles/products/ProductDetails.css';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/api/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <p className="loading-text">Cargando...</p>;

  return (
    <div className="product-details-container">
      <div className="product-image-section">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />
      </div>
      <div className="product-info-section">
        <h2 className="product-title">{product.name}</h2>
        <p><strong>Marca:</strong> {product.brand}</p>
        <p className="product-price">${product.price}</p>
        <p><strong>Material:</strong> {product.material}</p>
        <p><strong>Tipo:</strong> {product.type}</p>
        <p><strong>Rating:</strong> ⭐ {product.rating}</p>
        <p><strong>Reseñas:</strong> {product.reviews}</p>
        <Link to="/catalog">
          <button className="back-button">← Volver al Catálogo</button>
        </Link>
      </div>
    </div>
  );
}
