import React from 'react';
import './Registracija.css';
import freezLogo from '../assets/FREEZcrni.png'; 

const Registracija: React.FC = () => {
  return (
    <div className="registracija-container">
      <div className="registracija-left">
        <img src={freezLogo} alt="Freez Logo" className="logo" />
      </div>
      <div className="registracija-right">
        <h2>Registracija</h2>
        <form className="registracija-form">
          <div className="form-group">
            <input type="text" placeholder="Ime" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="e-mail" required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Username" required />
          </div>
          <div className="form-group">
            <input type="password" placeholder="password" required />
          </div>
          <button type="submit">Registracija</button>
        </form>
        <p className="login-link">
          Imate nalog? <br /> <a href="/login">Prijava</a>
        </p>
      </div>
    </div>
  );
};

export default Registracija;