import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, User, Search, Menu, X } from "lucide-react";
import "@/styles/components/Header.css";
import { useAuth } from "@/context/AuthContext";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAuthChange = (e) => {
    const value = e.target.value;
    if (value === "login") navigate("/login");
    else if (value === "register") navigate("/register");
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container header-content">
        <div className="header-left">
          <button
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <Link to="/" className="logo">
            <span className="logo-text">LuxuryWatches</span>
          </Link>

          <nav className={`nav-links ${mobileMenuOpen ? "mobile-open" : ""}`}>
            <Link to="/catalog" className="nav-link">Colección</Link>
            <Link to="/brands" className="nav-link">Marcas</Link>
            <Link to="/about" className="nav-link">Historia</Link>
            <Link to="/contact" className="nav-link">Contacto</Link>
            
          {user && user.role === 'admin' && ( 
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
            )}
          </nav>
        </div>

        <div className="header-right">
          <button className="icon-button search-button">
            <Search size={20} strokeWidth={1.5} />
          </button>

          <Link to="/cart" className="icon-button cart-button">
            <ShoppingCart size={20} strokeWidth={1.5} />
            <span className="cart-count">0</span>
          </Link>

          {user ? (
            <div className="user-info">
              <span className="user-name">👤 {user.nombre}</span>
              <button className="logout-button" onClick={logout}>Cerrar sesión</button>
            </div>
          ) : (
            <select className="auth-select" onChange={handleAuthChange} defaultValue="">
              <option value="" disabled hidden>
                👤<User size={20} strokeWidth={1.5} />
              </option>
              <option value="login">👤Iniciar sesión</option>
              <option value="register">👤Registrarse</option>
            </select>
          )}
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}
    </header>
  );
}
