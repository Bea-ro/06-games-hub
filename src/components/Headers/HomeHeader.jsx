import React from 'react';
import './Headers.css';
import LogoutButton from '../ui/Buttons/LogoutButton';

const HomeHeader = () => {
 
  return (
    <header>
      <h1>¿A qué jugamos{` ${localStorage.getItem('user')}`}?</h1>
      <LogoutButton />
    </header>
  );
};

export default HomeHeader;
