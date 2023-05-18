import React, { useContext } from 'react';
import './Headers.css';
import { AuthContext } from '../../App';
import LogoutButton from '../ui/Buttons/LogoutButton';

const HomeHeader = () => {
  const { completeUser } = useContext(AuthContext);

  return (
    <header>
      <h1>¿A qué jugamos {completeUser?.user}?</h1>
      <LogoutButton />
    </header>
  );
};

export default HomeHeader;
