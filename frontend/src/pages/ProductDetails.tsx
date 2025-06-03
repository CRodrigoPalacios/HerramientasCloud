import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

interface Product {
  _id: string;
  name: string;
  brand: string;
  price: number;
  material?: string;
  type?: string;
  rating?: number;
  reviews?: number;
  image?: string; // URL completa
}

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const navigate = useNavigate();
  const { dispatch } = useCart();

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error('Error al cargar producto:', err));
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;
    dispatch({ type: 'ADD_ITEM', payload: { ...product, quantity: 1 } });
    navigate('/cart');
  };

  if (!product) return <p className="text-center text-gray-500 mt-10">Cargando producto...</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full max-w-md h-[400px] object-cover rounded-lg shadow"
        />
      </div>

      <div className="flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
          <p className="text-gray-600 mb-2">Marca: <strong>{product.brand}</strong></p>
<p className="product-price">
  ${product.price ? product.price.toFixed(2) : 'Precio no disponible'}
</p>

          {product.material && <p className="text-gray-700 mb-1">Material: {product.material}</p>}
          {product.type && <p className="text-gray-700 mb-1">Tipo: {product.type}</p>}
          {product.rating !== undefined && (
            <p className="text-yellow-600 mb-1">⭐ {product.rating} / 5</p>
          )}
          {product.reviews !== undefined && (
            <p className="text-gray-500 mb-4">{product.reviews} reseñas</p>
          )}
        </div>

        <div className="flex gap-4 mt-6">
          <button
            onClick={handleAddToCart}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded shadow"
          >
            🛒 Comprar
          </button>
          <Link to="/catalog">
            <button className="border border-gray-400 px-6 py-2 rounded hover:bg-gray-100">
              ← Volver al catálogo
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
