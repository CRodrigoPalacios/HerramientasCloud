import React, { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

interface AdminRouteProps {
  children: ReactElement;
}

const AdminRoute: React.FC<AdminRouteProps> = ({ children }) => {
  const [userRole, setUserRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setUserRole(null);
      setLoading(false);
      return;
    }
    fetch('https://herramientascloud-production.up.railway.app/users/profile', {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch profile');
        return res.json();
      })
      .then(data => {
        setUserRole(data.role);
        setLoading(false);
      })
      .catch(() => {
        setUserRole(null);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (userRole !== 'admin') {
    return <Navigate to="/profile" replace />;
  }

  return children;
};

export default AdminRoute;
