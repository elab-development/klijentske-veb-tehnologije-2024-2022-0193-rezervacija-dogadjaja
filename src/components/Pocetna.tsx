import React from 'react';
import './Pocetna.css'
import Navbar from './Navbar';
import Footer from './Footer';
import FrizerCard from './FrizerCard'; 
import frizeri from '../models/Frizeri';
import NajboljeOcenjeniFrizeri from '../models/NajboljeOcenjeniFrizeri';
import desnaSlika from '../assets/Frame 46.png'
import levaSlika1 from '../assets/Frame 47.png'
import levaSlika2 from '../assets/Frame 48.png'

const Pocetna: React.FC = () => {

  const top4Frizer = new NajboljeOcenjeniFrizeri(frizeri);
  const top4 = top4Frizer.getTop4Frizeri();

  return (
    <>
      <Navbar />
      <div className='pocetnaDiv'>
      <div className='containerPocetna'>
        <h2>Najbolje ocenjeni</h2>
        <div className='frizer-card-containerPocetna'>
          {top4.map((frizer) => (
            <FrizerCard
              key={frizer.ime}
              ime={frizer.ime}
              lokacija={frizer.lokacija}
              ocena={frizer.ocena}
              imageSrc={frizer.imageSrc}
              parentComponent='MuskiFrizeri'
            />
          ))}
        </div>
      </div>
      <div className='SlikePocetna'>
        <div className='slike1'>
          <img src={levaSlika1} alt="" />
          <img src={levaSlika2} alt="" />
        </div>
        <div className='slike2'>
          <img src={desnaSlika} alt="" />
        </div>
      </div>
      <Footer/>
      </div>
      
    </>
  );
};

export default Pocetna;