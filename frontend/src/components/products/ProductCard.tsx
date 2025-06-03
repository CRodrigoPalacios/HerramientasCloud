import React from 'react';
import { Link } from 'react-router-dom';

interface Product {
  _id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  rating?: number;
  reviews?: number;
  material?: string;
  type?: string;
  image?: string;
}

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col">
      {/* Imagen con tamaño fijo y centrado */}
      <div className="w-full h-64 bg-gray-100 rounded-md overflow-hidden flex items-center justify-center mb-4">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-gray-400 text-sm">Sin imagen</span>
        )}
      </div>

      <h3 className="text-lg font-semibold mb-1 line-clamp-1">{product.name}</h3>
      <p className="text-gray-500 text-sm">{product.brand}</p>
      <p className="text-green-600 font-bold text-lg mt-1">${product.price.toFixed(2)}</p>

      {product.rating && (
        <p className="text-yellow-500 text-sm mt-1">
          ⭐ {product.rating} • {product.reviews} reseñas
        </p>
      )}

      <Link to={`/product/${product._id}`} className="mt-auto">
        <button className="mt-4 w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
          Ver Detalles
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
