import React from 'react';
import AddProducts from '../../components/dashboard/AddProduct';
import ProductsList from '../../components/dashboard/ProductList';

export default function AdminProductsPage() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Administracion de los Productos</h1>
      <AddProducts />
      <ProductsList />
    </div>
  );
}
