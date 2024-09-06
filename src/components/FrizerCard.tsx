import React from 'react';
import { Frizer } from '../models/Frizer'; 
import './FrizerCard.css'; 
import location from '../assets/location.png'
import star from '../assets/star_rate.png'


const FrizerCard: React.FC<Frizer> = ({ ime, lokacija, ocena, imageSrc }) => {
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
      </div>
    </div>
  );
};

export default FrizerCard;