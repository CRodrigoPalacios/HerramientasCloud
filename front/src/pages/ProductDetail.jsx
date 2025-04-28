import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Star } from 'lucide-react';

const ProductDetail = () => {
  const [selectedSize, setSelectedSize] = useState('');
  const { id } = useParams();

  // Datos de ejemplo
  const product = {
    id: 1,
    name: 'Chronograph Master',
    brand: 'Audemars',
    price: 12500,
    rating: 4.9,
    reviews: 28,
    description: 'Luxury chronograph watch with precision movement',
    sizes: ['38mm', '42mm', '44mm'],
    image: '/chronograph-master.jpg'
  };

  return (
    <div className="product-detail-container">
      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <Link to="/">Home</Link> &gt; 
        <Link to="/catalog">Catalog</Link> &gt; 
        <Link to="/catalog/audemars">Audemars</Link> &gt; 
        <span>Chronograph Master</span>
      </nav>

      <div className="product-main">
        {/* Galería */}
        <div className="product-gallery">
          <img src={product.image} alt={product.name} />
        </div>

        {/* Información */}
        <div className="product-info">
          <h1 className="product-title">{product.name}</h1>
          <div className="product-brand">{product.brand}</div>
          
          <div className="product-rating">
            {[...Array(5)].map((_, i) => (
              <Star key={i} fill={i < Math.floor(product.rating) ? '#FFD700' : 'none'} />
            ))}
            <span>({product.reviews} reviews)</span>
          </div>

          <div className="product-price">${product.price.toLocaleString()}</div>

          <div className="product-description">
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>

          <div className="size-selector">
            <h3>Size</h3>
            <div className="size-options">
              {product.sizes.map(size => (
                <button
                  key={size}
                  className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button className="add-to-cart-btn">
            Add to Cart - ${product.price.toLocaleString()}
          </button>

          <div className="product-meta">
            <div className="meta-item">
              <span className="check-icon">✔</span>
              Free shipping
            </div>
            <div className="meta-item">
              <span className="check-icon">✔</span>
              In stock and ready to ship
            </div>
            <div className="meta-item">
              <span className="check-icon">✔</span>
              2-year warranty
            </div>
            <div className="meta-item">
              <span className="check-icon">✔</span>
              30-day returns
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;