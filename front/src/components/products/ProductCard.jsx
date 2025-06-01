import React from 'react';
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img
        src={`http://localhost:5000/uploads/${product.image}`}
        alt={product.name}
        className="product-image"
      />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="brand">{product.brand}</p>
        <p className="price">${product.price}</p>
        <p className="rating">⭐ {product.rating} - {product.reviews} reviews</p>
        <Link to={`/product/${product._id}`}>
          <button className="details-button">View Details</button>
        </Link>
      </div>
    </div>
  );
}
