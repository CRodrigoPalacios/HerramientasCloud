const BestSellers = () => {
    const products = [
      {
        id: 1,
        name: 'Ocean Diver Pro',
        brand: 'Rolex',
        price: 18900,
        rating: 4.8,
        reviews: 42,
        image: '/ocean-diver.jpg'
      },
      // ... otros productos
    ];
  
    return (
      <section className="best-sellers">
        <h2 className="section-title">Best Sellers</h2>
        <p className="section-subtitle">Our most popular luxury timepieces</p>
        
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              {product.isNew && <span className="new-badge">New Arrival</span>}
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <div className="product-brand">{product.brand}</div>
                <h3 className="product-name">{product.name}</h3>
                <div className="product-price">${product.price.toLocaleString()}</div>
                <div className="product-rating">
                  ★ {product.rating} · {product.reviews} reviews
                </div>
                <button className="view-details-btn">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  export default BestSellers;