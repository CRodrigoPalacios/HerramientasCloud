import React, { JSX, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/products/ProductCard';

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

export default function CatalogPage(): JSX.Element {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('Featured');

  const fetchProducts = (params: string) => {
    fetch(`https://herramientascloud-production.up.railway.app/products?${params}`)
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);
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

  const handleFilterChange = (filters: Record<string, string>) => {
    const newParams = new URLSearchParams();

    if (filters.brand) newParams.set('brand', filters.brand);
    if (filters.type) newParams.set('type', filters.type);
    if (filters.material) newParams.set('material', filters.material);
    if (filters.minPrice) newParams.set('minPrice', filters.minPrice);
    if (filters.maxPrice) newParams.set('maxPrice', filters.maxPrice);

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
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="bg-white p-4 rounded-lg shadow mb-6 flex flex-wrap gap-4 items-center">
        <input
          type="text"
          placeholder="Buscar relojes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md"
        />
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md"
        >
          <option>Featured</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Highest Rated</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map(p => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </div>
  );
}
