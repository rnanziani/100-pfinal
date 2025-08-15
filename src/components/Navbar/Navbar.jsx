import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <Link to="/" className="navbar-brand">
          Nahuelbuta Lodge
        </Link>
        <ul className="navbar-nav">
          <li>
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link 
              to="/activities" 
              className={location.pathname === '/activities' ? 'nav-link active' : 'nav-link'}
            >
              Actividades
            </Link>
          </li>
          <li>
            <Link 
              to="/rooms" 
              className={location.pathname === '/rooms' ? 'nav-link active' : 'nav-link'}
            >
              Habitaciones
            </Link>
          </li>
          <li>
            <Link 
              to="/restaurant" 
              className={location.pathname === '/restaurant' ? 'nav-link active' : 'nav-link'}
            >
              Restaurante
            </Link>
          </li>
          <li>
            <Link 
              to="/gallery" 
              className={location.pathname === '/gallery' ? 'nav-link active' : 'nav-link'}
            >
              Galería
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'}
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}