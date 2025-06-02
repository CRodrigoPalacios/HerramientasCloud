import React, { useState, useEffect } from 'react';

const brandsList = ['Rolex', 'Casio', 'Seiko', 'Omega'];
const typesList = ['Digital', 'Analogico'];
const materialsList = ['Metal', 'Cuero', 'Oro'];

export default function Filters({ onFilterChange, initialFilters = {} }) {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  // Inicializar filtros desde la URL al cargar el componente
  useEffect(() => {
    console.log('Filtros iniciales recibidos:', initialFilters);
    
    if (initialFilters.brand) {
      const brands = initialFilters.brand.split(',').filter(b => b.trim() !== '');
      setSelectedBrands(brands);
      console.log('Marcas inicializadas:', brands);
    }
    if (initialFilters.type) {
      const types = initialFilters.type.split(',').filter(t => t.trim() !== '');
      setSelectedTypes(types);
      console.log('Tipos inicializados:', types);
    }
    if (initialFilters.material) {
      const materials = initialFilters.material.split(',').filter(m => m.trim() !== '');
      setSelectedMaterials(materials);
      console.log('Materiales inicializados:', materials);
    }
    if (initialFilters.minPrice) {
      setMinPrice(initialFilters.minPrice);
      console.log('Precio mínimo inicializado:', initialFilters.minPrice);
    }
    if (initialFilters.maxPrice) {
      setMaxPrice(initialFilters.maxPrice);
      console.log('Precio máximo inicializado:', initialFilters.maxPrice);
    }
  }, [initialFilters]);

  const toggleSelection = (value, list, setter) => {
    const newList = list.includes(value) 
      ? list.filter(item => item !== value) 
      : [...list, value];
    
    console.log(`Toggling ${value}, nueva lista:`, newList);
    setter(newList);
  };

  const applyFilters = () => {
    const filters = {};
    
    // Solo incluir filtros que tengan valores
    if (selectedBrands.length > 0) {
      filters.brand = selectedBrands.join(',');
    }
    
    if (selectedTypes.length > 0) {
      filters.type = selectedTypes.join(',');
    }
    
    if (selectedMaterials.length > 0) {
      filters.material = selectedMaterials.join(',');
    }
    
    if (minPrice && minPrice.trim() !== '') {
      filters.minPrice = minPrice.trim();
    }
    
    if (maxPrice && maxPrice.trim() !== '') {
      filters.maxPrice = maxPrice.trim();
    }

    console.log('Aplicando filtros:', filters);
    onFilterChange(filters);
  };

  // Aplicar filtros automáticamente cuando cambien los estados
  useEffect(() => {
    applyFilters();
  }, [selectedBrands, selectedTypes, selectedMaterials, minPrice, maxPrice]);

  const clearFilters = () => {
    console.log('Limpiando todos los filtros');
    setSelectedBrands([]);
    setSelectedTypes([]);
    setSelectedMaterials([]);
    setMinPrice('');
    setMaxPrice('');
  };

  return (
    <div className="filters">
      <div className="filter-header">
        <h2>Filtros</h2>
        <button onClick={clearFilters} className="clear-filters-btn">
          Limpiar filtros
        </button>
      </div>

      <div className="filter-section">
        <h3>Marcas</h3>
        {brandsList.map((brand) => (
          <label key={brand} className="filter-checkbox">
            <input
              type="checkbox"
              checked={selectedBrands.includes(brand)}
              onChange={() => toggleSelection(brand, selectedBrands, setSelectedBrands)}
            />
            <span>{brand}</span>
          </label>
        ))}
        <small>Seleccionadas: {selectedBrands.join(', ')}</small>
      </div>

      <div className="filter-section">
        <h3>Tipos</h3>
        {typesList.map((type) => (
          <label key={type} className="filter-checkbox">
            <input
              type="checkbox"
              checked={selectedTypes.includes(type)}
              onChange={() => toggleSelection(type, selectedTypes, setSelectedTypes)}
            />
            <span>{type}</span>
          </label>
        ))}
        <small>Seleccionados: {selectedTypes.join(', ')}</small>
      </div>

      <div className="filter-section">
        <h3>Materiales</h3>
        {materialsList.map((material) => (
          <label key={material} className="filter-checkbox">
            <input
              type="checkbox"
              checked={selectedMaterials.includes(material)}
              onChange={() => toggleSelection(material, selectedMaterials, setSelectedMaterials)}
            />
            <span>{material}</span>
          </label>
        ))}
        <small>Seleccionados: {selectedMaterials.join(', ')}</small>
      </div>

      <div className="filter-section">
        <h3>Rango de precio</h3>
        <div className="price-inputs">
          <input
            type="number"
            placeholder="Precio mínimo"
            value={minPrice}
            onChange={e => {
              console.log('Precio mínimo cambiado a:', e.target.value);
              setMinPrice(e.target.value);
            }}
            className="price-input"
            min="0"
          />
          <input
            type="number"
            placeholder="Precio máximo"
            value={maxPrice}
            onChange={e => {
              console.log('Precio máximo cambiado a:', e.target.value);
              setMaxPrice(e.target.value);
            }}
            className="price-input"
            min="0"
          />
        </div>
        <small>Rango: ${minPrice || '0'} - ${maxPrice || '∞'}</small>
      </div>

      {/* Botón manual por si acaso */}
      <button onClick={applyFilters} className="apply-filters-btn">
        Aplicar Filtros Manualmente
      </button>
    </div>
  );
}