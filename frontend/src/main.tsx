import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import './index.css';
import { CartProvider } from './context/CartContext';


const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <CartProvider>
        <App />
      </CartProvider>
    </React.StrictMode>
  );
}
