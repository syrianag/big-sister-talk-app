import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Check if a link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <span className="navbar-logo">✨</span>
          <span className="navbar-title">Bloom & Glow</span>
        </Link>

        <button 
          className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
        </button>

        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <Link 
              to="/" 
              className={`navbar-link ${isActive('/') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              <span className="navbar-icon">🏠</span>
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/bloom-era" 
              className={`navbar-link ${isActive('/bloom-era') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              <span className="navbar-icon">🌸</span>
              Bloom Era
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/glow-era" 
              className={`navbar-link ${isActive('/glow-era') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              <span className="navbar-icon">✨</span>
              Glow Era
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/resources" 
              className={`navbar-link ${isActive('/resources') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              <span className="navbar-icon">📚</span>
              Resources
            </Link>
          </li>
          
          <li className="navbar-item">
            <div className="navbar-profile">
              <div className="profile-avatar">👤</div>
              <span className="profile-name">You</span>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;