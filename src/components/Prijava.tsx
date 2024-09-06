import React, { useState } from 'react';
import './Prijava.css';
import freezLogo from '../assets/FREEZcrni.png'; 
import { useNavigate } from 'react-router-dom';

const Prijava: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      const storedUsers = localStorage.getItem('users');
      if (storedUsers) {
          const users = JSON.parse(storedUsers);
          const user = users.find((user: any) => user.username === username && user.password === password);
      if (user) {
          localStorage.setItem('loggedInUser', JSON.stringify(user));
          console.log('User logged in successfully', user);
          navigate('/pocetna');
      } else {
          alert('Invalid username or password');
      }
  }
  };
  return (
    <div className="prijava-container">
      <div className="prijava-left">
        <img src={freezLogo} alt="Freez Logo" className="logo" />
      </div>
      <div className="prijava-right">
        <h2>Prijava</h2>
        <form onSubmit={handleSubmit} className="prijava-form">
          <div className="form-group">
            <input type="text" placeholder="Username" required value={username} onChange={(e) => setUsername(e.target.value)}/>
          </div>
          <div className="form-group">
            <input type="password" placeholder="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
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