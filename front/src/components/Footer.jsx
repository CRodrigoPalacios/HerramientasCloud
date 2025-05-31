import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram } from "lucide-react";
import "@/styles/components/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Servicio al Cliente</h4>
            <ul className="footer-links">
              <li><Link to="/contact">Contáctanos</Link></li>
              <li><Link to="/shipping">Política de Envíos</Link></li>
              <li><Link to="/returns">Devoluciones y Cambios</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Compañía</h4>
            <ul className="footer-links">
              <li><Link to="/about">Sobre Nosotros</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/careers">Empleos</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Legal</h4>
            <ul className="footer-links">
              <li><Link to="/privacy">Política de Privacidad</Link></li>
              <li><Link to="/terms">Términos de Servicio</Link></li>
              <li><Link to="/warranty">Garantía</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Conéctate con Nosotros</h4>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <Facebook className="social-icon" size={20} />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter className="social-icon" size={20} />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram className="social-icon" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} LuxuryStore. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
