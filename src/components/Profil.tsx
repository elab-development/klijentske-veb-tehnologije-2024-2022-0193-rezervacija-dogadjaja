import React, { useState } from 'react';
import './Profil.css';
import Navbar from './Navbar';
import profileImg from '../assets/avatar.png';
import { User } from '../models/User';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const Profil: React.FC = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState<User | null>(() => {
        const LoggedUser = localStorage.getItem('loggedInUser');
        return LoggedUser ? JSON.parse(LoggedUser) : null;
    });
      
      const logout = ()=>{
        localStorage.removeItem('loggedInUser');
        setUser(null);
        navigate('/login');
      }


    return (
        <>
            <Navbar />
            <div className="profile-container">
                <div className="profile-avatar">
                    <div className="avatar">
                        <img src={profileImg} alt="avatar" />
                    </div>
                    <a href="/termini" className='termini'>Termini</a>
                </div>
                <div className="profile-form">
                    <h2>Profil</h2>
                    <div className='polje'><p>Ime:</p><p>{user?.ime}</p></div>
                    <div className='polje'><p>Username:</p><p>{user?.username}</p></div>
                    <div className='polje'><p>Email:</p><p>{user?.email}</p></div>
                    <button className='odjavise' onClick={logout}>Odjavi se</button>
                </div>
  
            </div>
            <Footer/>
        </>
    );
};

export default Profil;