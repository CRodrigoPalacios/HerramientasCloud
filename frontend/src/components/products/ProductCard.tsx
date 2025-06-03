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
      <div className="w-full h-60 bg-gray-100 rounded-md overflow-hidden mb-4 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full max-w-md h-[400px] object-cover rounded-lg shadow"
        />
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
