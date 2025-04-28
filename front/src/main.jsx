import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import CatalogPage from './pages/CatalogPage'
import ProductPage from './pages/ProductPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import Brands from './pages/Brands'
import ProductListing from './pages/ProductListing';
import ProductDetail from './pages/ProductDetail';
import '@/styles/styles.css';
import '@/styles/components.css';
import '@/styles/pages.css';
import '@/styles/animations.css';

const AppLayout = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-1">
      <Outlet />
    </main>
    <Footer />
  </div>
)

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/catalog",
        element: <CatalogPage />
      },
      {
        path: "/catalog/:category",
        element: <CatalogPage />
      },
      {
        path: "/product/:id",
        element: <ProductPage />
      },
      {
        path: "/about",
        element: <AboutPage />
      },
      {
        path: "/contact",
        element: <ContactPage />
      },
      {
        path: "/productlisting" ,
        element: <ProductListing />
      },
      {
        path: "/productdetail/:id",
        element: <ProductDetail />
      },
      {
        path: "/brands",
        element: <Brands />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)