import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import ProductCard from '@/components/products/ProductCard';
import { products } from '../data/products';
import '@/styles/products/ProductListing.css';

const ProductListing = () => {
  const [productList, setProductList] = useState([]);
  
  useEffect(() => {
    setProductList(products);
  }, []);
  
  return (
    <div className="product-listing-page">
      <Header />
      
      <main className="page-content">
        <div className="product-grid">
          {productList.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="view-all-container">
          <button className="view-all-btn">View All Watches</button>
        </div>
      </main>
    </div>
  );
};

export default ProductListing;