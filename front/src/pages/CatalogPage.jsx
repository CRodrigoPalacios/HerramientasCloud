import '@/styles/pages/Catalog.css';

export default function CatalogPage() {
  return (
    <div className="catalog-page container">
      <div className="catalog-header">
        <h1 className="catalog-title">Our Collection</h1>
        <div className="catalog-controls">
          <div className="filter-buttons">
            <button className="filter-btn active">All</button>
            <button className="filter-btn">Luxury</button>
            <button className="filter-btn">Sport</button>
          </div>
        </div>
      </div>
      
      <div className="products-grid">
        {/* Mapear productos aquí */}
        <div className="product-card">
          <img src="/watch.jpg" alt="Product" className="product-image" />
          <div className="product-info">
            <div className="product-brand">Rolex</div>
            <h3 className="product-model">Submariner</h3>
            <div className="product-price">$12,500</div>
          </div>
        </div>
      </div>
    </div>
  );
}