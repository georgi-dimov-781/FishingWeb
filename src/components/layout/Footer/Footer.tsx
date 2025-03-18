import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__content">
          <div className="footer__section">
            <h3 className="footer__title">About Us</h3>
            <p className="footer__text">
              Your trusted companion for finding the best fishing spots and gear.
            </p>
          </div>

          <div className="footer__section">
            <h3 className="footer__title">Quick Links</h3>
            <ul className="footer__list">
              <li>
                <Link to="/spots" className="footer__link">
                  Fishing Spots
                </Link>
              </li>
              <li>
                <Link to="/gear" className="footer__link">
                  Gear
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer__link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer__link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer__section">
            <h3 className="footer__title">Connect With Us</h3>
            <ul className="footer__list">
              <li>
                <a href="https://facebook.com" className="footer__link" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com" className="footer__link" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://instagram.com" className="footer__link" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} Fishing App. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}; 