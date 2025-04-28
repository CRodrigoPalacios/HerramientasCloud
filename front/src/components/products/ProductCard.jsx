// src/components/ProductCard/ProductCard.jsx
import { Link } from 'react-router-dom';
import '@/styles/products/ProductCard.css';

const ProductCard = ({ product }) => {
  const { id, name, brand, price, rating, reviews, isNewArrival, image } = product;
  
  // Función para formatear el precio
  const formatPrice = (price) => {
    return price.toLocaleString('en-US');
  };
  
  // Función para mostrar estrellas según rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    // Añadir estrellas completas
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`full-${i}`} className="star full-star">★</span>);
    }
    
    // Añadir media estrella si es necesario
    if (hasHalfStar) {
      stars.push(<span key="half" className="star half-star">★</span>);
    }
    
    // Añadir estrellas vacías
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty-star">☆</span>);
    }
    
    return stars;
  };
  
  return (
    <div className="product-card">
      <div className="product-image-container">
        {isNewArrival && <span className="new-arrival-tag">New Arrival</span>}
        <button className="wishlist-btn" title="Add to wishlist">♡</button>
        <img src={image} alt={name} className="product-image" />
      </div>
      
      <div className="product-info">
        <div className="product-header">
          <div>
            <h3 className="product-name">{name}</h3>
            <p className="product-brand">{brand}</p>
          </div>
          <p className="product-price">${formatPrice(price)}</p>
        </div>
        
        <div className="product-rating">
          <div className="stars">{renderStars(rating)}</div>
          <span className="reviews">{rating} · {reviews} reviews</span>
        </div>
        
        <div className="product-actions">
          <Link to={`/product/${id}`} className="view-details-btn">
            View Details
          </Link>
          <button className="add-to-cart-btn" title="Add to cart">
            🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;