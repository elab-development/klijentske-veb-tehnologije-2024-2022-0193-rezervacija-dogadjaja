import React from 'react';
import { Frizer } from '../models/Frizer'; 
import './FrizerCard.css'; 
import location from '../assets/location.png'
import star from '../assets/star_rate.png'
import { useNavigate } from 'react-router-dom';


interface FrizerCardProps extends Frizer {
  parentComponent: 'MuskiFrizeri' | 'ZenskiFrizeri';
}

const FrizerCard: React.FC<FrizerCardProps> = ({ ime, lokacija, ocena, imageSrc,parentComponent }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (parentComponent === 'MuskiFrizeri') {
      navigate('/uslugem');
    } else if (parentComponent === 'ZenskiFrizeri') {
      navigate('/uslugez');
    }
    localStorage.setItem('FrizerskiSalon', JSON.stringify(ime));
  };


  return (
    <div className="frizer-card">
      <img src={imageSrc} alt={`${ime} - ${lokacija}`} className="frizer-card-image" />
      <div className="frizer-card-content">
        <h3 className="frizer-card-name">{ime}</h3>
        <div>
            <img src={location} alt="" />
            <p className="frizer-card-location">{lokacija}</p>
        </div>
        <div>
            <img src={star} alt="" />
            <p className="frizer-card-rating">Rating: {ocena.toFixed(1)} / 5</p>
        </div>
        <button onClick={handleButtonClick}>Izaberi uslugu</button>
      </div>
    </div>
  );
};

export default FrizerCard;