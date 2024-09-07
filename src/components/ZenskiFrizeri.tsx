import React, { useState } from 'react';
import './ZenskiFrizeri.css';
import Navbar from './Navbar';
import Footer from './Footer';
import FrizerCard from './FrizerCard'; 
import frizerImg1 from '../assets/fr1.png';
import frizerImg2 from '../assets/fr2.png';
import frizerImg3 from '../assets/fr3.png';
import frizerImg4 from '../assets/fr4.png';
import frizerImg5 from '../assets/fr5.png';
import frizerImg6 from '../assets/fr6.png';
import frizerImg7 from '../assets/fr7.png';
import frizerImg8 from '../assets/fr8.png';
import ZenskiSlika from '../assets/Zenski.png';

const frizerData = [
    { ime: "Frizer Salon X", lokacija: "Kragujevac, Serbia", ocena: 4.6, imageSrc: frizerImg8 },
  { ime: "Frizer Salon E", lokacija: "Beograd, Serbia", ocena: 4.8, imageSrc: frizerImg1 },
  { ime: "Frizer Salon K", lokacija: "Niš, Serbia", ocena: 4.1, imageSrc: frizerImg5 },
  { ime: "Frizer Salon G", lokacija: "Niš, Serbia", ocena: 4.7, imageSrc: frizerImg3 },
  { ime: "Frizer Salon B", lokacija: "Novi Sad, Serbia", ocena: 4.5, imageSrc: frizerImg2 },
  { ime: "Frizer Salon P", lokacija: "Beograd, Serbia", ocena: 4.0, imageSrc: frizerImg6 },
  { ime: "Frizer Salon D", lokacija: "Kragujevac, Serbia", ocena: 4.3, imageSrc: frizerImg4 },
  { ime: "Frizer Salon W", lokacija: "Beograd, Serbia", ocena: 4.2, imageSrc: frizerImg7 },
];

const ITEMS_PER_PAGE = 4;

const ZenskiFrizeri: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastCard = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstCard = indexOfLastCard - ITEMS_PER_PAGE;
  const currentCards = frizerData.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(frizerData.length / ITEMS_PER_PAGE);


  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <Navbar />
      <div className='ZenskiDiv'>
        <img src={ZenskiSlika} alt="" className='ZenskiDivImg'/>
        <div className='containerZenski'>
          <h2>Najbolje ocenjeni</h2>
          <div className='frizer-card-containerZenski1'>
            <FrizerCard
              ime="Frizer Salon E"
              lokacija="Beograd, Serbia"
              ocena={4.8}
              imageSrc={frizerImg1}
              parentComponent='ZenskiFrizeri'
            />
            <FrizerCard
              ime="Frizer Salon F"
              lokacija="Novi Sad, Serbia"
              ocena={4.5}
              imageSrc={frizerImg2}
              parentComponent='ZenskiFrizeri'
            />
            <FrizerCard
              ime="Frizer Salon G"
              lokacija="Niš, Serbia"
              ocena={4.7}
              imageSrc={frizerImg3}
              parentComponent='ZenskiFrizeri'
            />
            <FrizerCard
              ime="Frizer Salon H"
              lokacija="Kragujevac, Serbia"
              ocena={4.3}
              imageSrc={frizerImg4}
              parentComponent='ZenskiFrizeri'
            />
          </div>
        </div>
        <h2>Preporuka</h2>
        <div className='frizer-card-containerZenski2'>
          {currentCards.map((frizer, index) => (
            <FrizerCard
              key={index}
              ime={frizer.ime}
              lokacija={frizer.lokacija}
              ocena={frizer.ocena}
              imageSrc={frizer.imageSrc}
              parentComponent='ZenskiFrizeri'
            />
          ))}
        </div>
        <div className='pagination'>
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className='pagination-button'
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className='pagination-button'
          >
            Next
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ZenskiFrizeri;
