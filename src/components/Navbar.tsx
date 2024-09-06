import React from 'react';
import './NavBar.css';
import freezLogo from '../assets/FREEZbeli.png';

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={freezLogo} alt="Freez Logo" /> 
      </div>
      <div className="navbar-links">
        <a className="navbar-link" href="/muski">Muški</a>
        <a className="navbar-link" href="/zenski">Ženski</a>
        <a className="navbar-link" href="/proizvodi">Proizvodi</a>
        <a className="navbar-link" href="/profil">Profil</a>
        <a className="navbar-link navbar-korpa" href="/korpa">Korpa</a>
      </div>
    </nav>
  );
};

export default NavBar;