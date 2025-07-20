import React from 'react';
import AddProducts from '../components/dashboard/addProducts';
import ProductsList from '../components/dashboard/ProductList';
import UserList from '../components/dashboard/UserList';

export default function AdminProductsPage() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Administracion de los Productos</h1>
      <AddProducts />
      <ProductsList />
      <UserList />
    </div>
  );
}