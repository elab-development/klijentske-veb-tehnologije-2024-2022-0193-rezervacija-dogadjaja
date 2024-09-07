import './Usluge.css';
import Navbar from './Navbar';
import Footer from './Footer';
import UslugaCard from './UslugaCard';

import usluga1 from '../assets/u1.png'
import usluga2 from '../assets/u2.png'
import usluga3 from '../assets/u3.png'
import usluga4 from '../assets/u4.png'

const usluge = [
    {
      ime: 'Šišanje',
      cena: 1300,
      trajanje: 40,
      imageSrc: usluga1
    },
    {
      ime: 'Pranje kose',
      cena: 100,
      trajanje: 10,
      imageSrc: usluga2
    },
    {
      ime: 'Brijanje',
      cena: 500,
      trajanje: 10,
      imageSrc: usluga3
    },
    {
      ime: 'Sredjivanje',
      cena: 900,
      trajanje: 20,
      imageSrc: usluga4
    }
  ];

const UslugeM: React.FC = () => {
    const storedFrizerskiSalon = localStorage.getItem('FrizerskiSalon');
    const salon = storedFrizerskiSalon?.replace(/^"|"$/g, '');
  return (
    <>
      <Navbar />
      <div className='UslugeDiv'>
        <h1>{salon}</h1>
        <div className='containerUsluge'>
            <h2>Usluge</h2>
            <div className="usluge-list">
      {usluge.map((usluga, index) => (
        <UslugaCard key={index} {...usluga} imeSalona={salon}/>
      ))}
    </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default UslugeM;