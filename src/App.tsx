import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import './App.scss';
import database from './database';
import Community from './components/Community';
import Equipment from './components/Equipment';
import Locations from './components/Locations';
import Techniques from './components/Techniques';
import Contact from './components/Contact';
import FishingEvents from './components/FishingEvents';
import SuccessStories from './components/SuccessStories';
import WeatherWidget from './components/WeatherWidget';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <nav>
        <div className="logo">FishingPro</div>
        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          Menu
        </button>
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/locations">Locations</Link></li>
          <li><Link to="/equipment">Equipment</Link></li>
          <li><Link to="/techniques">Techniques</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/community">Community</Link></li>
        </ul>
      </nav>
    </header>
  );
}

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Discover Your Next Fishing Adventure</h1>
        <p>Expert guides, prime locations, and top-notch equipment</p>
        <Link to="/contact" className="cta-button">Book a Trip</Link>
      </section>
      <div className="home-content">
        <div className="main-content">
          <section className="featured-locations">
            <h2>Featured Locations</h2>
            <div className="location-grid">
              {database.locations.map(location => (
                <div key={location.id} className="location-card">
                  <img src={location.imageUrl} alt={location.name} />
                  <h3>{location.name}</h3>
                  <p>{location.description}</p>
                </div>
              ))}
            </div>
          </section>
          <SuccessStories />
        </div>
        <aside className="sidebar">
          <FishingEvents />
          <WeatherWidget />
        </aside>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/equipment" element={<Equipment />} />
            <Route path="/techniques" element={<Techniques />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </main>
        <footer className="site-footer">
          <div className="footer-content">
            <div className="footer-section">
              <h3>About FishingPro</h3>
              <p>Your ultimate destination for fishing adventures. We provide expert guides, prime locations, and top-notch equipment to make your fishing experience unforgettable.</p>
              <div className="social-links">
                <a href="#" className="social-link"><i className="fab fa-facebook"></i></a>
                <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
                <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
                <a href="#" className="social-link"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/locations">Fishing Locations</Link></li>
                <li><Link to="/equipment">Equipment Guide</Link></li>
                <li><Link to="/techniques">Fishing Techniques</Link></li>
                <li><Link to="/community">Community</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Contact Info</h3>
              <ul className="contact-info">
                <li><i className="fas fa-map-marker-alt"></i> 123 Fishing Street</li>
                <li><i className="fas fa-phone"></i> (555) 123-4567</li>
                <li><i className="fas fa-envelope"></i> info@fishingpro.com</li>
                <li><i className="fas fa-clock"></i> Mon-Fri: 9:00 AM - 6:00 PM</li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Newsletter</h3>
              <p>Subscribe to our newsletter for fishing tips, updates, and exclusive offers!</p>
              <form className="newsletter-form">
                <input type="email" placeholder="Enter your email" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 FishingPro. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}