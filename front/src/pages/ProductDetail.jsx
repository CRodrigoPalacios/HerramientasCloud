import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../data/products';
import Header from '@/components/Header';
import '@/styles/products/ProductDetails.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  useEffect(() => {
    // Simulando una carga desde API
    const loadedProduct = getProductById(id);
    setProduct(loadedProduct);
    
    if (loadedProduct) {
      setSelectedColor(loadedProduct.colors[0]);
      setSelectedSize(loadedProduct.sizes[0]);
    }
  }, [id]);
  
  if (!product) {
    return <div className="loading">Loading...</div>;
  }
  
  const handleQuantityChange = (amount) => {
    const newQuantity = quantity + amount;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };
  
  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };
  
  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };
  
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
  
  const formatPrice = (price) => {
    return price.toLocaleString('en-US');
  };
  
  return (
    <div className="product-detail-page">
      <Header />
      
      <div className="breadcrumb">
        <span>Home</span> / <span>Watches</span> / <span>{product.brand}</span> / <span>{product.name}</span>
      </div>
      
      <div className="product-container">
        <div className="product-gallery">
          <div className="main-image">
            <img src={product.images[activeImageIndex]} alt={product.name} />
          </div>
          
          <div className="thumbnail-gallery">
            {product.images.map((image, index) => (
              <button 
                key={index} 
                className={`thumbnail-item ${activeImageIndex === index ? 'active' : ''}`}
                onClick={() => setActiveImageIndex(index)}
              >
                <img src={image} alt={`${product.name} view ${index + 1}`} />
              </button>
            ))}
          </div>
        </div>
        
        <div className="product-details">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-brand">{product.brand}</p>
          
          <div className="product-rating">
            <div className="stars">{renderStars(product.rating)}</div>
            <span className="reviews">{product.rating} ({product.reviews} reviews)</span>
          </div>
          
          <div className="product-price">${formatPrice(product.price)}</div>
          
          <div className="product-description">
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>
          
          <div className="product-options">
            <div className="color-options">
              <h3>Color</h3>
              <div className="color-selector">
                {product.colors.map(color => (
                  <button 
                    key={color} 
                    className={`color-option ${color} ${selectedColor === color ? 'selected' : ''}`}
                    onClick={() => handleColorSelect(color)}
                    aria-label={color}
                  ></button>
                ))}
              </div>
            </div>
            
            <div className="size-options">
              <h3>Size</h3>
              <div className="size-selector">
                {product.sizes.map(size => (
                  <button 
                    key={size} 
                    className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                    onClick={() => handleSizeSelect(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="purchase-options">
            <div className="quantity-selector">
              <button className="quantity-btn" onClick={() => handleQuantityChange(-1)}>-</button>
              <input 
                type="number" 
                value={quantity} 
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                min="1"
              />
              <button className="quantity-btn" onClick={() => handleQuantityChange(1)}>+</button>
            </div>
            
            <button className="add-to-cart-btn">
              <span className="cart-icon">🛒</span>
              Add to Cart
            </button>
            
            <button className="wishlist-btn">♡</button>
            <button className="share-btn">↗</button>
          </div>
          
          <div className="product-features">
            {product.features.freeShipping && (
              <div className="feature">Free shipping</div>
            )}
            {product.features.warranty && (
              <div className="feature">{product.features.warranty}</div>
            )}
            {product.features.returns && (
              <div className="feature">{product.features.returns}</div>
            )}
          </div>
          
          <div className={`stock-status ${product.inStock ? 'in-stock' : 'out-of-stock'}`}>
            {product.inStock 
              ? <span>✓ In stock and ready to ship</span> 
              : <span>Out of stock</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;