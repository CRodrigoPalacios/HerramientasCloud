import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <p>Cargando...</p>;

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p><strong>Marca:</strong> {product.brand}</p>
      <p><strong>Precio:</strong> ${product.price}</p>
      <p><strong>Material:</strong> {product.material}</p>
      <p><strong>Tipo:</strong> {product.type}</p>
      <p><strong>Rating:</strong> ⭐ {product.rating}</p>
      <p><strong>Reseñas:</strong> {product.reviews}</p>
    </div>
  );
}
