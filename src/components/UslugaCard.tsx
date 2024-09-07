import React, { useState } from 'react';
import './UslugaCard.css'; 
import { User } from '../models/User';

export interface UslugaCardProps {
  ime: string;
  cena: number;
  trajanje: number;
  imageSrc: string;
  imeSalona?: string;
}

const UslugaCard: React.FC<UslugaCardProps> = ({ ime, cena, trajanje, imageSrc, imeSalona }) => {
  
  const [user] = useState<User | null>(() => {
    const storedUser = localStorage.getItem('loggedInUser');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const handleAddUsluga = () => {
    const storedUsluge = localStorage.getItem(`${user?.username}_usluge`);
    let usluge: UslugaCardProps[] = storedUsluge ? JSON.parse(storedUsluge) : [];

    const exists = usluge.some(
      (usluga) =>
        usluga.ime === ime &&
        usluga.imeSalona === imeSalona
    );

    if (!exists) {
      usluge.push({ ime, cena, trajanje, imageSrc, imeSalona });
      localStorage.setItem(`${user?.username}_usluge`, JSON.stringify(usluge));
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
        <button onClick={handleAddUsluga}>Rezervisi</button>
      </div>
    </div>
  );
};

export default UslugaCard;