import React, { useEffect, useState } from 'react';
import './Registracija.css';
import freezLogo from '../assets/FREEZcrni.png'; 
import { User } from '../models/User';
import { useNavigate } from 'react-router-dom';

const Registracija: React.FC = () => {
  const [ime, setIme] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState<User[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
      const storedUsers = localStorage.getItem('users');
      if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
      }
  }, []);

  const handleSubmit= (e: React.FormEvent) => {
      e.preventDefault();
      const newUser: User = new User(ime,username, email, password);
      const updatedUsers = [...users, newUser];
      setUsers(updatedUsers);
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      console.log('Registered Users:', updatedUsers);
      setIme('');
      setUsername('');
      setEmail('');
      setPassword('');
      navigate('/login');
  };
  return (
    <div className="registracija-container">
      <div className="registracija-left">
        <img src={freezLogo} alt="Freez Logo" className="logo" />
      </div>
      <div className="registracija-right">
        <h2>Registracija</h2>
        <form onSubmit={handleSubmit} className="registracija-form">
          <div className="form-group">
            <input type="text" placeholder="Ime" required onChange={(e) => setIme(e.target.value)}/>
          </div>
          <div className="form-group">
            <input type="text" placeholder="e-mail" required onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="form-group">
            <input type="text" placeholder="Username" required onChange={(e) => setUsername(e.target.value)}/>
          </div>
          <div className="form-group">
            <input type="password" placeholder="password" required onChange={(e) => setPassword(e.target.value)}/>
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