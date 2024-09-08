import React, { useState } from 'react';
import './UslugaCard.css'; 
import { User } from '../models/User';

export interface UslugaCardProps {
  ime: string;
  cena: number;
  trajanje: number;
  imageSrc: string;
  imeSalona?: string;
  reservationDate?: string;
  reservationTime?: string;
}

const UslugaCard: React.FC<UslugaCardProps> = ({ ime, cena, trajanje, imageSrc, imeSalona }) => {
  
  const [user] = useState<User | null>(() => {
    const storedUser = localStorage.getItem('loggedInUser');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [reservationDate, setReservationDate] = useState<string>('');
  const [reservationTime, setReservationTime] = useState<string>('');

  const handleAddUsluga = () => {

    const storedUsluge = localStorage.getItem(`${user?.username}_usluge`);
    let usluge: UslugaCardProps[] = storedUsluge ? JSON.parse(storedUsluge) : [];

    const exists = usluge.some(
      (usluga) =>
        usluga.ime === ime &&
        usluga.imeSalona === imeSalona
    );

    if (!exists) {
      usluge.push({ ime, cena, trajanje, imageSrc, imeSalona, reservationDate, reservationTime });
      localStorage.setItem(`${user?.username}_usluge`, JSON.stringify(usluge));
      alert('Rezervacija uspesna!');
    } else {
      alert('Vec ste rezervisali tu uslugu.');
    }
  };

  return (
    <div className="usluga-card">
      <img src={imageSrc} alt={ime} className="usluga-card-image" />
      <div className="usluga-card-content">
        <h3 className="usluga-card-name">{ime}</h3>
        <div>
          <p className="usluga-card-location">{cena} RSD</p>
        </div>
        <div>
          <p className="usluga-card-rating">{trajanje} min</p>
        </div>
        
        <div>
          <label>
            Date:
            <input 
              type="date" 
              value={reservationDate} 
              onChange={(e) => setReservationDate(e.target.value)} 
            />
          </label>
          <label>
            Time:
            <input 
              type="time" 
              value={reservationTime} 
              onChange={(e) => setReservationTime(e.target.value)} 
            />
          </label>
        </div>

        <button onClick={handleAddUsluga}>Rezervisi</button>
      </div>
    </div>
  );
};

export default UslugaCard;