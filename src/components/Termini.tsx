import React, { useState, useEffect } from 'react';
import { UslugaCardProps } from './UslugaCard';
import { User } from '../models/User';
import Navbar from './Navbar';
import Footer from './Footer';
import './Termini.css';

const Termini: React.FC = () => {
  const [usluge, setUsluge] = useState<UslugaCardProps[]>([]);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser');
    const user = storedUser ? JSON.parse(storedUser) : null;
    setUser(user);

    if (user) {
      const storedUsluge = localStorage.getItem(`${user.username}_usluge`);
      const usluge = storedUsluge ? JSON.parse(storedUsluge) : [];
      setUsluge(usluge);
    }
  }, []);

  const handleRemoveUsluga = (uslugaToRemove: UslugaCardProps) => {
    if (!user) return;

    const storedUsluge = localStorage.getItem(`${user.username}_usluge`);
    let usluge: UslugaCardProps[] = storedUsluge ? JSON.parse(storedUsluge) : [];

    const updatedUsluge = usluge.filter(
      (usluga) =>
        usluga.ime !== uslugaToRemove.ime || 
        usluga.imeSalona !== uslugaToRemove.imeSalona
    );
    localStorage.setItem(`${user.username}_usluge`, JSON.stringify(updatedUsluge));
    setUsluge(updatedUsluge);
  };

  if (!user) {
    return <p>Učitavanje...</p>; 
  }

  return (
    <div className='terminiDiv'>
      <Navbar/>
      <h1>Vaše Rezervacije</h1>
      <div className="termini-container">
        {usluge.length === 0 ? (
          <p>Nema rezervisanih usluga.</p>
        ) : (
          <div className="usluge-list">
            {usluge.map((usluga, index) => (
              <div key={index} className="usluga-card">
                <img src={usluga.imageSrc} alt={usluga.ime} className="usluga-card-image" />
                <div className="usluga-card-content">
                  <h3 className="usluga-card-name">{usluga.ime}</h3>
                  <p className="usluga-card-price"><b>Cena: </b>{usluga.cena} RSD</p>
                  {usluga.imeSalona && <p className="usluga-card-salon"><b>Salon:</b> {usluga.imeSalona}</p>}
                  <p><b>Datum i vreme:</b> {usluga.reservationDate} - {usluga.reservationTime}h</p>
                  <button
                    className='otkazi'
                    onClick={() => handleRemoveUsluga(usluga)}
                  >
                    Otkazi
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default Termini;