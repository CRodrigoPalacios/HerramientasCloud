import React from 'react';
import UserList from '../../components/dashboard/UserList';

export default function UserListPage() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Lista de Usuarios</h1>
      <UserList />
    </div>
  );
}
