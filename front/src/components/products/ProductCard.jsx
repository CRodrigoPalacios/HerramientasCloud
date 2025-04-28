import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      {product.isNew && <span className="product-badge">New Arrival</span>}
      <Link to={`/products/${product.id}`}>
        <div className="product-image-container">
          <img 
            src={product.image} 
            alt={product.name} 
            className="product-image"
          />
        </div>
        <div className="product-info">
          <div className="product-brand">{product.brand}</div>
          <h3 className="product-title">{product.name}</h3>
          <div className="product-price">${product.price.toLocaleString()}</div>
          <div className="product-rating">
            ★ {product.rating} ({product.reviews} reviews)
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;