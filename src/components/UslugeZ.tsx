import './Usluge.css';
import Navbar from './Navbar';
import Footer from './Footer';
import UslugaCard from './UslugaCard';

import usluga1 from '../assets/fr1.png'
import usluga2 from '../assets/u5.png'
import usluga3 from '../assets/fr4.png'
import usluga4 from '../assets/fr3.png'

const usluge = [
    {
      ime: 'Šišanje',
      cena: 1500,
      trajanje: 30,
      imageSrc: usluga1
    },
    {
      ime: 'Farbanje kose',
      cena: 4000,
      trajanje: 120,
      imageSrc: usluga2
    },
    {
      ime: 'Frizura',
      cena: 2500,
      trajanje: 45,
      imageSrc: usluga3
    },
    {
      ime: 'Feniranje',
      cena: 2500,
      trajanje: 60,
      imageSrc: usluga4
    }
  ];

const Usluge: React.FC = () => {
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

export default Usluge;