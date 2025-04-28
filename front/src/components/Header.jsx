import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import { ShoppingCart, User, Search, Menu, X } from "lucide-react"; 
import "@/styles/components/Header.css"; 

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Detectar scroll para cambiar apariencia del header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
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
          
          <nav className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <Link to="/catalog" className="nav-link">Colección</Link>
            <Link to="/brands" className="nav-link">Marcas</Link>
            <Link to="/about" className="nav-link">Historia</Link>
            <Link to="/contact" className="nav-link">Contacto</Link>
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
          <Link to="/login" className="icon-button">
            <User size={20} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
      
      {/* Overlay para menú móvil */}
      {mobileMenuOpen && (
        <div className="mobile-overlay" onClick={() => setMobileMenuOpen(false)}></div>
      )}
    </header>
  ); 
}