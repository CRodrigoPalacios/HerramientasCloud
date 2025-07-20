import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react';

const API_URL = import.meta.env.VITE_AUTH_API_URL || 'https://herramientascloud-production.up.railway.app';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<{ nombre: string; role: string } | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const fetchUser = () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setUser(null);
        return;
      }

      fetch(`${API_URL}/auth/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then(res => {
          if (!res.ok) throw new Error('Failed to fetch profile');
          return res.json();
        })
        .then(data => {
          const role = typeof data.role === 'string'
            ? data.role
            : (data.role && typeof data.role.nombre === 'string' ? data.role.nombre : null);

          if (role && data.nombre) {
            setUser({ nombre: data.nombre, role });
          } else {
            setUser(null);
          }
        })
        .catch(() => setUser(null));
    };

    fetchUser();
    window.addEventListener('storage', fetchUser);
    return () => window.removeEventListener('storage', fetchUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/');
  };

  const handleAuthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === 'login') navigate('/login');
    else if (value === 'register') navigate('/register');
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white shadow-md backdrop-blur-md ${isScrolled ? 'bg-white shadow-md backdrop-blur-md' : ''
      }`}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <Link to="/" className="text-xl font-serif font-bold text-gray-900">
            LuxuryWatches
          </Link>

          <nav className="md:flex gap-6 hidden">
            <Link to="/catalogo" className="text-sm hover:text-yellow-600">Colección</Link>
            <Link to="/marcas" className="text-sm hover:text-yellow-600">Marcas</Link>
            <Link to="/about" className="text-sm hover:text-yellow-600">Historia</Link>
            <Link to="/contacto" className="text-sm hover:text-yellow-600">Contacto</Link>
            {user?.role === 'admin' && (
              <select
                className="text-sm border rounded px-2 py-1"
                onChange={e => {
                  if (e.target.value) navigate(e.target.value);
                }}
              >
                <option value="/admin-panel">Admin Panel</option>
                <option value="/admin-panel">Usuarios</option>
                <option value="/admin-panel">Productos</option>
                <option value="/dashboard/Settings">Configuración</option>
              </select>
            )}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-gray-700 hover:text-yellow-600">
            <Search size={20} />
          </button>

          <Link to="/cart" className="relative text-gray-700 hover:text-yellow-600">
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-yellow-600 text-white text-xs rounded-full px-1.5">0</span>
          </Link>

          {user ? (
            <div className="flex items-center gap-3 bg-yellow-100 px-3 py-1 rounded-full shadow-sm">
              <User size={16} className="text-yellow-600" />
              <span className="text-sm font-medium text-gray-800">{user.nombre}</span>
              <button
                onClick={handleLogout}
                className="text-xs bg-yellow-600 hover:bg-yellow-700 text-white px-2 py-1 rounded-full"
              >
                Cerrar sesión
              </button>
            </div>
          ) : (
            <select
              className="text-sm border border-gray-300 rounded px-2 py-1 text-gray-700"
              onChange={handleAuthChange}
              defaultValue=""
            >
              <option value="" disabled hidden>👤</option>
              <option value="login">Iniciar sesión</option>
              <option value="register">Registrarse</option>
            </select>
          )}
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md py-4 px-6 space-y-4">
          <Link to="/catalogo" onClick={() => setMobileMenuOpen(false)}>Colección</Link>
          <Link to="/marcas" onClick={() => setMobileMenuOpen(false)}>Marcas</Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)}>Historia</Link>
          <Link to="/contacto" onClick={() => setMobileMenuOpen(false)}>Contacto</Link>
          {user?.role === 'admin' && (
            <>
              <Link to="/dashboard/UserList" onClick={() => setMobileMenuOpen(false)}>Usuarios</Link>
              <Link to="/dashboard/AdminProducts" onClick={() => setMobileMenuOpen(false)}>Productos</Link>
              <Link to="/dashboard/Settings" onClick={() => setMobileMenuOpen(false)}>Configuración</Link>
            </>
          )}
        </div>
      )}
    </header>
  );
}
