import { FC } from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer: FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white pt-24 pb-8 px-6 mt-24 font-sans">
      <div className="max-w-7xl mx-auto border-b border-white/10 pb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* Servicio al Cliente */}
        <div>
          <h4 className="text-lg font-semibold mb-4 relative after:block after:w-10 after:h-0.5 after:bg-white after:mt-2 after:rounded">
            Servicio al Cliente
          </h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li><Link to="/contact" className="hover:text-white hover:translate-x-1 transition">Contáctanos</Link></li>
            <li><Link to="/shipping" className="hover:text-white hover:translate-x-1 transition">Política de Envíos</Link></li>
            <li><Link to="/returns" className="hover:text-white hover:translate-x-1 transition">Devoluciones y Cambios</Link></li>
          </ul>
        </div>

        {/* Compañía */}
        <div>
          <h4 className="text-lg font-semibold mb-4 relative after:block after:w-10 after:h-0.5 after:bg-white after:mt-2 after:rounded">
            Compañía
          </h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li><Link to="/about" className="hover:text-white hover:translate-x-1 transition">Sobre Nosotros</Link></li>
            <li><Link to="/blog" className="hover:text-white hover:translate-x-1 transition">Blog</Link></li>
            <li><Link to="/careers" className="hover:text-white hover:translate-x-1 transition">Empleos</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-lg font-semibold mb-4 relative after:block after:w-10 after:h-0.5 after:bg-white after:mt-2 after:rounded">
            Legal
          </h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li><Link to="/privacy" className="hover:text-white hover:translate-x-1 transition">Política de Privacidad</Link></li>
            <li><Link to="/terms" className="hover:text-white hover:translate-x-1 transition">Términos de Servicio</Link></li>
            <li><Link to="/warranty" className="hover:text-white hover:translate-x-1 transition">Garantía</Link></li>
          </ul>
        </div>

        {/* Redes Sociales */}
        <div>
          <h4 className="text-lg font-semibold mb-4 relative after:block after:w-10 after:h-0.5 after:bg-white after:mt-2 after:rounded">
            Conéctate con Nosotros
          </h4>
          <div className="flex gap-4 mt-4">
            <a href="#" aria-label="Facebook" className="bg-white/10 p-2 rounded-full hover:bg-white transition hover:scale-110">
              <Facebook className="text-white" size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="bg-white/10 p-2 rounded-full hover:bg-white transition hover:scale-110">
              <Twitter className="text-white" size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="bg-white/10 p-2 rounded-full hover:bg-white transition hover:scale-110">
              <Instagram className="text-white" size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-white/60 pt-6 mt-6 border-t border-white/10">
        &copy; {year} LuxuryStore. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
