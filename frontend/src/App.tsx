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
import CartPage from './pages/CartPage';
import AdminProductsPage from './pages/AdminProductPage';
import VerificationSuccess from './pages/VerificationSuccess';
import VerificationFailed from './pages/VerificationFailed';

// 👇 Chatbot
import { ChatbotProvider } from './components/chatbot/ChatbotContext';
import  ChatBubble  from './components/chatbot/ChatBubble';
import ChatbotPage  from './pages/Chatbot/ChatbotPage';

const App: React.FC = () => {
  return (
    <ChatbotProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/catalogo" element={<ProductsList />} />
          <Route path="/admin-panel" element={<AdminProductsPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/marcas" element={<BrandsPage />} />
          <Route path="/verification-success" element={<VerificationSuccess />} />
          <Route path="/verification-failed" element={<VerificationFailed />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
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

        {/* 👇 Chatbot floating bubble */}
        <ChatBubble />
        <ChatbotPage />
      </Router>
    </ChatbotProvider>
  );
};

export default App;
