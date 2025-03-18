import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

interface HeaderProps {
  isAuthenticated: boolean;
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isAuthenticated, onLogout }) => {
  return (
    <header className="header">
      <div className="container header__container">
        <Link to="/" className="header__logo">
          <h1>Fishing App</h1>
        </Link>
        
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li>
              <Link to="/spots" className="header__nav-link">
                Fishing Spots
              </Link>
            </li>
            <li>
              <Link to="/gear" className="header__nav-link">
                Gear
              </Link>
            </li>
            {isAuthenticated ? (
              <>
                <li>
                  <Link to="/profile" className="header__nav-link">
                    Profile
                  </Link>
                </li>
                <li>
                  <button 
                    onClick={onLogout}
                    className="header__nav-link header__nav-link--button"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login" className="header__nav-link">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="header__nav-link">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}; 