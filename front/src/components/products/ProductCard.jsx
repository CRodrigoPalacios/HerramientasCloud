import React from 'react';
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.brand}</p>
      <p>${product.price}</p>
      <p>⭐ {product.rating} - {product.reviews} reviews</p>
      <Link to={`/product/${product._id}`}>
  <button>View Details</button>
</Link>

    </div>
  );
}
