import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import ProductPage from './pages/ProductDetails';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Brands from './pages/Brands';
import ProductListing from './pages/ProductListing';
import ProductDetail from './pages/ProductDetails';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import UserList from './pages/dashboard/UserListPage';

import '@/styles/styles.css';
import '@/styles/components.css';
import '@/styles/pages.css';
import '@/styles/animations.css';

// Layout general con Header/Footer
const AppLayout = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-1">
      <Outlet />
    </main>
    <Footer />
  </div>
);

// Configuración de rutas
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/catalog", element: <CatalogPage /> },
      { path: "/catalog/:category", element: <CatalogPage /> },
      { path: "/product/:id", element: <ProductPage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/brands", element: <Brands /> },
      { path: "/productlisting", element: <ProductListing /> },
      { path: "/productdetail/:id", element: <ProductDetail /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute allowedRoles={["admin"]}>
            <Dashboard />
          </ProtectedRoute>
        )
      },
      {
        path: "/dashboard/userlist",
        element: (
          <ProtectedRoute allowedRoles={["admin"]}>
            <UserList />
          </ProtectedRoute>
        )
      }

    ]
  }
]);

// Montar la app con AuthProvider
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
