import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductsList from './pages/CatalogPage';
import AddProduct from './pages/AddProduct';
import ProductDetails from './pages/ProductDetails';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-blue-100">
        <nav className="bg-blue-700 p-4 text-white flex space-x-4">
          <Link to="/catalogo" className="hover:underline">Productos</Link>
          <Link to="/add" className="hover:underline">Añadir Producto</Link>
        </nav>
        <main className="p-4">
          <Routes>
            <Route path="/catalogo" element={<ProductsList />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/product/:id" element={<ProductDetails />} />

          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
