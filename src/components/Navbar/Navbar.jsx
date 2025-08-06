import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <Link to="/" className="navbar-brand">
          Nahuelbuta Lodge
        </Link>
        <ul className="navbar-nav">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/rooms">Habitaciones</Link></li>
          <li><Link to="/restaurant">Restaurante</Link></li>
          <li><Link to="/gallery">Galería</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
        </ul>
      </div>
    </nav>
  );
}