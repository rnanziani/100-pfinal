import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t } = useTranslation();
  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <Link to="/" className="navbar-brand">
          Nahuelbuta Lodge
        </Link>
        <ul className="navbar-nav">
          <li><Link to="/">{t('nav.home')}</Link></li>
          <li><Link to="/rooms">{t('nav.rooms')}</Link></li>
          <li><Link to="/restaurant">{t('nav.restaurant')}</Link></li>
          <li><Link to="/gallery">{t('nav.gallery')}</Link></li>
          <li><Link to="/contact">{t('nav.contact')}</Link></li>
        </ul>
        <LanguageSwitcher />
      </div>
    </nav>
  );
}