import React from 'react';
import AddProduct from '../components/products/AddProduct';
import UserList from '../components/dashboard/UserList';

export default function Dashboard() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Panel de Administración</h1>
      <AddProduct />
      <hr />
      <UserList />
    </div>
  );
}
