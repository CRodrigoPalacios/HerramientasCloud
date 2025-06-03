import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsList from './pages/CatalogPage';
import ProductDetails from './pages/ProductDetails';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import AdminPanel from './pages/auth/AdminPanel';
import AdminRoute from './components/AdminRoute';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Profile from './pages/auth/Profile';
import Footer from './components/Footer';
import BrandsPage from './pages/MarcasPage';
import ContactPage from './pages/ContactPage';
import AdminProductsPage from './pages/AdminProductPage';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/catalogo" element={<ProductsList />} />
        <Route path="/add" element={<AdminProductsPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/marcas" element={<BrandsPage />} />
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminPanel />
            </AdminRoute>
          }
        />
      </Routes>
     <Footer />
    </Router>
  );
};

export default App;
