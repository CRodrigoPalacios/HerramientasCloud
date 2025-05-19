import React, { useState } from 'react';
import { Link } from "react-router-dom";


export default function Filters({ onFilterChange }) {
  const [brand, setBrand] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const applyFilters = () => {
    onFilterChange({ brand, minPrice, maxPrice });
  };

  return (
    <div className="filters">
      <input placeholder="Brand" onChange={e => setBrand(e.target.value)} />
      <input type="number" placeholder="Min Price" onChange={e => setMinPrice(e.target.value)} />
      <input type="number" placeholder="Max Price" onChange={e => setMaxPrice(e.target.value)} />
      <button onClick={applyFilters}>Apply</button>
    </div>
  );
}
