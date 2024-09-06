import React, { useState } from 'react';
import './Kontakt.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Kontakt: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log("Email:", email);
      console.log("Message:", message);
      setEmail('');
      setMessage('');
    };
  return (
    <>
    <Navbar/>
    <div className='containerKontakt'>
        <h1>Kontakt</h1>
        <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Poruka:</label>
        <textarea 
          id="message" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          required 
        />
      </div>
      <button type="submit">Pošalji</button>
    </form>
    </div>
    <Footer/>
    </>
  );
};

export default Kontakt;