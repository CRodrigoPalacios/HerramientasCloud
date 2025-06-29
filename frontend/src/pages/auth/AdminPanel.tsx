import React from "react";
import { Link, Outlet } from "react-router-dom";

const AdminPanel: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
        <nav>
          <ul>
            <li className="mb-4">
              <Link to="users" className="block py-2 px-4 rounded hover:bg-gray-700">
                Gestionar Usuarios
              </Link>
            </li>
            <li className="mb-4">
              <Link to="products" className="block py-2 px-4 rounded hover:bg-gray-700">
                Gestionar Productos
              </Link>
            </li>
            {/* Add more admin links here */}
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminPanel;