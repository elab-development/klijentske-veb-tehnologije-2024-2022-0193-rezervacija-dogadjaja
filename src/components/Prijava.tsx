import React from 'react';
import './Prijava.css';
import freezLogo from '../assets/FREEZcrni.png'; 

const Prijava: React.FC = () => {
  return (
    <div className="prijava-container">
      <div className="prijava-left">
        <img src={freezLogo} alt="Freez Logo" className="logo" />
      </div>
      <div className="prijava-right">
        <h2>Prijava</h2>
        <form className="prijava-form">
          <div className="form-group">
            <input type="text" placeholder="Username" required />
          </div>
          <div className="form-group">
            <input type="password" placeholder="password" required />
          </div>
          <button type="submit">Prijava</button>
        </form>
        <p className="login-link">
          Imate nalog? <br /> <a href="/register">Registracija</a>
        </p>
      </div>
    </div>
  );
};

export default Prijava;