import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import './index.css';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';


const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <AuthProvider> {/* <-- envuelve aquí */}
        <CartProvider>
          <App />
        </CartProvider>
      </AuthProvider>
    </React.StrictMode>
  );
}