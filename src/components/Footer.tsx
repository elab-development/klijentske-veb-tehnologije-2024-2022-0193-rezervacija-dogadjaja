import React from 'react';
import './Footer.css';
import freezLogo from '../assets/FREEZcrni.png'; 

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo-section">
          <img src={freezLogo} alt="Freez Logo" className="footer-logo" />
          <p>Zakazivanje termina nikada nije bilo lakše. Izaberite frizera, uslugu i vreme koje vam najviše odgovara.</p>
        </div>
        <div className="footer-links-section">
          <div className="footer-column">
            <h4>About</h4>
            <ul>
              <li><a href="/onama">About Us</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/career">Career</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li><a href="/kontakt">Kontakt</a></li>
              <li><a href="/faq">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Get Updates</h4>
            <div className="footer-subscribe">
              <input type="email" placeholder="Enter your email" />
              <button type="button">Subscribe</button>
            </div>
            <div className="footer-social-icons">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;