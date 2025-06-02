import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/products/ProductCard';
import Filters from '../components/products/Filters';
import '../styles/pages/Catalog.css';

export default function CatalogPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('Featured');

  const fetchProducts = (params) => {
    fetch(`http://localhost:5000/api/products?${params}`)
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data); // initialize filtered list
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  };

  useEffect(() => {
    fetchProducts(searchParams.toString());
  }, [searchParams]);

  useEffect(() => {
    applyFilters();
  }, [products, searchTerm, sortOption]);

  const handleFilterChange = (filters) => {
    const newParams = new URLSearchParams();

    // Corregido: usar los nombres correctos que envía el componente Filters
    if (filters.brand && filters.brand.length > 0) {
      newParams.set('brand', filters.brand);
    }
    if (filters.type && filters.type.length > 0) {
      newParams.set('type', filters.type);
    }
    if (filters.material && filters.material.length > 0) {
      newParams.set('material', filters.material);
    }
    if (filters.minPrice && filters.minPrice !== '') {
      newParams.set('minPrice', filters.minPrice);
    }
    if (filters.maxPrice && filters.maxPrice !== '') {
      newParams.set('maxPrice', filters.maxPrice);
    }

    setSearchParams(newParams);
  };

  const applyFilters = () => {
    let filtered = [...products];

    if (searchTerm) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    switch (sortOption) {
      case 'Price: Low to High':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'Price: High to Low':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'Highest Rated':
        filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="catalog-container">
      {/* Filtros y búsqueda */}
      <div className="filters">
        <Filters
          onFilterChange={handleFilterChange}
          initialFilters={Object.fromEntries(searchParams.entries())}
        />
        <input
          type="text"
          placeholder="Buscar relojes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="sort-dropdown"
        >
          <option>Featured</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Highest Rated</option>
        </select>
      </div>

      {/* Productos */}
      <div className="products-grid">
        {filteredProducts.map(p => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </div>
  );
}