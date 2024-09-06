import React from 'react';
import './Onama.css';
import Navbar from './Navbar';
import Footer from './Footer';
import slika from '../assets/Hero Image.png';

const Onama: React.FC = () => {
  return (
    <>
    <Navbar/>
    <div className='containerOnama'>
        <div>
            <h1>O nama</h1>
            <p>
            Dobrodošli na našu platformu za rezervisanje termina kod frizera, 
            mesto gde vaša lepota i zadovoljstvo dolaze na prvo mesto. Naša misija 
            je da vam olakšamo proces zakazivanja frizerskih usluga, omogućavajući vam da se 
            posvetite sebi i svom izgledu bez stresa i komplikacija.
            </p>
            <p>
            Mi smo tim entuzijasta sa dugogodišnjim iskustvom u IT sektoru. Spojili smo svoje 
            znanje i strast kako bismo stvorili moderan, efikasan i user-friendly alat koji će vam 
            pomoći da brzo i lako pronađete i rezervišete termin kod najboljih frizera u vašem gradu.
            </p>
        </div>
        <img src={slika} alt="" />
    </div>
    <Footer/>
    </>
  );
};

export default Onama;