import React, { useEffect, useState } from 'react';
import ProductCard from '../components/products/ProductCard';
import Filters from '../components/products/Filters';
import '../styles/products/catalogo.css';

export default function Catalog() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/api/products?${new URLSearchParams(filters)}`)
    .then(res => res.json())
      .then(data => setProducts(data));
  }, [filters]);

  return (
    <div className="catalog-container">
      <Filters onFilterChange={setFilters} />
      <div className="products-grid">
        {products.map(p => <ProductCard key={p._id} product={p} />)}
      </div>
    </div>
  );
}