import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import '@/styles/dashboard/admin.css';

export default function UserList() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (loading) return;

    if (!user || user.role !== 'admin') {
      navigate('/');
    } else {
      fetch('http://localhost:5000/api/users') 
        .then(res => res.json())
        .then(data => setUsers(data))
        .catch(err => console.error('Error al cargar usuarios', err));
    }
  }, [user, loading, navigate]);

  const handleRoleChange = async (id, newRole) => {
    try {
      const response = await fetch(`http://localhost:5000/api/users/${id}/role`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    'x-user-role': user.role
  },
  body: JSON.stringify({ role: newRole })
});

      if (response.ok) {
        setUsers(prev =>
          prev.map(u => (u._id === id ? { ...u, role: newRole } : u))
        );
      } else {
        alert('Error al cambiar rol');
      }
    } catch (error) {
      console.error('Error en la petición de cambio de rol', error);
    }
  };

  if (loading) return <p>Cargando...</p>;

  return (
    <div className="admin-table">
      <h2>Gestión de Usuarios</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Cambiar Rol</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u._id}>
              <td>{u.nombre} {u.apellido}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
              <td>
                <select
                  className="auth-select"
                  value={u.role}
                  onChange={e => handleRoleChange(u._id, e.target.value)}
                >
                  <option value="user">Usuario</option>
                  <option value="admin">Administrador</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
