import { Link } from "react-router-dom";
import { ShoppingCart, User } from "lucide-react";
import "@/styles/components/Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="flex items-center gap-6">
          <Link to="/" className="logo">
            <span>LuxuryWatches</span>
          </Link>
          
          <nav className="nav-links">
            <Link to="/catalog" className="nav-link">Catalog</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/cart" className="icon-button">
            <ShoppingCart size={20} />
          </Link>
          
          <Link to="/login" className="icon-button">
            <User size={20} />
          </Link>
        </div>
      </div>
    </header>
  );
}