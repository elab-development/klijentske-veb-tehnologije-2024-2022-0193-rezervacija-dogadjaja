import React, { useState } from 'react';
import './MuskiFrizeri.css';
import Navbar from './Navbar';
import Footer from './Footer';
import FrizerCard from './FrizerCard'; 
import frizerImg1 from '../assets/frizer1.png';
import frizerImg2 from '../assets/frizer2.png';
import frizerImg3 from '../assets/frizer3.png';
import frizerImg4 from '../assets/frizer4.png';
import frizerImg5 from '../assets/frizer5.png';
import frizerImg6 from '../assets/frizer6.png';
import frizerImg7 from '../assets/frizer7.png';
import frizerImg8 from '../assets/frizer8.png';
import muskiSlika from '../assets/Muski.png';

const frizerData = [
    { ime: "Frizer Salon X", lokacija: "Kragujevac, Serbia", ocena: 4.6, imageSrc: frizerImg8 },
  { ime: "Frizer Salon A", lokacija: "Beograd, Serbia", ocena: 4.8, imageSrc: frizerImg1 },
  { ime: "Frizer Salon K", lokacija: "Niš, Serbia", ocena: 4.1, imageSrc: frizerImg5 },
  { ime: "Frizer Salon C", lokacija: "Niš, Serbia", ocena: 4.7, imageSrc: frizerImg3 },
  { ime: "Frizer Salon B", lokacija: "Novi Sad, Serbia", ocena: 4.5, imageSrc: frizerImg2 },
  { ime: "Frizer Salon P", lokacija: "Beograd, Serbia", ocena: 4.0, imageSrc: frizerImg6 },
  { ime: "Frizer Salon D", lokacija: "Kragujevac, Serbia", ocena: 4.3, imageSrc: frizerImg4 },
  { ime: "Frizer Salon W", lokacija: "Beograd, Serbia", ocena: 4.2, imageSrc: frizerImg7 },
];

const ITEMS_PER_PAGE = 4;

const MuskiFrizeri: React.FC = () => {
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
      <div className='MuskiDiv'>
        <img src={muskiSlika} alt="" className='MuskiDivImg'/>
        <div className='containerMuski'>
          <h2>Najbolje ocenjeni</h2>
          <div className='frizer-card-containerMuski1'>
            <FrizerCard
              ime="Frizer Salon A"
              lokacija="Beograd, Serbia"
              ocena={4.8}
              imageSrc={frizerImg1}
              parentComponent='MuskiFrizeri'
            />
            <FrizerCard
              ime="Frizer Salon B"
              lokacija="Novi Sad, Serbia"
              ocena={4.5}
              imageSrc={frizerImg2}
              parentComponent='MuskiFrizeri'
            />
            <FrizerCard
              ime="Frizer Salon C"
              lokacija="Niš, Serbia"
              ocena={4.7}
              imageSrc={frizerImg3}
              parentComponent='MuskiFrizeri'
            />
            <FrizerCard
              ime="Frizer Salon D"
              lokacija="Kragujevac, Serbia"
              ocena={4.3}
              imageSrc={frizerImg4}
              parentComponent='MuskiFrizeri'
            />
          </div>
        </div>
        <h2>Preporuka</h2>
        <div className='frizer-card-containerMuski2'>
          {currentCards.map((frizer, index) => (
            <FrizerCard
              key={index}
              ime={frizer.ime}
              lokacija={frizer.lokacija}
              ocena={frizer.ocena}
              imageSrc={frizer.imageSrc}
              parentComponent='MuskiFrizeri'
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

export default MuskiFrizeri;
